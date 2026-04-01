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
} from "lucide-react";
import type { Metadata } from "next";
import BookingButton from "@/components/BookingButton";
import statusConfig from "@/config/paws-status.json";
import PonienteLeadForm from "@/components/PonienteLeadForm";

const branch = BRANCHES.poniente;

export const metadata: Metadata = {
  title: `${branch.name} — Hotel, Guardería y Adiestramiento Canino | Paws Club`,
  description: `${branch.name}: hotel boutique sin jaulas, guardería canina y adiestramiento con refuerzo positivo. Zona Polanco, Lomas de Chapultepec, Tecamachalco, Miguel Hidalgo. L-S 7am-8pm.`,
  openGraph: {
    title: `${branch.name} | Paws Club CDMX`,
    description: `Servicios caninos premium en zona Polanco y Lomas. Hotel desde ${formatPrice(PRICES.hotel.poniente.weekday)}/noche.`,
    images: ["/img/hotel-guarderia-canina-miguel-hidalgo.png"],
  },
};

const branchServices = SERVICES.filter(
  (s) => !("exclusiveBranch" in s) || s.exclusiveBranch === branch.id
);

export default function PonientePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/hotel-guarderia-canina-miguel-hidalgo.png"
          alt={`${branch.name} — Hotel y guardería canina en Miguel Hidalgo`}
          fill
          className="object-cover object-[75%_center] md:object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <span className="mb-4 inline-block rounded-full bg-brand/90 px-4 py-1.5 text-sm font-semibold text-white">
            📍 Sucursal
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            {branch.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Nuestra sucursal original. Servicios caninos premium en la zona más
            exclusiva de CDMX: Polanco, Lomas de Chapultepec y Tecamachalco.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! 📍 Deseo unirme a la lista de espera para la sucursal Poniente."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              Lista de Espera
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
                    <p className="text-sm text-gray-600">
                      {branch.coverage.join(" · ")}
                    </p>
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
                        "¡Hola! 📍 Me interesa conocer sus servicios en la sucursal Poniente. ¿Me podrían dar informes?"
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
              Servicios en Poniente
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Hotel boutique, guardería y adiestramiento canino.
            </p>
          </div>

          {(statusConfig.poniente.hotel.full || statusConfig.poniente.guarderia.full) && (
            <div className="mb-8 grid gap-8 lg:grid-cols-2 items-start">
              <div className="rounded-xl bg-amber-50 p-6 border border-amber-200">
                <h3 className="text-lg font-bold text-amber-800">
                  🔜 Lista de espera
                </h3>
                <p className="mt-2 text-sm text-amber-700">
                  Paws Club Poniente se expande. Sé el primero en saberlo.
                </p>
                <p className="mt-2 text-sm text-amber-700">
                  Mientras tanto, te invitamos a conocer nuestra Experiencia Insignia en la zona Norte, donde aún tenemos espacios disponibles.
                </p>
                <Link
                  href="/sucursales/zona-norte"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-brand hover:underline"
                >
                  Ver disponibilidad en Zona Norte <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <PonienteLeadForm />
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {branchServices.map((s) => {
              const isFull = s.id === "hotel" || s.id === "guarderia" 
                ? statusConfig.poniente[s.id as "hotel" | "guarderia"].full 
                : false;
              
              const isAvailable = s.id === "adiestramiento" && !statusConfig.poniente.adiestramiento.full;

              return (
                <Link
                  key={s.id}
                  href={`/servicios/${s.slug}`}
                  className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg ${isFull ? "opacity-75" : ""}`}
                >
                  {isFull && (
                    <div className="absolute right-0 top-0 rounded-bl-xl bg-amber-600 px-4 py-1.5 text-xs font-bold text-white shadow-md">
                      🔜 PRÓXIMAMENTE
                    </div>
                  )}
                  {isAvailable && (
                    <div className="absolute right-0 top-0 rounded-bl-xl bg-green-600 px-4 py-1.5 text-xs font-bold text-white shadow-md">
                      ✅ DISPONIBLE
                    </div>
                  )}
                  <span className="text-3xl">{s.icon}</span>
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
                  <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${isFull ? "text-red-600 hover:text-red-700 hover:underline" : "text-brand"}`}>
                    {isFull ? "Unirse a la lista de espera" : "Ver detalles y precios"}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Precios en Poniente
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
                  <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    {formatPrice(PRICES.hotel.poniente.weekday)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    por noche
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    🏨 Hotel (Domingo)
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    {formatPrice(PRICES.hotel.poniente.sunday)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    por noche
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    ☀️ Guardería
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    {formatPrice(PRICES.guarderia.poniente)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    por día
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    🎓 Adiestramiento
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    {formatPrice(PRICES.adiestramiento.poniente)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    paquete 4 sesiones
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Todos los servicios incluyen supervisión, reportes diarios y
            limpieza premium.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Nuestras Instalaciones
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/img/hotel.webp", alt: "Hotel boutique canino Poniente" },
              { src: "/img/Perro_pomerania_en_sofa_hotel.webp", alt: "Pomerania en sofá del hotel" },
              { src: "/img/Perros_descansando_en_cama_ortopedica.webp", alt: "Perros en cama ortopédica" },
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
            ¿Vives en zona Poniente?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Agenda una visita para conocer nuestras instalaciones. La prueba de
            socialización es gratuita.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! 📍 Deseo unirme a la lista de espera para la sucursal Poniente."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Lista de Espera
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/sucursales/zona-norte"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              También estamos en Zona Norte →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
