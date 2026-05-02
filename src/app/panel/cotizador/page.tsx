"use client";

/**
 * Cotizador Único Paws Club
 *
 * Cotizador unificado que cubre los 4 servicios: Adiestramiento, Hotel,
 * Guardería y Paseos. Reemplaza a los dos cotizadores anteriores
 * (`/panel/ctz-train-go` y `/panel/ctz-interno`).
 *
 * Servido como iframe a pantalla completa desde el HTML autocontenido en
 * /public/herramientas/cotizador.html. Mantenemos formato HTML porque:
 *  - Es portable (se puede abrir offline o desde cualquier dispositivo)
 *  - Tiene la lógica de PDF/PNG export con jsPDF nativo
 *  - Cambios rápidos sin recompilar Next.js
 *
 * Características:
 *  - 4 pestañas de servicio en la parte superior
 *  - Adiestramiento: tabla comparativa de proveedores, margen, PDF/PNG export
 *  - Hotel: cálculo de noches con domingo diferenciado
 *  - Guardería: cálculo de días hábiles excluyendo domingos
 *  - Paseos: planes (individual / 5 / 10 / mensual) + 2do perro + sábado
 *  - Genera 4 textos para cliente: WhatsApp, Documento, Requisitos, FAQ
 *  - Bloqueo automático de razas PPP y casos conductuales serios
 *
 * URL: https://pawsclub.com.mx/panel/cotizador
 * Status: noindex, nofollow (configurado en layout.tsx)
 */

export default function CotizadorPage() {
  return (
    <div className="fixed inset-0 bg-white">
      <iframe
        src="/herramientas/cotizador.html"
        className="w-full h-full border-0"
        title="Cotizador Paws Club"
        allow="clipboard-write"
      />
    </div>
  );
}
