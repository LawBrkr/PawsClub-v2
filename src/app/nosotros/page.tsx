import Image from "next/image";
import Link from "next/link";
import { SITE, BRANCHES } from "@/lib/constants";
import { ArrowRight, Heart, Shield, Star, Users, Award, Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros — Nuestra Historia y Valores | Paws Club CDMX",
  description:
    "Conoce a Paws Club: nacimos del amor por los perros y la convicción de que merecen un cuidado premium sin jaulas. Dos sucursales en CDMX, equipo apasionado.",
  openGraph: {
    title: "Nosotros | Paws Club CDMX",
    description: "Nuestra historia, valores y el equipo detrás de Paws Club.",
    images: ["/img/hero.webp"],
  },
};

const VALUES = [
  {
    icon: <Heart className="h-6 w-6 text-brand" />,
    title: "Amor por los Animales",
    desc: "Cada decisión que tomamos parte de una pregunta simple: ¿es lo mejor para el perro? Si la respuesta es sí, lo hacemos.",
  },
  {
    icon: <Shield className="h-6 w-6 text-brand" />,
    title: "Seguridad Sin Compromisos",
    desc: "Cupo limitado, supervisión constante, prueba de socialización obligatoria. Nunca arriesgamos la seguridad por llenar cupo.",
  },
  {
    icon: <Star className="h-6 w-6 text-brand" />,
    title: "Calidad Premium Accesible",
    desc: "Creemos que el mejor cuidado canino no debería ser un lujo. Por eso tenemos precios diferenciados por zona.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand" />,
    title: "Transparencia Total",
    desc: "Reportes diarios con fotos y videos. Siempre sabes cómo está tu lomito. Sin sorpresas, sin letra chica.",
  },
  {
    icon: <Award className="h-6 w-6 text-brand" />,
    title: "Refuerzo Positivo",
    desc: "Todo nuestro equipo está formado en técnicas de refuerzo positivo. Nunca usamos castigo ni intimidación.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-brand" />,
    title: "Bienestar Integral",
    desc: "No solo cuidamos: estimulamos. Actividades físicas y mentales diseñadas para cada etapa de vida.",
  },
];

const TIMELINE = [
  {
    year: "Inicio",
    title: "Nace Paws Club Poniente",
    desc: "Empezamos como un hotel boutique canino en la zona de Miguel Hidalgo, con la premisa de nunca usar jaulas.",
  },
  {
    year: "Crecimiento",
    title: "Guardería y Adiestramiento",
    desc: "La demanda de nuestros clientes nos llevó a sumar guardería diaria y programas de adiestramiento con refuerzo positivo.",
  },
  {
    year: "Expansión",
    title: "Nace Paws Club Zona Norte",
    desc: "Abrimos nuestra segunda sucursal para llevar nuestro estándar de calidad a Lindavista, Sta. María la Ribera y colonias aledañas.",
  },
  {
    year: "Hoy",
    title: "Paseos y Aventuras",
    desc: "Sumamos paseos diarios y aventuras de sábado en Zona Norte. Dos sucursales, 4 servicios, un mismo amor por los lomitos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <Image
          src="/img/hero.webp"
          alt="Equipo Paws Club con perros felices"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Más que un negocio, una vocación.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Paws Club nació del amor por los perros y la convicción de que
            merecen un cuidado digno, seguro y sin jaulas.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 md:text-4xl">
            Nuestra Historia
          </h2>
          <div className="mt-12 space-y-0">
            {TIMELINE.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="h-full w-0.5 bg-brand/20" />
                  )}
                </div>
                <div className="pb-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Nuestros Valores
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Lo que guía cada decisión en Paws Club.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900">
            Paws Club en Números
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { num: "2", label: "Sucursales en CDMX" },
              { num: "4", label: "Servicios caninos" },
              { num: `${SITE.googleRating}`, label: "Calificación Google" },
              { num: "5", label: "Lomitos máx. por turno" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-4xl font-extrabold text-brand md:text-5xl">
                  {stat.num}
                </span>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ¿Qué nos hace diferentes?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            No somos una pensión genérica. Somos una familia que cuida a tus
            peludos como cuida a los suyos. Cupo limitado, sin jaulas, reportes
            diarios, y la convicción de que cada perro merece una atención
            personalizada.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Sin jaulas — nunca, por política",
              "Máximo 5 lomitos por turno",
              "Reportes diarios con fotos y video",
              "Prueba de socialización gratuita",
              "Precios diferenciados por zona",
              "Equipo formado en refuerzo positivo",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-left">
                <Star className="h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            ¿Listo para conocernos?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Agenda una visita y comprueba por qué los papás perrunos nos eligen.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "Hola Paws Club! Quiero conocer sus instalaciones. 🐶"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Agendar visita
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/servicios/hotel"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Explorar servicios →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
