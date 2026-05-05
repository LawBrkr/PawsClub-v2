"use client";

import Image from "next/image";

const BRAND = "#547097";
const CREAM = "#FFF8E7";
const ORANGE = "#F4A261";

type QA = { icon: string; question: string; guarderia: string; hotel: string };

const QAS: QA[] = [
  {
    icon: "📱",
    question: "¿Mandan contenido?",
    guarderia:
      "Sí · Fotos y videos por WhatsApp durante el día + reporte completo a las 6 PM",
    hotel:
      "Sí · Fotos y videos diarios por WhatsApp durante toda la estancia",
  },
  {
    icon: "🏡",
    question: "¿La sacan a pasear o es estancia?",
    guarderia:
      "Estancia en casa · Juego y socialización supervisada en el espacio de Paws Club (no incluye paseo callejero)",
    hotel:
      "Estancia en casa · Socialización, juego y descanso dentro del hogar. Paseo adicional disponible bajo cotización",
  },
  {
    icon: "🐕",
    question: "¿Cuál es el límite de perros?",
    guarderia: "Máximo 5 perros por sesión · Atención personalizada garantizada",
    hotel: "Máximo 5 perros por turno · Cupo estrictamente limitado",
  },
  {
    icon: "🛏️",
    question: "¿Duermen en jaulas o espacios abiertos?",
    guarderia:
      "— (servicio de día) · Libertad total dentro de la casa durante el horario, JAMÁS en jaulas",
    hotel:
      "Dentro de la casa · Camas ortopédicas o su propia cama. JAMÁS jaulas ni perreras",
  },
  {
    icon: "👁️",
    question: "¿Hay supervisión 24/7?",
    guarderia:
      "Supervisión continua durante el servicio · Lun–Vie 6 AM–7 PM · Sáb 7 AM–7 PM",
    hotel: "Supervisión 24/7 · Monitoreo continuo, también en horario nocturno",
  },
  {
    icon: "⚖️",
    question: "¿Cómo separan a los perros?",
    guarderia:
      "Test de socialización gratuito previo · Se evalúa temperamento, talla y conducta antes de integrar al grupo",
    hotel:
      "Test de socialización gratuito obligatorio · Evaluación de temperamento, talla y edad para integración segura",
  },
];

const REQUISITOS = [
  "Cartilla de vacunación vigente (incluye Bordetella y Giardia)",
  "Desparasitación vigente",
  "Test de socialización gratuito antes de la primera visita (cita previa)",
  "Se aceptan todas las razas y tallas",
];

