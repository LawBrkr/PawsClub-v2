import Image from "next/image";
import Link from "next/link";
import { SITE, PRICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Brain,
  Heart,
  Home,
  Users,
  Target,
  Shield,
  Phone,
  Star,
  Stethoscope,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Adiestramiento Canino en Polanco y Lomas — Evaluación Sin Costo | Paws Club",
  description:
    "Adiestramiento canino con refuerzo positivo en Polanco y Lomas de Chapultepec. Diagnóstico conductual de 16 puntos, resultados medibles, sesiones 1 a 1. Evaluación sin costo (valor $850).",
  openGraph: {
    title:
      "Adiestramiento Canino en Polanco y Lomas — Evaluación Sin Costo | Paws Club",
    description:
      "Diagnóstico conductual de 16 puntos antes de cualquier plan. Resultados medibles desde la primera semana. Evaluación sin costo.",
    images: ["/img/training.webp"],
  },
};

/* ─── Casos anonimizados ─── */
const CASES = [
  {
    title: "Cachorro que mordía todo",
    before: "Golden de 4 meses destruyendo muebles y mordiendo manos.",
    after: "Resuelto en 4 sesiones con protocolo de redireccionamiento.",
    sessions: 4,
  },
  {
    title: "Perro que jalaba la correa",
    before: "Labrador de 2 años que arrastraba a su dueña en cada paseo.",
    after: "Camina con correa suelta en 3 sesiones.",
    sessions: 3,
  },
  {
    title: "Perro sin obediencia",
    before: "Mestizo de 1 año que no respondía a ningún comando.",
    after: "Ejecuta sit, down, stay y recall en 6 semanas.",
    sessions: 8,
  },
];

/* ─── Perfiles de cliente ─── */
const PROFILES = [
  {
    icon: <Heart aria-hidden="true" className="h-6 w-6 text-accent-orange" />,
    title: "Primerizo con cachorro",
    desc: "Es tu primer perro y quieres empezar con las bases correctas desde el día uno.",
  },
  {
    icon: <Brain aria-hidden="true" className="h-6 w-6 text-accent-orange" />,
    title: "Perro que ignoró entrenamiento",
    desc: "Ya intentaste clases grupales o tips de internet y nada funcionó. Necesitas un diagnóstico real.",
  },
  {
    icon: <Users aria-hidden="true" className="h-6 w-6 text-accent-orange" />,
    title: "Dueño sin tiempo que delega",
    desc: "Tu agenda no te permite ir a clases. Hacemos las sesiones a domicilio, incluso sin que estés presente.",
  },
];

/* ─── Enfoque clínico ─── */
const CLINICAL = [
  {
    icon: <ClipboardCheck aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Diagnóstico de 16 Puntos",
    desc: "Evaluamos reactividad, socialización, umbral de estrés, relación con el tutor y 12 variables más antes de diseñar cualquier plan.",
  },
  {
    icon: <Brain aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Escalas Dunbar y BCS",
    desc: "Usamos escalas validadas internacionalmente para medir nivel de mordida, socialización y progreso objetivo sesión a sesión.",
  },
  {
    icon: <Heart aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Refuerzo Positivo Exclusivo",
    desc: "Entrenamos con motivación, nunca con castigo. Cero collares de castigo, cero e-collars. Tu perro aprende porque quiere.",
  },
  {
    icon: <Stethoscope aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Red de Derivación Clínica",
    desc: "Si detectamos un caso médico-conductual, derivamos a Hospital DELTA, PetBalance o UNAM HVE-FSEC. No improvisamos con la salud de tu perro.",
  },
  {
    icon: <Home aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "En Instalaciones o a Domicilio",
    desc: "Las sesiones pueden ser en nuestro centro o en tu hogar, donde tu perro tiene sus hábitos reales.",
  },
  {
    icon: <Target aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Perros Mentor",
    desc: "Usamos perros equilibrados como modelos de conducta. Aprenden más rápido con el ejemplo de un par.",
  },
];

