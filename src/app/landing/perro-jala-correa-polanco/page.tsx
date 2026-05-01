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
    "Tu Perro Jala la Correa — Solución en 3 Sesiones | Paws Club Polanco",
  description:
    "En 3 sesiones la mayoría de perros aprende a caminar sin jalar. Adiestramiento con refuerzo positivo en Polanco y Lomas. Evaluación sin costo (valor $850).",
  robots: { index: false, follow: false },
};

export default function LandingJalaCorrea() {
  return (
    <div className="min-h-screen bg-white">
      {/* Topbar */}
      <div className="bg-brand py-3 text-center text-sm font-semibold text-white">
        Tu perro jala la correa — Evaluación sin costo esta semana
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/training.webp"
          alt="Perro aprendiendo a caminar con correa en Polanco"
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
              Cada paseo es una batalla.
              <br />
              <span className="text-accent-orange">
                Tu perro jala y tú ya no quieres sacarlo.
              </span>
            </h1>
            <p className="mt-4 text-xl text-white/90">
              En 3 sesiones la mayoría de perros aprende a caminar sin jalar.
              Si no, seguimos sin costo.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-extrabold text-white">
                {formatPrice(PRICES.adiestramiento.poniente)}
              </span>
              <span className="text-lg text-white/70">/ 4 sesiones</span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={SITE.whatsappUrl(
                  "¡Hola! Mi perro jala la correa y quiero la evaluación sin costo."
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

      {/* El problema */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            ¿Reconoces esto?
          </h2>
          <div className="mt-10 space-y-4">
            {[
              "Sales a pasear y tu perro te arrastra desde la puerta",
              "Llegas a casa con los brazos adoloridos",
              "Has probado arneses, collares y nada funciona",
              "Ya no disfrutas los paseos, los evitas",
              "Te da miedo que se suelte y salga corriendo",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50/50 p-4"
              >
                <AlertTriangle className="h-5 w-5 shrink-0 text-red-500" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La solución */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            La solución: Obediencia Básica
          </h2>
          <p className="mt-3 text-center text-lg text-gray-500">
            Protocolo específico para correa suelta. Resultados desde la primera
            sesión.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "Diagnóstico: por qué tu perro jala (no todos jalan por lo mismo)",
              "Técnica de correa suelta con refuerzo positivo",
              "Práctica en entorno real (tu colonia, tus rutas)",
              "Generalización: que funcione con cualquier persona",
              "Sin collares de castigo ni herramientas aversivas",
              "Reporte de avance después de cada sesión",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-green-50 p-6 text-center">
            <p className="text-lg font-bold text-green-800">
              Caso real: Labrador de 2 años que arrastraba a su dueña
            </p>
            <p className="mt-2 text-sm text-green-700">
              Resuelto en 3 sesiones. Ahora camina con correa suelta sin
              necesidad de arnés especial.
            </p>
          </div>
        </div>
      </section>

      {/* Precio + Garantía */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Inversión clara
          </h2>
          <div className="mt-6">
            <span className="text-5xl font-extrabold text-brand">
              {formatPrice(PRICES.adiestramiento.poniente)}
            </span>
            <span className="ml-2 text-lg text-gray-400">/ 4 sesiones</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Equivale a{" "}
            {formatPrice(Math.round(PRICES.adiestramiento.poniente / 4))} por
            sesión · Sesiones 1 a 1 · A domicilio o en instalaciones
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4">
            <Shield className="h-6 w-6 text-brand" />
            <p className="text-sm font-semibold text-gray-700">
              Si no ves mejora en 3 sesiones, seguimos sin costo adicional.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Vuelve a disfrutar los paseos.
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Evaluación sin costo. 45 minutos. Sin compromiso.
          </p>
          <a
            href={SITE.whatsappUrl(
              "¡Hola! Mi perro jala la correa y quiero la evaluación sin costo."
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
