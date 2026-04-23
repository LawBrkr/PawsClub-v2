import { NextResponse } from "next/server";
import { PRICES, BRANCHES, SITE } from "@/lib/constants";
import pawsStatus from "@/config/paws-status.json";

/**
 * GET /api/services/guarderia
 *
 * Retorna información completa del servicio de Guardería Canina:
 * disponibilidad por sucursal, precios, características, requisitos
 * y scripts de respuesta para el equipo de ventas / agentes.
 */
export async function GET() {
  const guarderiaNorte = pawsStatus["zona-norte"].guarderia;
  const guarderiaAvailableNorte = !guarderiaNorte.full;

  const whatsappInquiryUrl = SITE.whatsappUrl(
    "¡Hola! ☀️ Guardería Canina — Me interesa conocer más sobre el servicio y agendar una prueba de socialización."
  );

  return NextResponse.json({
    service: "Guardería Canina — Paws Club",
    tagline: "Diversión supervisada todo el día. Máximo 5 lomitos. Sin jaulas.",

    // ── Disponibilidad por sucursal ──────────────────────────────
    availability: {
      "zona-norte": {
        active: true,
        available: guarderiaAvailableNorte,
        status: guarderiaAvailableNorte ? "disponible" : "cupo_lleno",
        statusMessage: guarderiaAvailableNorte
          ? "Hay lugares disponibles. Puedes agendar tu prueba de socialización esta semana."
          : "El cupo está lleno por el momento. Contáctanos para unirte a la lista de espera.",
        branch: BRANCHES["zona-norte"].name,
        schedule: BRANCHES["zona-norte"].schedule,
        sundayNote: BRANCHES["zona-norte"].sundayNote,
        coverage: BRANCHES["zona-norte"].coverage,
      },
      poniente: {
        active: false,
        available: false,
        status: "no_disponible",
        statusMessage: "La Guardería no opera en la sucursal Poniente. Te recomendamos la sucursal Zona Norte.",
        branch: BRANCHES["poniente"].name,
      },
    },

    // ── Precios ──────────────────────────────────────────────────
    pricing: {
      "zona-norte": {
        pricePerDay: PRICES.guarderia.zonaNorte,
        currency: "MXN",
        unit: PRICES.guarderia.unit,
        label: `$${PRICES.guarderia.zonaNorte} MXN / ${PRICES.guarderia.unit}`,
      },
    },

    // ── Detalles del servicio ────────────────────────────────────
    details: {
      maxCapacity: 5,
      capacityNote: "Cupo limitado a máximo 5 lomitos para garantizar atención individualizada.",
      includes: [
        "Juego supervisado todo el día",
        "Cupo máximo de 5 lomitos",
        "Fotos y videos vía WhatsApp durante el día",
        "Higiene premium con limpieza profunda diaria",
        "Supervisión constante por expertos",
      ],
      requirements: [
        "Esquema de vacunación completo y vigente (obligatorio)",
        "Prueba de socialización previa (gratuita, sin compromiso)",
        "Perro sin historial de agresividad",
      ],
      socialTest: {
        available: true,
        cost: "Sin costo",
        description:
          "Visita inicial donde tu lomito conoce el espacio y el equipo. Evaluamos compatibilidad antes de agendar la primera semana.",
      },
    },

    // ── Scripts de respuesta para el equipo ─────────────────────
    responseScripts: {
      initialInquiry: [
        "¿Cuántas horas al día se queda solo tu lomito aproximadamente?",
      ],
      empathyAndSolution: guarderiaAvailableNorte
        ? "Con eso en mente, la guardería diaria sería lo ideal. Aquí en Paws Club llevamos máximo 5 lomitos, entonces siempre hay alguien pendiente de tu perro. ¿Tu perrito ya tiene todas las vacunas al corriente?"
        : "Entiendo, y eso es exactamente lo que resolvemos aquí. Por el momento el cupo está lleno, pero puedo anotarte en nuestra lista de espera y avisarte en cuanto haya un lugar. ¿Te parece bien?",
      trialCTA: guarderiaAvailableNorte
        ? "¿Por qué no empezamos con una prueba de socialización? Vienes con tu lomito, conoces el espacio y al equipo, y si le va bien agendamos la primera semana. Es sin costo y sin compromiso."
        : "En cuanto tengamos un lugar disponible, lo primero será la prueba de socialización para que tu lomito conozca el espacio. Así ya estás listo para arrancar de inmediato.",
      closingQuestion: guarderiaAvailableNorte
        ? "¿Esta semana o la siguiente te va mejor para la visita?"
        : "¿Me puedo quedar con tu nombre y número para avisarte en cuanto tengamos un lugar?",
    },

    // ── Contacto y CTA ───────────────────────────────────────────
    contact: {
      whatsapp: SITE.whatsapp,
      whatsappInquiryUrl,
      phone: SITE.phone,
    },

    // ── Meta ─────────────────────────────────────────────────────
    meta: {
      generatedAt: new Date().toISOString(),
      branch: "zona-norte",
    },
  });
}
