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
import SchemaMarkup from "@/components/SchemaMarkup";
import { getLocalBusinessSchema } from "@/lib/schema";
import PonienteLeadForm from "@/components/PonienteLeadForm";

const branch = BRANCHES.poniente;

export const metadata: Metadata = {
  title: `Adiestramiento Canino y Paseos en Polanco | ${branch.name}`,
  description: `${branch.name}: adiestramiento canino con refuerzo positivo y paseos en Polanco, Lomas de Chapultepec y Tecamachalco. Evaluación sin costo. L-S 8am-8pm.`,
  openGraph: {
    title: `Adiestramiento Canino y Paseos en Polanco | ${branch.name}`,
    description: `Adiestramiento canino profesional en Polanco y Lomas. Evaluación conductual sin costo. Sesiones 1 a 1 con refuerzo positivo.`,
    images: ["/img/hotel-guarderia-canina-miguel-hidalgo.png"],
  },
};

const branchServices = SERVICES.filter(
  (s) => branch.services.includes(s.id)
);

export default function PonientePage() {
  return (
    <>
      <SchemaMarkup data={getLocalBusinessSchema("poniente")} />
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
            Adiestramiento canino profesional y paseos en Polanco, Lomas de
            Chapultepec y Tecamachalco. Evaluación conductual sin costo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! Quiero agendar la evaluación conductual sin costo en la sucursal Poniente."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              Agendar evaluación sin costo
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
              Adiestramiento canino profesional y paseos.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {branchServices.map((s) => (
              <Link
                key={s.id}
                href={`/servicios/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
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
                    🎓 Train & Go
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">
                    {formatPrice(PRICES.adiestramiento.precio)}
                  </td>
                  <td className="px-6 py-4 text-right text-xs text-gray-400">
                    {PRICES.adiestramiento.unit}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Todas las sesiones son 1 a 1 e incluyen evaluación conductual, plan
            personalizado y acompañamiento post-sesión.
          </p>

          {/* Redirect Hotel/Guardería */}
          <div className="mt-12 rounded-2xl border border-brand/20 bg-brand/5 p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              ¿Hotel o guardería en Polanco?
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Nuestros servicios de hotel y guardería canina operan exclusivamente
              en Zona Norte (Santa María la Ribera, Lindavista, San Rafael y
              colonias cercanas), donde contamos con las instalaciones adecuadas
              y cupo controlado.
            </p>
            <Link
              href="/sucursales/zona-norte"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand-hover"
            >
              Ver Hotel y Guardería en Zona Norte
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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

      {/* Lista de espera Poniente */}
      <section id="lista-espera" className="bg-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-accent-orange/15 px-4 py-1.5 text-sm font-semibold text-accent-orange">
              Cupo limitado
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Paws Club Poniente esta en lista de espera
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Estamos ampliando capacidad para Polanco, Lomas y Tecamachalco.
              Registrate y eres el primero en saber cuando abramos cupo para tu servicio.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                <span>Aviso prioritario antes de la apertura publica</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                <span>Tarifa de fundador para los primeros inscritos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
                <span>Evaluacion conductual sin costo al iniciar</span>
              </li>
            </ul>
          </div>
          <div>
            <PonienteLeadForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            ¿Vives en Polanco o Lomas?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Agenda la evaluación conductual sin costo. 45 minutos, sin
            compromiso.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! Quiero agendar la evaluación conductual sin costo en la sucursal Poniente."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Agendar evaluación sin costo
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/sucursales/zona-norte"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Hotel y Guardería en Zona Norte →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
