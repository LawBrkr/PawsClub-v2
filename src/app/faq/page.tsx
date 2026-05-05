import Link from "next/link";
import { SITE, PRICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Paws Club CDMX",
  description:
    "Resuelve todas tus dudas sobre Paws Club: requisitos, precios, horarios, servicios, ubicaciones y más. Hotel, guardería, adiestramiento y paseos caninos.",
  openGraph: {
    title: "FAQ — Preguntas Frecuentes | Paws Club",
    description: "Todo lo que necesitas saber sobre nuestros servicios caninos.",
  },
};

const FAQ_SECTIONS = [
  {
    title: "General",
    faqs: [
      {
        q: "¿Qué servicios ofrecen?",
        a: "Hoy tenemos abiertos Paseos diarios y Aventuras de Sábado (Zona Norte) y el programa de Adiestramiento Train & Go (12 sesiones a domicilio). Hotel y Guardería están en lista de espera por cupo lleno en ambas sucursales.",
      },
      {
        q: "¿Cuántas sucursales tienen?",
        a: "Dos: Paws Club Poniente (Polanco, Lomas, Tecamachalco) y Paws Club Zona Norte (Lindavista, Sta. María la Ribera, Tlatelolco y colonias aledañas).",
      },
      {
        q: "¿Cuál es el horario de atención?",
        a: "Lunes a Viernes de 6:00 a.m. a 8:00 p.m. y Sábados de 7:00 a.m. a 8:00 p.m. en ambas sucursales.",
      },
      {
        q: "¿Cómo los contacto?",
        a: "Por WhatsApp al número que aparece en nuestra página, o a través del formulario de contacto. Respondemos en menos de 30 minutos durante horario de atención.",
      },
    ],
  },
  {
    title: "Hotel y Guardería · Lista de espera",
    faqs: [
      {
        q: "¿Por qué están en lista de espera?",
        a: "Tenemos cupo lleno en ambas sucursales y no contamos con instalaciones disponibles para mostrar a nuevos clientes en este momento. Operamos con cupo estricto (máximo 5 lomitos) para mantener la calidad del cuidado.",
      },
      {
        q: "¿Cómo funciona la waitlist?",
        a: "Te registras con nombre, correo, colonia y servicio de interés. Cuando liberemos un lugar te contactamos por correo y WhatsApp en orden de llegada. No hay compromiso ni pago hasta que tú confirmes.",
      },
      {
        q: "¿Cuánto tarda en liberarse un lugar?",
        a: "Depende de la rotación de huéspedes y temporada. No podemos garantizar tiempos pero te mantenemos informado por correo cuando hay novedades.",
      },
      {
        q: "¿Mientras tanto qué puedo contratar?",
        a: "Paseos diarios y aventuras de sábado (Zona Norte) y el programa Train & Go de adiestramiento (a domicilio en ambas zonas). Son la mejor opción para gastar energía y trabajar conducta hasta que se libere cupo.",
      },
    ],
  },
  {
    title: "Requisitos",
    faqs: [
      {
        q: "¿Qué requisitos necesita mi perro?",
        a: "Cartilla de vacunación al día (incluyendo Bordetella y Giardia) y desparasitación vigente. Para hotel y guardería pediremos también una prueba de socialización gratuita cuando se libere lugar.",
      },
      {
        q: "¿Aceptan todas las razas y tamaños?",
        a: "Sí, aceptamos todas las razas y tamaños.",
      },
    ],
  },
  {
    title: "Adiestramiento",
    faqs: [
      {
        q: "¿Cuánto cuesta el adiestramiento?",
        a: `Programa Train & Go: ${formatPrice(PRICES.adiestramiento.precio)} (${PRICES.adiestramiento.unit}, ${PRICES.adiestramiento.semanas} semanas). Precio único, mismo en toda la cobertura. Evaluación inicial sin costo (valor $850). Todas las sesiones son 1 a 1.`,
      },
      {
        q: "¿Qué método de entrenamiento usan?",
        a: "Refuerzo positivo exclusivamente. Entrenamos con motivación, nunca con castigo. También usamos perros mentor equilibrados como modelos.",
      },
    ],
  },
  {
    title: "Paseos Caninos",
    faqs: [
      {
        q: "¿En qué sucursal están disponibles los paseos?",
        a: "Exclusivamente en Paws Club Zona Norte. Cubrimos colonias como Lindavista, Sta. María la Ribera, Tlatelolco, Buenavista y más.",
      },
      {
        q: "¿Cuánto cuestan los paseos?",
        a: `Individual: ${formatPrice(PRICES.paseos.individual)}/paseo. Paquete 10: ${formatPrice(PRICES.paseos.paquete10)}. Mensual (20 paseos): ${formatPrice(PRICES.paseos.mensual)}. Aventura de sábado: ${formatPrice(PRICES.paseos.aventuraSabado)}.`,
      },
      {
        q: "¿Cuántos perros van por paseo?",
        a: "Máximo 3 perros por paseador en paseos diarios. Supervisión dedicada siempre.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Preguntas Frecuentes
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Todo lo que necesitas saber sobre Paws Club.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.title} className="mb-12">
              <h2 className="mb-6 text-xl font-extrabold text-gray-900">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-gray-200 bg-white"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-bold text-gray-900">
                      {faq.q}
                      <span className="ml-4 text-brand transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="px-5 pb-5 text-sm text-gray-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-extrabold text-gray-900">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="mt-3 text-gray-500">
            Escríbenos por WhatsApp y te respondemos en minutos.
          </p>
          <a
            href={SITE.whatsappUrl("¡Hola! 👋 Revisé sus Preguntas Frecuentes pero tengo una duda adicional. ¿Me ayudan?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-hover"
          >
            Pregúntanos por WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}
