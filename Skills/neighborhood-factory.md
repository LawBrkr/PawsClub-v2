---
name: neighborhood-factory
description: >
  Estándares obligatorios para generar páginas dinámicas por colonia
  (neighborhood landing pages). Define las reglas de inyección de nombre de
  colonia en H1 e imágenes, el botón sticky de WhatsApp con contexto de
  colonia, y el mapa centrado en la dirección física con copy de cercanía.
  Debe consultarse antes de crear o modificar cualquier página bajo
  `/colonia/[slug]` o rutas equivalentes por barrio.
triggers: ["colonia", "neighborhood", "barrio", "zona", "landing por colonia", "página dinámica"]
---

# Paws Club — Neighborhood Factory

> **Propósito**: Generar páginas dinámicas de alto rendimiento SEO para cada
> colonia de la zona de cobertura (`BRANCHES[*].coverage`), maximizando la
> relevancia local y la conversión a WhatsApp sin duplicar código.

---

## 1. Template Identity — H1 e Imágenes

Cada página dinámica debe sentirse exclusiva para la colonia del visitante.

### 1.1 H1 dinámico

El `<h1>` **siempre** debe contener el nombre de la colonia extraído del
parámetro de ruta (slug → display name). Formato canónico:

```tsx
// Ejemplo: /colonia/santa-maria-la-ribera
<h1>
  Servicios Caninos en{" "}
  <span className="text-brand">{coloniaName}</span>
</h1>
```

**Reglas:**
- El nombre de la colonia se obtiene deserializando el `slug` de la URL
  (`santa-maria-la-ribera` → `Santa María la Ribera`).
- Mantener un **mapa canónico** `slug → displayName` en `src/lib/neighborhoods.ts`
  para evitar errores de capitalización (ej. "la" en minúscula).
- No usar el slug crudo como texto visible; siempre pasar por el mapa.
- Si la colonia no existe en el mapa, devolver `notFound()` de Next.js.

### 1.2 Atributo `alt` en imágenes

Toda imagen (`<Image>`) dentro de una página de colonia **debe** incluir el
nombre de la colonia en el atributo `alt`. Patrón:

```tsx
<Image
  src="/img/Pome_feliz_en_parque.webp"
  alt={`Hotel canino cerca de ${coloniaName} — Paws Club`}
  fill
  className="object-cover"
  priority
/>
```

**Reglas:**
- No usar textos genéricos como `"imagen de perro"`.
- Siempre anteponer el tipo de servicio relevante al nombre de la colonia.
- La estructura válida es: `{servicio} cerca de {coloniaName} — Paws Club`.

### 1.3 Meta tags dinámicos

`generateMetadata` debe interpolar la colonia en `title` y `description`:

```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const colonia = getColoniaBySlug(params.slug);
  if (!colonia) return {};

  return {
    title: `Servicios Caninos en ${colonia.displayName} — Hotel, Guardería y Más | Paws Club`,
    description: `Hotel canino, guardería sin jaulas y adiestramiento en ${colonia.displayName}, CDMX. 4.9★ en Google. Cupo exclusivo. ¡Agenda hoy!`,
    openGraph: {
      title: `Paws Club en ${colonia.displayName}`,
      description: `Servicios caninos premium cerca de ${colonia.displayName}. Sin jaulas, reportes diarios.`,
      images: ["/img/Pome_feliz_en_parque.webp"],
    },
  };
}
```

---

## 2. Conversion Bridge — Botón WhatsApp Sticky

El CTA principal de conversión es el botón de WhatsApp. Debe ser **siempre
visible** en dispositivos móviles.

### 2.1 Posición sticky

```tsx
{/* WhatsApp Sticky CTA — SOLO visible en pantallas < md */}
<div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 safe-area-pb">
  <a
    href={waUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 py-4 text-lg font-bold text-white shadow-xl transition-all active:scale-95"
  >
    <Phone className="h-5 w-5" />
    Contactar desde {coloniaName}
  </a>
</div>
```

**Reglas:**
- El botón sticky **solo** aparece en móvil (`md:hidden`).
- En desktop se confía en los CTAs inline dentro de las secciones.
- Incluir `safe-area-pb` (padding-bottom seguro) para iPhones con barra Home.
- El CSS auxiliar requerido:

```css
/* globals.css */
.safe-area-pb {
  padding-bottom: env(safe-area-inset-bottom, 0.75rem);
}
```

### 2.2 Parámetro `text` con colonia

El enlace de WhatsApp **siempre** debe llevar la colonia en el mensaje para
que el equipo de ventas identifique la procedencia del lead:

```tsx
const phoneNumber = "5215644085356";
const message = encodeURIComponent(
  `¡Hola! 🐾 Vivo en ${coloniaName} y me interesan sus servicios caninos. ¿Me podrían dar informes?`
);
const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
```

**Reglas:**
- **Siempre** usar `encodeURIComponent`; nunca concatenar texto crudo.
- El número **no** lleva `+` en el path de `wa.me`.
- Abrir en nueva pestaña: `target="_blank"` con `rel="noopener noreferrer"`.
- El nombre de la colonia debe ser el **displayName** del mapa canónico, no
  el slug.

---

## 3. Trust Signal — Mapa con Copy de Cercanía

### 3.1 Coordenadas fijas del mapa

El `<GoogleMap>` embebido **siempre** se centra en la dirección física de la
sucursal Zona Norte (la sucursal principal con disponibilidad):

```
Dirección: Zoltan Kodaly 126, San Simón Tolnáhuac, 06920 CDMX
Coordenadas: lat 19.4610556, lng -99.1422500
```

```tsx
<GoogleMap
  lat={19.4610556}
  lng={-99.1422500}
  title={`Paws Club — cerca de ${coloniaName}`}
/>
```

