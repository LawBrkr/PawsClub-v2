"use client";

import { useState } from "react";
import GoogleMap from "@/components/GoogleMap";
import { SITE, BRANCHES } from "@/lib/constants";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
} from "lucide-react";
import type { FormEvent } from "react";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = data.get("nombre") as string;
    const servicio = data.get("servicio") as string;
    const mensaje = data.get("mensaje") as string;
    const sucursal = data.get("sucursal") as string;

    const text = `Hola Paws Club! 🐶\n\nSoy ${nombre}.\nMe interesa: ${servicio}\nSucursal: ${sucursal}\n\n${mensaje}`;

    window.open(SITE.whatsappUrl(text), "_blank");
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Contacto</h1>
          <p className="mt-4 text-lg text-white/90">
            ¿Tienes dudas? Escríbenos por WhatsApp o usa el formulario. Te
            respondemos en minutos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Envíanos un mensaje
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                El formulario abrirá WhatsApp con tu mensaje listo para enviar.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    ¡Mensaje listo!
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Se abrió WhatsApp con tu mensaje. Si no se abrió, haz clic
                    aquí:
                  </p>
                  <a
                    href={SITE.whatsappUrl("Hola Paws Club!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Tu nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="Ej: María García"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="servicio"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      ¿Qué servicio te interesa? *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    >
                      <option value="">Selecciona...</option>
                      <option value="Hotel Boutique">🏨 Hotel Boutique</option>
                      <option value="Guardería Canina">☀️ Guardería Canina</option>
                      <option value="Adiestramiento">🎓 Adiestramiento</option>
                      <option value="Paseos Caninos">🐾 Paseos Caninos (Zona Norte)</option>
                      <option value="Información general">ℹ️ Información general</option>
                    </select>
                  </div>
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
                      <option value="Poniente">📍 Poniente (Polanco, Lomas)</option>
                      <option value="Zona Norte">📍 Zona Norte (Lindavista, Sta. María)</option>
                      <option value="No estoy seguro">No estoy seguro</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Tu mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="Cuéntanos sobre tu perro, fechas, o cualquier duda..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-hover sm:w-auto"
                  >
                    <Send className="h-5 w-5" />
                    Enviar por WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Phone className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      WhatsApp / Teléfono
                    </h3>
                    <a
                      href={SITE.whatsappUrl("Hola Paws Club!")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand hover:underline"
                    >
                      {SITE.phone}
                    </a>
                    <p className="text-xs text-gray-400">
                      Respuesta en menos de 30 minutos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Mail className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm font-semibold text-brand hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <Clock className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Horario de Atención
                    </h3>
                    <p className="text-sm text-gray-600">
                      Lunes a Sábado: 7:00 AM - 8:00 PM
                    </p>
                    <p className="text-xs text-gray-400">
                      Domingo: Solo hotel con reserva previa
                    </p>
                  </div>
                </div>
              </div>

              {/* Maps */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-900">
                  Nuestras Ubicaciones
                </h3>
                {(["poniente", "zona-norte"] as const).map((id) => {
                  const b = BRANCHES[id];
                  return (
                    <div key={id} className="overflow-hidden rounded-xl border border-gray-200">
                      <div className="bg-gray-50 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-brand" />
                          <span className="text-sm font-bold text-gray-900">
                            {b.name}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          {b.coverage.slice(0, 4).join(" · ")}
                        </p>
                      </div>
                      <div className="aspect-[16/9]">
                        <GoogleMap
                          lat={b.coordinates.lat}
                          lng={b.coordinates.lng}
                          title={b.name}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
