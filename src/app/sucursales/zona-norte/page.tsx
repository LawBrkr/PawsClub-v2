import Image from "next/image";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";
import { SITE, PRICES, BRANCHES, SERVICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Star,
  Home,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";

const branch = BRANCHES["zona-norte"];

export const metadata: Metadata = {
  title: `${branch.name} — Premium Homestay Canino | Paws Club`,
  description: `${branch.name}: Premium Homestay con cuidado 24/7 sin jaulas. Servicios caninos completos incluyendo paseos diarios en Lindavista, Sta. María la Ribera, etc.`,
  openGraph: {
    title: `${branch.name} | Paws Club CDMX`,
    description: `Premium Homestay: Cuidado 24/7 sin jaulas y ambiente 100% hogareño en Zona Norte CDMX.`,
    images: ["/img/Pome_feliz_en_parque.webp"],
  },
};

export default function ZonaNortePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/Pome_feliz_en_parque.webp"
          alt={`${branch.name} — Premium Homestay y servicios completos`}
          fill
          className="object-cover object-[75%_center] md:object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand/90 px-4 py-1.5 text-sm font-semibold text-white">
              <Home className="h-4 w-4" /> Premium Homestay
            </span>
            <span className="inline-block rounded-full bg-accent-orange px-4 py-1.5 text-sm font-semibold text-white">
              Cuidado 24/7 sin jaulas
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            {branch.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Experimenta el verdadero <strong>Premium Homestay</strong>. Ofrecemos un ambiente 100% hogareño, supervisión constante y libertad total (cero jaulas). Disfruta de la tranquilidad de saber que tu mejor amigo es tratado como familia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! 📍 Me interesa conocer sus servicios en la sucursal Zona Norte. ¿Me podrían dar informes?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              Contactar Zona Norte
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Información de la Sucursal
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Clock className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Horario</h3>
                    <p className="text-sm text-gray-600">{branch.schedule}</p>
                    <p className="text-xs text-gray-400">{branch.sundayNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <MapPin className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Zona de Cobertura
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {branch.coverage.map((zone) => (
                        <span
                          key={zone}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                          {zone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Phone className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Contacto
                    </h3>
                    <a
                      href={SITE.whatsappUrl(
                        "¡Hola! 📍 Me interesa conocer sus servicios en la sucursal Zona Norte. ¿Me podrían dar informes?"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand hover:underline"
                    >
                      WhatsApp: {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Star className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Calificación Google
                    </h3>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-gray-900">
                        {SITE.googleRating}
                      </span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.round(SITE.googleRating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">
                        ({SITE.googleReviewCount} reseñas)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-[4/3] w-full">
                <GoogleMap
                  lat={branch.coordinates.lat}
                  lng={branch.coordinates.lng}
                  title={branch.name}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Servicios en Zona Norte
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              La sucursal más completa: 4 servicios incluyendo paseos
              exclusivos.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/servicios/${s.slug}`}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  {"exclusiveBranch" in s && (
                    <span className="rounded-full bg-accent-orange/10 px-3 py-1 text-xs font-bold text-accent-orange">
                      Exclusivo ZN
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{s.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Ver detalles y precios
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Precios en Zona Norte
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Servicio
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    Precio
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    Unidad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    🏨 Hotel (L-S)
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-brand">
                    {formatPrice(PRICES.hotel.zonaNorte.weekday)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    por noche
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    🏨 Hotel (Domingo)
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-brand">
                    {formatPrice(PRICES.hotel.zonaNorte.sunday)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    por noche
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    ☀️ Guardería
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-brand">
                    {formatPrice(PRICES.guarderia.zonaNorte)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    por día
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    🎓 Adiestramiento
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-brand">
                    {formatPrice(PRICES.adiestramiento.zonaNorte)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    paquete 4 sesiones
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    🐾 Paseo Individual
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-accent-orange">
                    {formatPrice(PRICES.paseos.individual)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    por paseo
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    🐾 Paseo Mensual
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-accent-orange">
                    {formatPrice(PRICES.paseos.mensual)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    20 paseos/mes
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    🐾 Aventura Sábado
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-accent-orange">
                    {formatPrice(PRICES.paseos.aventuraSabado)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    por aventura
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Precios adaptados a la zona. Misma calidad Paws Club.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Zona Norte en Acción
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/img/Pome_feliz_en_parque.webp", alt: "Perro feliz en paseo canino" },
              { src: "/img/daycare.webp", alt: "Perros en guardería Zona Norte" },
              { src: "/img/perro_alojado_sobre_cama_en_casa.webp", alt: "Hotel canino Zona Norte" },
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

      {/* CTA */}
      <section className="bg-brand py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            ¿Vives en Zona Norte?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Somos tu mejor opción para servicios caninos completos. Agenda una
            visita hoy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! 📍 Me gustaría visitar la sucursal Zona Norte para conocerlos. ¿En qué horarios puedo ir?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Agendar visita
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/sucursales/poniente"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              También estamos en Poniente →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
