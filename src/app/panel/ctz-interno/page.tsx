"use client";

import { useState, useMemo, useCallback } from "react";
import { PRICES, SITE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { Copy, Check, MessageCircle, Calculator, ChevronDown } from "lucide-react";

type ServiceType = "hotel" | "guarderia" | "adiestramiento" | "paseos";
type BranchType = "poniente" | "zona-norte";
type AdiestramientoPackage = "basico" | "cachorroPro" | "adiosAnsiedad";
type WalkPlanType = "individual" | "paquete5" | "paquete10" | "mensual";

// ============================================================
// Helpers de fecha
// ============================================================
function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateES(date: Date): string {
  return date.toLocaleDateString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString("es-MX", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

// Cuenta noches de hotel: sábado→domingo = noche de domingo (+precio especial)
function countHotelNights(start: Date, end: Date) {
  let weekdayNights = 0;
  let sundayNights = 0;
  const current = new Date(start);
  while (current < end) {
    if (current.getDay() === 6) {
      sundayNights++;
    } else {
      weekdayNights++;
    }
    current.setDate(current.getDate() + 1);
  }
  return { weekdayNights, sundayNights, total: weekdayNights + sundayNights };
}

// Cuenta días de guardería: L-S, excluye domingos
function countGuarderiaDays(start: Date, end: Date) {
  let days = 0;
  const current = new Date(start);
  while (current <= end) {
    if (current.getDay() !== 0) days++;
    current.setDate(current.getDate() + 1);
  }
  return days;
}

// ============================================================
// Componente principal
// ============================================================
export default function CotizadorPage() {
  // Info del cliente
  const [clientName, setClientName] = useState("");
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");

  // Configuración del servicio
  const [service, setService] = useState<ServiceType>("hotel");
  const [branch, setBranch] = useState<BranchType>("zona-norte");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Adiestramiento
  const [adiestramientoPkg, setAdiestramientoPkg] =
    useState<AdiestramientoPackage>("basico");

  // Paseos
  const [walkPlan, setWalkPlan] = useState<WalkPlanType>("individual");
  const [secondDog, setSecondDog] = useState(false);
  const [includeSaturday, setIncludeSaturday] = useState(false);
  const [saturdayPlan, setSaturdayPlan] = useState<"individual" | "paquete4">(
    "individual"
  );

  const [copied, setCopied] = useState(false);

  // ============================================================
  // Cálculo automático
  // ============================================================
  const result = useMemo(() => {
    const hasValidDates =
      startDate &&
      endDate &&
      (service === "adiestramiento" || endDate > startDate);

    if (service !== "adiestramiento" && !hasValidDates) return null;
    if (service === "adiestramiento" && !startDate) return null;

    const start = parseLocalDate(startDate);
    const end = endDate ? parseLocalDate(endDate) : start;

    if (service === "hotel") {
      const weekdayPrice =
        branch === "poniente"
          ? PRICES.hotel.poniente.weekday
          : PRICES.hotel.zonaNorte.weekday;
      const sundayPrice =
        branch === "poniente"
          ? PRICES.hotel.poniente.sunday
          : PRICES.hotel.zonaNorte.sunday;

      const { weekdayNights, sundayNights, total: totalNights } =
        countHotelNights(start, end);
      const total =
        weekdayNights * weekdayPrice + sundayNights * sundayPrice;

      const lines: string[] = [];
      if (weekdayNights > 0)
        lines.push(
          `${weekdayNights} noche${weekdayNights > 1 ? "s" : ""} L–S × ${formatPrice(weekdayPrice)} = ${formatPrice(weekdayNights * weekdayPrice)}`
        );
      if (sundayNights > 0)
        lines.push(
          `${sundayNights} noche${sundayNights > 1 ? "s" : ""} domingo × ${formatPrice(sundayPrice)} = ${formatPrice(sundayNights * sundayPrice)}`
        );

      return { serviceLabel: "Hotel Boutique", qty: totalNights, qtyLabel: `${totalNights} noche${totalNights > 1 ? "s" : ""}`, total, lines };
    }

    if (service === "guarderia") {
      const price =
        branch === "poniente"
          ? PRICES.guarderia.poniente
          : PRICES.guarderia.zonaNorte;
      const days = countGuarderiaDays(start, end);
      if (days === 0) return null;
      const total = days * price;
      return {
        serviceLabel: "Guardería Canina",
        qty: days,
        qtyLabel: `${days} día${days > 1 ? "s" : ""}`,
        total,
        lines: [
          `${days} día${days > 1 ? "s" : ""} × ${formatPrice(price)} = ${formatPrice(total)}`,
        ],
      };
    }

    if (service === "adiestramiento") {
      const pkgMap = {
        basico: {
          label: "Básico",
          poniente: PRICES.adiestramiento.poniente,
          zonaNorte: PRICES.adiestramiento.zonaNorte,
          unit: "4 sesiones individuales",
        },
        cachorroPro: {
          label: "Cachorro Pro",
          poniente: PRICES.adiestramiento.paquetes.cachorroPro.poniente,
          zonaNorte: PRICES.adiestramiento.paquetes.cachorroPro.zonaNorte,
          unit: "8 sesiones a domicilio",
        },
        adiosAnsiedad: {
          label: "Adiós Ansiedad",
          poniente: PRICES.adiestramiento.paquetes.adiosAnsiedad.poniente,
          zonaNorte: PRICES.adiestramiento.paquetes.adiosAnsiedad.zonaNorte,
          unit: "10 sesiones a domicilio (protocolo gradual)",
        },
      };
      const pkg = pkgMap[adiestramientoPkg];
      const total = branch === "poniente" ? pkg.poniente : pkg.zonaNorte;
      return {
        serviceLabel: `Adiestramiento — ${pkg.label}`,
        qty: null,
        qtyLabel: pkg.unit,
        total,
        lines: [`Paquete ${pkg.label}: ${pkg.unit} = ${formatPrice(total)}`],
      };
    }

    if (service === "paseos") {
      const walkPriceMap = {
        individual: {
          price: PRICES.paseos.individual,
          label: "1 paseo",
          extraPerDog: PRICES.paseos.segundoPerro,
        },
        paquete5: {
          price: PRICES.paseos.paquete5,
          label: "Paquete 5 paseos",
          extraPerDog: PRICES.paseos.segundoPerro * 5,
        },
        paquete10: {
          price: PRICES.paseos.paquete10,
          label: "Paquete 10 paseos",
          extraPerDog: PRICES.paseos.segundoPerro * 10,
        },
        mensual: {
          price: PRICES.paseos.mensual,
          label: "Plan mensual (20 paseos)",
          extraPerDog: PRICES.paseos.segundoPerro * 20,
        },
      };
      const plan = walkPriceMap[walkPlan];
      let total = plan.price;
      const lines: string[] = [
        `${plan.label}: ${formatPrice(plan.price)}`,
      ];

      if (secondDog) {
        total += plan.extraPerDog;
        lines.push(`2do perro: ${formatPrice(plan.extraPerDog)}`);
      }

      if (includeSaturday) {
        if (saturdayPlan === "individual") {
          total += PRICES.paseos.aventuraSabado;
          lines.push(
            `Aventura sábado (1 fecha): ${formatPrice(PRICES.paseos.aventuraSabado)}`
          );
          if (secondDog) {
            total += PRICES.paseos.segundoPerroSabado;
            lines.push(
              `2do perro sábado: ${formatPrice(PRICES.paseos.segundoPerroSabado)}`
            );
          }
        } else {
          total += PRICES.paseos.paquete4Sabados;
          lines.push(
            `Aventuras sábado (4 fechas): ${formatPrice(PRICES.paseos.paquete4Sabados)}`
          );
          if (secondDog) {
            total += PRICES.paseos.segundoPerroSabado * 4;
            lines.push(
              `2do perro 4 sábados: ${formatPrice(PRICES.paseos.segundoPerroSabado * 4)}`
            );
          }
        }
      }

      return {
        serviceLabel: "Paseos Caninos",
        qty: null,
        qtyLabel: plan.label,
        total,
        lines,
      };
    }

    return null;
  }, [
    service,
    branch,
    startDate,
    endDate,
    adiestramientoPkg,
    walkPlan,
    secondDog,
    includeSaturday,
    saturdayPlan,
  ]);

  const branchLabel =
    service === "paseos"
      ? "Zona Norte"
      : branch === "poniente"
      ? "Poniente"
      : "Zona Norte";

  // ============================================================
  // Mensaje WhatsApp
  // ============================================================
  const whatsappMessage = useMemo(() => {
    if (!result || !clientName.trim() || !dogName.trim()) return "";

    const start = startDate ? parseLocalDate(startDate) : null;
    const end = endDate ? parseLocalDate(endDate) : null;

    let dateBlock = "";
    if (service === "hotel" && start && end) {
      dateBlock = `📅 Check-in:  ${formatDateES(start)}\n📅 Check-out: ${formatDateES(end)} (${result.qtyLabel})`;
    } else if (service === "guarderia" && start && end) {
      dateBlock = `📅 Del: ${formatDateES(start)}\n📅 Al:  ${formatDateES(end)} (${result.qtyLabel})`;
    } else if (service === "adiestramiento" && start) {
      dateBlock = `📅 Inicio: ${formatDateES(start)}`;
    } else if (service === "paseos" && start && end) {
      dateBlock = `📅 Del: ${formatDateES(start)}\n📅 Al:  ${formatDateES(end)}`;
    }

    const breakdown = result.lines.map((l) => `   • ${l}`).join("\n");
    const breedPart = breed.trim() ? ` (${breed.trim()})` : "";

    return `🐾 *COTIZACIÓN PAWS CLUB*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Cliente:* ${clientName.trim()}
🐶 *Lomito:* ${dogName.trim()}${breedPart}

🏷️ *Servicio:* ${result.serviceLabel}
📍 *Sucursal:* Paws Club ${branchLabel}

${dateBlock}

💰 *Desglose:*
${breakdown}

━━━━━━━━━━━━━━━━━━━━━━
💵 *TOTAL: ${formatPrice(result.total)} MXN*
━━━━━━━━━━━━━━━━━━━━━━

Para confirmar tu reserva o resolver cualquier duda, escríbenos aquí mismo. ¡Con gusto cuidamos a ${dogName.trim()}! 🐶✨

_Paws Club — Donde tu lomito es familia_`;
  }, [
    result,
    clientName,
    dogName,
    breed,
    startDate,
    endDate,
    service,
    branchLabel,
  ]);

  const copyToClipboard = useCallback(() => {
    if (!whatsappMessage) return;
    navigator.clipboard.writeText(whatsappMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [whatsappMessage]);

  const isReadyToGenerate = result && clientName.trim() && dogName.trim();

  // ============================================================
  // UI
  // ============================================================
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-[#547097] py-10 text-white text-center shadow-md">
        <div className="mx-auto max-w-2xl px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Calculator className="h-8 w-8" />
            <h1 className="text-3xl font-extrabold tracking-tight">
              Cotizador Paws Club
            </h1>
          </div>
          <p className="text-white/80 text-sm">
            Ingresa los datos y genera la cotización lista para WhatsApp
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
        {/* ---- Sección 1: Datos del cliente ---- */}
        <Card title="Datos del cliente y lomito">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nombre del cliente *">
              <input
                type="text"
                placeholder="Ej. María García"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Nombre del perro *">
              <input
                type="text"
                placeholder="Ej. Rocky"
                value={dogName}
                onChange={(e) => setDogName(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Raza (opcional)" className="sm:col-span-2">
              <input
                type="text"
                placeholder="Ej. Golden Retriever"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>
        </Card>

        {/* ---- Sección 2: Servicio ---- */}
        <Card title="Servicio">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { id: "hotel" as const, icon: "🏨", label: "Hotel" },
              { id: "guarderia" as const, icon: "☀️", label: "Guardería" },
              { id: "adiestramiento" as const, icon: "🎓", label: "Adiest." },
              { id: "paseos" as const, icon: "🐾", label: "Paseos" },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setService(s.id);
                  if (s.id === "paseos") setBranch("zona-norte");
                }}
                className={`rounded-xl border-2 py-3 px-2 text-center text-sm font-semibold transition-all ${
                  service === s.id
                    ? "border-[#547097] bg-[#547097]/10 text-[#547097]"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 bg-white"
                }`}
              >
                <span className="block text-xl mb-0.5">{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
        </Card>

        {/* ---- Sección 3: Sucursal (no aplica para paseos) ---- */}
        {service !== "paseos" && (
          <Card title="Sucursal">
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "zona-norte" as const, label: "📍 Zona Norte" },
                { id: "poniente" as const, label: "📍 Poniente" },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBranch(b.id)}
                  className={`rounded-xl border-2 py-3 px-3 text-sm font-semibold transition-all ${
                    branch === b.id
                      ? "border-[#547097] bg-[#547097]/10 text-[#547097]"
                      : "border-gray-200 text-gray-600 hover:border-gray-300 bg-white"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </Card>
        )}

        {service === "paseos" && (
          <div className="rounded-xl bg-orange-50 border border-orange-200 px-4 py-3 text-sm text-orange-700">
            🐾 Los paseos son exclusivos de <strong>Paws Club Zona Norte</strong>.
          </div>
        )}

        {/* ---- Sección 4: Fechas ---- */}
        <Card title={service === "hotel" ? "Fechas de estancia" : service === "adiestramiento" ? "Fecha de inicio" : "Rango de fechas"}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label={service === "hotel" ? "Check-in" : "Fecha inicial"}>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={inputClass}
              />
            </Field>
            {service !== "adiestramiento" && (
              <Field label={service === "hotel" ? "Check-out" : "Fecha final"}>
                <input
                  type="date"
                  value={endDate}
                  min={startDate || undefined}
                  onChange={(e) => setEndDate(e.target.value)}
                  className={inputClass}
                />
              </Field>
            )}
          </div>

          {/* Preview rápido de rango */}
          {startDate && endDate && endDate > startDate && (
            <div className="mt-3 rounded-lg bg-[#547097]/5 border border-[#547097]/20 px-4 py-2 text-xs text-[#547097] font-medium">
              {formatDateShort(parseLocalDate(startDate))} →{" "}
              {formatDateShort(parseLocalDate(endDate))}
              {service === "hotel" && result && (
                <span className="ml-2 text-gray-500">({result.qtyLabel})</span>
              )}
              {service === "guarderia" && result && (
                <span className="ml-2 text-gray-500">({result.qtyLabel} hábiles)</span>
              )}
            </div>
          )}
        </Card>

        {/* ---- Sección 5: Opciones adicionales por servicio ---- */}
        {service === "adiestramiento" && (
          <Card title="Paquete de adiestramiento">
            <div className="space-y-3">
              {[
                {
                  id: "basico" as const,
                  label: "Básico",
                  desc: "4 sesiones individuales",
                  prices: { poniente: PRICES.adiestramiento.poniente, zonaNorte: PRICES.adiestramiento.zonaNorte },
                },
                {
                  id: "cachorroPro" as const,
                  label: "Cachorro Pro",
                  desc: "8 sesiones a domicilio",
                  prices: { poniente: PRICES.adiestramiento.paquetes.cachorroPro.poniente, zonaNorte: PRICES.adiestramiento.paquetes.cachorroPro.zonaNorte },
                },
                {
                  id: "adiosAnsiedad" as const,
                  label: "Adiós Ansiedad",
                  desc: "10 sesiones a domicilio (protocolo gradual)",
                  prices: { poniente: PRICES.adiestramiento.paquetes.adiosAnsiedad.poniente, zonaNorte: PRICES.adiestramiento.paquetes.adiosAnsiedad.zonaNorte },
                },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setAdiestramientoPkg(p.id)}
                  className={`w-full flex items-center justify-between rounded-xl border-2 px-4 py-3 text-left transition-all ${
                    adiestramientoPkg === p.id
                      ? "border-[#547097] bg-[#547097]/10"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div>
                    <span className="block text-sm font-bold text-gray-900">
                      {p.label}
                    </span>
                    <span className="text-xs text-gray-500">{p.desc}</span>
                  </div>
                  <span className="text-sm font-bold text-[#547097]">
                    {formatPrice(branch === "poniente" ? p.prices.poniente : p.prices.zonaNorte)}
                  </span>
                </button>
              ))}
            </div>
          </Card>
        )}

        {service === "paseos" && (
          <Card title="Plan de paseos">
            <div className="space-y-4">
              <Field label="Plan diario">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "individual" as const, label: "Individual", price: PRICES.paseos.individual },
                    { id: "paquete5" as const, label: "5 paseos", price: PRICES.paseos.paquete5 },
                    { id: "paquete10" as const, label: "10 paseos", price: PRICES.paseos.paquete10 },
                    { id: "mensual" as const, label: "Mensual (20)", price: PRICES.paseos.mensual },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setWalkPlan(p.id)}
                      className={`rounded-xl border-2 py-3 px-3 text-center transition-all ${
                        walkPlan === p.id
                          ? "border-[#547097] bg-[#547097]/10"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <span className="block text-sm font-semibold text-gray-900">
                        {p.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatPrice(p.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </Field>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={secondDog}
                  onChange={(e) => setSecondDog(e.target.checked)}
                  className="h-4 w-4 rounded accent-[#547097]"
                />
                <span className="text-sm text-gray-700">
                  2do perro (+{formatPrice(PRICES.paseos.segundoPerro)}/paseo)
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeSaturday}
                  onChange={(e) => setIncludeSaturday(e.target.checked)}
                  className="h-4 w-4 rounded accent-[#547097]"
                />
                <span className="text-sm text-gray-700">
                  Agregar Aventuras de Sábado
                </span>
              </label>

              {includeSaturday && (
                <div className="ml-7 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSaturdayPlan("individual")}
                    className={`rounded-xl border-2 py-3 px-3 text-center transition-all ${
                      saturdayPlan === "individual"
                        ? "border-orange-400 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
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
                    className={`rounded-xl border-2 py-3 px-3 text-center transition-all ${
                      saturdayPlan === "paquete4"
                        ? "border-orange-400 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
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
              )}
            </div>
          </Card>
        )}

        {/* ---- Resultado ---- */}
        {result && (
          <div className="rounded-2xl border-2 border-[#547097] bg-white shadow-lg overflow-hidden">
            {/* Total */}
            <div className="bg-[#547097] px-6 py-5 text-white text-center">
              <p className="text-sm font-medium text-white/80 mb-1">
                {result.serviceLabel} · Paws Club {branchLabel}
              </p>
              <p className="text-5xl font-extrabold tracking-tight">
                {formatPrice(result.total)}
              </p>
              <p className="text-sm text-white/70 mt-1">MXN</p>
            </div>

            {/* Desglose */}
            <div className="px-6 py-4 border-b border-gray-100">
              <p className="text-xs font-bold uppercase text-gray-400 mb-2">
                Desglose
              </p>
              <ul className="space-y-1">
                {result.lines.map((l, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#547097] mt-0.5">•</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mensaje generado */}
            {isReadyToGenerate && whatsappMessage && (
              <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    Mensaje listo para WhatsApp
                  </p>
                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                      copied
                        ? "bg-green-100 text-green-700"
                        : "bg-[#547097]/10 text-[#547097] hover:bg-[#547097]/20"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" /> Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Copiar
                      </>
                    )}
                  </button>
                </div>
                <pre className="whitespace-pre-wrap text-xs text-gray-600 bg-gray-50 rounded-xl p-4 font-sans leading-relaxed border border-gray-100">
                  {whatsappMessage}
                </pre>

                <a
                  href={SITE.whatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Abrir en WhatsApp
                </a>
              </div>
            )}

            {!clientName.trim() || !dogName.trim() ? (
              <div className="px-6 py-3 bg-amber-50 border-t border-amber-100 text-xs text-amber-700 text-center">
                Completa el nombre del cliente y del perro para generar el mensaje
              </div>
            ) : null}
          </div>
        )}

        {!result && startDate && endDate && endDate <= startDate && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 text-center">
            La fecha final debe ser posterior a la fecha inicial.
          </div>
        )}

        <p className="text-center text-xs text-gray-400 pb-4">
          * Precios de referencia sujetos a disponibilidad. Para paquetes personalizados, consultar directamente.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// Helpers de UI
// ============================================================
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
        <h2 className="text-sm font-bold text-gray-700">{title}</h2>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#547097] focus:outline-none focus:ring-2 focus:ring-[#547097]/20 transition-colors";
