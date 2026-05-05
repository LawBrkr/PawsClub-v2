import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  createPonienteWaitlistEntry,
  type PonienteLead,
} from "@/lib/notion-waitlist";
import { notifyAdminLead } from "@/lib/whatsapp-notify";

/**
 * POST /api/waitlist/poniente
 * Recibe un lead del PonienteLeadForm, valida con zod,
 * persiste en Notion y notifica al admin.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LeadSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "Nombre demasiado corto")
    .max(120, "Nombre demasiado largo"),
  email: z.string().trim().toLowerCase().email("Email inválido"),
  colonia: z
    .string()
    .trim()
    .min(2, "Colonia demasiado corta")
    .max(120, "Colonia demasiado larga"),
  servicio: z.enum(["hotel", "guarderia", "adiestramiento"], {
    errorMap: () => ({ message: "Servicio no válido" }),
  }),
  sucursal: z
    .enum(["poniente", "zona-norte", "indistinto"], {
      errorMap: () => ({ message: "Sucursal no válida" }),
    })
    .optional()
    .default("indistinto"),
});

export async function POST(req: NextRequest) {
  const ts = new Date().toISOString();
  const requestId = crypto.randomUUID();

  try {
    const json = await req.json().catch(() => null);

    if (!json || typeof json !== "object") {
      return NextResponse.json(
        { success: false, requestId, error: "Body inválido o vacío" },
        { status: 400 }
      );
    }

    const parsed = LeadSchema.safeParse(json);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      console.warn(
        `[${ts}] [${requestId}] /api/waitlist/poniente — validation failed`,
        fieldErrors
      );
      return NextResponse.json(
        {
          success: false,
          requestId,
          error: "Datos inválidos",
          fields: fieldErrors,
        },
        { status: 422 }
      );
    }

    const lead: PonienteLead = parsed.data;

    // Log no-PII: sólo servicio + sucursal + colonia
    console.log(
      `[${ts}] [${requestId}] /api/waitlist lead: servicio=${lead.servicio} sucursal=${lead.sucursal} colonia=${lead.colonia}`
    );

    // ── Persistencia en Notion ─────────────────────────────────
    const notion = await createPonienteWaitlistEntry(lead);

    if (!notion.ok) {
      console.error(
        `[${ts}] [${requestId}] Notion failed:`,
        notion.error
      );
      return NextResponse.json(
        {
          success: false,
          requestId,
          error:
            "No pudimos guardar tu solicitud. Intenta de nuevo en unos momentos.",
        },
        { status: 502 }
      );
    }

    // ── Notificación al admin (best-effort, no bloquea) ────────
    const notify = await notifyAdminLead({
      nombre: lead.nombre,
      email: lead.email,
      colonia: lead.colonia,
      servicio: lead.servicio,
      sucursal: lead.sucursal,
      notionPageId: notion.pageId,
    });

    if (!notify.ok && !notify.skipped) {
      console.warn(
        `[${ts}] [${requestId}] notify failed (no-blocking):`,
        notify.error
      );
    }

    return NextResponse.json(
      {
        success: true,
        requestId,
        message: "Lead registrado",
        notified: notify.ok ? notify.channel : null,
      },
      { status: 201 }
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    console.error(
      `[${ts}] [${requestId}] /api/waitlist/poniente unhandled:`,
      msg
    );
    return NextResponse.json(
      {
        success: false,
        requestId,
        error: "Error interno",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      service: "waitlist",
      method: "POST",
      requiredFields: ["nombre", "email", "colonia", "servicio"],
      optionalFields: ["sucursal"],
      servicio: ["hotel", "guarderia", "adiestramiento"],
      sucursal: ["poniente", "zona-norte", "indistinto"],
    },
    { status: 200 }
  );
}