const PROGRAMS = [
  {
    name: "Obediencia Básica",
    desc: "Comunicación efectiva y fundamentos. Ideal para perros sin instrucción previa.",
    sessions: "4 sesiones",
    pricePoniente: PRICES.adiestramiento.poniente,
    priceZonaNorte: PRICES.adiestramiento.zonaNorte,
  },
  {
    name: "Cachorro Pro",
    desc: "Socialización temprana, prevención de problemas y reglas en el hogar. Nuestro programa estrella para cachorros de 2 a 8 meses.",
    sessions: "8 sesiones a domicilio",
    pricePoniente: PRICES.adiestramiento.paquetes.cachorroPro.poniente,
    priceZonaNorte: PRICES.adiestramiento.paquetes.cachorroPro.zonaNorte,
    highlight: true,
  },
  {
    name: "Adiós Ansiedad",
    desc: "Protocolo gradual de desensibilización para ansiedad por separación, reactividad y fobias.",
    sessions: "10 sesiones a domicilio",
    pricePoniente: PRICES.adiestramiento.paquetes.adiosAnsiedad.poniente,
    priceZonaNorte: PRICES.adiestramiento.paquetes.adiosAnsiedad.zonaNorte,
  },
];

const FAQS = [
  {
    q: "¿Cómo es la evaluación sin costo?",
    a: "Es una sesión de 45 minutos donde aplicamos nuestro diagnóstico de 16 puntos. Evaluamos temperamento, reactividad, socialización, relación con el tutor y más. Al terminar te entregamos un plan con recomendaciones claras, sin compromiso.",
  },
  {
    q: "¿A partir de qué edad se puede adiestrar?",
    a: "Desde los 2-3 meses ya se pueden empezar ejercicios de habituación y obediencia básica. No hay límite de edad: perros adultos y senior también aprenden.",
  },
  {
    q: "¿Puedo estar presente en las sesiones?",
    a: "Sí, de hecho es recomendable. Parte del entrenamiento es enseñarte a ti cómo comunicarte mejor con tu perro. Pero si tu agenda no lo permite, también trabajamos sin que estés presente.",
  },
  {
    q: "¿Funciona con perros agresivos?",
    a: "Trabajamos con reactividad y agresividad bajo protocolo seguro con escalas Dunbar. Si detectamos un caso médico-conductual, derivamos a nuestra red clínica (Hospital DELTA, PetBalance, UNAM HVE-FSEC).",
  },
  {
    q: "¿Las sesiones son individuales?",
    a: "Sí, todas las sesiones son 1 a 1 (un entrenador + un perro + su tutor). No son clases grupales.",
  },
  {
    q: "¿Qué pasa si no veo resultados?",
    a: "Si no ves cambios medibles en 2 sesiones, seguimos trabajando sin costo adicional hasta que los haya. Medimos progreso con escalas objetivas, no con promesas vagas.",
  },
];

