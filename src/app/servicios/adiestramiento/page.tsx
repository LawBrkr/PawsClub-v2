import Image from "next/image";
import Link from "next/link";
import { SITE, PRICES, BRANCHES, SERVICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  Award,
  Brain,
  Heart,
  Home,
  Users,
  Target,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adiestramiento Canino con Refuerzo Positivo | Paws Club CDMX",
  description:
    "Adiestramiento canino profesional en CDMX con refuerzo positivo. Obediencia básica, modificación de conducta y sesiones individuales. Paquetes desde $2,950 en Zona Norte.",
  openGraph: {
    title: "Adiestramiento Canino con Refuerzo Positivo | Paws Club CDMX",
    description:
      "Mejora la comunicación con tu perro. Clases individuales con métodos positivos.",
    images: ["/img/training.webp"],
  },
};

const service = SERVICES.find((s) => s.id === "adiestramiento")!;

const DETAILS = [
  {
    icon: <Heart className="h-6 w-6 text-brand" />,
    title: "Refuerzo Positivo",
    desc: "Entrenamos con motivación, nunca con castigo. Tu perro aprende porque quiere, no porque teme.",
  },
  {
    icon: <Brain className="h-6 w-6 text-brand" />,
    title: "Modificación de Conducta",
    desc: "Ladrido excesivo, ansiedad por separación, reactividad. Trabajamos las raíces del comportamiento.",
  },
  {
    icon: <Award className="h-6 w-6 text-brand" />,
    title: "Obediencia Básica y Avanzada",
    desc: "Sentado, echado, ven, quieto, caminar con correa. De lo fundamental a lo avanzado.",
  },
  {
    icon: <Home className="h-6 w-6 text-brand" />,
    title: "En Casa o a Domicilio",
    desc: "Las sesiones pueden ser en nuestras instalaciones o en tu hogar, donde tu perro tiene sus hábitos.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand" />,
    title: "Perros Mentor",
    desc: "Usamos perros equilibrados como modelos para enseñar a los nuevos. Aprenden más rápido con el ejemplo.",
  },
  {
    icon: <Target className="h-6 w-6 text-brand" />,
    title: "Plan Personalizado",
    desc: "Cada perro es diferente. Diseñamos un plan de entrenamiento según su temperamento y necesidades.",
  },
];

const PROGRAMS = [
  {
    name: "Obediencia Básica",
    desc: "Sentado, echado, ven, quieto, caminar sin jalar. Ideal para cachorros o perros sin entrenamiento previo.",
    sessions: "4 sesiones",
  },
  {
    name: "Modificación de Conducta",
    desc: "Ansiedad por separación, ladrido excesivo, reactividad con otros perros o personas.",
    sessions: "4-8 sesiones según caso",
  },
  {
    name: "Socialización Asistida",
    desc: "Integración gradual con otros perros usando perros mentor equilibrados como modelos.",
    sessions: "4 sesiones",
  },
  {
    name: "Obediencia Avanzada",
    desc: "Comandos a distancia, permanencia prolongada, paseo sin correa. Para perros con base sólida.",
    sessions: "4 sesiones",
  },
];

const FAQS = [
  {
    q: "¿Cuántas sesiones necesita mi perro?",
    a: "El paquete base es de 4 sesiones. Para modificación de conducta pueden necesitarse 4 a 8 sesiones dependiendo del caso. En la primera sesión evaluamos y te damos un estimado.",
  },
  {
    q: "¿A partir de qué edad se puede adiestrar?",
    a: "Desde los 3-4 meses ya se pueden empezar ejercicios básicos de obediencia. No hay límite de edad: perros adultos y senior también aprenden.",
  },
  {
    q: "¿Puedo estar presente en las sesiones?",
    a: "Sí, de hecho es recomendable. Parte del entrenamiento es enseñarte a ti cómo comunicarte mejor con tu perro.",
  },
  {
    q: "¿Funciona con perros agresivos?",
    a: "Trabajamos con reactividad y agresividad bajo un protocolo seguro. En la evaluación inicial determinamos el mejor enfoque para cada caso.",
  },
  {
    q: "¿Las sesiones son individuales?",
    a: "Sí, todas las sesiones son 1 a 1 (un entrenador + un perro + su dueño). No son clases grupales.",
  },
];

