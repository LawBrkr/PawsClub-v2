import Image from "next/image";
import Link from "next/link";
import { SITE, WAITLIST_COPY } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Sun,
  Camera,
  Users,
  AlertCircle,
} from "lucide-react";
import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Guardería Canina en CDMX — Lista de Espera | Paws Club",
  description:
    "Guardería canina sin jaulas en CDMX con cupo lleno en ambas sucursales. Únete a la lista de espera y te avisamos en cuanto liberemos lugar.",
  robots: { index: false, follow: false },
};

export default function LandingGuarderia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="bg-amber-500 py-3 text-center text-sm font-semibold text-white">
        <AlertCircle className="mr-1.5 inline h-4 w-4" />
        Guardería Canina · {WAITLIST_COPY.badge}
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
              <span className="text-amber-300">Sin Jaulas</span> en CDMX
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Cupo lleno en ambas sucursales. Únete a la lista de espera y
              te avisamos en cuanto liberemos lugar — sin compromiso.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500/95 px-4 py-1.5 text-sm font-bold text-white shadow">
              <AlertCircle className="h-4 w-4" />
              {WAITLIST_COPY.badge}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-amber-600"
              >
                {WAITLIST_COPY.ctaLong}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/servicios/paseos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
              >
                Ver paseos disponibles
              </Link>
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

      {/* Why Waitlist */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            ¿Por qué hay lista de espera?
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Recibimos máximo 5 lomitos por sesión para garantizar atención
            personalizada y socialización segura. En este momento ambas
            sucursales están al tope. Apúntate y te contactamos por orden
            de llegada cuando se libere un lugar.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Juego y socialización supervisada todo el día",
              "Estancia sin jaulas dentro de casa",
              "Reportes con fotos y videos por WhatsApp",
              "Limpieza profunda diaria de áreas",
              "Agua fresca ilimitada y snacks saludables",
              "Actividades de estimulación mental",
              "Evaluación continua de comportamiento",
              "Sin compromiso ni pago hasta confirmar",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800">
              Guardería · Cupo lleno
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Apúntate a la lista de espera
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Te contactamos por correo y WhatsApp en cuanto liberemos
              cupo. Lugar reservado por orden de llegada.
            </p>
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
            Mientras se libera lugar…
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Nuestros paseos diarios y aventuras de sábado siguen abiertos.
            También ofrecemos el programa de adiestramiento Train & Go a
            domicilio.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/servicios/paseos"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1"
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

      {/* Footer Minimal */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Paws Club · pawsclub.com.mx
      </footer>
    </div>
  );
}
