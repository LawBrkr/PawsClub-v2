import Image from "next/image";
import Link from "next/link";
import { SITE, PRICES, BRANCHES, SERVICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  Moon,
  Camera,
  Truck,
  Home,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Boutique Canino Sin Jaulas | Paws Club CDMX",
  description:
    "Hospedaje canino premium sin jaulas en CDMX. Tu perro dormirá dentro de casa con atención personalizada, reportes diarios y transporte a domicilio. Dos sucursales: Polanco y Zona Norte.",
  openGraph: {
    title: "Hotel Boutique Canino Sin Jaulas | Paws Club CDMX",
    description:
      "Hospedaje canino premium sin jaulas en CDMX. Reportes diarios con fotos y videos.",
    images: ["/img/hotel.webp"],
  },
};

const service = SERVICES.find((s) => s.id === "hotel")!;

const DETAILS = [
  {
    icon: <Home className="h-6 w-6 text-brand" />,
    title: "Sin Jaulas",
    desc: "Tu lomito dormirá dentro de casa, en su propia cama o las nuestras. Nunca en jaulas ni kennels.",
  },
  {
    icon: <Camera className="h-6 w-6 text-brand" />,
    title: "Reportes Diarios",
    desc: "Recibe fotos y videos de tu peludo por WhatsApp todos los días para que estés tranquilo.",
  },
  {
    icon: <Truck className="h-6 w-6 text-brand" />,
    title: "Transporte a Domicilio",
    desc: "Servicio de recolección y entrega disponible en las zonas de cobertura de ambas sucursales.",
  },
  {
    icon: <Moon className="h-6 w-6 text-brand" />,
    title: "Check-in / Check-out Flexible",
    desc: "Nos adaptamos a tu horario. Check-in desde las 7:00 AM, check-out hasta las 8:00 PM.",
  },
  {
    icon: <Shield className="h-6 w-6 text-brand" />,
    title: "Cupo Limitado",
    desc: "Máximo 5 lomitos por turno. Garantizamos atención personalizada y supervisión constante.",
  },
  {
    icon: <Clock className="h-6 w-6 text-brand" />,
    title: "Supervisión 24/7",
    desc: "Monitoreo constante durante el día y la noche. Tu perro nunca está solo.",
  },
];

const FAQS = [
  {
    q: "¿Cuál es el horario de check-in y check-out?",
    a: "Check-in: Lunes a Sábado de 7:00 AM a 8:00 PM. Check-out: en el mismo horario. Los domingos solo aceptamos huéspedes con reserva previa y aplica un cargo adicional del 20%.",
  },
  {
    q: "¿Qué necesito para hospedar a mi perro?",
    a: "Cartilla de vacunación al día (incluyendo Bordetella y Giardia), desparasitación vigente, y pasar una prueba de socialización gratuita antes de su primera estancia.",
  },
  {
    q: "¿Puedo dejar la comida de mi perro?",
    a: "Sí, de hecho lo recomendamos. Puedes traer su alimento habitual porcionado para cada comida. Si no traes, usamos alimento premium.",
  },
  {
    q: "¿Aceptan perros de cualquier tamaño y raza?",
    a: "Sí, aceptamos todas las razas y tamaños. La prueba de socialización nos ayuda a asegurar que todos los huéspedes convivan en armonía.",
  },
  {
    q: "¿Hay servicio los domingos?",
    a: `Sí, los domingos ofrecemos servicio de hotel con reserva previa. El precio es de ${formatPrice(PRICES.hotel.poniente.sunday)} en Poniente y ${formatPrice(PRICES.hotel.zonaNorte.sunday)} en Zona Norte (incluye el recargo dominical).`,
  },
];

export default function HotelPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <Image
          src="/img/hotel.webp"
          alt="Hotel boutique canino Paws Club — perro descansando sin jaulas"
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
                "Hola Paws Club! 🏨 Me interesa el Hotel Boutique para mi perro."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              Reservar ahora
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
                <h3 className="text-lg font-bold text-gray-900">{d.title}</h3>
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

      {/* Pricing */}
      <section id="precios" className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Precios por Sucursal
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              La misma calidad Paws Club, precios adaptados a cada zona.
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
              <div className="mt-6 space-y-4">
                <div className="flex items-end justify-between border-b border-gray-100 pb-3">
                  <span className="text-sm text-gray-600">Lunes a Sábado</span>
                  <span className="text-2xl font-extrabold text-gray-900">
                    {formatPrice(PRICES.hotel.poniente.weekday)}
                    <span className="text-sm font-normal text-gray-400">
                      /noche
                    </span>
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm text-gray-600">
                    Domingo (con reserva)
                  </span>
                  <span className="text-2xl font-extrabold text-gray-900">
                    {formatPrice(PRICES.hotel.poniente.sunday)}
                    <span className="text-sm font-normal text-gray-400">
                      /noche
                    </span>
                  </span>
                </div>
              </div>
              <a
                href={SITE.whatsappUrl(
                  "Hola! Me interesa el Hotel Boutique en la sucursal Poniente."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
              >
                Reservar en Poniente
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
              <div className="mt-6 space-y-4">
                <div className="flex items-end justify-between border-b border-gray-100 pb-3">
                  <span className="text-sm text-gray-600">Lunes a Sábado</span>
                  <span className="text-2xl font-extrabold text-brand">
                    {formatPrice(PRICES.hotel.zonaNorte.weekday)}
                    <span className="text-sm font-normal text-gray-400">
                      /noche
                    </span>
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm text-gray-600">
                    Domingo (con reserva)
                  </span>
                  <span className="text-2xl font-extrabold text-brand">
                    {formatPrice(PRICES.hotel.zonaNorte.sunday)}
                    <span className="text-sm font-normal text-gray-400">
                      /noche
                    </span>
                  </span>
                </div>
              </div>
              <a
                href={SITE.whatsappUrl(
                  "Hola! Me interesa el Hotel Boutique en Zona Norte."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-hover"
              >
                Reservar en Zona Norte
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Todos los precios incluyen: estancia sin jaulas, supervisión 24/7,
            reportes con fotos y limpieza diaria.
          </p>
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
            ¿Tu lomito necesita hospedaje?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Agenda una visita para conocer nuestras instalaciones. La prueba de
            socialización es gratuita.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "Hola! Quiero agendar una visita para conocer el Hotel Boutique. 🏨"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Agendar visita
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/servicios/guarderia"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              También ofrecemos Guardería →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
