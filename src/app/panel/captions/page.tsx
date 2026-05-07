"use client";

/**
 * Captions Instagram · Paws Club (interno)
 *
 * Herramienta para generar captions de Instagram a partir de un formulario:
 * el equipo llena nombre del peludo, dueño, servicio, sucursal, etc., y
 * la app rellena los placeholders de 30+ captions pre-escritos. Cada
 * caption tiene botón de copiar al portapapeles. Compone también el
 * pack de hashtags adecuado (base + servicio + sucursal).
 *
 * Misma arquitectura que /panel/cotizador y /panel/marketing: HTML
 * autocontenido en /public/herramientas/captions.html servido vía iframe.
 * Funciona en cualquier navegador (laptop, iPad, móvil).
 *
 * URL: https://pawsclub.com.mx/panel/captions
 * Status: noindex, nofollow (configurado en layout.tsx)
 */

export default function CaptionsPage() {
  return (
    <div className="fixed inset-0 bg-white">
      <iframe
        src="/herramientas/captions.html"
        className="w-full h-full border-0"
        title="Captions Instagram Paws Club"
        allow="clipboard-write"
      />
    </div>
  );
}
