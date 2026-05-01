/**
 * Notificación al administrador vía WhatsApp Cloud API (Meta).
 *
 * Modos soportados:
 *  1. WhatsApp Cloud API oficial (recomendado producción).
 *     Requiere:
 *       - WHATSAPP_BUSINESS_TOKEN  (System User token con whatsapp_business_messaging)
 *       - WHATSAPP_PHONE_ID        (Phone Number ID del WABA)
 *       - WHATSAPP_ADMIN_NUMBER    (E.164, p.ej. 5215644085356)
 *       - WHATSAPP_TEMPLATE_NAME   (opcional; si no se setea, manda texto plano —
 *                                    sólo funciona si el admin abrió la conversación
 *                                    con el bot en las últimas 24h)
 *
 *  2. Webhook genérico (n8n, Make, Zapier).
 *     Requiere:
 *       - LEAD_WEBHOOK_URL         (POST JSON con el lead)
 *
 * Si ninguna está configurada, la función retorna `skipped: true` y deja
 * el log; el endpoint sigue siendo válido (Notion es la fuente de verdad).
 */

export interface NotifyPayload {
  nombre: string;
  email: string;
  colonia: string;
  servicio: string;
  notionPageId?: string;
}

export interface NotifyResult {
  ok: boolean;
  channel?: "whatsapp-cloud" | "webhook" | "none";
  skipped?: boolean;
  error?: string;
}

const SERVICIO_LABELS: Record<string, string> = {
  hotel: "Hotel Boutique",
  guarderia: "Guardería Canina",
  adiestramiento: "Adiestramiento Canino",
};

function buildAdminMessage(p: NotifyPayload): string {
  const servicio = SERVICIO_LABELS[p.servicio] || p.servicio;
  return [
    "🐾 Nuevo lead — Paws Club Poniente",
    "",
    `Nombre: ${p.nombre}`,
    `Email: ${p.email}`,
    `Colonia: ${p.colonia}`,
    `Servicio: ${servicio}`,
    p.notionPageId ? `\nNotion: ${p.notionPageId}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

async function sendWebhook(p: NotifyPayload): Promise<NotifyResult> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return { ok: false, skipped: true, channel: "none" };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "poniente-waitlist", ...p }),
    });
    if (!res.ok) {
      const text = await res.text();
      return {
        ok: false,
        channel: "webhook",
        error: `Webhook respondió ${res.status}: ${text.slice(0, 200)}`,
      };
    }
    return { ok: true, channel: "webhook" };
  } catch (err) {
    return {
      ok: false,
      channel: "webhook",
      error: err instanceof Error ? err.message : "Error en webhook",
    };
  }
}

async function sendWhatsAppCloud(p: NotifyPayload): Promise<NotifyResult> {
  const token = process.env.WHATSAPP_BUSINESS_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const to = process.env.WHATSAPP_ADMIN_NUMBER;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME;

  if (!token || !phoneId || !to) {
    return { ok: false, skipped: true, channel: "none" };
  }

  let body: Record<string, unknown>;

  if (templateName) {
    // Modo template (recomendado: funciona fuera de la ventana de 24 h)
    body = {
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: templateName,
        language: { code: "es_MX" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: p.nombre },
              { type: "text", text: p.email },
              { type: "text", text: p.colonia },
              {
                type: "text",
                text: SERVICIO_LABELS[p.servicio] || p.servicio,
              },
            ],
          },
        ],
      },
    };
  } else {
    // Texto plano: sólo válido si el admin tiene sesión activa (<24h)
    body = {
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: buildAdminMessage(p) },
    };
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v20.0/${phoneId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return {
        ok: false,
        channel: "whatsapp-cloud",
        error: `Meta respondió ${res.status}: ${text.slice(0, 300)}`,
      };
    }
    return { ok: true, channel: "whatsapp-cloud" };
  } catch (err) {
    return {
      ok: false,
      channel: "whatsapp-cloud",
      error: err instanceof Error ? err.message : "Error en Meta API",
    };
  }
}

/**
 * Intenta WhatsApp Cloud primero; si no está configurado, cae a webhook
 * genérico. Si nada está configurado, retorna `skipped: true`.
 */
export async function notifyAdminLead(
  p: NotifyPayload
): Promise<NotifyResult> {
  const wa = await sendWhatsAppCloud(p);
  if (!wa.skipped) return wa;

  const wh = await sendWebhook(p);
  if (!wh.skipped) return wh;

  return { ok: true, skipped: true, channel: "none" };
}
