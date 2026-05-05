"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

type Servicio = "hotel" | "guarderia" | "adiestramiento";
type Sucursal = "poniente" | "zona-norte" | "indistinto";

interface LeadData {
  nombre: string;
  email: string;
  colonia: string;
  servicio: Servicio | "";
  sucursal: Sucursal;
}

interface WaitlistFormProps {
  // Si la página ya tiene contexto (ej. /servicios/hotel) preselecciona el
  // servicio y oculta el selector. Si no, muestra todos los servicios.
  defaultServicio?: Servicio;
  defaultSucursal?: Sucursal;
  // Texto del título del formulario (default: "Únete a la lista de espera").
  title?: string;
  subtitle?: string;
}

const SERVICIO_LABELS: Record<Servicio, string> = {
  hotel: "🏨 Hotel Boutique",
  guarderia: "☀️ Guardería Canina",
  adiestramiento: "🎓 Adiestramiento Canino",
};

const SUCURSAL_LABELS: Record<Sucursal, string> = {
  poniente: "Poniente (Polanco · Lomas · Tecamachalco)",
  "zona-norte": "Zona Norte (Sta. María · Lindavista · Tlatelolco)",
  indistinto: "Cualquier sucursal — la primera con cupo",
};

const WHATSAPP_NUMBER = "5215644085356";

function buildWhatsAppUrl(data: LeadData): string {
  const servicioLabel = data.servicio
    ? SERVICIO_LABELS[data.servicio]
    : "(no seleccionado)";
  const sucursalLabel = SUCURSAL_LABELS[data.sucursal];
  const msg = `¡Hola! 👋 Quiero unirme a la lista de espera de Paws Club.\n\nNombre: ${data.nombre}\nCorreo: ${data.email}\nColonia: ${data.colonia}\nServicio: ${servicioLabel}\nSucursal preferida: ${sucursalLabel}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function WaitlistForm({
  defaultServicio,
  defaultSucursal = "indistinto",
  title = "Únete a la lista de espera",
  subtitle = "Te avisamos en cuanto liberemos lugar para tu lomito.",
}: WaitlistFormProps) {
  const [form, setForm] = useState<LeadData>({
    nombre: "",
    email: "",
    colonia: "",
    servicio: defaultServicio ?? "",
    sucursal: defaultSucursal,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist/poniente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error("[Waitlist] error", res.status, data);
        setStatus("error");
        return;
      }

      if (typeof window !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dl = (window as any).dataLayer;
        if (Array.isArray(dl)) {
          dl.push({
            event: "lead_submit",
            form: "waitlist",
            servicio: form.servicio,
            sucursal: form.sucursal,
          });
        }
      }

      setStatus("success");
    } catch (err) {
      console.error("[Waitlist] network error", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          ¡Listo! Estás en la lista.
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Te contactaremos en cuanto se libere un lugar.
        </p>
        <a
          href={buildWhatsAppUrl(form)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl"
        >
          Confirmar vía WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
      id="waitlist-form"
    >
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="lead-nombre"
            className="mb-1 block text-sm font-semibold text-gray-700"
          >
            Nombre *
          </label>
          <input
            id="lead-nombre"
            name="nombre"
            type="text"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>

        <div>
          <label
            htmlFor="lead-email"
            className="mb-1 block text-sm font-semibold text-gray-700"
          >
            Correo electrónico *
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>

        <div>
          <label
            htmlFor="lead-colonia"
            className="mb-1 block text-sm font-semibold text-gray-700"
          >
            Colonia *
          </label>
          <input
            id="lead-colonia"
            name="colonia"
            type="text"
            required
            value={form.colonia}
            onChange={handleChange}
            placeholder="Ej. Polanco, Lindavista, Sta. María…"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {!defaultServicio && (
          <div>
            <label
              htmlFor="lead-servicio"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              Servicio de interés *
            </label>
            <select
              id="lead-servicio"
              name="servicio"
              required
              value={form.servicio}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              <option value="hotel">{SERVICIO_LABELS.hotel}</option>
              <option value="guarderia">{SERVICIO_LABELS.guarderia}</option>
              <option value="adiestramiento">
                {SERVICIO_LABELS.adiestramiento}
              </option>
            </select>
          </div>
        )}

        <div>
          <label
            htmlFor="lead-sucursal"
            className="mb-1 block text-sm font-semibold text-gray-700"
          >
            Sucursal preferida *
          </label>
          <select
            id="lead-sucursal"
            name="sucursal"
            required
            value={form.sucursal}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            <option value="indistinto">{SUCURSAL_LABELS.indistinto}</option>
            <option value="poniente">{SUCURSAL_LABELS.poniente}</option>
            <option value="zona-norte">{SUCURSAL_LABELS["zona-norte"]}</option>
          </select>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-600">
          Ocurrió un error. Por favor intenta de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            Apuntarme a la lista
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-gray-400">
        No compartimos tu información con terceros.
      </p>
    </form>
  );
}
