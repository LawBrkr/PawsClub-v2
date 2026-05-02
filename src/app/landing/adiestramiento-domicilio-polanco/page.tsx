import Image from "next/image";
import { SITE, PRICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  CheckCircle,
  Phone,
  Star,
  Shield,
  Clock,
  Home,
  UserX,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Adiestramiento a Domicilio en Polanco y Lomas — Sin Costo la Evaluación | Paws Club",
  description:
    "Adiestramiento canino a domicilio en Polanco, Lomas y Tecamachalco. Sesiones 1 a 1 en tu casa, incluso sin que estés presente. Evaluación sin costo (valor $850).",
  robots: { index: false, follow: false },
};

export default function LandingDomicilioPolanco() {
  return (
    <div className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="bg-brand py-3 text-center text-sm font-semibold text-white">
        Adiestramiento a domicilio en Polanco — Evaluación sin costo
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/training.webp"
          alt="Adiestramiento canino a domicilio en Polanco"
          fill
          className="object-cover object-bottom"
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
                {SITE.googleRating}/5 en Google ({SITE.googleReviewCount}+
                reseñas)
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Tú no tienes tiempo.
              <br />
              <span className="text-accent-orange">
                Tu perro sí necesita estructura.
              </span>
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Lo hacemos por ti. Sesiones a domicilio en Polanco, Lomas y
              Tecamachalco. Trabajamos en el contexto real de tu perro, incluso
              sin que estés presente.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={SITE.whatsappUrl(
                  "¡Hola! Busco adiestramiento a domicilio en Polanco/Lomas. ¿Tienen disponibilidad?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <Phone className="h-5 w-5" />
                Agendar evaluación sin costo
              </a>
            </div>
            <p className="mt-3 text-sm text-white/50">
              <span className="line-through">Valor evaluación $850</span> — sin
              costo para nuevos clientes
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            ¿Te suena familiar?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Clock className="h-6 w-6 text-red-500" />,
                problem: "No tienes tiempo de ir a clases",
                detail:
                  "Tu agenda está llena. Los horarios de las escuelas no te funcionan. Necesitas que vayan a ti.",
              },
              {
                icon: <UserX className="h-6 w-6 text-red-500" />,
                problem: "Las clases grupales no funcionaron",
                detail:
                  "Tu perro se distraía con otros perros. No aprendió nada. Perdiste dinero y tiempo.",
              },
              {
                icon: <Home className="h-6 w-6 text-red-500" />,
                problem: "El problema es en casa, no en la escuela",
                detail:
                  "Tu perro necesita aprender en su entorno real: donde come, duerme y hace travesuras.",
              },
            ].map((p) => (
              <div
                key={p.problem}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                {p.icon}
                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {p.problem}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa único Train & Go */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Programa Train & Go
          </h2>
          <p className="mt-3 text-center text-lg text-gray-500">
            Un solo programa, todo incluido. Siempre a domicilio.
          </p>
          <div className="mt-10">
            <div className="relative rounded-2xl border-2 border-brand bg-white p-8 shadow-lg">
              <span className="absolute -top-3 right-6 rounded-full bg-accent-orange px-3 py-1 text-xs font-bold text-white">
                Programa completo
              </span>
              <h3 className="text-xl font-bold text-gray-900">Train & Go</h3>
              <p className="mt-2 text-sm text-gray-500">
                Programa de 4 semanas con especialista certificado. Cubre
                socialización, obediencia, manejo de impulsos y reglas del
                hogar. Incluye evaluación inicial sin costo.
              </p>
              <p className="mt-1 text-xs font-semibold text-brand">
                {PRICES.adiestramiento.unit} · {PRICES.adiestramiento.semanas} semanas
              </p>
              <div className="mt-6 text-center">
                <span className="text-4xl font-extrabold text-brand">
                  {formatPrice(PRICES.adiestramiento.precio)}
                </span>
                <p className="mt-1 text-xs text-gray-400">
                  Precio único · Sin costos ocultos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas domicilio */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            ¿Por qué a domicilio?
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "El perro aprende donde tiene sus hábitos reales",
              "No necesitas trasladarte ni buscar estacionamiento",
              "Trabajamos incluso sin que estés presente",
              "Sesiones 1 a 1, cero distracciones de otros perros",
              "Diagnóstico de 16 puntos en la primera visita",
              "Reporte de avance después de cada sesión",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Shield className="mx-auto h-12 w-12 text-brand" />
          <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
            Garantía de Resultados
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Si no ves cambios medibles en 2 sesiones, seguimos trabajando sin
            costo adicional.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Tu perro necesita estructura.
            <br />
            Nosotros la ponemos.
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Evaluación sin costo en tu domicilio. 45 minutos, sin compromiso.
          </p>
          <a
            href={SITE.whatsappUrl(
              "¡Hola! Busco adiestramiento a domicilio en Polanco/Lomas. ¿Tienen disponibilidad?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-xl font-bold text-brand shadow-2xl transition-all hover:-translate-y-1"
          >
            <Phone className="h-6 w-6" />
            Agendar por WhatsApp
          </a>
          <p className="mt-4 text-sm text-white/50">
            Respuesta en menos de 30 minutos
          </p>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Paws Club &middot; pawsclub.com.mx
      </footer>
    </div>
  );
}
