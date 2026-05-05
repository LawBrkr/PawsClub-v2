import Image from "next/image";
import Link from "next/link";
import {
  SITE,
  SERVICES,
  PRICES,
  BRANCHES,
  isWaitlistService,
  WAITLIST_COPY,
} from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  Star,
  Shield,
  Camera,
  Sparkles,
  Home,
  MapPin,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Paseos y Adiestramiento Canino en CDMX | Paws Club",
  description:
    "Paseos diarios, aventuras de sábado y adiestramiento Train & Go en CDMX. Hotel y guardería en lista de espera por cupo lleno. Refuerzo positivo, sin jaulas.",
  alternates: { canonical: "https://pawsclub.com.mx/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://pawsclub.com.mx/",
    siteName: "Paws Club",
    title: "Paws Club — Paseos y Adiestramiento Canino en CDMX",
    description:
      "Paseos diarios, aventuras de sábado a parques caninos y programa de adiestramiento Train & Go. Hotel y guardería con lista de espera.",
    images: [
      {
        url: "/img/paws-club-og.jpg",
        width: 1200,
        height: 630,
        alt: "Paws Club — Paseos y Adiestramiento Canino CDMX",
      },
    ],
  },
};


// ============================================
// HERO
// ============================================
function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end md:items-center overflow-hidden">
      <Image
        src="/img/hero.webp"
        alt="Perros felices en Paws Club"
        fill
        className="object-cover object-[80%_center] md:object-center"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 md:bg-black/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 text-center md:text-center text-white lg:px-8">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          Paseos y Adiestramiento Canino en CDMX
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/90 md:text-xl">
          Paseos diarios, aventuras de sábado a parques caninos y programa
          Train & Go con refuerzo positivo. Hotel y guardería en lista de
          espera por cupo lleno.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/servicios/paseos"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
          >
            🐾 Reservar paseo
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/servicios/adiestramiento"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            🎓 Programa Train & Go
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FEATURES BAR
// ============================================
const FEATURES = [
  { icon: <Shield className="h-6 w-6 text-brand" />, title: "Socialización Segura", desc: "Cupo limitado para atención personalizada" },
  { icon: <Camera className="h-6 w-6 text-brand" />, title: "Reportes Diarios", desc: "Fotos y videos vía WhatsApp" },
  { icon: <Sparkles className="h-6 w-6 text-brand" />, title: "Higiene Premium", desc: "Limpieza profunda diaria" },
  { icon: <Home className="h-6 w-6 text-brand" />, title: "Sin Jaulas", desc: "Libertad total dentro de casa" },
];

