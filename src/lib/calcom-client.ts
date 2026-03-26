/**
 * Cal.com API v1 Client — Paws Club Norte
 * Wrapper para slots (disponibilidad) y bookings (reservas)
 * con buffer de 15 minutos entre citas.
 */

// ─── Types ──────────────────────────────────────────────────────
export interface CalSlot {
  time: string; // ISO 8601
}

export interface CalSlotsResponse {
  slots: Record<string, CalSlot[]>;
}

export interface CalBookingRequest {
  eventTypeId: number;
  start: string;
  end: string;
  responses: {
    name: string;
    email: string;
    smsReminderNumber?: string | null;
    attendeePhoneNumber?: string;
    location?: {
      value: string;
      optionValue: string;
    };
  };
  metadata: Record<string, string>;
  timeZone: string;
  language: string;
  title: string;
  description?: string;
  status: "PENDING" | "ACCEPTED";
}

export interface CalBookingResponse {
  booking: {
    id: number;
    uid: string;
    userId: number;
    title: string;
    description: string;
    eventTypeId: number;
    startTime: string;
    endTime: string;
    status: string;
    attendees: Array<{
      email: string;
      name: string;
      timeZone: string;
      locale: string;
    }>;
    metadata: Record<string, unknown>;
  };
}

export interface CalBookingListItem {
  id: number;
  uid: string;
  title: string;
  startTime: string;
  endTime: string;
  status: string;
}

// ─── Config ─────────────────────────────────────────────────────
function getConfig() {
  const apiKey = process.env.CAL_API_KEY;
  const baseUrl = process.env.CAL_API_BASE_URL || "https://api.cal.com/v1";
  const eventIdNorte = parseInt(process.env.CAL_EVENT_ID_NORTE || "0", 10);
  const bufferMinutes = parseInt(process.env.PAWS_MIN_BUFFER_MINUTES || "15", 10);
  const timezone = process.env.PAWS_TIMEZONE || "America/Mexico_City";
  const defaultDuration = parseInt(process.env.PAWS_DEFAULT_DURATION || "60", 10);

  if (!apiKey) {
    throw new Error("[CalCom] CAL_API_KEY no está configurado en .env.local");
  }
  if (!eventIdNorte) {
    throw new Error("[CalCom] CAL_EVENT_ID_NORTE no está configurado en .env.local");
  }

  return { apiKey, baseUrl, eventIdNorte, bufferMinutes, timezone, defaultDuration };
}

// ─── Helpers ────────────────────────────────────────────────────
function addMinutes(isoDate: string, minutes: number): string {
  const d = new Date(isoDate);
  d.setMinutes(d.getMinutes() + minutes);
  return d.toISOString();
}

/**
 * Sanitizes phone to E.164 format (digits and leading +).
 * Cal.com validates phone numbers strictly.
 */
function sanitizePhone(phone?: string): string {
  if (!phone) return "";
  // Keep only digits and leading +
  const cleaned = phone.replace(/[^\d+]/g, "");
  return cleaned || "";
}

// ─── API Methods ────────────────────────────────────────────────

/**
 * Obtiene los slots disponibles para una fecha dada.
 * Incluye buffer de 15 minutos: filtra slots que estén a menos
 * de 15 min de la hora de finalización del último booking.
 */
export async function getAvailableSlots(date: string): Promise<CalSlotsResponse> {
  const { apiKey, baseUrl, eventIdNorte, timezone } = getConfig();

  const startTime = `${date}T00:00:00.000Z`;
  const endTime = `${date}T23:59:59.000Z`;

  const url = new URL(`${baseUrl}/slots`);
  url.searchParams.set("apiKey", apiKey);
  url.searchParams.set("eventTypeId", String(eventIdNorte));
  url.searchParams.set("startTime", startTime);
  url.searchParams.set("endTime", endTime);
  url.searchParams.set("timeZone", timezone);

  const res = await fetch(url.toString());

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`[CalCom] Error obteniendo slots: ${res.status} — ${body}`);
  }

  return res.json() as Promise<CalSlotsResponse>;
}

