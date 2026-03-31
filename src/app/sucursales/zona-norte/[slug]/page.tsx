import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GoogleMap from "@/components/GoogleMap";
import { SITE, BRANCHES } from "@/lib/constants";
import {
  ZONA_NORTE_NEIGHBORHOODS,
  type Neighborhood,
} from "@/data/neighborhoods";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Star,
  Home,
  ShieldCheck,
  MessageCircle,
  Navigation,
} from "lucide-react";
import type { Metadata } from "next";

/* -------------------------------------------------- */
/*  Static Params — Pre-render all 5 neighborhood pages */
/* -------------------------------------------------- */
export async function generateStaticParams() {
  return ZONA_NORTE_NEIGHBORHOODS.map((n) => ({ slug: n.slug }));
}

/* -------------------------------------------------- */
/*  Dynamic Metadata                                   */
/* -------------------------------------------------- */
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = ZONA_NORTE_NEIGHBORHOODS.find((n) => n.slug === slug);
  if (!neighborhood) return {};

  const title = `${neighborhood.primaryService} en ${neighborhood.name} | Paws Club`;
  const description = neighborhood.metaDescription;

  return {
    title,
    description,
    keywords: neighborhood.seoKeywords,
    openGraph: {
      title,
      description,
      images: ["/img/Pome_feliz_en_parque.webp"],
      type: "website",
      locale: "es_MX",
    },
    alternates: {
      canonical: `${SITE.url}/sucursales/zona-norte/${slug}`,
    },
  };
}

/* -------------------------------------------------- */
/*  Page Component                                     */
/* -------------------------------------------------- */
const branch = BRANCHES["zona-norte"];

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = ZONA_NORTE_NEIGHBORHOODS.find((n) => n.slug === slug);

  if (!neighborhood) notFound();

  const whatsappMessage = neighborhood.whatsappMessage;
  const whatsappUrl = `https://wa.me/5215644085356?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative flex min-h-[55vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/Pome_feliz_en_parque.webp"
          alt={`Guardería Canina en ${neighborhood.name} — Paws Club Premium Homestay`}
          fill
          className="object-cover object-[75%_center] md:object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/sucursales/zona-norte"
              className="hover:text-white transition-colors"
            >
              Zona Norte
            </Link>
            <span>/</span>
            <span className="text-white/90">{neighborhood.name}</span>
          </nav>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand/90 px-4 py-1.5 text-sm font-semibold text-white">
              <Home className="h-4 w-4" /> Premium Homestay
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-orange px-4 py-1.5 text-sm font-semibold text-white">
              <Navigation className="h-4 w-4" /> A {neighborhood.travelTime} de
              ti
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            {neighborhood.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            {neighborhood.introParagraph}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              id="hero-cta-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp — Pedir Informes
            </a>
            <Link
              href="#proximidad"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              ¿Qué tan cerca estamos?
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PROXIMITY + MAP ========== */}
      <section id="proximidad" className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Proximity Info */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
                <MapPin className="h-4 w-4" /> Proximidad desde{" "}
                {neighborhood.name}
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Tu perro está a solo{" "}
                <span className="text-brand">{neighborhood.travelTime}</span> de
                la mejor atención
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Nuestra sucursal en <strong>Colonia San Simón Tolnahuac, CDMX (Zona Norte)</strong> es la más
                cercana para los vecinos de <strong>{neighborhood.name}</strong>. Ofrecemos guardería,
                hotel boutique, adiestramiento y paseos caninos — todo con
                la calidad premium Paws Club.
                <br /><br />
                <span className="text-sm italic text-gray-500">Ubicación: Cerca de Tlatelolco y Santa María la Ribera. Dirección exacta tras confirmar reservación.</span>
              </p>

              {/* Trust Signals */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <ShieldCheck className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Sin jaulas
                    </p>
                    <p className="text-xs text-gray-500">
                      Ambiente 100% hogareño con cupo limitado a 5 lomitos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <Clock className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Supervisión 24/7
                    </p>
                    <p className="text-xs text-gray-500">
                      Fotos y videos diarios vía WhatsApp
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <Star className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {SITE.googleRating} ★ en Google
                    </p>
                    <p className="text-xs text-gray-500">
                      {SITE.googleReviewCount} reseñas verificadas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <Navigation className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {neighborhood.travelTime} en auto
                    </p>
                    <p className="text-xs text-gray-500">
                      Desde {neighborhood.name} a nuestra sucursal
                    </p>
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
                  title={`Paws Club — cerca de ${neighborhood.name}`}
                />
              </div>
              <div className="bg-white px-6 py-4">
                <p className="text-sm font-semibold text-gray-900">
                  📍 Ubicación: Colonia San Simón Tolnahuac, CDMX
                </p>
                <p className="text-xs text-gray-500">
                  A solo {neighborhood.travelTime} desde {neighborhood.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LOCAL REVIEW ========== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <blockquote className="text-xl font-medium text-gray-800 italic leading-relaxed">
            &ldquo;{neighborhood.localReview}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-brand">
            — {neighborhood.reviewerName}, vecino/a de {neighborhood.name}
          </p>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Servicios disponibles cerca de {neighborhood.name}
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              La sucursal más completa: 4 servicios caninos premium.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: "🏨",
                title: "Hotel Boutique",
                desc: "Hospedaje sin jaulas, dentro de casa. Dulces sueños para tu lomito.",
                href: "/servicios/hotel",
              },
              {
                icon: "☀️",
                title: "Guardería Canina",
                desc: "Diversión supervisada todo el día con cupo limitado.",
                href: "/servicios/guarderia",
              },
              {
                icon: "🎓",
                title: "Adiestramiento",
                desc: "Conexión y aprendizaje positivo. Sesiones individuales.",
                href: "/servicios/adiestramiento",
              },
              {
                icon: "🐾",
                title: "Paseos Caninos",
                desc: "Aventuras diarias a los mejores parques de CDMX.",
                href: "/servicios/paseos",
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:border-brand/20"
              >
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Ver detalles <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA WhatsApp ========== */}
      <section className="bg-brand py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            ¿Vives en {neighborhood.name}?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Estás a solo <strong>{neighborhood.travelTime}</strong> de la
            mejor guardería canina de la zona. Escríbenos y agenda tu visita
            hoy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              id="cta-whatsapp-bottom"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" />
              Pedir informes por WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/sucursales/zona-norte"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Zona Norte
            </Link>
          </div>
        </div>
      </section>

      {/* ========== OTHER NEIGHBORHOODS ========== */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-gray-900">
            También atendemos estas colonias
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {ZONA_NORTE_NEIGHBORHOODS.filter(
              (n) => n.slug !== neighborhood.slug
            ).map((n) => (
              <Link
                key={n.slug}
                href={`/sucursales/zona-norte/${n.slug}`}
                className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-brand hover:text-brand hover:shadow-md"
              >
                📍 {n.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
