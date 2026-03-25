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
        a: "Ofrecemos Hotel Boutique (hospedaje sin jaulas), Guardería Canina, Adiestramiento con Refuerzo Positivo, y Paseos Caninos (exclusivo Zona Norte). Todos los servicios incluyen reportes diarios.",
      },
      {
        q: "¿Cuántas sucursales tienen?",
        a: "Dos: Paws Club Poniente (zona Polanco, Lomas, Tecamachalco) y Paws Club Zona Norte (Lindavista, Sta. María la Ribera, Tlatelolco y colonias aledañas).",
      },
      {
        q: "¿Cuál es el horario de atención?",
        a: "Lunes a Sábado de 7:00 AM a 8:00 PM en ambas sucursales. Domingos solo hotel con reserva previa y recargo del 20%.",
      },
      {
        q: "¿Cómo los contacto?",
        a: "Por WhatsApp al número que aparece en nuestra página, o a través del formulario de contacto. Respondemos en menos de 30 minutos durante horario de atención.",
      },
    ],
  },
  {
    title: "Requisitos",
    faqs: [
      {
        q: "¿Qué requisitos necesita mi perro?",
        a: "Cartilla de vacunación al día (incluyendo Bordetella y Giardia), desparasitación vigente, y pasar una prueba de socialización gratuita antes de su primera visita.",
      },
      {
        q: "¿Aceptan todas las razas y tamaños?",
        a: "Sí, aceptamos todas las razas y tamaños. La prueba de socialización nos ayuda a garantizar una convivencia segura entre todos los lomitos.",
      },
      {
        q: "¿Qué es la prueba de socialización?",
        a: "Es una evaluación gratuita donde observamos el comportamiento de tu perro con otros. Nos permite garantizar la seguridad de todos y asignar el grupo más adecuado.",
      },
    ],
  },
  {
    title: "Hotel Boutique",
    faqs: [
      {
        q: "¿Realmente no usan jaulas?",
        a: "Correcto. Es nuestra política más firme. Los perros duermen dentro de casa, en sus propias camas o las nuestras. Nunca en jaulas ni kennels.",
      },
      {
        q: "¿Cuánto cuesta el hotel?",
        a: `Poniente: ${formatPrice(PRICES.hotel.poniente.weekday)}/noche (L-S) y ${formatPrice(PRICES.hotel.poniente.sunday)}/noche (domingo). Zona Norte: ${formatPrice(PRICES.hotel.zonaNorte.weekday)}/noche (L-S) y ${formatPrice(PRICES.hotel.zonaNorte.sunday)}/noche (domingo).`,
      },
      {
        q: "¿Cuántos perros hay al mismo tiempo?",
        a: "Máximo 5 lomitos por turno. Nuestro cupo es limitado para garantizar atención personalizada.",
      },
    ],
  },
  {
    title: "Guardería",
    faqs: [
      {
        q: "¿Cuánto cuesta la guardería?",
        a: `Poniente: ${formatPrice(PRICES.guarderia.poniente)}/día. Zona Norte: ${formatPrice(PRICES.guarderia.zonaNorte)}/día. Incluye estancia sin jaulas, socialización, reportes y limpieza premium.`,
      },
      {
        q: "¿Puedo llevar a mi perro un solo día?",
        a: "Sí, ofrecemos servicio por día sin necesidad de contratar paquetes.",
      },
    ],
  },
  {
    title: "Adiestramiento",
    faqs: [
      {
        q: "¿Cuánto cuesta el adiestramiento?",
        a: `Poniente: ${formatPrice(PRICES.adiestramiento.poniente)} (paquete 4 sesiones). Zona Norte: ${formatPrice(PRICES.adiestramiento.zonaNorte)} (paquete 4 sesiones). Todas las sesiones son individuales.`,
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
            href={SITE.whatsappUrl("Hola! Tengo una pregunta sobre Paws Club.")}
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
