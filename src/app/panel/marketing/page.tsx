"use client";

/**
 * Marketing de Fotos · Paws Club (interno)
 *
 * Herramienta para brandear fotos de clientes para Instagram/WhatsApp.
 * 3 plantillas (watermark, cliente feliz, testimonio) × 3 formatos
 * (cuadrado, retrato, story). Procesa todo en el navegador con Canvas API
 * — la foto del cliente nunca sale del dispositivo.
 *
 * Servida como iframe a pantalla completa desde el HTML autocontenido en
 * /public/herramientas/marketing.html, mismo patrón que /panel/cotizador.
 *
 * URL: https://pawsclub.com.mx/panel/marketing
 * Status: noindex, nofollow (configurado en layout.tsx)
 */

export default function MarketingPage() {
  return (
    <div className="fixed inset-0 bg-white">
      <iframe
        src="/herramientas/marketing.html"
        className="w-full h-full border-0"
        title="Marketing de Fotos Paws Club"
        allow="clipboard-write"
      />
    </div>
  );
}
