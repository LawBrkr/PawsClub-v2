import Image from "next/image";
import Link from "next/link";
import { SITE, PRICES, BRANCHES, SERVICES, WALK_DESTINATIONS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Camera,
  Clock,
  Users,
  Route,
  Calendar,
  TreePine,
  Pill,
  Award,
  ShieldCheck,
  Footprints
} from "lucide-react";
import type { Metadata } from "next";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Paseos Caninos Diarios y Aventuras de Sábado | Paws Club Zona Norte CDMX",
  description:
    "Paseos caninos diarios de +1 hora y aventuras de sábado a los mejores parques de CDMX. Desde $150/paseo. Servicio exclusivo Zona Norte: Lindavista, Sta. María la Ribera, Tlatelolco.",
  openGraph: {
    title: "Paseos Caninos — Paws Club Zona Norte CDMX",
    description:
      "Paseos diarios y aventuras de sábado a los mejores parques caninos de CDMX. Exclusivo Zona Norte.",
    images: ["/img/Pome_feliz_en_parque.webp"],
  },
};

const service = SERVICES.find((s) => s.id === "paseos")!;

const DAILY_WALK_FEATURES = [
  {
    icon: <Clock className="h-6 w-6 text-brand" />,
    title: "Mínimo 1 Hora",
    desc: "Cada paseo dura al menos 60 minutos de ejercicio activo, no 15 minutos a la vuelta de la cuadra.",
  },
  {
    icon: <Route className="h-6 w-6 text-brand" />,
    title: "Ruta con GPS",
    desc: "Recibes la ruta completa y fotos del paseo de tu lomito por WhatsApp.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand" />,
    title: "Grupos Reducidos",
    desc: "Máximo 3 perros por paseador. Atención real, no un rebaño sin supervisión.",
  },
  {
    icon: <Camera className="h-6 w-6 text-brand" />,
    title: "Reporte Diario",
    desc: "Fotos, resumen del paseo y estado de ánimo de tu perro. Siempre sabes cómo le fue.",
  },
];

const SATURDAY_FEATURES = [
  {
    icon: <TreePine className="h-6 w-6 text-accent-orange" />,
    title: "Parques Top de CDMX",
    desc: "Chapultepec, Los Dinamos, Bicentenario, Aragón y más. Rotamos destinos cada semana.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-accent-orange" />,
    title: "Día Completo",
    desc: "Salida en la mañana, regreso por la tarde. Una aventura de verdad, no un paseo corto.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-accent-orange" />,
    title: "Transporte Incluido",
    desc: "Recogemos y entregamos a tu lomito en tu domicilio. Todo incluido en el precio.",
  },
  {
    icon: <Camera className="h-6 w-6 text-accent-orange" />,
    title: "Fotos y Videos",
    desc: "Reporte completo de la aventura con fotos y videos del mejor día de tu perro.",
  },
];

const FAQS = [
  {
    q: "¿Este servicio está disponible en Poniente?",
    a: "No, los Paseos Caninos son un servicio exclusivo de Paws Club Zona Norte. Si estás en la zona de Polanco/Lomas, te invitamos a conocer nuestros otros servicios.",
  },
  {
    q: "¿Cuántos perros van por paseo?",
    a: "Máximo 3 perros por paseador en paseos diarios. En aventuras de sábado puede haber un grupo más grande pero siempre con ratio de supervisión adecuado.",
  },
  {
    q: "¿Mi perro necesita estar vacunado?",
    a: "Sí. Requerimos cartilla de vacunación al día (incluyendo Bordetella y Giardia) y desparasitación vigente.",
  },
  {
    q: "¿Qué pasa si llueve?",
    a: "Los paseos diarios se adaptan (rutas techadas o más cortas). Las aventuras de sábado se reprograman si las condiciones no son seguras.",
  },
  {
    q: "¿Puedo contratar paseo para 2 perros?",
    a: `Sí. El segundo perro tiene un precio especial de ${formatPrice(PRICES.paseos.segundoPerro)}/paseo diario o ${formatPrice(PRICES.paseos.segundoPerroSabado)}/aventura de sábado.`,
  },
  {
    q: "¿En qué colonias ofrecen el servicio?",
    a: "Cubrimos: Santa María la Ribera, San Rafael, Tlatelolco, Buenavista, Lindavista, Industrial Vallejo, Magdalena de las Salinas, y colonias cercanas. Pregunta por tu colonia específica.",
  },
];