**Regla:** No mover las coordenadas del mapa según la colonia. El negocio
opera desde una sola ubicación física; las páginas de colonia son de marketing
geolocalizado, no de sucursales distintas.

### 3.2 Texto descriptivo de cercanía

Debajo o junto al mapa, incluir un párrafo que enfatice la distancia o
cercanía entre la sede y la colonia visitada:

```tsx
<p className="mt-4 text-sm text-gray-600">
  Nuestra sede principal en <strong>Zoltan Kodaly 126</strong> se encuentra a
  minutos de <strong>{coloniaName}</strong>. Ofrecemos servicio de transporte
  a domicilio para que tu lomito viaje cómodo y seguro.
</p>
```

**Reglas:**
- Siempre mencionar la dirección completa: `Zoltan Kodaly 126`.
- Siempre mencionar la colonia dinámica.
- **No** inventar tiempos exactos de traslado (no decir "a 5 minutos") a
  menos que se validen con datos reales.
- Usar la frase genérica `"a minutos de"` como comodín seguro.
- Opcionalmente se puede mencionar el servicio de transporte a domicilio
  como valor agregado.

---

## 4. Estructura de Archivos Recomendada

```
src/
├── lib/
│   └── neighborhoods.ts          # Mapa slug → displayName + branchId
├── app/
│   └── colonia/
│       └── [slug]/
│           ├── page.tsx           # Página dinámica por colonia
│           └── layout.tsx         # (opcional) layout con sticky CTA
```

### 4.1 Archivo `neighborhoods.ts` — Ejemplo de Mapa Canónico

```ts
export interface Neighborhood {
  slug: string;
  displayName: string;
  branchId: "zona-norte" | "poniente";
}

export const NEIGHBORHOODS: Neighborhood[] = [
  // Zona Norte
  { slug: "santa-maria-la-ribera", displayName: "Santa María la Ribera", branchId: "zona-norte" },
  { slug: "san-rafael", displayName: "San Rafael", branchId: "zona-norte" },
  { slug: "tlatelolco", displayName: "Tlatelolco", branchId: "zona-norte" },
  { slug: "buenavista", displayName: "Buenavista", branchId: "zona-norte" },
  { slug: "san-simon-tolnahuac", displayName: "San Simón Tolnáhuac", branchId: "zona-norte" },
  { slug: "peralvillo", displayName: "Peralvillo", branchId: "zona-norte" },
  { slug: "lindavista", displayName: "Lindavista", branchId: "zona-norte" },
  { slug: "industrial-vallejo", displayName: "Industrial Vallejo", branchId: "zona-norte" },
  { slug: "magdalena-de-las-salinas", displayName: "Magdalena de las Salinas", branchId: "zona-norte" },
  { slug: "estrella", displayName: "Estrella", branchId: "zona-norte" },
  { slug: "guadalupe-tepeyac", displayName: "Guadalupe Tepeyac", branchId: "zona-norte" },
  { slug: "industrial", displayName: "Industrial", branchId: "zona-norte" },

  // Poniente
  { slug: "polanco", displayName: "Polanco", branchId: "poniente" },
  { slug: "lomas-de-chapultepec", displayName: "Lomas de Chapultepec", branchId: "poniente" },
  { slug: "tecamachalco", displayName: "Tecamachalco", branchId: "poniente" },
  { slug: "miguel-hidalgo", displayName: "Miguel Hidalgo", branchId: "poniente" },
  { slug: "naucalpan", displayName: "Naucalpan", branchId: "poniente" },
];

export function getColoniaBySlug(slug: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug);
}

export function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ slug: n.slug }));
}
```

### 4.2 Integración con `sitemap.ts`

Las páginas de colonia deben registrarse automáticamente en el sitemap:

```ts
// En sitemap.ts — añadir después de blogPages
import { NEIGHBORHOODS } from "@/lib/neighborhoods";

const neighborhoodPages: MetadataRoute.Sitemap = NEIGHBORHOODS.map((n) => ({
  url: `${BASE_URL}/colonia/${n.slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.7,
}));

return [...staticPages, ...blogPages, ...neighborhoodPages];
```

---

## 5. Checklist antes de publicar una página de colonia

- [ ] El `<h1>` contiene el `displayName` de la colonia (no el slug)
- [ ] Todos los `alt` de imágenes incluyen la colonia
- [ ] `generateMetadata` interpola la colonia en `title` y `description`
- [ ] El botón WhatsApp sticky es `md:hidden` y tiene `safe-area-pb`
- [ ] El parámetro `text` del link de WhatsApp incluye la colonia
- [ ] El enlace de WhatsApp usa `wa.me/5215644085356` + `encodeURIComponent`
- [ ] El CTA tiene `target="_blank" rel="noopener noreferrer"`
- [ ] El mapa apunta a `lat: 19.4610556, lng: -99.1422500` (Zoltan Kodaly 126)
- [ ] El texto de cercanía menciona tanto `Zoltan Kodaly 126` como la colonia
- [ ] No se inventan tiempos de traslado exactos
- [ ] El slug genera 404 si no existe en `NEIGHBORHOODS`
- [ ] La colonia aparece en `sitemap.ts` y en `generateStaticParams`

---

## 6. Relación con otras Skills

| Skill | Relación |
|---|---|
| `paws-conversion-standards.md` | Datos canónicos del teléfono, badges de confianza y formato de WhatsApp. |
| `SEO_EEAT_STANDARDS.skill.md` | Estructura semántica (un solo H1), meta-datos < 60/160 chars, Schema `LocalBusiness`. |
| `GLOBAL_UI.skill.md` | Tokens de color, tipografía y breakpoints del design system. |
| `PAWSCLUB_STANDARDS.skill.md` | Reglas generales del negocio, horarios y políticas. |
