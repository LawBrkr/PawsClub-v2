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
  Truck,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Adiestramiento Canino a Domicilio en Polanco y Lomas — 12 Sesiones | Paws Club",
  description:
    "Programa Train & Go: 12 sesiones de adiestramiento a domicilio con especialista certificado. Refuerzo positivo, evaluación inicial sin costo (valor $850), resultados medibles. Polanco, Lomas, CDMX.",
  openGraph: {
    title:
      "Adiestramiento Canino a Domicilio — 12 Sesiones | Paws Club",
    description:
      "12 sesiones a domicilio · Especialista certificado · Evaluación inicial sin costo · Refuerzo positivo exclusivo.",
    images: ["/img/training.webp"],
  },
};

/* ─── Casos anonimizados ─── */
const CASES = [
  {
    title: "Cachorro que mordía todo",
    before: "Golden de 4 meses destruyendo muebles y mordiendo manos.",
    after:
      "Bases sólidas en 4 sesiones. Programa completo en 12 sin destrozos.",
    sessions: "12 sesiones",
  },
  {
    title: "Perro que jalaba la correa",
    before: "Labrador de 2 años que arrastraba a su dueña en cada paseo.",
    after:
      "Camina con correa suelta desde la sesión 3. Generalizado en 8.",
    sessions: "12 sesiones",
  },
  {
    title: "Perro sin obediencia",
    before: "Mestizo de 1 año que no respondía a ningún comando.",
    after: "Ejecuta sit, down, stay y recall. Recall confiable en 12 sesiones.",
    sessions: "12 sesiones",
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
    title: "Perro adulto sin estructura",
    desc: "Tu perro adulto no responde a comandos básicos o tiene conductas como jaloneo, saltos a visitas o ladrido excesivo.",
  },
  {
    icon: <Users aria-hidden="true" className="h-6 w-6 text-accent-orange" />,
    title: "Dueño sin tiempo que delega",
    desc: "Tu agenda no te permite ir a clases. Vamos a tu casa, incluso podemos trabajar sin que estés presente.",
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
    desc: "Si detectamos un caso médico-conductual o un caso conductual serio, derivamos a un etólogo certificado o a Hospital DELTA, PetBalance o UNAM HVE-FSEC. No improvisamos con la salud de tu perro.",
  },
  {
    icon: <Home aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Siempre a Domicilio",
    desc: "Las 12 sesiones son en tu casa, donde tu perro tiene sus hábitos reales. El aprendizaje en contexto se generaliza mejor que en un ambiente artificial.",
  },
  {
    icon: <Target aria-hidden="true" className="h-6 w-6 text-brand" />,
    title: "Especialista Certificado",
    desc: "Trabajamos con un entrenador certificado de la red Paws Club. Tú te coordinas con un solo punto de contacto y nosotros nos encargamos del resto.",
  },
];

/* ─── Plan único Train & Go ─── */
const PROGRAM_INCLUDES = [
  { highlight: true, txt: "Evaluación conductual inicial sin costo (valor $850)" },
  { txt: "12 sesiones 1 a 1 con especialista certificado" },
  { txt: "4 semanas de programa (3 sesiones por semana)" },
  { txt: "Sesiones a domicilio — el especialista va a tu casa" },
  { txt: "Diagnóstico de 16 puntos en la evaluación inicial" },
  { txt: "Plan personalizado según temperamento y contexto" },
  { txt: "Refuerzo positivo exclusivo (cero castigo)" },
  { txt: "Reportes por WhatsApp después de cada sesión" },
  { txt: "Sesión final con tutor + manual de mantenimiento" },
  { txt: "Seguimiento post-programa por WhatsApp 30 días" },
];

/* ─── A quién va dirigido / filtro de admisión ─── */
const ADMISSION = {
  acepta: [
    "Cachorros 2-8 meses (socialización, bases, prevención)",
    "Perros adultos sin reactividad ni agresividad",
    "Perros con conductas básicas: jaloneo, saltos, ladrido, falta de obediencia",
    "Perros adoptados sin historial complejo",
  ],
  noAcepta: [
    "Casos de reactividad seria, agresividad o ansiedad por separación severa → derivamos a etólogo certificado",
    "Razas PPP — se evalúan caso por caso (escríbenos)",
    "Perros con sospecha de componente médico → derivamos a red clínica veterinaria",
  ],
};

