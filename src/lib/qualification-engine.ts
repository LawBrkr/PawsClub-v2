/**
 * Qualification Engine — Paws Club Norte
 * Middleware de validación previo al agendamiento.
 * Verifica requisitos de negocio antes de permitir la reserva.
 */

// ─── Types ──────────────────────────────────────────────────────
export interface QualificationPayload {
  petName: string;
  ownerName: string;
  ownerEmail: string;
  phone?: string;
  date: string;           // YYYY-MM-DD
  timeSlot: string;       // ISO 8601 datetime
  vaccinationConfirmed: boolean;
  branch?: string;        // Se fuerza a "norte" en esta ruta
}

export interface QualificationResult {
  qualified: boolean;
  errors: string[];
  validatedPayload?: QualificationPayload;
}

// ─── Validation Rules ───────────────────────────────────────────

const VALID_BRANCH = "norte";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Valida el payload completo del cliente.
 * Retorna un resultado con `qualified: true` si pasa todas las reglas,
 * o `qualified: false` con lista de errores descriptivos.
 */
export function validate(payload: Partial<QualificationPayload>): QualificationResult {
  const errors: string[] = [];

  // ── 1. Campos requeridos ──────────────────────────────────────
  if (!payload.petName || payload.petName.trim().length === 0) {
    errors.push("El nombre de la mascota es requerido.");
  }

  if (!payload.ownerName || payload.ownerName.trim().length === 0) {
    errors.push("El nombre del dueño es requerido.");
  }

  if (!payload.ownerEmail || !EMAIL_REGEX.test(payload.ownerEmail)) {
    errors.push("Se requiere un correo electrónico válido.");
  }

  if (!payload.date || !DATE_REGEX.test(payload.date)) {
    errors.push("Se requiere una fecha válida (formato YYYY-MM-DD).");
  }

  if (!payload.timeSlot) {
    errors.push("Se requiere un horario de cita (timeSlot ISO 8601).");
  }

  // ── 2. Validación de sede ─────────────────────────────────────
  const branch = (payload.branch || "norte").toLowerCase();
  if (branch !== VALID_BRANCH) {
    errors.push(
      `Esta ruta solo acepta reservas para la sucursal Norte. Sede recibida: "${branch}".`
    );
  }

  // ── 3. Validación de vacunas ──────────────────────────────────
  // "¿Su mascota tiene todas las vacunas?"
  if (payload.vaccinationConfirmed !== true) {
    errors.push(
      "¿Su mascota tiene todas las vacunas? Es requisito obligatorio confirmar el esquema de vacunación completo para agendar."
    );
  }

  // ── 4. Validación de fecha futura ─────────────────────────────
  if (payload.date && DATE_REGEX.test(payload.date)) {
    const appointmentDate = new Date(payload.date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (appointmentDate < today) {
      errors.push("La fecha de la cita debe ser hoy o una fecha futura.");
    }
  }

  // ── Resultado ─────────────────────────────────────────────────
  if (errors.length > 0) {
    return { qualified: false, errors };
  }

  return {
    qualified: true,
    errors: [],
    validatedPayload: {
      petName: payload.petName!.trim(),
      ownerName: payload.ownerName!.trim(),
      ownerEmail: payload.ownerEmail!.trim().toLowerCase(),
      phone: payload.phone?.trim(),
      date: payload.date!,
      timeSlot: payload.timeSlot!,
      vaccinationConfirmed: true,
      branch: VALID_BRANCH,
    },
  };
}

/**
 * Genera la pregunta de cualificación para el flujo conversacional.
 * Retorna las preguntas que el sistema debe hacer al usuario.
 */
export function getQualificationQuestions(): string[] {
  return [
    "¿Cuál es el nombre de su mascota?",
    "¿Cuál es su nombre completo?",
    "¿Cuál es su correo electrónico?",
    "¿Cuál es su número de teléfono? (opcional)",
    "¿Para qué fecha desea agendar? (YYYY-MM-DD)",
    "¿En qué horario prefiere su cita?",
    "¿Su mascota tiene todas las vacunas? (Requisito obligatorio)",
  ];
}