export default function GuarderiaHotelInfoPage() {
  return (
    <>
      <style>{`
        @page { size: A4; margin: 12mm; }
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .page-break { page-break-before: always; }
        }
      `}</style>

      {/* Waitlist banner */}
      <div
        className="no-print"
        style={{
          background: "#F59E0B",
          color: "#fff",
          padding: "10px 16px",
          textAlign: "center",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        ⚠️ Hotel y Guardería en lista de espera por cupo lleno ·{" "}
        <a
          href="/servicios/guarderia#waitlist"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          Apuntarme
        </a>
      </div>

      {/* Sticky print button */}
      <div
        className="no-print"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: CREAM,
          borderBottom: `2px solid ${BRAND}22`,
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: BRAND, fontWeight: 600, fontSize: 14 }}>
          Paws Club · Guardería &amp; Hotel Boutique Canino
        </span>
        <button
          onClick={() => window.print()}
          style={{
            background: BRAND,
            color: "#fff",
            border: "none",
            borderRadius: 999,
            padding: "10px 24px",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            letterSpacing: 0.3,
          }}
        >
          ⬇ Guardar como PDF
        </button>
      </div>

      {/* Document */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          background: "#fff",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#1a1a2e",
        }}
      >
        {/* ─── Header ─── */}
        <div
          style={{
            background: BRAND,
            color: "#fff",
            padding: "32px 40px 24px",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Image
            src="/img/logo.webp"
            alt="Paws Club"
            width={72}
            height={72}
            style={{ borderRadius: 16, background: "#fff", padding: 4 }}
          />
          <div>
            <div style={{ fontSize: 11, letterSpacing: 3, opacity: 0.75, textTransform: "uppercase", marginBottom: 4 }}>
              Paws Club · CDMX
            </div>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
              Guardería &amp; Hotel
            </h1>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
              Boutique Canino
            </h1>
            <p style={{ margin: "8px 0 0", opacity: 0.85, fontSize: 14 }}>
              Todo lo que necesitas saber · sin jaulas · sin límites de cariño
            </p>
          </div>
        </div>

        {/* ─── Precios rápidos ─── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: `${BRAND}22`,
          }}
        >
          {[
            {
              label: "GUARDERÍA CANINA",
              price: "$260",
              unit: "/ día",
              sub: "Lunes a Sábado · Zona Norte",
              color: BRAND,
            },
            {
              label: "HOTEL BOUTIQUE",
              price: "$340",
              unit: "/ noche",
              sub: "L–S $340 · Domingo $410 · Zona Norte",
              color: "#3F5471",
            },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: s.color,
                color: "#fff",
                padding: "18px 24px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 10, letterSpacing: 2, opacity: 0.8, marginBottom: 4 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, lineHeight: 1 }}>
                {s.price}
                <span style={{ fontSize: 16, fontWeight: 500 }}>{s.unit}</span>
              </div>
              <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ─── Column headers ─── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr 1fr",
            background: CREAM,
            borderBottom: `2px solid ${BRAND}33`,
          }}
        >
          <div style={{ padding: "12px 16px" }} />
          {["🌞 Guardería", "🌙 Hotel"].map((h) => (
            <div
              key={h}
              style={{
                padding: "12px 16px",
                fontWeight: 700,
                fontSize: 13,
                color: BRAND,
                borderLeft: `2px solid ${BRAND}33`,
                letterSpacing: 0.3,
              }}
            >
              {h}
            </div>
          ))}
        </div>

        {/* ─── Q&A rows ─── */}
        {QAS.map((qa, i) => (
          <div
            key={qa.question}
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 1fr",
              background: i % 2 === 0 ? "#fff" : "#f8fafc",
              borderBottom: `1px solid ${BRAND}18`,
            }}
          >
            {/* Question */}
            <div
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                borderRight: `2px solid ${BRAND}22`,
              }}
            >
              <span style={{ fontSize: 20 }}>{qa.icon}</span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: BRAND,
                  lineHeight: 1.3,
                }}
              >
                {qa.question}
              </span>
            </div>
            {/* Guardería answer */}
            <div
              style={{
                padding: "16px",
                fontSize: 13,
                lineHeight: 1.5,
                color: "#2d3748",
                borderRight: `1px solid ${BRAND}18`,
              }}
            >
              {qa.guarderia}
            </div>
            {/* Hotel answer */}
            <div
              style={{
                padding: "16px",
                fontSize: 13,
                lineHeight: 1.5,
                color: "#2d3748",
              }}
            >
              {qa.hotel}
            </div>
          </div>
        ))}

        {/* ─── Horarios ─── */}
        <div style={{ background: CREAM, padding: "24px 32px" }}>
          <h2
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: BRAND,
              margin: "0 0 16px",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            🕐 Horarios de servicio
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              {
                title: "Guardería",
                items: [
                  "Lun – Vie: Check-in 6:00 AM / Entrega 7:00 PM",
                  "Sábado: Check-in 7:00 AM / Entrega 7:00 PM",
                  "Reporte diario con fotos + videos: 6:00 PM",
                  "Entrega a domicilio disponible desde 7:30 PM (+costo)",
                ],
              },
              {
                title: "Hotel",
                items: [
                  "Lun – Vie: Check-in/out 6:00 AM – 8:00 PM",
                  "Sábado: Check-in/out 7:00 AM – 8:00 PM",
                  "Domingo: Solo con reserva previa (+20%)",
                  "Transporte a domicilio disponible (+costo)",
                ],
              },
            ].map((block) => (
              <div key={block.title}>
                <div
                  style={{
                    fontWeight: 700,
                    color: BRAND,
                    fontSize: 13,
                    marginBottom: 8,
                  }}
                >
                  {block.title}
                </div>
                <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                  {block.items.map((item) => (
                    <li
                      key={item}
                      style={{ fontSize: 12, color: "#4a5568", marginBottom: 4, lineHeight: 1.4 }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Requisitos ─── */}
        <div
          style={{
            background: "#fff",
            padding: "24px 32px",
            borderTop: `3px solid ${ORANGE}`,
          }}
        >
          <h2
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#b45309",
              margin: "0 0 14px",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            📋 Requisitos (ambos servicios)
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 24px",
            }}
          >
            {REQUISITOS.map((req) => (
              <div
                key={req}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontSize: 13,
                  color: "#2d3748",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ color: ORANGE, marginTop: 2, flexShrink: 0 }}>✓</span>
                {req}
              </div>
            ))}
          </div>
        </div>

        {/* ─── Lo que incluye ─── */}
        <div style={{ background: CREAM, padding: "24px 32px" }}>
          <h2
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: BRAND,
              margin: "0 0 14px",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            ✅ ¿Qué incluye?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 32px" }}>
            {[
              "Socialización y juego supervisado",
              "Libertad total · JAMÁS jaulas",
              "Agua fresca ilimitada + snacks saludables",
              "Limpieza profunda de áreas diaria",
              "Fotos y videos diarios por WhatsApp",
              "Evaluación continua de conducta",
              "Estimulación mental y actividades",
              "Hotel: camas ortopédicas y cobijas",
              "Hotel: espacio para objetos personales",
              "Reporte de humor al llegar",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  color: "#2d3748",
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    background: BRAND,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 10,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ─── Footer / CTA ─── */}
        <div
          style={{
            background: BRAND,
            color: "#fff",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>
              Cupo lleno · Únete a la lista de espera
            </div>
            <div style={{ opacity: 0.85, fontSize: 13 }}>
              Te avisamos en cuanto se libere un lugar · Sin compromiso
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
            <a
              href="https://wa.me/5215644085356"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.123 1.528 5.852L.057 23.215a.5.5 0 0 0 .623.624l5.396-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.914 0-3.7-.529-5.22-1.446l-.374-.222-3.875 1.051 1.068-3.793-.245-.39A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
            <div style={{ fontSize: 11, opacity: 0.7, textAlign: "right" }}>
              +52 1 564 408 5356 · pawsclub.mx
            </div>
          </div>
        </div>

        {/* Fine print */}
        <div
          style={{
            padding: "10px 32px",
            background: "#f7fafc",
            fontSize: 10,
            color: "#718096",
            borderTop: `1px solid ${BRAND}22`,
          }}
        >
          Servicio disponible en Zona Norte (Santa María la Ribera, San Rafael, Tlatelolco, Buenavista y colonias aledañas). Precios sujetos a cambio. Domingo con reserva previa y cargo adicional del 20%. Información cuantitativa y no limitativa.
        </div>
      </div>
    </>
  );
}
