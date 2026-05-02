import Image from "next/image";
import { SITE, PRICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  CheckCircle,
  Phone,
  Star,
  Shield,
  AlertTriangle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cachorro Nuevo en Casa — Evaluación Sin Costo en Polanco | Paws Club",
  description:
    "Programa Train & Go: 12 sesiones a domicilio en Polanco y Lomas. Evaluación conductual sin costo (valor $850). Socialización temprana, obediencia y prevención de problemas.",
  robots: { index: false, follow: false },
};

export default function LandingCachorroPrimerizo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="bg-brand py-3 text-center text-sm font-semibold text-white">
        Nuevo cachorro en casa — Evaluación sin costo esta semana
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/training.webp"
          alt="Cachorro en sesión de adiestramiento en Polanco"
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
              Tu cachorro llegó.
              <br />
              <span className="text-accent-orange">
                Ahora viene la parte más importante.
              </span>
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Los primeros 6 meses definen el comportamiento de toda su vida.
              Programa Train & Go: 12 sesiones a domicilio en Polanco y Lomas.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-extrabold text-white">
                {formatPrice(PRICES.adiestramiento.precio)}
              </span>
              <span className="text-lg text-white/70">/ 12 sesiones a domicilio</span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={SITE.whatsappUrl(
                  "¡Hola! Tengo un cachorro nuevo y quiero la evaluación sin costo."
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
            ¿Tu cachorro hace algo de esto?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                problem: "No obedece nada",
                detail:
                  "Le hablas y te ignora. No viene cuando lo llamas. Es como si no existieras.",
              },
              {
                problem: "Muerde todo",
                detail:
                  "Muebles, zapatos, tus manos. No distingue juguete de cosa importante.",
              },
              {
                problem: "No sabe ni sentarse",
                detail:
                  "Cero comandos básicos. No tiene estructura ni rutina. Todo es caos.",
              },
            ].map((p) => (
              <div
                key={p.problem}
                className="rounded-2xl border border-red-100 bg-red-50/50 p-6"
              >
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {p.problem}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-brand">
            Todo esto se corrige si empiezas ahora. A los 6 meses ya es 3x más
            difícil.
          </p>
        </div>
      </section>

      {/* Programa */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Programa Train & Go para Cachorros
          </h2>
          <p className="mt-3 text-center text-lg text-gray-500">
            12 sesiones a domicilio en 4 semanas. En tu casa, con su entorno real.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "Evaluación conductual de 16 puntos",
              "Socialización temprana con perros mentor",
              "Obediencia básica (sit, down, stay, recall)",
              "Habituación a ruidos, personas y entornos",
              "Prevención de mordida y destrucción",
              "Reglas del hogar y estructura de rutina",
              "Manual de mantenimiento para tutores",
              "Acompañamiento post-sesión vía WhatsApp",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <span className="text-4xl font-extrabold text-brand">
              {formatPrice(PRICES.adiestramiento.precio)}
            </span>
            <span className="ml-2 text-lg text-gray-400">
              / 12 sesiones a domicilio
            </span>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Shield className="mx-auto h-12 w-12 text-brand" />
          <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
            Garantía de Resultados
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Si no ves cambios medibles en 2 sesiones, seguimos trabajando sin
            costo adicional. Medimos con escalas objetivas.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Empieza esta semana.
            <br />
            Evaluación sin costo.
          </h2>
          <p className="mt-4 text-lg text-white/90">
            45 minutos. Diagnóstico de 16 puntos. Sin compromiso.
          </p>
          <a
            href={SITE.whatsappUrl(
              "¡Hola! Tengo un cachorro nuevo y quiero la evaluación sin costo."
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