function FeaturesBar() {
  return (
    <section className="relative z-10 -mt-12 px-4">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex items-center gap-4 p-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-50">
              {f.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{f.title}</p>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================
// SERVICES
// ============================================
function ServicesSection() {
  const getPriceLabel = (id: string) => {
    if (isWaitlistService(id)) return "Lista de espera por cupo lleno";
    switch (id) {
      case "adiestramiento":
        return `${formatPrice(PRICES.adiestramiento.precio)} / programa`;
      case "paseos":
        return `Desde ${formatPrice(PRICES.paseos.individual)} / paseo`;
      default:
        return "";
    }
  };

  return (
    <section id="servicios" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Servicios disponibles
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Paseos y adiestramiento abiertos. Hotel y guardería en lista de
            espera.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const waitlist = isWaitlistService(service.id);
            return (
              <Link
                key={service.id}
                href={`/servicios/${service.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      waitlist ? "grayscale-[40%]" : ""
                    }`}
                    loading="lazy"
                  />
                  {waitlist ? (
                    <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow">
                      {WAITLIST_COPY.badge}
                    </span>
                  ) : (
                    "exclusiveBranch" in service &&
                    service.exclusiveBranch && (
                      <span className="absolute right-3 top-3 rounded-full bg-accent-orange px-3 py-1 text-xs font-bold text-white">
                        Zona Norte
                      </span>
                    )
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {service.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      waitlist ? "text-amber-700" : "text-accent"
                    }`}
                  >
                    {getPriceLabel(service.id)}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {service.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {service.features.slice(0, 2).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// BRANCHES PREVIEW
// ============================================
function BranchesPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Dos Sucursales, Un Mismo Estándar
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Precios adaptados a cada zona, la misma calidad Paws Club.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.values(BRANCHES).map((branch) => (
            <Link
              key={branch.id}
              href={`/sucursales/${branch.slug}`}
              className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-all hover:border-brand/30 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex flex-wrap items-center gap-2">
                    {branch.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{branch.schedule}</p>
                </div>
                <MapPin className="h-6 w-6 text-brand" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {branch.coverage.slice(0, 5).map((zone) => (
                  <span
                    key={zone}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {zone}
                  </span>
                ))}
                {branch.coverage.length > 5 && (
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                    +{branch.coverage.length - 5} más
                  </span>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {branch.services.map((s) => {
                  const svc = SERVICES.find((sv) => sv.id === s);
                  if (!svc) return null;
                  const waitlist = isWaitlistService(s);
                  return (
                    <span
                      key={s}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        waitlist
                          ? "bg-amber-100 text-amber-800 line-through decoration-amber-500/60"
                          : "bg-cream text-brand"
                      }`}
                      title={waitlist ? "Lista de espera" : undefined}
                    >
                      {svc.icon} {svc.shortName}
                    </span>
                  );
                })}
              </div>
              <div className="mt-4 rounded-lg bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-800">
                Hotel y guardería en lista de espera por cupo lleno
              </div>
              {branch.hasWalks && (
                <div className="mt-2 rounded-lg bg-accent-orange/10 px-4 py-2 text-sm font-semibold text-accent-orange">
                  🐾 Paseos diarios y aventuras de fin de semana
                </div>
              )}
              <p className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand group-hover:underline">
                Ver sucursal <ArrowRight className="h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// NUMBERS SECTION
// ============================================
function NumbersSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Nuestra experiencia y dedicación hablan por sí solas.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          <div className="text-center">
            <p className="text-4xl font-extrabold text-brand md:text-5xl">
              4.9★
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">en Google</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-brand md:text-5xl">
              5
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">Cupo exclusivo de</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-brand md:text-5xl">
              24/7
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">Supervisión</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-extrabold text-brand md:text-5xl">
              CDMX
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">Zona Norte</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// REVIEWS
// ============================================
const REVIEWS = [
  {
    name: "Emiliano S.",
    text: "Excelente servicio, dejé a mi perrito y muy agradable la experiencia, sin duda volveré a requerir sus servicios.",
    rating: 5,
  },
  {
    name: "Edgar L.",
    text: "Gran experiencia, mi cachorro se la pasa increíble y regresa feliz y cansado... Muuuuy recomendable.",
    rating: 5,
  },
  {
    name: "Luis C.",
    text: "10/10 excelentes servicios, trataron a mis cachorritos maravillosamente.",
    rating: 5,
  },
];

function ReviewsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Lo que dicen los dueños
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Image
              src="https://lh3.googleusercontent.com/a/default-user"
              alt="Google"
              width={24}
              height={24}
              className="hidden"
            />
            <span className="text-2xl font-bold">{SITE.googleRating}</span>
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-500">en Google Reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="flex text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm italic text-gray-600">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-bold text-gray-900">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TRUST SECTION
// ============================================
function TrustSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Confianza y Seguridad
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Tu tranquilidad es nuestra prioridad. Cuidamos cada detalle.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Technical Care block & IMPI */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="rounded-2xl border-2 border-brand/20 bg-brand/5 p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Shield className="h-6 w-6 text-brand" /> Cuidado Especializado
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Contamos con <strong>protocolos técnicos para razas especiales</strong> (braquicéfalos como Pugs y Bulldogs, razas gigantes y perros senior). Nuestras instalaciones mantienen control de temperatura adecuado, evitamos ejercicio extremo en horarios de calor, y nuestro personal está capacitado en primeros auxilios caninos para identificar signos de estrés térmico o respiratorio.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Paws Club® — Marca Registrada</p>
                <p className="mt-1 text-xs text-gray-500">Paws Club es una marca registrada.</p>
              </div>
            </div>
          </div>

          {/* Huéspedes Felices Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
              <Image src="/img/perro_alojado_sobre_cama_en_casa.webp" alt="Pomerania en cama del hotel" fill className="object-cover transition-transform hover:scale-105" loading="lazy" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
              <Image src="/img/daycare.webp" alt="Perros jugando y socializando en guardería" fill className="object-cover transition-transform hover:scale-105" loading="lazy" />
            </div>
            <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-2xl shadow-md">
              <Image src="/img/Pome_feliz_en_parque.webp" alt="Perro Pomerania feliz en parque" fill className="object-cover transition-transform hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="font-bold text-white tracking-wide">Galería: Huéspedes Felices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// REQUISITOS DE INGRESO
// ============================================
function RequirementsSection() {
  const reqs = [
    { title: "Cartilla de Vacunación", desc: "Al día (Múltiple/Séxtuple y Rabia)." },
    { title: "Vacunas Especiales", desc: "Bordetella y Giardia vigentes." },
    { title: "Desparasitación", desc: "Interna y externa (pulgas/garrapatas) al día." },
    { title: "Prueba de Socialización", desc: "Evaluación de comportamiento obligatoria." },
  ];
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
          Requisitos de Ingreso
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reqs.map((r, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-xs text-gray-500">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FAQ
// ============================================
const FAQS = [
  {
    q: "¿Tienen hotel o guardería disponibles?",
    a: "Hotel y guardería están en lista de espera por cupo lleno en ambas sucursales. Si te interesa, regístrate en la waitlist y te avisamos en cuanto liberemos lugar. Mientras tanto, los servicios de paseos y adiestramiento siguen abiertos.",
  },
  {
    q: "¿Qué servicios sí están abiertos hoy?",
    a: "Paseos diarios (Zona Norte), aventuras de sábado a parques caninos como Chapultepec o Los Dinamos, y el programa de adiestramiento Train & Go (12 sesiones a domicilio).",
  },
  {
    q: "¿Cómo funciona la lista de espera?",
    a: "Te registras con nombre, correo, colonia y servicio de interés. Cuando liberamos cupo te contactamos por correo y WhatsApp en orden de llegada — sin compromiso hasta que tú confirmes.",
  },
  {
    q: "¿Qué necesito para inscribir a mi perro a paseos o adiestramiento?",
    a: "Cartilla de vacunación al día (incluyendo Bordetella y Giardia) y desparasitación vigente. En adiestramiento incluimos una evaluación conductual inicial sin costo.",
  },
  {
    q: "¿Qué incluye la aventura de sábado?",
    a: "Salida de día completo los sábados a parques caninos como Chapultepec, Los Dinamos, Parque Bicentenario y más. Incluye transporte, supervisión, agua y snacks. Exclusivo Zona Norte.",
  },
];

function FAQSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-gray-200 bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-bold text-gray-900">
                {faq.q}
                <span className="ml-4 text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// WAITLIST SECTION
// ============================================
function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-cream py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800">
            Hotel y Guardería · Cupo lleno
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            Únete a la lista de espera
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hotel y guardería operan en lista de espera por cupo lleno en
            ambas sucursales. Apúntate y te avisamos en cuanto se libere un
            lugar — sin compromiso hasta que tú confirmes.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
              <span>Aviso por correo y WhatsApp en cuanto liberemos cupo</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
              <span>Lugar reservado por orden de llegada</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand" />
              <span>Mientras tanto, paseos y adiestramiento siguen abiertos</span>
            </li>
          </ul>
        </div>
        <div>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA
// ============================================
function CTASection() {
  return (
    <section className="bg-brand py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Reserva un paseo o tu programa de adiestramiento
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Servicios abiertos hoy. Hotel y guardería: regístrate en la
          waitlist arriba.
        </p>
        <a
          href={SITE.whatsappUrl(
            "¡Hola! 👋 Me interesa conocer más sobre sus servicios. ¿Me podrían dar informes?"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          Contactar por WhatsApp
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

// ============================================
// PAGE
// ============================================
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <ServicesSection />
      <BranchesPreview />
      <NumbersSection />
      <ReviewsSection />
      <TrustSection />
      <RequirementsSection />
      <WaitlistSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
