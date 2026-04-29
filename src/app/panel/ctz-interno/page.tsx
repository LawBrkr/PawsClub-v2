"use client";

/**
 * Cotizador Interno Train & Go Paws Club
 *
 * Sirve el cotizador HTML autocontenido (con embedded logo, html2pdf.js, etc.)
 * desde /public/herramientas/cotizador-train-and-go.html mediante un iframe a
 * pantalla completa.
 *
 * Características del cotizador:
 *  - Selector manual de proveedor (Noyola, IC Promo, IC Regular)
 *  - Tabla comparativa con margen por proveedor (sugerencia, no decisión)
 *  - Bloqueo automático de razas PPP
 *  - Generador de cotización corta (WhatsApp), documento completo, requisitos y FAQ
 *  - Exportación a PDF y PNG con voz de marca Paws Club
 *  - Información de pagos: transferencia, efectivo, tarjeta hasta 6 MSI
 *
 * URL: https://pawsclub.com.mx/panel/ctz-interno
 * Status: noindex, nofollow (configurado en layout.tsx)
 *
 * Versión legacy del cotizador anterior: page-legacy.tsx.bak
 */

export default function CotizadorInternoTrainAndGoPage() {
  return (
    <div className="fixed inset-0 bg-white">
      <iframe
        src="/herramientas/cotizador-train-and-go.html"
        className="w-full h-full border-0"
        title="Cotizador Train & Go Paws Club"
        allow="clipboard-write"
      />
    </div>
  );
}
