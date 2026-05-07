# Paws Club v2 — Contexto para Claude

> Lee este archivo al inicio de cada sesión. Resume el stack, las convenciones
> y las herramientas internas que existen. Funciona en Claude Code (chat) y en
> Claude on the web / GitHub (cowork).

## Stack

- **Next.js 16** (App Router) en TypeScript
- **Tailwind v4** con tokens de marca en `src/app/globals.css` y `src/lib/constants.ts`
- **Hosted en Vercel** (deploy automático en cada push a `main`)
- **GTM** (`GTM-TQ4HDX82`) inyectado en `src/app/layout.tsx`
- **Notion API** para waitlist (Poniente)
- **WhatsApp Cloud API** o webhook (Make/Zapier) para notificaciones a admin
- **Cal.com** embed para reservas en landings

## Marca

- Primary: `#547097` (`--brand`)
- Hover: `#3F5471` (`--brand-hover`)
- Cream: `#FFF8E7` (`--cream`)
- Accent (rosa IG): `#E1306C`
- Accent orange: `#F4A261`
- **Fuente**: Inter
- **Logo**: `/img/logo.webp` (44 KB lossless WebP, 500×500) y `/img/logo.png` (103 KB con canal alpha) — usar el WebP por default; el PNG solo si necesitas transparencia exacta o mejor renderizado en CapCut

## Estructura

```
src/
  app/
    panel/                    ← herramientas internas (noindex/nofollow)
      layout.tsx              ← noindex compartido
      page.tsx                ← hub que lista las 3 herramientas
      cotizador/              ← cotizador unificado 4 servicios
      marketing/              ← brandear fotos + end-cards de video
      captions/               ← generador de captions IG con auto-relleno
    landing/                  ← landings SEO (cada una con su keyword)
    sucursales/               ← Poniente / Zona Norte
    servicios/                ← páginas top-level de servicios
    blog/                     ← blog (oculto en navegación)
  components/                 ← Header, Footer, BookingButton, etc.
  lib/
    constants.ts              ← SITE info + BRAND colors + sucursales
    schema.ts                 ← JSON-LD para SEO
    notion-waitlist.ts        ← persiste leads en Notion DB
    whatsapp-notify.ts        ← notifica al admin (WA Cloud API o webhook)
    qualification-engine.ts   ← lógica de cotizador
public/
  img/                        ← assets (~2.6 MB total después de optimización)
  herramientas/               ← HTML autocontenido para herramientas internas
prompts/
  blog-images.md              ← prompts para generar imágenes de blog
  instagram-captions.md       ← pack de 38 captions IG (referencia humana)
```

## Patrón de herramientas internas (`/panel/*`)

Toda herramienta interna sigue este patrón:

1. **HTML autocontenido** en `/public/herramientas/<nombre>.html`
   - Sin dependencias externas (solo APIs nativas: Canvas, Fetch, FileReader, MediaRecorder, Clipboard)
   - Mobile-first: inputs en `font-size: 16px` para evitar zoom en iOS, chips touch-friendly
   - Persistencia opcional en `localStorage` con prefijo `pawsclub.<tool>.<key>`
2. **Wrapper Next.js** en `/src/app/panel/<nombre>/page.tsx`
   - Sirve el HTML como `<iframe>` full-screen con `allow="clipboard-write"`
3. **Layout hermano** en `/src/app/panel/<nombre>/layout.tsx` con metadata `robots: { index: false, follow: false }`

Para añadir una herramienta nueva, copia este patrón. Tarda ~10 minutos.

## Herramientas internas — qué hace cada una

### 🏠 `/panel` (hub)
Lista las 3 herramientas en cards. URL fácil de bookmarkear en iPad. Mobile-friendly.

### 🧮 `/panel/cotizador`
Cotizador unificado para Adiestramiento, Hotel, Guardería y Paseos. Genera 4 textos por cotización: WhatsApp, documento al cliente, requisitos y FAQ. Bloqueo automático de razas PPP y casos conductuales serios. PDF/PNG export.
- Servido desde `/public/herramientas/cotizador.html`

### 🎨 `/panel/marketing`
Brandear fotos de clientes para Instagram + generar end-cards para CapCut.
- **4 plantillas**: Watermark sutil, Cliente feliz (banner inferior), Testimonio (overlay con frase), End-card video (slide final 3s)
- **3 formatos**: 1080×1080 cuadrado, 1080×1350 retrato, 1080×1920 story/reel
- **Logo HD personalizado**: campo opcional, queda en `localStorage` (`pawsclub.marketing.customLogo`). Si no hay, usa `/img/logo.webp`
- **Smoothing alta calidad**: `ctx.imageSmoothingQuality = 'high'` explícito
- **End-card animado**: botón **🎬 Exportar video animado (3s)** usa MediaRecorder API + `canvas.captureStream(30)`. Detección de mimeType: MP4 (Safari/iOS) → WebM VP9 → VP8. Bitrate 6 Mbps. Timeline: logo fade+scale → headline slide-up → CTA scale-in → contact fade → hold con pulse leve. Easing `easeOutCubic`.
- **Privacidad**: la foto del cliente nunca sale del navegador
- Servido desde `/public/herramientas/marketing.html`