const FAQS = [
  {
    q: "¿Cómo es la evaluación sin costo?",
    a: "Es una sesión de 45 minutos a domicilio donde aplicamos nuestro diagnóstico de 16 puntos. Evaluamos temperamento, reactividad, socialización, relación con el tutor y más. Al terminar te entregamos un plan con recomendaciones claras, sin compromiso.",
  },
  {
    q: "¿Cuánto dura el programa completo?",
    a: "4 semanas, con 3 sesiones por semana (lunes-miércoles-viernes o el calendario que mejor se adapte). En total son 12 sesiones de adiestramiento más la sesión final con el tutor.",
  },
  {
    q: "¿A partir de qué edad se puede adiestrar?",
    a: "Desde los 2-3 meses ya se pueden empezar ejercicios de habituación y obediencia básica. No hay límite de edad: perros adultos y senior también aprenden.",
  },
  {
    q: "¿Tienen instalaciones?",
    a: "Por ahora trabajamos exclusivamente a domicilio del cliente. Esto tiene una ventaja real: tu perro aprende en su entorno cotidiano, donde de verdad tiene los hábitos que queremos modificar. Las cosas que aprende en una sala de entrenamiento muchas veces no se generalizan a la casa.",
  },
  {
    q: "¿Puedo estar presente en las sesiones?",
    a: "La sesión final SÍ es contigo, para que aprendas a mantener los resultados. Las sesiones intermedias pueden ser con o sin ti — lo definimos según tu agenda. Si no puedes estar, te llega un reporte detallado por WhatsApp después de cada sesión.",
  },
  {
    q: "¿Funciona con perros agresivos o reactivos serios?",
    a: "El programa Train & Go está diseñado para cachorros y adultos sin reactividad seria. Casos de agresividad o reactividad moderada-severa los derivamos a un etólogo certificado de nuestra red — no improvisamos con casos clínicos. La evaluación inicial nos permite saber exactamente en qué categoría está tu perro.",
  },
  {
    q: "¿Las sesiones son individuales?",
    a: "Sí, todas las sesiones son 1 a 1 (un especialista + un perro + opcional el tutor). No son clases grupales.",
  },
  {
    q: "¿Qué pasa si no veo resultados?",
    a: "Si no ves cambios medibles en 2 sesiones, seguimos trabajando sin costo adicional hasta que los haya. Medimos progreso con escalas objetivas Dunbar y BCS, no con promesas vagas.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Transferencia, efectivo o tarjeta hasta 6 meses sin intereses. La evaluación es sin costo y no requiere anticipo.",
  },
];

export default function AdiestramientoPage() {
  const precio = PRICES.adiestramiento.precio;
  const sesiones = PRICES.adiestramiento.sesiones;
  const semanas = PRICES.adiestramiento.semanas;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/training.webp"
          alt="Adiestramiento canino a domicilio en Polanco — Paws Club"
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
            <span className="text-accent-orange">en su propia casa.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90">
            Programa Train & Go: {sesiones} sesiones a domicilio con especialista
            certificado. Refuerzo positivo exclusivo. Diagnóstico de 16 puntos
            antes de cualquier plan.
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
              href="#precio"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver programa y precio
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
            { icon: <Truck className="h-6 w-6 text-brand" />, text: "Siempre a domicilio" },
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
              Diseñado para hogares que quieren empezar bien o corregir el rumbo
              con bases sólidas.
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
                  Programa de {c.sessions}
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
            costo adicional. Medimos con escalas objetivas Dunbar y BCS, no con
            promesas.
          </p>
        </div>
      </section>

      {/* Programa + Precio único */}
      <section id="precio" className="py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Programa Train & Go
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Un solo programa. Todo incluido. Evaluación inicial sin costo.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-brand bg-white shadow-lg">
            <div className="bg-brand px-8 py-6 text-white">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold">Train & Go</h3>
                  <p className="mt-1 text-sm text-white/80">
                    {sesiones} sesiones a domicilio · {semanas} semanas
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-extrabold">
                    {formatPrice(precio)}
                  </div>
                  <p className="text-xs text-white/70">
                    Programa completo · Todo incluido
                  </p>
                </div>
              </div>
            </div>

            <div className="px-8 py-8">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                Qué incluye tu programa
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {PROGRAM_INCLUDES.map((item) => (
                  <div key={item.txt} className="flex items-start gap-3 py-1">
                    <CheckCircle
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 ${
                        item.highlight ? "text-accent-orange" : "text-brand"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        item.highlight
                          ? "font-bold text-gray-900"
                          : "text-gray-700"
                      }`}
                    >
                      {item.txt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 rounded-xl bg-gray-50 p-5 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-brand" />
                  <div>
                    <div className="text-xs text-gray-500">Duración</div>
                    <div className="text-sm font-bold text-gray-900">
                      {semanas} semanas
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-brand" />
                  <div>
                    <div className="text-xs text-gray-500">Sesiones</div>
                    <div className="text-sm font-bold text-gray-900">
                      {sesiones} sesiones 1 a 1
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-brand" />
                  <div>
                    <div className="text-xs text-gray-500">Modalidad</div>
                    <div className="text-sm font-bold text-gray-900">
                      A domicilio
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={SITE.whatsappUrl(
                  "¡Hola! Me interesa el programa Train & Go de adiestramiento. ¿Puedo agendar la evaluación sin costo?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 text-base font-bold text-white transition-all hover:bg-brand-hover"
              >
                <Phone className="h-5 w-5" />
                Agendar evaluación sin costo
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="mt-3 text-center text-xs text-gray-400">
                Pagos: transferencia, efectivo o tarjeta hasta 6 meses sin
                intereses. Sin anticipos para la evaluación.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            Cobertura: Polanco, Lomas de Chapultepec, Tecamachalco, Miguel
            Hidalgo, Naucalpan, Santa María la Ribera, Lindavista, Tlatelolco y
            colonias cercanas.
          </p>
        </div>
      </section>

      {/* A quién admitimos / filtro de admisión */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              ¿Tu perro califica?
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Train & Go está diseñado para casos específicos. Si tu caso no
              encaja, te lo decimos en la evaluación y te derivamos al
              especialista correcto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-700">
                <CheckCircle className="h-5 w-5" /> Sí trabajamos
              </h3>
              <ul className="space-y-3">
                {ADMISSION.acepta.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-orange-700">
                <Stethoscope className="h-5 w-5" /> Derivamos a especialista
              </h3>
              <ul className="space-y-3">
                {ADMISSION.noAcepta.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            45 minutos a domicilio. Diagnóstico de 16 puntos. Te decimos
            exactamente si Train & Go es lo que tu perro necesita — o si te
            conviene otra ruta.
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
