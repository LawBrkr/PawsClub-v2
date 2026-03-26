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
    icon: <Heart aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Refuerzo Positivo",
    desc: "Entrenamos con motivación, nunca con castigo. Tu perro aprende porque quiere, no porque teme.",
  },
  {
    icon: <Brain aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Modificación de Conducta",
    desc: "Ladrido excesivo, ansiedad por separación, reactividad. Trabajamos las raíces del comportamiento mediante sesiones de desensibilización sistemática.",
  },
  {
    icon: <Award aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Obediencia Básica y Avanzada",
    desc: "Sentado, echado, ven, quieto, caminar con correa. De lo fundamental a la disciplina avanzada.",
  },
  {
    icon: <Home aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "En Casa o a Domicilio",
    desc: "Las sesiones pueden ser en nuestras instalaciones o en tu hogar, donde tu perro tiene sus hábitos y rutinas.",
  },
  {
    icon: <Users aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Perros Mentor",
    desc: "Usamos perros equilibrados como modelos de conducta. Aprenden más rápido con el ejemplo de un par.",
  },
  {
    icon: <Target aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Plan Integral",
    desc: "Cada perro es único. Diseñamos un plan de desarrollo conductual según su temperamento y contexto.",
  },
];

const PROGRAMS = [
  {
    name: "Obediencia Básica",
    desc: "Comunicación efectiva y fundamentos. Ideal para perros sin instrucción previa.",
    sessions: "4 sesiones introductorias",
  },
  {
    name: "Modificación de Conducta",
    desc: "Abordaje de reactividad o ladrido mediante protocolos de habituación.",
    sessions: "4-8 sesiones según diagnóstico",
  },
  {
    name: "Cachorro Pro",
    desc: "Socialización temprana, prevención de problemas a futuro y establecimiento de reglas en el hogar.",
    sessions: "8 sesiones a domicilio",
  },
  {
    name: "Adiós Ansiedad",
    desc: "Protocolo gradual con sesiones de desensibilización para episodios de pánico o fijación.",
    sessions: "10 sesiones a domicilio",
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
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
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
              Planes y Precios
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Mismo método, precio proporcional por zona de cobertura.
            </p>
          </div>

          <div className="space-y-12">
            {/* Base Package */}
            <div>
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
                Obediencia Básica / Modificación (4 Sesiones)
              </h3>
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
                      / paquete
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
                      / paquete
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
            </div>

            {/* Specialized Packages (Stackable Cards) */}
            <div>
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
                Programas Especializados (A Domicilio)
              </h3>
              <div className="flex flex-col gap-6">
                {/* Cachorro Pro */}
                <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center">
                  <div className="flex-1">
                    <h4 className="text-xl font-extrabold text-gray-900">Cachorro Pro (8 Sesiones)</h4>
                    <p className="mt-2 text-sm text-gray-500">
                      Prevención de problemas de conducta, habituación al entorno y obediencia temprana en el hogar.
                    </p>
                  </div>
                  <div className="flex w-full shrink-0 flex-col gap-3 md:w-[320px]">
                    <div className="flex items-center justify-between rounded-xl border border-brand/20 bg-brand/5 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">Zona Norte</span>
                      <span className="text-lg font-extrabold text-brand">{formatPrice(PRICES.adiestramiento.paquetes.cachorroPro.zonaNorte)}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Poniente</span>
                      <span className="text-lg font-bold text-gray-900">{formatPrice(PRICES.adiestramiento.paquetes.cachorroPro.poniente)}</span>
                    </div>
                    {/* TODO: Vincular flujo dinámico de Cal.com cuando se agreguen los IDs al .env */}
                    <a
                      href={SITE.whatsappUrl(
                        "¡Hola! 🎓 Me interesa coordinar el programa Cachorro Pro a domicilio para mi perrito."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block w-full rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
                    >
                      Agendar Cachorro Pro
                    </a>
                  </div>
                </div>

                {/* Adiós Ansiedad */}
                <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center">
                  <div className="flex-1">
                    <h4 className="text-xl font-extrabold text-gray-900">Adiós Ansiedad (10 Sesiones)</h4>
                    <p className="mt-2 text-sm text-gray-500">
                      Protocolo gradual mediante sesiones de desensibilización sistemática para ansiedad por separación y reactividad.
                    </p>
                  </div>
                  <div className="flex w-full shrink-0 flex-col gap-3 md:w-[320px]">
                    <div className="flex items-center justify-between rounded-xl border border-brand/20 bg-brand/5 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">Zona Norte</span>
                      <span className="text-lg font-extrabold text-brand">{formatPrice(PRICES.adiestramiento.paquetes.adiosAnsiedad.zonaNorte)}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Poniente</span>
                      <span className="text-lg font-bold text-gray-900">{formatPrice(PRICES.adiestramiento.paquetes.adiosAnsiedad.poniente)}</span>
                    </div>
                    {/* TODO: Vincular flujo dinámico de Cal.com cuando se agreguen los IDs al .env */}
                    <a
                      href={SITE.whatsappUrl(
                        "¡Hola! 🎓 Me interesa coordinar el programa Adiós Ansiedad a domicilio para mi perrito."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block w-full rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
                    >
                      Agendar Adiós Ansiedad
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            Cada sesión es 1 a 1 (1 especialista + 1 perro). Incluye programa de desarrollo conductual.
          </p>
          <p className="mt-2 text-center text-xs font-bold text-gray-400/80">
            Paws Club es una marca registrada.
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
              "Sesiones 1 a 1 con especialista",
              "Evaluación conductual inicial exhaustiva",
              "Programa estructurado de deconstrucción de malos hábitos",
              "Incorporación de perros mentor (sujeto a perfil)",
              "Manual de mantenimiento para los tutores",
              "Acompañamiento post-sesión vía conciergerie (WhatsApp)",
              "Flexibilidad de sede (Instalaciones o Domicilio)",
              "Reporte ejecutivo de avances",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-brand" />
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
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
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