/**
 * Crea una nueva reserva con buffer de 15 minutos.
 * El `end` se calcula automáticamente: start + duración + buffer.
 */
export async function createBooking(
  slot: string,
  clientData: {
    ownerName: string;
    ownerEmail: string;
    petName: string;
    phone?: string;
  }
): Promise<CalBookingResponse> {
  const { apiKey, baseUrl, eventIdNorte, bufferMinutes, timezone, defaultDuration } = getConfig();

  const start = slot;
  const endWithBuffer = addMinutes(start, defaultDuration + bufferMinutes);
  const endActual = addMinutes(start, defaultDuration);

  const body: CalBookingRequest = {
    eventTypeId: eventIdNorte,
    start,
    end: endActual,
    responses: {
      name: clientData.ownerName,
      email: clientData.ownerEmail,
      smsReminderNumber: sanitizePhone(clientData.phone) || null,
      attendeePhoneNumber: sanitizePhone(clientData.phone),
      location: {
        value: "inPerson",
        optionValue: "Paws Club Zona Norte",
      },
    },
    metadata: {
      petName: clientData.petName,
      branch: "norte",
      bufferMinutes: String(bufferMinutes),
      bufferEndTime: endWithBuffer,
    },
    timeZone: timezone,
    language: "es",
    title: `Cita Paws Club Norte — ${clientData.petName} (${clientData.ownerName})`,
    description: `Mascota: ${clientData.petName} | Dueño: ${clientData.ownerName} | Tel: ${clientData.phone || "N/A"}`,
    status: "PENDING",
  };

  const url = `${baseUrl}/bookings?apiKey=${apiKey}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`[CalCom] Error creando booking: ${res.status} — ${errorBody}`);
  }

  return res.json() as Promise<CalBookingResponse>;
}

/**
 * Lista las reservas existentes (opcionalmente filtradas por status).
 */
export async function getBookings(
  status?: "upcoming" | "past" | "cancelled" | "recurring"
): Promise<{ bookings: CalBookingListItem[] }> {
  const { apiKey, baseUrl } = getConfig();

  const url = new URL(`${baseUrl}/bookings`);
  url.searchParams.set("apiKey", apiKey);
  if (status) {
    url.searchParams.set("status", status);
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`[CalCom] Error obteniendo bookings: ${res.status} — ${body}`);
  }

  return res.json() as Promise<{ bookings: CalBookingListItem[] }>;
}

/**
 * Filtra los slots disponibles aplicando el buffer de 15 min.
 * Compara cada slot contra los bookings existentes y descarta
 * los que caigan dentro de buffer de 15 min de un booking previo.
 */
export async function getFilteredSlots(date: string): Promise<CalSlot[]> {
  const { bufferMinutes, defaultDuration } = getConfig();

  const [slotsRes, bookingsRes] = await Promise.all([
    getAvailableSlots(date),
    getBookings("upcoming"),
  ]);

  const allSlots = Object.values(slotsRes.slots).flat();
  const existingBookings = bookingsRes.bookings;

  // Filtramos slots que no choquen con el buffer
  return allSlots.filter((slot) => {
    const slotStart = new Date(slot.time).getTime();
    const slotEnd = slotStart + defaultDuration * 60 * 1000;

    return !existingBookings.some((booking) => {
      const bookingEnd = new Date(booking.endTime).getTime();
      const bufferEnd = bookingEnd + bufferMinutes * 60 * 1000;

      const bookingStart = new Date(booking.startTime).getTime();
      const bufferStart = bookingStart - bufferMinutes * 60 * 1000;

      // El slot choca si empieza dentro del rango [bookingStart - buffer, bookingEnd + buffer]
      return slotStart < bufferEnd && slotEnd > bufferStart;
    });
  });
}
