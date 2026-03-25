import Image from "next/image";
import Link from "next/link";
import { SITE, PRICES, BRANCHES, SERVICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  Sun,
  Camera,
  Users,
  Sparkles,
  Shield,
  Clock,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardería Canina en CDMX — Sin Jaulas, Cupo Limitado | Paws Club",
  description:
    "Guardería canina premium con cupo limitado a 5 lomitos. Socialización positiva, supervisión constante, reportes diarios. Sucursales en Polanco y Zona Norte CDMX.",
  openGraph: {
    title: "Guardería Canina en CDMX — Sin Jaulas | Paws Club",
    description:
      "Guardería canina con cupo limitado. Socialización supervisada y reportes diarios por WhatsApp.",
    images: ["/img/daycare.webp"],
  },
};

const service = SERVICES.find((s) => s.id === "guarderia")!;

const DETAILS = [
  {
    icon: <Sun className="h-6 w-6 text-brand" />,
    title: "Días Llenos de Diversión",
    desc: "Actividades diseñadas para estimular a tu perro física y mentalmente durante todo el día.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand" />,
    title: "Máximo 5 Lomitos",
    desc: "Cupo estrictamente limitado para garantizar atención personalizada y seguridad.",
  },
  {
    icon: <Camera className="h-6 w-6 text-brand" />,
    title: "Reportes en Tiempo Real",
    desc: "Fotos, videos y actualizaciones de tu peludo directo a tu WhatsApp.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-brand" />,
    title: "Higiene Premium",
    desc: "Limpieza profunda diaria de todas las áreas. Ambiente siempre limpio y libre de olores.",
  },
  {
    icon: <Shield className="h-6 w-6 text-brand" />,
    title: "Socialización Supervisada",
    desc: "Fomentamos interacciones positivas. Cada perro pasa una prueba de socialización antes de ingresar.",
  },
  {
    icon: <Clock className="h-6 w-6 text-brand" />,
    title: "Horario Flexible",
    desc: "Entrada desde las 7:00 AM, salida hasta las 8:00 PM. Lunes a Sábado.",
  },
];

const FAQS = [
  {
    q: "¿Cuántos perros hay al mismo tiempo?",
    a: "Máximo 5. Nuestro cupo es limitado para asegurar que cada lomito reciba la atención que merece.",
  },
  {
    q: "¿Mi perro necesita estar vacunado?",
    a: "Sí. Requerimos cartilla de vacunación al día (incluyendo Bordetella y Giardia) y desparasitación vigente.",
  },
  {
    q: "¿Qué pasa si mi perro no socializa bien?",
    a: "Antes de ingresar, todos los perros pasan una prueba de socialización gratuita. Si tu perro necesita más tiempo, trabajamos una integración gradual.",
  },
  {
    q: "¿Puedo llevar a mi perro un solo día?",
    a: "Por supuesto. Ofrecemos servicio por día sin necesidad de contratar paquetes. También puedes preguntar por nuestros paquetes para mejores tarifas.",
  },
  {
    q: "¿Incluye comida?",
    a: "Recomendamos que traigas su alimento porcionado. Tenemos agua fresca ilimitada y snacks saludables disponibles.",
  },
];

export default function GuarderiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <Image
          src="/img/daycare.webp"
          alt="Perros jugando en la guardería canina Paws Club"
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
                "Hola Paws Club! ☀️ Me interesa la Guardería Canina."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              Agendar visita
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
              Un día típico en la Guardería
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Diversión, ejercicio y socialización en un ambiente seguro.
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

      {/* Daily Routine */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Rutina del Día
          </h2>
          <div className="space-y-0">
            {[
              { time: "7:00 AM", activity: "Recepción y bienvenida", desc: "Check-in, saludo y evaluación del estado de ánimo del lomito." },
              { time: "8:00 AM", activity: "Socialización matutina", desc: "Juego libre supervisado para iniciar el día con energía." },
              { time: "10:00 AM", activity: "Actividades dirigidas", desc: "Ejercicios de estimulación mental y juegos interactivos." },
              { time: "12:00 PM", activity: "Descanso y almuerzo", desc: "Tiempo de relajación, agua fresca y comida (si la traen)." },
              { time: "2:00 PM", activity: "Segundo bloque de juego", desc: "Más socialización y actividades según energía del grupo." },
              { time: "4:00 PM", activity: "Reporte del día", desc: "Fotos, videos y resumen enviado por WhatsApp." },
              { time: "5:00 - 8:00 PM", activity: "Pick-up", desc: "Recogida dentro del horario o transporte a domicilio." },
            ].map((slot, i) => (
              <div key={slot.time} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  {i < 6 && <div className="h-full w-0.5 bg-brand/20" />}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-bold text-brand">
                    {slot.time}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900">
                    {slot.activity}
                  </h3>
                  <p className="text-sm text-gray-500">{slot.desc}</p>
                </div>
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
              Mismo estándar de calidad, precios adaptados a cada zona.
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
                <div className="flex items-end justify-between">
                  <span className="text-sm text-gray-600">Por día</span>
                  <span className="text-3xl font-extrabold text-gray-900">
                    {formatPrice(PRICES.guarderia.poniente)}
                    <span className="text-sm font-normal text-gray-400">
                      /día
                    </span>
                  </span>
                </div>
              </div>
              <a
                href={SITE.whatsappUrl(
                  "Hola! Me interesa la Guardería en Poniente."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
              >
                Inscribir en Poniente
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
                <div className="flex items-end justify-between">
                  <span className="text-sm text-gray-600">Por día</span>
                  <span className="text-3xl font-extrabold text-brand">
                    {formatPrice(PRICES.guarderia.zonaNorte)}
                    <span className="text-sm font-normal text-gray-400">
                      /día
                    </span>
                  </span>
                </div>
              </div>
              <a
                href={SITE.whatsappUrl(
                  "Hola! Me interesa la Guardería en Zona Norte."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
              >
                Inscribir en Zona Norte
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Incluye: estancia sin jaulas, supervisión, socialización, reportes
            diarios y limpieza premium.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            Todo incluido en cada día
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Juego y socialización supervisada todo el día",
              "Estancia sin jaulas dentro de casa",
              "Reportes con fotos y videos por WhatsApp",
              "Limpieza profunda diaria de áreas",
              "Agua fresca ilimitada y snacks",
              "Actividades de estimulación mental",
              "Evaluación continua de comportamiento",
              "Transporte disponible (costo adicional)",
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
            Preguntas sobre la Guardería
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
            ¿Listo para que tu lomito haga nuevos amigos?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Agenda una visita y prueba de socialización gratuita.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "Hola! Quiero agendar una prueba de socialización para la Guardería. ☀️"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Agendar prueba gratis
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/servicios/hotel"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              ¿Necesitas hospedaje? Ver Hotel →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
