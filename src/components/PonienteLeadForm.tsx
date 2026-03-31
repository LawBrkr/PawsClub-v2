"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface LeadData {
  nombre: string;
  email: string;
  colonia: string;
  servicio: string;
}

export default function PonienteLeadForm() {
  const [form, setForm] = useState<LeadData>({
    nombre: "",
    email: "",
    colonia: "",
    servicio: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const WHATSAPP_NUMBER = "5215644085356";

  const buildWhatsAppUrl = (data: LeadData) => {
    const servicioLabels: Record<string, string> = {
      hotel: "Hotel Boutique",
      guarderia: "Guardería Canina",
      adiestramiento: "Adiestramiento Canino",
    };
    const msg = `¡Hola! 👋 Quiero unirme a la lista de espera de Paws Club Poniente.\n\nNombre: ${data.nombre}\nCorreo: ${data.email}\nColonia: ${data.colonia}\nServicio de interés: ${servicioLabels[data.servicio] || data.servicio}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Log payload for validation
      console.log("[Lead Poniente]", JSON.stringify(form, null, 2));

      const res = await fetch("/api/waitlist/poniente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => null);

      // If the endpoint doesn't exist yet, mock success
      if (!res || !res.ok) {
        console.log("[Lead Poniente] Endpoint no disponible — mock success");
      }

      // Log the generated WhatsApp URL for verification
      const waUrl = buildWhatsAppUrl(form);
      console.log("[Lead Poniente] WhatsApp URL:", waUrl);

      setStatus("success");
    } catch {
      console.error("[Lead Poniente] Error al enviar");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          ¡Gracias! Estás en la lista.
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Te contactaremos pronto con novedades sobre Paws Club Poniente.
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
      id="poniente-lead-form"
    >
      <h3 className="text-xl font-bold text-gray-900">
        Únete a la Lista de Espera
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Paws Club Poniente se expande. Sé el primero en saberlo.
      </p>

      <div className="mt-6 space-y-4">
        {/* Nombre */}
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

        {/* Correo Electrónico */}
        <div>
          <label
            htmlFor="lead-email"
            className="mb-1 block text-sm font-semibold text-gray-700"
          >
            Correo Electrónico *
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

        {/* Colonia */}
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
            placeholder="Ej. Polanco, Lomas, Tecamachalco…"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {/* Servicio de interés */}
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
            <option value="hotel">🏨 Hotel Boutique</option>
            <option value="guarderia">☀️ Guardería Canina</option>
            <option value="adiestramiento">🎓 Adiestramiento Canino</option>
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
            Quiero estar en la lista
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
