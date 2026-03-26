"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle,
  Send,
  Dog,
} from "lucide-react";
import type { FormEvent } from "react";

const SERVICIOS = [
  { value: "hotel", label: "🏨 Hotel Boutique" },
  { value: "guarderia", label: "☀️ Guardería Canina" },
  { value: "adiestramiento", label: "🎓 Adiestramiento" },
  { value: "paseos", label: "🐾 Paseos Caninos (Zona Norte)" },
];

const TAMANOS = [
  { value: "mini", label: "Mini (< 5 kg)" },
  { value: "pequeño", label: "Pequeño (5-10 kg)" },
  { value: "mediano", label: "Mediano (10-25 kg)" },
  { value: "grande", label: "Grande (25-40 kg)" },
  { value: "gigante", label: "Gigante (> 40 kg)" },
];

export default function PreRegistroPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const nombre = data.get("nombre") as string;
    const telefono = data.get("telefono") as string;
    const nombrePerro = data.get("nombre-perro") as string;
    const raza = data.get("raza") as string;
    const tamano = data.get("tamano") as string;
    const edad = data.get("edad") as string;
    const servicios = data.getAll("servicios") as string[];
    const sucursal = data.get("sucursal") as string;
    const vacunas = data.get("vacunas") as string;
    const notas = data.get("notas") as string;

    const text = `🐶 *PRE-REGISTRO PAWS CLUB*

*Dueño:* ${nombre}
*Teléfono:* ${telefono}

*Perro:* ${nombrePerro}
*Raza:* ${raza}
*Tamaño:* ${tamano}
*Edad:* ${edad}
*Vacunas al día:* ${vacunas}

*Servicios de interés:* ${servicios.join(", ")}
*Sucursal:* ${sucursal}

*Notas:* ${notas || "Ninguna"}`;

    window.open(SITE.whatsappUrl(text), "_blank");
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Pre-Registro</h1>
          <p className="mt-4 text-lg text-white/90">
            Regístra a tu lomito antes de su primera visita. Así agilizamos el
            proceso cuando llegues.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4">
          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
                ¡Pre-registro enviado!
              </h2>
              <p className="mt-3 text-gray-600">
                Se abrió WhatsApp con tu información. Te contactaremos para
                agendar la prueba de socialización gratuita.
              </p>
              <a
                href={SITE.whatsappUrl(
                  "¡Hola! Acabo de enviar mi pre-registro. ¿Me confirman si les llegó bien? 🙌"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white"
              >
                Abrir WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ) : (
            <>
              <div className="mb-8 rounded-2xl bg-brand/5 p-6">
                <div className="flex items-start gap-3">
                  <Dog className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      ¿Qué pasa después del pre-registro?
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Te contactamos por WhatsApp para agendar una visita y la
                      prueba de socialización gratuita. Trae la cartilla de
                      vacunación de tu perro.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Owner Section */}
                <fieldset>
                  <legend className="text-lg font-extrabold text-gray-900">
                    Datos del Dueño
                  </legend>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Pet Section */}
                <fieldset>
                  <legend className="text-lg font-extrabold text-gray-900">
                    Datos del Perro
                  </legend>
                  <div className="mt-4 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="nombre-perro"
                          className="block text-sm font-semibold text-gray-700"
                        >
                          Nombre del perro *
                        </label>
                        <input
                          type="text"
                          id="nombre-perro"
                          name="nombre-perro"
                          required
                          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="raza"
                          className="block text-sm font-semibold text-gray-700"
                        >
                          Raza *
                        </label>
                        <input
                          type="text"
                          id="raza"
                          name="raza"
                          required
                          placeholder="Ej: Golden Retriever, Mestizo..."
                          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="tamano"
                          className="block text-sm font-semibold text-gray-700"
                        >
                          Tamaño *
                        </label>
                        <select
                          id="tamano"
                          name="tamano"
                          required
                          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                        >
                          <option value="">Selecciona...</option>
                          {TAMANOS.map((t) => (
                            <option key={t.value} value={t.label}>
                              {t.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="edad"
                          className="block text-sm font-semibold text-gray-700"
                        >
                          Edad *
                        </label>
                        <input
                          type="text"
                          id="edad"
                          name="edad"
                          required
                          placeholder="Ej: 2 años, 6 meses..."
                          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">
                        ¿Vacunas al día? *
                      </label>
                      <div className="mt-2 flex gap-4">
                        {["Sí", "No", "No estoy seguro"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="vacunas"
                              value={opt}
                              required
                              className="h-4 w-4 text-brand focus:ring-brand"
                            />
                            <span className="text-sm text-gray-600">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </fieldset>

                {/* Services */}
                <fieldset>
                  <legend className="text-lg font-extrabold text-gray-900">
                    Servicios de Interés
                  </legend>
                  <div className="mt-4 space-y-3">
                    {SERVICIOS.map((s) => (
                      <label
                        key={s.value}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition-all hover:border-brand/50 hover:bg-brand/5"
                      >
                        <input
                          type="checkbox"
                          name="servicios"
                          value={s.label}
                          className="h-4 w-4 rounded text-brand focus:ring-brand"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {s.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Branch */}
                <div>
                  <label
                    htmlFor="sucursal"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Sucursal de preferencia *
                  </label>
                  <select
                    id="sucursal"
                    name="sucursal"
                    required
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  >
                    <option value="">Selecciona...</option>
                    <option value="Poniente" disabled>
                      📍 Poniente (Cupo Lleno)
                    </option>
                    <option value="Zona Norte">
                      📍 Zona Norte (Lindavista, Sta. María)
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notas"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Notas adicionales
                  </label>
                  <textarea
                    id="notas"
                    name="notas"
                    rows={3}
                    placeholder="Alergias, medicamentos, comportamiento especial..."
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-hover"
                >
                  <Send className="h-5 w-5" />
                  Enviar Pre-Registro por WhatsApp
                </button>

                <p className="text-center text-xs text-gray-400">
                  Tu información se envía directamente por WhatsApp. No
                  almacenamos datos en ningún servidor.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
