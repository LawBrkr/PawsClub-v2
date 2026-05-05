import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES, WAITLIST_COPY } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle,
  Sun,
  Camera,
  Users,
  Shield,
  Clock,
  Truck,
  AlertCircle,
} from "lucide-react";
import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Guardería Canina en CDMX — Lista de Espera | Paws Club",
  description:
    "Guardería canina sin jaulas con cupo lleno en ambas sucursales (Polanco y Zona Norte). Únete a la lista de espera y te avisamos en cuanto liberemos lugar.",
  openGraph: {
    title: "Guardería Canina — Lista de Espera | Paws Club CDMX",
    description:
      "Guardería sin jaulas con cupo lleno. Apúntate a la waitlist.",
    images: ["/img/daycare.webp"],
  },
};

const service = SERVICES.find((s) => s.id === "guarderia")!;

const DETAILS = [
  {
    icon: <Sun className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Días Llenos de Diversión",
    titleDisplay: "Días Llenos de Diversión",
    desc: "Actividades diseñadas para estimular a tu perro física y mentalmente durante todo el día.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Máximo 5 Lomitos",
    titleDisplay: "Máximo 5 Lomitos",
    desc: "Cupo estrictamente limitado para garantizar atención personalizada y seguridad.",
  },
  {
    icon: <Camera className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Reportes en Tiempo Real",
    titleDisplay: "Reportes en Tiempo Real",
    desc: "Fotos, videos y actualizaciones de tu peludo directo a tu WhatsApp.",
  },
  {
    icon: <Truck className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Transporte a Domicilio",
    titleDisplay: (
      <>
        Transporte a Domicilio{" "}
        <span className="text-xs font-normal text-gray-400">
          (costo adicional)
        </span>
      </>
    ),
    desc: "Servicio de recolección y entrega disponible en las zonas de cobertura de ambas sucursales.",
  },
  {
    icon: <Shield className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Socialización Supervisada",
    titleDisplay: "Socialización Supervisada",
    desc: "Fomentamos interacciones positivas. Cada perro pasa una prueba de socialización antes de ingresar.",
  },
  {
    icon: <Clock className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Horario Flexible",
    titleDisplay: "Horario Flexible",
    desc: "Entrada desde las 6:00 a.m. (L-V) o 7:00 a.m. (S). Reporte a las 6:00 p.m.",
  },
];

const FAQS = [
  {
    q: "¿Por qué está en lista de espera?",
    a: "Tenemos cupo lleno en ambas sucursales (máximo 5 lomitos por sesión). No contamos con instalaciones disponibles para mostrar a nuevos clientes en este momento.",
  },
  {
    q: "¿Cómo funciona la waitlist?",
    a: "Te registras con tus datos y servicio de interés. En cuanto liberemos un lugar te contactamos por correo y WhatsApp en orden de llegada — sin compromiso ni pago hasta que tú confirmes.",
  },
  {
    q: "¿Cuánto tarda en liberarse un lugar?",
    a: "Depende de la rotación de cupos. No podemos garantizar tiempos, pero te avisamos en cuanto haya novedades.",
  },
  {
    q: "¿Qué servicios sí están abiertos hoy?",
    a: "Paseos diarios y aventuras de sábado (Zona Norte) y el programa de adiestramiento Train & Go (12 sesiones a domicilio).",
  },
  {
    q: "¿Qué requisitos pediremos cuando se libere lugar?",
    a: "Cartilla de vacunación al día (incluyendo Bordetella y Giardia), desparasitación vigente, y una prueba de socialización gratuita.",
  },
];

export default function GuarderiaPage() {
  return (
    <>
      {/* Waitlist Banner */}
      <div className="bg-amber-500 py-3 text-center text-sm font-semibold text-white">
        <AlertCircle className="mr-1.5 inline h-4 w-4" />
        {WAITLIST_COPY.badge} ·
        <a
          href="#waitlist"
          className="ml-1 underline decoration-white/70 underline-offset-2 hover:decoration-white"
        >
          Apuntarme
        </a>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/daycare.webp"
          alt="Perros jugando en la guardería canina Paws Club"
          fill
          className="object-cover object-[75%_center] md:object-center"
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
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500/95 px-4 py-1.5 text-sm font-bold text-white shadow">
            <AlertCircle className="h-4 w-4" />
            {WAITLIST_COPY.badge}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              {WAITLIST_COPY.ctaLong}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/servicios/paseos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver paseos disponibles
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
                <h3 className="text-lg font-bold text-gray-900">{d.titleDisplay}</h3>
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
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Clock className="h-5 w-5 text-brand" />
                Horarios de Reserva (L-V)
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span>Bloque Matutino:</span>
                  <span className="font-bold text-brand">6:00 a.m. - 10:00 a.m.</span>
                </li>
                <li className="flex justify-between">
                  <span>Bloque Vespertino:</span>
                  <span className="font-bold text-brand">1:00 p.m. - 3:00 p.m.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Clock className="h-5 w-5 text-brand" />
                Horarios de Reserva (S)
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span>Bloque Matutino:</span>
                  <span className="font-bold text-brand">7:00 a.m. - 1:00 p.m.</span>
                </li>
                <li className="flex justify-between">
                  <span>Bloque Vespertino:</span>
                  <span className="font-bold text-brand">3:00 p.m. - 6:00 p.m.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-0">
            {[
              {
                time: "Recepción",
                activity: "Recepción y bienvenida",
                desc: "Check-in, saludo y evaluación del estado de ánimo del lomito.",
              },
              {
                time: "6:00 p.m.",
                activity: "Reporte del día",
                desc: "Fotos, videos y resumen enviado por WhatsApp.",
              },
              {
                time: "7:00 p.m.",
                activity: "Pick-up en sucursal",
                desc: "Cierre de actividades y salida de perritos en sucursal.",
              },
              {
                time: "7:30 p.m.",
                activity: "Entrega a domicilio",
                desc: "Después de este horario inicia la transportación a casa.",
              },
            ].map((slot, i, arr) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  {i < arr.length - 1 && <div className="h-full w-0.5 bg-brand/20" />}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-bold text-brand">{slot.time}</span>
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

      {/* Waitlist Form */}
      <section id="waitlist" className="bg-cream py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800">
              Guardería · Cupo lleno en ambas sucursales
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Únete a la lista de espera de la Guardería
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No tenemos cupo disponible en este momento. Apúntate y te
              contactamos en cuanto se libere un lugar — sin compromiso ni
              pago hasta que tú confirmes la inscripción.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                <span>Aviso por correo y WhatsApp en cuanto haya cupo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                <span>Lugar reservado por orden de llegada</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                <span>Mismas condiciones: máx. 5 lomitos, sin jaulas, supervisión continua</span>
              </li>
            </ul>
          </div>
          <div>
            <WaitlistForm
              defaultServicio="guarderia"
              title="Lista de espera · Guardería"
              subtitle="Te avisamos en cuanto se libere un lugar."
            />
          </div>
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
            ¿No quieres esperar?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Mientras se libera un lugar en la guardería, prueba nuestros
            paseos diarios o el programa Train & Go.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/servicios/paseos"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              🐾 Ver paseos
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/servicios/adiestramiento"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Programa Train & Go →
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">
            ¿Dudas?{" "}
            <a
              href={SITE.whatsappUrl(
                "¡Hola! 👋 Tengo dudas sobre la lista de espera de la Guardería."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 hover:text-white"
            >
              Contáctanos por WhatsApp
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
