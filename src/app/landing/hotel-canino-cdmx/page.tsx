import Image from "next/image";
import { SITE, PRICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Star,
  Shield,
  Clock,
  Camera,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel para Perros en CDMX — Sin Jaulas, Desde $340/noche | Paws Club",
  description:
    "Hotel canino premium sin jaulas en Ciudad de México. Supervisión 24/7, reportes con fotos, cupo máximo 5 perros. Desde $340/noche. ¡Reserva hoy por WhatsApp!",
  robots: { index: false, follow: false },
};

export default function LandingHotel() {
  return (
    <div className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="bg-brand py-3 text-center text-sm font-semibold text-white">
        🏨 Hotel Canino Sin Jaulas — Reserva Hoy y Obtén Prueba de Socialización Gratis
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/hotel.webp"
          alt="Hotel para perros sin jaulas en CDMX"
          fill
          className="object-cover object-[75%_center] md:object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20">
          <div className="max-w-2xl">
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
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Hotel para Perros
              <br />
              <span className="text-accent-orange">Sin Jaulas</span> en CDMX
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Tu lomito dormirá dentro de casa con atención personalizada.
              Máximo 5 huéspedes, supervisión 24/7, reportes diarios.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-extrabold text-white">
                Desde {formatPrice(PRICES.hotel.zonaNorte.weekday)}
              </span>
              <span className="text-lg text-white/70">/noche</span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={SITE.whatsappUrl(
                  "¡Hola! 🏨 Vi su anuncio del hotel sin jaulas y me interesa reservar. ¿Tienen disponibilidad?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <Phone className="h-5 w-5" />
                Reservar por WhatsApp
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-gray-100 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4">
          {[
            { icon: <Shield className="h-6 w-6 text-brand" />, text: "Sin jaulas — nunca" },
            { icon: <Clock className="h-6 w-6 text-brand" />, text: "Supervisión 24/7" },
            { icon: <Camera className="h-6 w-6 text-brand" />, text: "Reportes diarios" },
            { icon: <Star className="h-6 w-6 text-brand" />, text: "Máx. 5 lomitos" },
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

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            ¿Por qué Paws Club?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              "Hospedaje sin jaulas dentro de casa",
              "Supervisión y monitoreo 24 horas",
              "Reportes diarios con fotos y videos por WhatsApp",
              "Cupo limitado: máximo 5 perros por turno",
              "Prueba de socialización gratuita",
              "Transporte a domicilio disponible",
              "Check-in/out flexible: 7AM - 8PM",
              "Camas ortopédicas y limpieza diaria",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Precios Transparentes
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
              <h3 className="text-lg font-bold text-gray-900">Poniente</h3>
              <p className="text-sm text-gray-500">Polanco · Lomas · Tecamachalco</p>
              <div className="mt-4 text-4xl font-extrabold text-gray-900">
                {formatPrice(PRICES.hotel.poniente.weekday)}
              </div>
              <span className="text-sm text-gray-400">/noche (L-S)</span>
            </div>
            <div className="relative rounded-2xl border-2 border-brand bg-white p-8 text-center shadow-lg">
              <span className="absolute -top-3 right-6 rounded-full bg-accent-orange px-3 py-1 text-xs font-bold text-white">
                Mejor precio
              </span>
              <h3 className="text-lg font-bold text-gray-900">Zona Norte</h3>
              <p className="text-sm text-gray-500">Lindavista · Sta. María · Tlatelolco</p>
              <div className="mt-4 text-4xl font-extrabold text-brand">
                {formatPrice(PRICES.hotel.zonaNorte.weekday)}
              </div>
              <span className="text-sm text-gray-400">/noche (L-S)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Carolina M.",
                text: "Mi perro se sentía como en casa. Los reportes diarios me dieron muchísima tranquilidad.",
              },
              {
                name: "Roberto L.",
                text: "Excelente servicio, muy profesionales y cariñosos con los peludos. 100% recomendado.",
              },
              {
                name: "Ana P.",
                text: "La mejor decisión que tomé. Sin jaulas, pocos perros, atención real. Mi perra ama ir.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-gray-100 bg-white p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-3 text-xs font-bold text-gray-900">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Reserva Hoy — Cupo Limitado
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Solo aceptamos 5 lomitos por turno. Agenda ahora y asegura su lugar.
          </p>
          <a
            href={SITE.whatsappUrl(
              "¡Hola! 🏨 Vi su anuncio del hotel sin jaulas y me interesa reservar. ¿Tienen disponibilidad?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-bold text-brand shadow-2xl transition-all hover:-translate-y-1"
          >
            <Phone className="h-6 w-6" />
            Reservar por WhatsApp
          </a>
          <p className="mt-4 text-sm text-white/70">
            Respuesta en menos de 30 minutos
          </p>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Paws Club · pawsclub.com.mx
      </footer>
    </div>
  );
}
