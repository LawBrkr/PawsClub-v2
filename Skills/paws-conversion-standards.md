---
name: paws-conversion-standards
description: >
  Estándares de conversión y SEO para el sitio Paws Club. Define las reglas
  obligatorias para métricas de confianza, generación de leads por WhatsApp y
  calidad E-E-A-T en el blog. Debe consultarse antes de modificar cualquier
  página de sucursal, landing page o artículo del blog.
---

# Paws Club — Estándares de Conversión & SEO

## 1. Métricas de Confianza (Trust Metrics)

Siempre que se muestren indicadores de confianza en el sitio (hero, tarjetas,
badges, secciones de prueba social), se deben usar **exactamente** los valores
siguientes. No inventar ni aproximar cifras.

| Badge | Valor canónico |
|---|---|
| Calificación Google | **4.9★ en Google** |
| Exclusividad de cupo | **Cupo exclusivo** |

### Reglas de implementación
- El badge de Google Rating debe mostrarse como: `4.9★ en Google` (sin espacio
  antes del ★).
- El badge de exclusividad debe leerse: `Cupo exclusivo` (primera letra en
  mayúscula, sin punto final).
- Ambos badges deben aparecer en hero sections, formularios de lista de espera
  y secciones de prueba social donde aplique.
- **No sustituir** estos textos por variaciones como "casi lleno", "pocas
  plazas", o ratings distintos.

---

## 2. Leads por WhatsApp

El número oficial de Paws Club para leads de WhatsApp es:

```
+5215644085356
```

### Formato de URL para sucursales nuevas

Todas las sucursales nuevas (en etapa de apertura o lista de espera) deben
generar su enlace de WhatsApp usando `wa.me` con el mensaje codificado mediante
`encodeURIComponent`:

```tsx
// Ejemplo canónico — sucursal nueva (apertura / lista de espera)
const phoneNumber = "5215644085356"; // sin el '+'
const message = encodeURIComponent(
  "Hola Paws Club, quiero registrarme en la lista de espera de [Nombre Sucursal] 🐾"
);
const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
```

### Reglas de implementación
- **Siempre** usar `encodeURIComponent` para el parámetro `text`; nunca concatenar
  el texto crudo en la URL.
- El número **no** lleva `+` en el path de `wa.me` (se omite el símbolo).
- Para sucursales existentes con número propio, puede usarse su número directo,
  pero el formato `wa.me` + `encodeURIComponent` sigue siendo obligatorio.
- Los CTAs de WhatsApp deben abrir en nueva pestaña: `target="_blank"` con
  `rel="noopener noreferrer"`.

---

## 3. E-E-A-T — Autoría en el Blog

Todos los artículos del blog deben declarar explícitamente un autor para
cumplir con los lineamientos de Experience, Expertise, Authoritativeness &
Trustworthiness (E-E-A-T) de Google.

### Autor canónico

```
Equipo Paws Club — Especialistas en bienestar canino
```

### Implementación en metadatos del artículo

```ts
// src/app/blog/[slug]/page.tsx — generateMetadata
export async function generateMetadata({ params }) {
  return {
    // ... resto de metadatos
    authors: [{ name: "Equipo Paws Club — Especialistas en bienestar canino" }],
    openGraph: {
      // ...
      authors: ["Equipo Paws Club — Especialistas en bienestar canino"],
    },
  };
}
```

### Implementación en el componente de artículo (UI visible)

El nombre del autor debe ser visible en la página para el lector y para los
rastreadores de búsqueda. Incluir la etiqueta semántica `rel="author"`:

```tsx
<address className="author-byline" rel="author">
  <span>Por </span>
  <strong>Equipo Paws Club — Especialistas en bienestar canino</strong>
</address>
```

### Schema JSON-LD para artículos

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "author": {
    "@type": "Organization",
    "name": "Equipo Paws Club — Especialistas en bienestar canino",
    "url": "https://pawsclub.mx"
  }
}
```

### Reglas de implementación
- **No** reducir el autor a solo "Paws Club" o "Admin".
- El texto canónico debe respetarse **íntegro**, incluyendo el guión y el
  subtítulo "Especialistas en bienestar canino".
- Aplicar tanto en los metadatos (`<head>`) como en el cuerpo visible del
  artículo y en el bloque JSON-LD.

---

## Checklist rápido antes de publicar

- [ ] Badge de rating usa exactamente `4.9★ en Google`
- [ ] Badge de exclusividad usa exactamente `Cupo exclusivo`
- [ ] Links de WhatsApp usan `wa.me/5215644085356` + `encodeURIComponent`
- [ ] CTA de WhatsApp tiene `target="_blank" rel="noopener noreferrer"`
- [ ] Autor del artículo es `Equipo Paws Club — Especialistas en bienestar canino`
- [ ] Autor aparece en metadatos Next.js, en el HTML visible y en el JSON-LD