export default function AdiestramientoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/training.webp"
          alt="Adiestramiento canino con refuerzo positivo en Polanco — Paws Club"
          fill
          className="object-cover object-bottom"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">
              {SITE.googleRating}/5 en Google ({SITE.googleReviewCount}+ reseñas)
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Tu perro aprende bien
            <br />
            <span className="text-accent-orange">desde el inicio.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Adiestramiento para hogares primerizos en Polanco y Lomas.
            Diagnóstico de 16 puntos antes de cualquier plan. Evaluación sin
            costo, resultados medibles.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! Quiero agendar la evaluación conductual sin costo para mi perro."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-green-600"
            >
              <Phone className="h-5 w-5" />
              Agendar evaluación sin costo
            </a>
            <Link
              href="#precios"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver programas y precios
            </Link>
          </div>
          <p className="mt-3 text-sm text-white/60">
            Valor de la evaluación: $850 — sin costo para nuevos clientes
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-gray-100 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4">
          {[
            { icon: <ClipboardCheck className="h-6 w-6 text-brand" />, text: "Diagnóstico de 16 puntos" },
            { icon: <Shield className="h-6 w-6 text-brand" />, text: "Refuerzo positivo exclusivo" },
            { icon: <Users className="h-6 w-6 text-brand" />, text: "Sesiones 1 a 1" },
            { icon: <Target className="h-6 w-6 text-brand" />, text: "Resultados medibles" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2">
              {badge.icon}
              <span className="text-sm font-semibold text-gray-700">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ¿Para quién es? */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              ¿Para quién es?
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Diseñado para hogares que quieren empezar bien o corregir el rumbo.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {PROFILES.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange/10">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridad Clínica */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Nuestro Enfoque Clínico
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Protocolo de admisión riguroso. Escalas validadas. Red de
              derivación profesional.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CLINICAL.map((d) => (
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

      {/* Casos Reales */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Resultados Reales
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Casos anonimizados de clientes reales. Resultados medidos con
              escalas objetivas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CASES.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-red-50 p-3">
                    <span className="text-xs font-bold uppercase text-red-600">
                      Antes
                    </span>
                    <p className="mt-1 text-sm text-gray-600">{c.before}</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <span className="text-xs font-bold uppercase text-green-600">
                      Después
                    </span>
                    <p className="mt-1 text-sm text-gray-600">{c.after}</p>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs font-bold text-brand">
                  {c.sessions} sesiones
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Shield className="mx-auto h-12 w-12 text-brand" />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            Nuestra Garantía
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Si no ves cambios medibles en 2 sesiones, seguimos trabajando sin
            costo adicional. Medimos con escalas objetivas, no con promesas.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Programas y Precios
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              La evaluación sin costo es siempre el primer paso. Después,
              elegimos juntos el programa correcto.
            </p>
          </div>

          <div className="space-y-6">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col gap-6 rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center ${
                  p.highlight
                    ? "border-brand ring-1 ring-brand/20"
                    : "border-gray-200"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 right-6 hidden rounded-full bg-accent-orange px-3 py-1 text-xs font-bold text-white md:block">
                    Recomendado
                  </span>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-gray-900">
                      {p.name}
                    </h3>
                    {p.highlight && (
                      <span className="rounded-full bg-accent-orange/10 px-2 py-0.5 text-xs font-bold text-accent-orange md:hidden">
                        Recomendado
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{p.desc}</p>
                  <p className="mt-1 text-xs font-semibold text-brand">
                    {p.sessions}
                  </p>
                </div>
                <div className="flex w-full shrink-0 flex-col gap-3 md:w-[320px]">
                  <div className="flex items-center justify-between rounded-xl border border-brand/20 bg-brand/5 p-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">
                      Poniente
                    </span>
                    <span className="text-lg font-extrabold text-brand">
                      {formatPrice(p.pricePoniente)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Zona Norte
                      </span>
                      <span className="ml-2 text-[10px] text-gray-400">
                        casos básicos
                      </span>
                    </div>
                    <span className="text-lg font-bold text-gray-700">
                      {formatPrice(p.priceZonaNorte)}
                    </span>
                  </div>
                  <a
                    href={SITE.whatsappUrl(
                      `¡Hola! Me interesa el programa ${p.name} de adiestramiento. ¿Puedo agendar la evaluación sin costo?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block w-full rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
                  >
                    Agendar evaluación
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            Cada sesión es 1 a 1 (1 especialista + 1 perro). Incluye diagnóstico
            conductual, plan personalizado y acompañamiento post-sesión vía
            WhatsApp.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            ¿Qué incluye cada programa?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Evaluación conductual de 16 puntos sin costo",
              "Sesiones 1 a 1 con especialista certificado",
              "Plan personalizado según temperamento y contexto",
              "Incorporación de perros mentor (sujeto a perfil)",
              "Manual de mantenimiento para tutores",
              "Acompañamiento post-sesión vía WhatsApp",
              "Flexibilidad de sede (instalaciones o domicilio)",
              "Reporte ejecutivo de avances por sesión",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-brand"
                />
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
            El primer paso es la evaluación.
            <br />
            Sin costo. Sin compromiso.
          </h2>
          <p className="mt-4 text-lg text-white/90">
            45 minutos. Diagnóstico de 16 puntos. Te decimos exactamente qué
            programa necesita tu perro, o si no necesita ninguno.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! Quiero agendar la evaluación conductual sin costo para mi perro."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <Phone className="h-5 w-5" />
              Agendar evaluación sin costo
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Valor de la evaluación: $850 — sin costo para nuevos clientes
          </p>
        </div>
      </section>
    </>
  );
}
