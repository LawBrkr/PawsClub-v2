import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES, WAITLIST_COPY } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle,
  Moon,
  Camera,
  Truck,
  Home,
  Shield,
  Clock,
  AlertCircle,
} from "lucide-react";
import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Hotel Boutique Canino Sin Jaulas — Lista de Espera | Paws Club CDMX",
  description:
    "Hotel canino sin jaulas en CDMX. Cupo lleno en ambas sucursales (Polanco y Zona Norte). Únete a la lista de espera y te avisamos en cuanto liberemos lugar.",
  openGraph: {
    title: "Hotel Boutique Canino — Lista de Espera | Paws Club CDMX",
    description:
      "Hotel canino sin jaulas con cupo lleno. Apúntate a la waitlist.",
    images: ["/img/hotel.webp"],
  },
};

const service = SERVICES.find((s) => s.id === "hotel")!;

const DETAILS = [
  {
    icon: <Home className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Sin Jaulas",
    titleDisplay: "Sin Jaulas",
    desc: "Tu lomito dormirá dentro de casa, en su propia cama o las nuestras. Nunca en jaulas ni kennels.",
  },
  {
    icon: <Camera className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Reportes Diarios",
    titleDisplay: "Reportes Diarios",
    desc: "Recibe fotos y videos de tu peludo por WhatsApp todos los días para que estés tranquilo.",
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
    icon: <Moon className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Check-in / Check-out Flexible",
    titleDisplay: "Check-in / Check-out Flexible",
    desc: "Nos adaptamos a tu horario. Check-in desde las 6:00 a.m. (L-V) o 7:00 a.m. (S).",
  },
  {
    icon: <Shield className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Cupo Limitado",
    titleDisplay: "Cupo Limitado",
    desc: "Máximo 5 lomitos por turno. Garantizamos atención personalizada y supervisión constante.",
  },
  {
    icon: <Clock className="h-6 w-6 text-brand" aria-hidden="true" />,
    title: "Supervisión 24/7",
    titleDisplay: "Supervisión 24/7",
    desc: "Monitoreo constante durante el día y la noche. Tu perro nunca está solo.",
  },
];

const FAQS = [
  {
    q: "¿Por qué está en lista de espera?",
    a: "Tenemos cupo lleno en ambas sucursales y no contamos con instalaciones disponibles para mostrar a nuevos clientes en este momento. Operamos con cupo estricto (máximo 5 lomitos) para mantener la calidad del cuidado.",
  },
  {
    q: "¿Cómo funciona la waitlist?",
    a: "Te registras con tus datos y servicio de interés. En cuanto liberemos un lugar te contactamos por correo y WhatsApp en orden de llegada. No hay compromiso ni pago hasta que tú confirmes.",
  },
  {
    q: "¿Cuánto tarda en liberarse un lugar?",
    a: "Depende de la rotación de huéspedes y temporada. No podemos garantizar tiempos, pero te mantenemos informado por correo cuando hay novedades.",
  },
  {
    q: "¿Qué servicios sí están disponibles ahora?",
    a: "Paseos diarios y aventuras de sábado (Zona Norte) y el programa de adiestramiento Train & Go (12 sesiones a domicilio, ambas zonas).",
  },
  {
    q: "¿Qué requisitos pediremos cuando se libere lugar?",
    a: "Cartilla de vacunación al día (incluyendo Bordetella y Giardia), desparasitación vigente, y una prueba de socialización gratuita antes de la primera estancia.",
  },
];

export default function HotelPage() {
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
          src="/img/hotel.webp"
          alt="Hotel boutique canino Paws Club — perro descansando sin jaulas"
          fill
          className="object-cover object-[center_top] md:object-center"
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
              ¿Por qué elegir nuestro Hotel?
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              No somos una pensión. Somos la segunda casa de tu lomito.
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

      {/* Gallery */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Así viven nuestros huéspedes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/img/Perro_pomerania_en_sofa_hotel.webp", alt: "Pomerania descansando en sofá del hotel canino" },
              { src: "/img/perro_alojado_sobre_cama_en_casa.webp", alt: "Perro alojado sobre cama en el hotel boutique" },
              { src: "/img/Perros_descansando_en_cama_ortopedica.webp", alt: "Perros descansando en cama ortopédica" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
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
              Hotel · Cupo lleno en ambas sucursales
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Únete a la lista de espera del Hotel
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No tenemos cupo disponible en este momento. Apúntate y te
              contactamos en cuanto se libere un lugar — sin compromiso ni
              pago hasta que tú confirmes la reserva.
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
                <span>Mismas condiciones: sin jaulas, máx. 5 huéspedes, supervisión 24/7</span>
              </li>
            </ul>
          </div>
          <div>
            <WaitlistForm
              defaultServicio="hotel"
              title="Lista de espera · Hotel"
              subtitle="Te avisamos en cuanto se libere un lugar."
            />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            ¿Qué incluye cada noche?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Estancia sin jaulas dentro de casa",
              "Supervisión y monitoreo 24/7",
              "Convivencia y socialización supervisada",
              "Reportes diarios con fotos y videos vía WhatsApp",
              "Limpieza profunda diaria de las áreas",
              "Agua fresca ilimitada y snacks saludables",
              "Camas ortopédicas y mantas",
              "Espacio para objetos personales (juguetes, cobijas)",
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
            Preguntas sobre el Hotel
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
            Mientras se libera un lugar en el hotel, prueba nuestros paseos
            diarios o el programa de adiestramiento Train & Go.
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
                "¡Hola! 👋 Tengo dudas sobre la lista de espera del Hotel."
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