### 📝 `/panel/captions`
Generador de captions Instagram con auto-relleno desde formulario.
- **38 captions** distribuidos en 6 servicios × 17 ocasiones (Hospedaje, Daycare, Paseos, Adiestramiento, Testimonio, Promo)
- **Sustitución en vivo**: `{nombre}` → `Luna` si llenaste el campo, o `[nombre]` gris si está vacío (visible al copiar)
- **Filtros**: chips por servicio + búsqueda libre
- **Hashtags compuestos**: base + servicio + sucursal seleccionada
- **Persistencia**: `localStorage` (`pawsclub.captions.formData`)
- Servido desde `/public/herramientas/captions.html`
- Las captions están como array JS dentro del HTML; `prompts/instagram-captions.md` es referencia humana paralela

## Convenciones del proyecto

### Lo que SÍ hacer

- **Brand tokens desde `constants.ts`**: si necesitas un color o un teléfono, importa de `src/lib/constants.ts` o usa la variable CSS de `globals.css`. Nunca hardcodees `#547097` o `+5215644085356` directo.
- **Inputs 16px en móvil**: tools internas que se usan desde iPad necesitan `font-size: 16px` mínimo en `<input>`/`<select>` o iOS zoomea.
- **`apple-mobile-web-app-capable`** en herramientas que se agreguen a home screen.
- **Permission con `clipboard-write`** en `<iframe>` cuando la herramienta hace copy-to-clipboard.
- **Commits squash-merged** a `main`. Estilo: `feat: <breve>` o `fix: <breve>` o `chore: <breve>`.
- **PRs como draft inicialmente**, luego un-draft al mergear.
- **Suscripción a PR activity** después de abrir el PR para detectar fallas de CI.

### Lo que NO hacer

- **No comitees `next-env.d.ts`** — auto-generado por `next build`, no está en `.gitignore` por algún motivo pero no debe entrar al historial.
- **No comitees churn de `package-lock.json`** — si solo corriste `npm install` para validar un build, haz `git checkout -- package-lock.json` antes de commit. La diferencia entre versiones de npm reescribe el lockfile sin cambiar deps.
- **No re-comprimas `logo.webp` agresivamente** — el actual es lossless 44 KB; bajarlo a lossy lo pixelea (ya pasamos por eso). Si necesitas otro formato, deriva del PNG.
- **No introduzcas dependencias externas** en herramientas internas — el patrón es HTML autocontenido. Si necesitas algo grande (ej. ffmpeg.wasm), pregunta antes.
- **No expongas `/panel/*` a Google** — todas las rutas tienen `noindex, nofollow`. Mantenlo así.
- **No mergees a `main` sin aprobación del usuario** — *salvo* que el usuario lo autorice explícitamente en la conversación (ej. *"mergea sin esperar"*).
- **No uses comandos destructivos** (`git reset --hard`, `--force`, `rm -rf`) sin confirmar con el usuario primero.

## Pendientes conocidos

- **Auth en `/panel/*`**: actualmente cualquiera con el link puede entrar. No es un riesgo grave (no hay datos sensibles, solo herramientas) pero un middleware básico con password compartido sería buena idea.
- **Más plantillas en `/panel/marketing`**: el usuario mencionó cumpleaños, reseña destacada con estrellas, evento.
- **MP4 forzado en Chrome/Firefox**: ahora mismo el export animado da WebM en navegadores no-Apple. Para forzar MP4 universal habría que integrar `ffmpeg.wasm` (~30 MB). Por ahora WebM funciona en CapCut.
- **Headers de seguridad** en `next.config.ts` (ver `TASKS.md`)
- **`metadata` propia** en 7 páginas que faltan (ver `TASKS.md`)

## Información de contacto / cuentas

- Domain: `pawsclub.com.mx`
- Phone: `+52 1 56 4408 5356`
- Email: `contacto@pawsclub.com.mx`
- Instagram: `@pawsclubmx`
- Facebook: `https://www.facebook.com/profile.php?id=61586039731313`
- GTM: `GTM-TQ4HDX82`
- GA4: `G-8JJ7MTS5CC`
- Google rating: 4.9 (25 reviews)

## Historial de sesiones

### 2026-05-07 — Marketing internal tools (PRs #7, #8, #9)

Construido en este orden:

1. **PR #7** — `/panel/marketing`: herramienta para brandear fotos de clientes
   - 3 plantillas iniciales (watermark, cliente feliz, testimonio) × 3 formatos
   - Logo HD upload + localStorage
   - Después: 4ª plantilla *End-card video* con fondo sólido o transparente
2. **PR #8** — `/panel/captions`: generador de captions Instagram
   - Markdown reference en `prompts/instagram-captions.md`
   - Tool con auto-relleno desde formulario, 38 captions, hashtag composer
3. **PR #9** — Logo HD + `/panel` hub + export animado de end-cards
   - `logo.webp`: re-encode lossless (15 KB lossy → 44 KB lossless)
   - `logo.png`: nuevo HD source con alpha
   - `/panel` index page con cards de las 3 herramientas
   - Export MP4/WebM 3s con MediaRecorder API y timeline animado

Para extender: ver sección *"Patrón de herramientas internas"* arriba.