export default function AdiestramientoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <Image
          src="/img/training.webp"
          alt="Adiestramiento canino con refuerzo positivo en Paws Club"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-brand/90 px-4 py-1.5 text-sm font-semibold text-white">
            {service.icon} {service.name}
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            {service.tagline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! 🎓 Necesito ayuda con el comportamiento de mi perro. ¿Me dan informes del adiestramiento?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              Solicitar evaluación
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="#precios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver precios
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Nuestro Enfoque
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Entrenamiento basado en ciencia, motivación y respeto.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DETAILS.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
                  {d.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{d.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Programas de Entrenamiento
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{p.desc}</p>
                <p className="mt-3 text-xs font-semibold text-brand">
                  {p.sessions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Precios por Sucursal
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Paquete de 4 sesiones individuales. Mismo método, precio justo por
              zona.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Poniente */}
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">
                {BRANCHES.poniente.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Polanco · Lomas · Tecamachalco
              </p>
              <div className="mt-6">
                <span className="text-3xl font-extrabold text-gray-900">
                  {formatPrice(PRICES.adiestramiento.poniente)}
                </span>
                <span className="text-sm font-normal text-gray-400">
                  {" "}
                  / paquete 4 sesiones
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Equivale a{" "}
                {formatPrice(Math.round(PRICES.adiestramiento.poniente / 4))}{" "}
                por sesión
              </p>
              <a
                href={SITE.whatsappUrl(
                  "¡Hola! 🎓 Necesito ayuda con el comportamiento de mi perro. Me interesa la sucursal Poniente."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
              >
                Agendar en Poniente
              </a>
            </div>

            {/* Zona Norte */}
            <div className="relative rounded-2xl border-2 border-brand bg-white p-8 shadow-lg">
              <span className="absolute -top-3 right-6 rounded-full bg-accent-orange px-3 py-1 text-xs font-bold text-white">
                Mejor precio
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                {BRANCHES["zona-norte"].name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Lindavista · Sta. María la Ribera · Tlatelolco
              </p>
              <div className="mt-6">
                <span className="text-3xl font-extrabold text-brand">
                  {formatPrice(PRICES.adiestramiento.zonaNorte)}
                </span>
                <span className="text-sm font-normal text-gray-400">
                  {" "}
                  / paquete 4 sesiones
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Equivale a{" "}
                {formatPrice(
                  Math.round(PRICES.adiestramiento.zonaNorte / 4)
                )}{" "}
                por sesión
              </p>
              <a
                href={SITE.whatsappUrl(
                  "¡Hola! 🎓 Necesito ayuda con el comportamiento de mi perro. Me interesa la sucursal Zona Norte."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
              >
                Agendar en Zona Norte
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Cada sesión es individual (1 entrenador + 1 perro). Incluye plan
            personalizado y seguimiento.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            ¿Qué incluye el paquete?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "4 sesiones individuales con entrenador",
              "Evaluación inicial de comportamiento",
              "Plan de entrenamiento personalizado",
              "Uso de perros mentor cuando sea necesario",
              "Guía de ejercicios para practicar en casa",
              "Seguimiento post-entrenamiento por WhatsApp",
              "Sesiones en instalaciones o a domicilio",
              "Reporte de progreso al finalizar",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Preguntas sobre el Adiestramiento
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
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
      </section>

      {/* CTA */}
      <section className="bg-brand py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            ¿Tu perro necesita entrenamiento?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Agenda una evaluación gratuita. Te decimos exactamente qué programa
            le conviene.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! 🎓 Necesito ayuda con el comportamiento de mi perro. ¿Me dan informes del adiestramiento?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Evaluar a mi perro
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/servicios/guarderia"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Combinar con Guardería →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
