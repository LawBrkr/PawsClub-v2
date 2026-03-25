"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SITE, PRICES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Calculator, Info } from "lucide-react";

type ServiceType = "hotel" | "guarderia" | "adiestramiento" | "paseos";
type BranchType = "poniente" | "zona-norte";

interface PriceResult {
  label: string;
  total: number;
  breakdown: string;
}

export default function CalculadoraPage() {
  const [service, setService] = useState<ServiceType>("hotel");
  const [branch, setBranch] = useState<BranchType>("poniente");
  const [days, setDays] = useState(1);
  const [includeSunday, setIncludeSunday] = useState(false);
  const [secondDog, setSecondDog] = useState(false);
  const [walkPlan, setWalkPlan] = useState<
    "individual" | "paquete5" | "paquete10" | "mensual"
  >("individual");
  const [saturdayPlan, setSaturdayPlan] = useState<"individual" | "paquete4">(
    "individual"
  );
  const [includeSaturday, setIncludeSaturday] = useState(false);

  const result = useMemo<PriceResult | null>(() => {
    if (service === "hotel") {
      const weekdayPrice =
        branch === "poniente"
          ? PRICES.hotel.poniente.weekday
          : PRICES.hotel.zonaNorte.weekday;
      const sundayPrice =
        branch === "poniente"
          ? PRICES.hotel.poniente.sunday
          : PRICES.hotel.zonaNorte.sunday;

      if (includeSunday && days > 0) {
        const sundayNights = 1;
        const weekdayNights = Math.max(0, days - 1);
        const total = weekdayNights * weekdayPrice + sundayNights * sundayPrice;
        return {
          label: "Hotel Boutique",
          total,
          breakdown: `${weekdayNights} noches L-S (${formatPrice(weekdayPrice)}) + 1 domingo (${formatPrice(sundayPrice)})`,
        };
      }
      const total = days * weekdayPrice;
      return {
        label: "Hotel Boutique",
        total,
        breakdown: `${days} noche${days > 1 ? "s" : ""} × ${formatPrice(weekdayPrice)}`,
      };
    }

    if (service === "guarderia") {
      const price =
        branch === "poniente"
          ? PRICES.guarderia.poniente
          : PRICES.guarderia.zonaNorte;
      const total = days * price;
      return {
        label: "Guardería Canina",
        total,
        breakdown: `${days} día${days > 1 ? "s" : ""} × ${formatPrice(price)}`,
      };
    }

    if (service === "adiestramiento") {
      const price =
        branch === "poniente"
          ? PRICES.adiestramiento.poniente
          : PRICES.adiestramiento.zonaNorte;
      return {
        label: "Adiestramiento",
        total: price,
        breakdown: `Paquete de 4 sesiones individuales`,
      };
    }

    if (service === "paseos") {
      let total = 0;
      let breakdown = "";

      const walkPrices: Record<string, { price: number; label: string }> = {
        individual: { price: PRICES.paseos.individual, label: "Paseo individual" },
        paquete5: { price: PRICES.paseos.paquete5, label: "Paquete 5 paseos" },
        paquete10: { price: PRICES.paseos.paquete10, label: "Paquete 10 paseos" },
        mensual: { price: PRICES.paseos.mensual, label: "Plan mensual (20 paseos)" },
      };

      const plan = walkPrices[walkPlan];
      total += plan.price;
      breakdown = plan.label + ` (${formatPrice(plan.price)})`;

      if (secondDog) {
        const extra =
          walkPlan === "individual"
            ? PRICES.paseos.segundoPerro
            : walkPlan === "paquete5"
            ? PRICES.paseos.segundoPerro * 5
            : walkPlan === "paquete10"
            ? PRICES.paseos.segundoPerro * 10
            : PRICES.paseos.segundoPerro * 20;
        total += extra;
        breakdown += ` + 2do perro (${formatPrice(extra)})`;
      }

      if (includeSaturday) {
        if (saturdayPlan === "individual") {
          total += PRICES.paseos.aventuraSabado;
          breakdown += ` + 1 aventura sábado (${formatPrice(PRICES.paseos.aventuraSabado)})`;
          if (secondDog) {
            total += PRICES.paseos.segundoPerroSabado;
            breakdown += ` + 2do perro sábado (${formatPrice(PRICES.paseos.segundoPerroSabado)})`;
          }
        } else {
          total += PRICES.paseos.paquete4Sabados;
          breakdown += ` + 4 sábados (${formatPrice(PRICES.paseos.paquete4Sabados)})`;
          if (secondDog) {
            total += PRICES.paseos.segundoPerroSabado * 4;
            breakdown += ` + 2do perro 4 sábados (${formatPrice(PRICES.paseos.segundoPerroSabado * 4)})`;
          }
        }
      }

      return {
        label: "Paseos Caninos",
        total,
        breakdown,
      };
    }

    return null;
  }, [service, branch, days, includeSunday, secondDog, walkPlan, saturdayPlan, includeSaturday]);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="flex items-center justify-center gap-3 text-4xl font-extrabold md:text-5xl">
            <Calculator className="h-10 w-10" />
            Calculadora de Precios
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Selecciona el servicio, sucursal y opciones para ver tu precio
            estimado.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-6">
            {/* Service */}
            <div>
              <label className="block text-sm font-bold text-gray-900">
                Servicio
              </label>
              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { id: "hotel" as const, label: "🏨 Hotel", all: true },
                  { id: "guarderia" as const, label: "☀️ Guardería", all: true },
                  { id: "adiestramiento" as const, label: "🎓 Adiestrar", all: true },
                  { id: "paseos" as const, label: "🐾 Paseos", all: false },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setService(s.id);
                      if (!s.all) setBranch("zona-norte");
                    }}
                    className={`rounded-xl border-2 p-3 text-center text-sm font-semibold transition-all ${
                      service === s.id
                        ? "border-brand bg-brand/5 text-brand"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Branch */}
            {service !== "paseos" && (
              <div>
                <label className="block text-sm font-bold text-gray-900">
                  Sucursal
                </label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {[
                    { id: "poniente" as const, label: "📍 Poniente" },
                    { id: "zona-norte" as const, label: "📍 Zona Norte" },
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBranch(b.id)}
                      className={`rounded-xl border-2 p-3 text-center text-sm font-semibold transition-all ${
                        branch === b.id
                          ? "border-brand bg-brand/5 text-brand"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {service === "paseos" && (
              <div className="flex items-start gap-2 rounded-xl bg-accent-orange/10 p-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
                <p className="text-xs text-accent-orange">
                  Los paseos caninos son exclusivos de Paws Club Zona Norte.
                </p>
              </div>
            )}

            {/* Days (hotel & guardería) */}
            {(service === "hotel" || service === "guarderia") && (
              <div>
                <label className="block text-sm font-bold text-gray-900">
                  {service === "hotel" ? "Noches" : "Días"}
                </label>
                <div className="mt-2 flex items-center gap-4">
                  <button
                    onClick={() => setDays(Math.max(1, days - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 text-lg font-bold text-gray-600 hover:border-brand hover:text-brand"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-2xl font-extrabold text-gray-900">
                    {days}
                  </span>
                  <button
                    onClick={() => setDays(days + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 text-lg font-bold text-gray-600 hover:border-brand hover:text-brand"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Sunday toggle (hotel) */}
            {service === "hotel" && (
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={includeSunday}
                  onChange={(e) => setIncludeSunday(e.target.checked)}
                  className="h-4 w-4 rounded text-brand focus:ring-brand"
                />
                <span className="text-sm text-gray-700">
                  Incluye noche de domingo (+20%)
                </span>
              </label>
            )}

            {/* Walk Plan */}
            {service === "paseos" && (
              <>
                <div>
                  <label className="block text-sm font-bold text-gray-900">
                    Plan de Paseo Diario
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    {[
                      { id: "individual" as const, label: "Individual", sub: formatPrice(PRICES.paseos.individual) },
                      { id: "paquete5" as const, label: "5 paseos", sub: formatPrice(PRICES.paseos.paquete5) },
                      { id: "paquete10" as const, label: "10 paseos", sub: formatPrice(PRICES.paseos.paquete10) },
                      { id: "mensual" as const, label: "Mensual", sub: formatPrice(PRICES.paseos.mensual) },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setWalkPlan(p.id)}
                        className={`rounded-xl border-2 p-3 text-center transition-all ${
                          walkPlan === p.id
                            ? "border-brand bg-brand/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="block text-sm font-semibold text-gray-900">
                          {p.label}
                        </span>
                        <span className="text-xs text-gray-500">{p.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={secondDog}
                    onChange={(e) => setSecondDog(e.target.checked)}
                    className="h-4 w-4 rounded text-brand focus:ring-brand"
                  />
                  <span className="text-sm text-gray-700">
                    Segundo perro ({formatPrice(PRICES.paseos.segundoPerro)}
                    /paseo)
                  </span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeSaturday}
                    onChange={(e) => setIncludeSaturday(e.target.checked)}
                    className="h-4 w-4 rounded text-brand focus:ring-brand"
                  />
                  <span className="text-sm text-gray-700">
                    Agregar Aventuras de Sábado
                  </span>
                </label>

                {includeSaturday && (
                  <div className="ml-7">
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setSaturdayPlan("individual")}
                        className={`rounded-xl border-2 p-3 text-center transition-all ${
                          saturdayPlan === "individual"
                            ? "border-accent-orange bg-accent-orange/5"
                            : "border-gray-200"
                        }`}
                      >
                        <span className="block text-sm font-semibold text-gray-900">
                          1 sábado
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatPrice(PRICES.paseos.aventuraSabado)}
                        </span>
                      </button>
                      <button
                        onClick={() => setSaturdayPlan("paquete4")}
                        className={`rounded-xl border-2 p-3 text-center transition-all ${
                          saturdayPlan === "paquete4"
                            ? "border-accent-orange bg-accent-orange/5"
                            : "border-gray-200"
                        }`}
                      >
                        <span className="block text-sm font-semibold text-gray-900">
                          4 sábados
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatPrice(PRICES.paseos.paquete4Sabados)}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Result */}
            {result && (
              <div className="mt-8 rounded-2xl border-2 border-brand bg-brand/5 p-8">
                <div className="text-center">
                  <span className="text-sm font-semibold text-brand">
                    {result.label} •{" "}
                    {service === "paseos"
                      ? "Zona Norte"
                      : branch === "poniente"
                      ? "Poniente"
                      : "Zona Norte"}
                  </span>
                  <div className="mt-2 text-5xl font-extrabold text-gray-900">
                    {formatPrice(result.total)}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {result.breakdown}
                  </p>
                </div>
                <a
                  href={SITE.whatsappUrl(
                    `Hola! Usé la calculadora y me interesa: ${result.label} por ${formatPrice(result.total)}. ¿Puedo agendar?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-hover"
                >
                  Reservar por WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            )}
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            * Precios de referencia. Sujetos a disponibilidad. Consulta
            directamente para paquetes personalizados.
          </p>

          <div className="mt-6 text-center">
            <Link
              href="/pre-registro"
              className="text-sm font-semibold text-brand hover:underline"
            >
              ¿Primera vez? Pre-regístra a tu lomito →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
