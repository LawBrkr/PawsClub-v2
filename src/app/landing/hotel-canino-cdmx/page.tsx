import Image from "next/image";
import Link from "next/link";
import { SITE, WAITLIST_COPY } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Camera,
  AlertCircle,
} from "lucide-react";
import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Hotel para Perros en CDMX — Lista de Espera | Paws Club",
  description:
    "Hotel canino sin jaulas en CDMX con cupo lleno. Únete a la lista de espera y te avisamos en cuanto liberemos lugar. Mientras tanto, paseos y adiestramiento abiertos.",
  robots: { index: false, follow: false },
};

export default function LandingHotel() {
  return (
    <div className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="bg-amber-500 py-3 text-center text-sm font-semibold text-white">
        <AlertCircle className="mr-1.5 inline h-4 w-4" />
        Hotel Canino · {WAITLIST_COPY.badge}
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
              <span className="text-amber-300">Sin Jaulas</span> en CDMX
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Cupo lleno en ambas sucursales. Únete a la lista de espera y
              te avisamos en cuanto se libere un lugar — sin compromiso.
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

      {/* Why Waitlist */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            ¿Por qué hay lista de espera?
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Operamos con cupo estricto (máximo 5 lomitos) para mantener la
            calidad del cuidado. En este momento ambas sucursales están al
            tope. Apúntate y te contactamos por orden de llegada cuando se
            libere un lugar.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              "Hospedaje sin jaulas dentro de casa",
              "Supervisión y monitoreo 24 horas",
              "Reportes diarios con fotos y videos por WhatsApp",
              "Cupo limitado: máximo 5 perros por turno",
              "Prueba de socialización gratuita al iniciar",
              "Transporte a domicilio disponible (costo adicional)",
              "Camas ortopédicas y limpieza diaria",
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
              Hotel · Cupo lleno
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
              defaultServicio="hotel"
              title="Lista de espera · Hotel"
              subtitle="Te avisamos en cuanto se libere un lugar."
            />
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

      {/* Footer Minimal */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Paws Club · pawsclub.com.mx
      </footer>
    </div>
  );
}
