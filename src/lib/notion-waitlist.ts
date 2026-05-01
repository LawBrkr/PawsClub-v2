/**
 * Notion client (vía REST, sin SDK) para persistir leads de la lista
 * de espera de la sucursal Poniente.
 *
 * Variables requeridas:
 *  - NOTION_API_KEY       (token integration secret)
 *  - NOTION_DATABASE_ID   (ID de la base de datos "Poniente Waitlist")
 *
 * El schema esperado de la base de datos (ajusta si difiere):
 *  - Nombre        (Title)
 *  - Email         (Email)
 *  - Colonia       (Rich text)
 *  - Servicio      (Select: hotel | guarderia | adiestramiento)
 *  - Origen        (Rich text)         — set a "poniente-lead-form"
 *  - Fecha         (Created time)      — automática, no la mandamos
 */

const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

export interface PonienteLead {
  nombre: string;
  email: string;
  colonia: string;
  servicio: "hotel" | "guarderia" | "adiestramiento";
}

export interface NotionResult {
  ok: boolean;
  pageId?: string;
  error?: string;
}

export async function createPonienteWaitlistEntry(
  lead: PonienteLead
): Promise<NotionResult> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return {
      ok: false,
      error:
        "NOTION_API_KEY o NOTION_DATABASE_ID no configurados en el entorno.",
    };
  }

  const body = {
    parent: { database_id: databaseId },
    properties: {
      Nombre: {
        title: [{ text: { content: lead.nombre } }],
      },
      Email: {
        email: lead.email,
      },
      Colonia: {
        rich_text: [{ text: { content: lead.colonia } }],
      },
      Servicio: {
        select: { name: lead.servicio },
      },
      Origen: {
        rich_text: [{ text: { content: "poniente-lead-form" } }],
      },
    },
  };

  try {
    const res = await fetch(`${NOTION_API_BASE}/pages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      return {
        ok: false,
        error: `Notion respondió ${res.status}: ${text.slice(0, 300)}`,
      };
    }

    const data = (await res.json()) as { id?: string };
    return { ok: true, pageId: data.id };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Error desconocido al llamar Notion",
    };
  }
}
