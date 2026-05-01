import { NextRequest, NextResponse } from "next/server";
import { validate, type QualificationPayload } from "@/lib/qualification-engine";
import { createBooking, getFilteredSlots } from "@/lib/calcom-client";

/**
 * POST /api/booking/norte
 * Endpoint de agendamiento autónomo para la sucursal Norte.
 *
 * Flujo:
 *  1. Recibe payload del cliente
 *  2. Ejecuta validación de cualificación (vacunas, sede, campos)
 *  3. Verifica disponibilidad del slot con buffer de 15 min
 *  4. Crea booking en Cal.com
 *  5. Retorna confirmación o error
 */
export async function POST(request: NextRequest) {
  const timestamp = new Date().toISOString();
  const requestId = crypto.randomUUID();

  try {
    // ── 1. Parse request body ───────────────────────────────────
    const body: Partial<QualificationPayload> = await request.json();

    console.log(`[${timestamp}] [${requestId}] POST /api/booking/norte received`);

    // ── 2. Qualification check ──────────────────────────────────
    const qualification = validate({ ...body, branch: "norte" });

    if (!qualification.qualified) {
      console.warn(`[${timestamp}] [${requestId}] qualification failed`);
      return NextResponse.json(
        {
          success: false,
          step: "qualification",
          message: "El cliente no pasó la cualificación.",
          errors: qualification.errors,
          hint: "Asegúrese de confirmar que su mascota tiene todas las vacunas y que los datos están completos.",
        },
        { status: 422 }
      );
    }

    const validated = qualification.validatedPayload!;
    console.log(`[${timestamp}] [${requestId}] qualification ok pet=${validated.petName}`);

    // ── 3. Verificar disponibilidad con buffer ──────────────────
    const availableSlots = await getFilteredSlots(validated.date);

    const slotExists = availableSlots.some(
      (s) => new Date(s.time).getTime() === new Date(validated.timeSlot).getTime()
    );

    if (!slotExists) {
      console.warn(`[${timestamp}] [${requestId}] slot unavailable`);
      return NextResponse.json(
        {
          success: false,
          step: "availability",
          message: "El horario seleccionado no está disponible.",
          requestedSlot: validated.timeSlot,
          availableSlots: availableSlots.slice(0, 5).map((s) => s.time),
          hint: "Intente con uno de los horarios disponibles listados.",
        },
        { status: 409 }
      );
    }

    // ── 4. Crear booking en Cal.com ─────────────────────────────
    console.log(`[${timestamp}] [${requestId}] creating Cal.com booking`);

    const bookingResult = await createBooking(validated.timeSlot, {
      ownerName: validated.ownerName,
      ownerEmail: validated.ownerEmail,
      petName: validated.petName,
      phone: validated.phone,
    });

    // Cal.com may return booking at root level or under .booking key
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bookingData = (bookingResult.booking || bookingResult) as Record<string, any>;

    console.log(`[${timestamp}] [${requestId}] booking created id=${bookingData.id} pet=${validated.petName}`);

    const endTimeStr = String(bookingData.endTime || bookingData.end || "");
    const startTimeStr = String(bookingData.startTime || bookingData.start || "");

    // ── 5. Retornar confirmación ─────────────────────────────────
    return NextResponse.json(
      {
        success: true,
        message: "¡Cita agendada exitosamente en Paws Club Zona Norte!",
        booking: {
          id: bookingData.id,
          uid: bookingData.uid,
          title: bookingData.title,
          startTime: startTimeStr,
          endTime: endTimeStr,
          status: bookingData.status,
          attendees: bookingData.attendees,
        },
        petName: validated.petName,
        branch: "Zona Norte",
        bufferApplied: `${process.env.PAWS_MIN_BUFFER_MINUTES || 15} minutos de limpieza post-cita`,
        nextAvailableAfter: endTimeStr
          ? new Date(
              new Date(endTimeStr).getTime() +
                (parseInt(process.env.PAWS_MIN_BUFFER_MINUTES || "15") * 60 * 1000)
            ).toISOString()
          : "N/A",
      },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    console.error(`[${timestamp}] [${requestId}] booking error:`, errorMessage);

    return NextResponse.json(
      {
        success: false,
        step: "internal",
        requestId,
        message: "Error interno al procesar la reserva. Intente de nuevo en unos minutos.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/booking/norte
 * Retorna las preguntas de cualificación y el estado del servicio.
 */
export async function GET() {
  return NextResponse.json({
    service: "Paws Club — Agendamiento Autónomo Zona Norte",
    qualificationQuestions: [
      "¿Cuál es el nombre de su mascota?",
      "¿Cuál es su nombre completo?",
      "¿Cuál es su correo electrónico?",
      "¿Cuál es su número de teléfono? (opcional)",
      "¿Para qué fecha desea agendar? (YYYY-MM-DD)",
      "¿En qué horario prefiere su cita?",
      "¿Su mascota tiene todas las vacunas? (Requisito obligatorio)",
    ],
    requiredFields: [
      "petName",
      "ownerName",
      "ownerEmail",
      "date",
      "timeSlot",
      "vaccinationConfirmed",
    ],
    optionalFields: ["phone"],
    businessRules: {
      branch: "norte (fijo)",
      bufferMinutes: parseInt(process.env.PAWS_MIN_BUFFER_MINUTES || "15"),
      timezone: process.env.PAWS_TIMEZONE || "America/Mexico_City",
      durationMinutes: parseInt(process.env.PAWS_DEFAULT_DURATION || "60"),
      vaccinationRequired: true,
    },
  });
}
