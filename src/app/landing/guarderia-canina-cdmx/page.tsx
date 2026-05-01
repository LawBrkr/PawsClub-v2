import Image from "next/image";
import { SITE, PRICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Star,
  Shield,
  Sun,
  Camera,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardería Canina en CDMX — Sin Jaulas, Cupo Limitado | Paws Club",
  description:
    "Guardería canina premium en CDMX. Máximo 5 perros, sin jaulas, socialización supervisada, reportes diarios. Desde $260/día. ¡Agenda prueba gratis!",
  robots: { index: false, follow: false },
};

export default function LandingGuarderia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="bg-accent-orange py-3 text-center text-sm font-semibold text-white">
        ☀️ Guardería Canina — Prueba de Socialización GRATIS · Cupo Limitado
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/daycare.webp"
          alt="Guardería canina en CDMX — perros jugando"
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
              Guardería Canina
              <br />
              <span className="text-accent-orange">Sin Jaulas</span> en CDMX
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Diversión supervisada todo el día con máximo 5 lomitos.
              Socialización positiva, reportes con fotos y mucho amor.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-extrabold text-white">
                Desde {formatPrice(PRICES.guarderia.zonaNorte)}
              </span>
              <span className="text-lg text-white/70">/día</span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={SITE.whatsappUrl(
                  "¡Hola! ☀️ Vi su anuncio de la guardería y me interesa para mi perrito. ¿Me pasan informes?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <Phone className="h-5 w-5" />
                Agendar Prueba Gratis
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
            { icon: <Users className="h-6 w-6 text-brand" />, text: "Máx. 5 lomitos" },
            { icon: <Camera className="h-6 w-6 text-brand" />, text: "Reportes diarios" },
            { icon: <Sun className="h-6 w-6 text-brand" />, text: "Juego todo el día" },
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

      {/* Day Routine */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Un Día en la Guardería
          </h2>
          <div className="mt-10 space-y-4">
            {[
              { time: "6-10 a.m.", text: "Recepción matutina (L-V) — Check-in y bienvenida" },
              { time: "7 a.m. - 1 p.m.", text: "Recepción (Sábado) — Bloque matutino" },
              { time: "3-6 p.m.", text: "Recepción (Sábado) — Bloque vespertino" },
              { time: "1-3 p.m.", text: "Recepción vespertina (L-V) — Check-in alterno" },
              { time: "6:00 p.m.", text: "Reporte del día enviado por WhatsApp" },
              { time: "7:00 p.m.", text: "Pick-up en sucursal y salida de lomitos" },
              { time: "7:30 p.m.", text: "Inicio de entrega a domicilio (Transportación)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                <span className="w-20 shrink-0 text-right text-sm font-bold text-brand">
                  {item.time}
                </span>
                <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Todo Incluido
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Juego y socialización supervisada todo el día",
              "Estancia sin jaulas dentro de casa",
              "Reportes con fotos y videos por WhatsApp",
              "Limpieza profunda diaria de áreas",
              "Agua fresca ilimitada y snacks saludables",
              "Actividades de estimulación mental",
              "Evaluación continua de comportamiento",
              "Prueba de socialización gratuita",
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
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Precios Claros
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
              <h3 className="text-lg font-bold text-gray-900">Poniente</h3>
              <p className="text-sm text-gray-500">Polanco · Lomas · Tecamachalco</p>
              <div className="mt-4 text-4xl font-extrabold text-gray-900">
                {formatPrice(PRICES.guarderia.poniente)}
              </div>
              <span className="text-sm text-gray-400">/día</span>
            </div>
            <div className="relative rounded-2xl border-2 border-brand bg-white p-8 text-center shadow-lg">
              <span className="absolute -top-3 right-6 rounded-full bg-accent-orange px-3 py-1 text-xs font-bold text-white">
                Mejor precio
              </span>
              <h3 className="text-lg font-bold text-gray-900">Zona Norte</h3>
              <p className="text-sm text-gray-500">Lindavista · Sta. María · Tlatelolco</p>
              <div className="mt-4 text-4xl font-extrabold text-brand">
                {formatPrice(PRICES.guarderia.zonaNorte)}
              </div>
              <span className="text-sm text-gray-400">/día</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Papás Perrunos Felices
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Daniela S.",
                text: "Mi perro llega cansado y feliz cada vez. Los reportes son increíbles, siempre sé cómo le fue.",
              },
              {
                name: "Miguel A.",
                text: "Que sean máximo 5 perros marca la diferencia. Se nota la atención personalizada.",
              },
              {
                name: "Laura G.",
                text: "Por fin encontré un lugar donde no usan jaulas. Mi perrita se siente en casa.",
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
            Prueba de Socialización Gratis
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Agenda hoy y comprueba por qué somos la guardería favorita de CDMX.
            Solo aceptamos 5 lomitos por turno.
          </p>
          <a
            href={SITE.whatsappUrl(
              "¡Hola! ☀️ Vi su anuncio de la guardería y me interesa para mi perrito. ¿Me pasan informes?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-bold text-brand shadow-2xl transition-all hover:-translate-y-1"
          >
            <Phone className="h-6 w-6" />
            Agendar Prueba Gratis
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