export default function PaseosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end md:items-center overflow-hidden">
        <Image
          src="/img/Pome_feliz_en_parque.webp"
          alt="Perro feliz en paseo canino en parque de CDMX"
          fill
          className="object-cover object-[75%_center] md:object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-block rounded-full bg-brand/90 px-4 py-1.5 text-sm font-semibold text-white">
              {service.icon} {service.name}
            </span>
            <span className="inline-block rounded-full bg-accent-orange px-4 py-1.5 text-sm font-semibold text-white">
              Exclusivo Zona Norte
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            {service.tagline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BookingButton
              calLink="pawsclub"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              Agendar paseo
              <ArrowRight className="h-5 w-5" />
            </BookingButton>
            <Link
              href="#precios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Ver precios y paquetes
            </Link>
          </div>
        </div>
      </section>

      {/* Exclusive Banner */}
      <section className="bg-accent-orange/10 py-4">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm font-semibold text-accent-orange">
            🐾 Servicio exclusivo de Paws Club Zona Norte — Lindavista, Sta.
            María la Ribera, Tlatelolco, Buenavista y más
          </p>
        </div>
      </section>

      {/* Daily Walks */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Paseos Diarios
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Lunes a Viernes. Ejercicio real, no vuelta a la manzana.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DAILY_WALK_FEATURES.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
                  {d.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{d.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saturday Adventures */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Aventuras de Sábado
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Salidas de día completo a los mejores parques caninos de CDMX.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SATURDAY_FEATURES.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange/10">
                  {d.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{d.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Destinos de Aventura
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WALK_DESTINATIONS.map((dest) => (
              <div
                key={dest.name}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {dest.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {dest.description}
                    </p>
                    <span className="mt-1 inline-block text-xs text-gray-400">
                      {dest.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Precios y Paquetes
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Exclusivo Paws Club Zona Norte. Ahorra más con paquetes.
            </p>
          </div>

          {/* Daily Walks Pricing Cards */}
          <div className="mb-10">
            <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
              Planes de Paseos Diarios (L-V)
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Plan 5 Días",
                  price: PRICES.paseos.paquete5,
                  unit: "/5 paseos",
                  desc: "Ideal para la semana",
                  savings: formatPrice(PRICES.paseos.individual * 5 - PRICES.paseos.paquete5),
                  features: ["5 paseos de +1 hora", "Reportes diarios con GPS", "Agua y snacks"],
                  icon: <Footprints className="h-6 w-6 text-brand" />
                },
                {
                  name: "Plan 10 Días",
                  price: PRICES.paseos.paquete10,
                  unit: "/10 paseos",
                  desc: "Nuestro plan más popular",
                  savings: formatPrice(PRICES.paseos.individual * 10 - PRICES.paseos.paquete10),
                  popular: true,
                  features: ["10 paseos de +1 hora", "Reportes extendidos y fotos", "Prioridad en horarios de paseo", "Agua y snacks"],
                  icon: <Award className="h-6 w-6 text-white" />
                },
                {
                  name: "Membresía Mensual",
                  price: PRICES.paseos.mensual,
                  unit: "/mes",
                  desc: "Paseos de Lunes a Viernes (20 días)",
                  savings: formatPrice(PRICES.paseos.individual * 20 - PRICES.paseos.mensual),
                  features: ["20 paseos garantizados al mes", "Descuento en Aventuras de Sábado", "Prioridad máxima de horarios", "Reportes VIP diarios con GPS", "Soporte y seguimiento directo"],
                  icon: <ShieldCheck className="h-6 w-6 text-brand" />
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 ${
                    "popular" in plan && plan.popular
                      ? "border-2 border-brand shadow-xl relative z-10"
                      : "border border-gray-100"
                  }`}
                >
                  {"popular" in plan && plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-white shadow-md">
                      MÁS POPULAR
                    </div>
                  )}
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${
                    "popular" in plan ? "bg-brand" : "bg-brand/10"
                  }`}>
                    {plan.icon}
                  </div>
                  <h4 className="text-xl font-extrabold text-gray-900">
                    {plan.name}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">{plan.desc}</p>
                  
                  <div className="my-6">
                    <span className="text-4xl font-black text-gray-900">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-sm font-medium text-gray-400">{plan.unit}</span>
                    {"savings" in plan && plan.savings && (
                      <p className="mt-2 text-sm font-bold text-accent-orange">
                        Ahorras {plan.savings}
                      </p>
                    )}
                  </div>
                  
                  <ul className="mb-8 mt-auto flex-grow space-y-3">
                    {plan.features.map(f => (
                      <li key={f} className="flex flex-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span className="text-sm text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <BookingButton
                    calLink="pawsclub"
                    className={`w-full rounded-full py-3 text-center text-sm font-bold transition-colors ${
                      "popular" in plan
                        ? "bg-brand text-white hover:bg-brand-hover shadow-md"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Seleccionar Plan
                  </BookingButton>
                </div>
              ))}
            </div>

            {/* Add-ons List */}
            <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h4 className="mb-6 text-center text-lg font-bold text-gray-900">Add-ons y Personalización</h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <Footprints className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Segundo Perro</p>
                    <p className="text-xs font-semibold text-brand">+{formatPrice(PRICES.paseos.segundoPerro)} /paseo</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <Pill className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Admin. Medicamentos</p>
                    <p className="text-xs font-semibold text-brand">Incluido bajo solicitud</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <Camera className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Fotos Extra</p>
                    <p className="text-xs font-semibold text-brand">Galería extendida gratis</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">¿Deseas contratar solo una vez? <span className="font-semibold text-gray-900">{formatPrice(PRICES.paseos.individual)} /paseo individual</span></p>
              </div>
            </div>
          </div>

          {/* Saturday Adventures Pricing */}
          <div>
            <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
              Aventuras de Sábado
            </h3>
            <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Individual",
                  price: PRICES.paseos.aventuraSabado,
                  unit: "/aventura",
                  desc: "Incluye transporte, supervisión, agua y snacks",
                },
                {
                  name: "Paquete 4 Sábados",
                  price: PRICES.paseos.paquete4Sabados,
                  unit: "/4 aventuras",
                  desc: `${formatPrice(PRICES.paseos.paquete4Sabados / 4)}/aventura`,
                  savings: formatPrice(PRICES.paseos.aventuraSabado * 4 - PRICES.paseos.paquete4Sabados),
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h4 className="text-sm font-bold text-gray-900">
                    {plan.name}
                  </h4>
                  <div className="mt-3">
                    <span className="text-2xl font-extrabold text-accent-orange">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-xs text-gray-400">{plan.unit}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{plan.desc}</p>
                  {"savings" in plan && plan.savings && (
                    <p className="mt-2 text-xs font-semibold text-accent-orange">
                      Ahorras {plan.savings}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">
              Segundo perro en aventura: {formatPrice(PRICES.paseos.segundoPerroSabado)}
            </p>
          </div>

          <div className="mt-10 text-center">
            <BookingButton
              calLink="pawsclub"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-hover hover:shadow-2xl"
            >
              Agendar paseo
              <ArrowRight className="h-5 w-5" />
            </BookingButton>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
            Todo incluido en cada paseo
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Paseo de mínimo 1 hora de ejercicio activo",
              "Reporte con fotos y ruta GPS por WhatsApp",
              "Agua fresca y snacks durante el paseo",
              "Grupos reducidos (máx. 3 perros por paseador)",
              "Recogida y entrega en tu domicilio",
              "Seguro de responsabilidad civil",
              "Paseador capacitado en manejo canino",
              "Supervisión continua durante todo el paseo",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
            Preguntas sobre los Paseos
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

      {/* CTA */}
      <section className="bg-brand py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            ¿Tu lomito necesita más ejercicio?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Contrata paseos diarios y nota la diferencia en su energía y
            comportamiento.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE.whatsappUrl(
                "¡Hola! 🐾 Vi lo de los paseos en Zona Norte y me interesa para mi perrito. ¿Me dan más info?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Empezar paseos
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/servicios/guarderia"
              className="inline-flex items-center gap-2 text-lg font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Combinar con Guardería →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
