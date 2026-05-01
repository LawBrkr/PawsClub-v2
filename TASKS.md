# PawsClub-v2 — Plan de acción

Orden por **impacto en captación de clientes**, no por dificultad técnica. Marca con `[x]` cuando termines.

> Lee primero `AUDITORIA.md` (al lado de este archivo) si quieres el detalle de cada hallazgo.

---

## Hoy mismo (≤30 min cada una)

- [x] **Revoca el GitHub PAT** (`token git.txt` en raíz). _(Armando, 2026-04-30)_

- [x] **Restaura el cotizador Train & Go** — restaurado vía `git read-tree HEAD`; el archivo ya no aparece como deleted.

- [x] **Inyecta GTM en `src/app/layout.tsx`** — `next/script` `afterInteractive` + `<noscript>` iframe en `<body>`. ID `GTM-TQ4HDX82` desde `SITE.gtmId`. _(commit 10c24f2)_
  *Pendiente del usuario:* validar en producción que `gtm.js` carga y GA4 Realtime ve la sesión.

- [x] **Schema LocalBusiness en sucursal Poniente** — `<SchemaMarkup data={getLocalBusinessSchema("poniente")} />` agregado a `sucursales/poniente/page.tsx`. _(commit 10c24f2)_
  *Pendiente del usuario:* tras el deploy, validar en https://search.google.com/test/rich-results.

- [x] **Comitea el WIP gigante** — 9 commits agrupados por tema (captura, landings, servicios+sucursales, páginas, components, lib+config, docs internos, asset borrado, AUDITORIA+TASKS). Working tree limpio salvo untracked que se moverán fuera del repo en P1.

---

## Esta semana (P0 — mayor impacto en clientes)

- [x] **Crea `/api/waitlist/poniente/route.ts`** — listo. _(commit 10c24f2)_
  - `src/app/api/waitlist/poniente/route.ts` con validación zod (nombre, email, colonia, servicio enum)
  - `src/lib/notion-waitlist.ts` persiste vía REST a la DB de Notion (`NOTION_API_KEY` + `NOTION_DATABASE_ID`)
  - `src/lib/whatsapp-notify.ts` notifica al admin: WhatsApp Cloud API si hay `WHATSAPP_BUSINESS_TOKEN/PHONE_ID/ADMIN_NUMBER`, fallback a `LEAD_WEBHOOK_URL` (n8n/Make/Zapier), o skip silencioso
  - `PonienteLeadForm.tsx`: ya no mockea éxito, maneja error real y empuja `lead_submit` al dataLayer
  - `zod` agregado a `package.json` (ya `npm install`-eado en sandbox)
  *Pendiente del usuario:*
    1. Confirmar que la DB de Notion tiene las propiedades esperadas (Nombre/Title, Email, Colonia, Servicio, Origen). Si difieren, ajusta `notion-waitlist.ts`.
    2. Decidir canal de notificación: configurar variables de WhatsApp Cloud API o un webhook (más fácil: Make/Zapier que mande WhatsApp).
    3. Probar end-to-end: enviar el form, verificar lead en Notion + recibir WhatsApp.

- [ ] **Configura GA4 + eventos de conversión en GTM.**
  Tags mínimos: GA4 Configuration, GA4 Event para `lead_submit`, `whatsapp_click`, `booking_open`. Disparadores: clic en `BookingButton`, clic en cualquier `wa.me`, submit de cualquier form.
  *Hecho cuando:* en GA4 ves los 3 eventos cuando los disparas en producción.
  *Esfuerzo:* 1 h.

- [ ] **Añade testimonios verificables a las 5 landings.**
  Mínimo 2-3 testimonios por landing con: nombre real, barrio, servicio usado, foto si tienes permiso. Si no tienes 10 reviews escritos, ofrece un descuento del 15% al próximo cliente que te deje uno.
  *Hecho cuando:* las 5 landings tienen al menos 2 testimonios cada una.
  *Esfuerzo:* 1-2 h por landing + acumular reviews reales.

- [ ] **Agrega favicon, `not-found.tsx` y `error.tsx`.**
  - `src/app/favicon.ico` (genera uno desde el logo, 32x32).
  - `src/app/not-found.tsx` con CTA a WhatsApp y home.
  - `src/app/error.tsx` que muestre mensaje claro y botón "Volver al inicio".
  *Hecho cuando:* visitas una URL inválida y ves la página 404 customizada.
  *Esfuerzo:* 1 h.

- [ ] **Optimiza imágenes de `/public/img`.**
  Pasos:
  1. `grep -rln "Gemini_Generated\|El ecosistema Paws Club\|Más que obediencia\|Exploración y Libertad" src public` — si nadie las referencia, borra los 4 PNGs gigantes (~30 MB liberados).
  2. Borra `paseos.jpeg` (2 MB) — ya tienes `paseos.webp`.
  3. Borra `paws-club-og.png` (1.3 MB) — el layout usa `.jpg`.
  4. Recomprime `hotel.webp` a calidad 80 con `cwebp` — debería bajar de 536 KB a ~150 KB.
  *Hecho cuando:* `du -sh public/img` reporta < 4 MB.
  *Esfuerzo:* 1 h.

---

## Próxima semana (P1 — SEO y experiencia)

- [ ] **Exporta `metadata` propia en las 7 páginas que faltan.**
  Lista exacta:
  - `src/app/contacto/page.tsx`
  - `src/app/calculadora/page.tsx`
  - `src/app/galeria/page.tsx`
  - `src/app/pre-registro/page.tsx`
  - `src/app/info/guarderia-hotel/page.tsx`
  - `src/app/panel/ctz-interno/page.tsx` (con `robots: { index: false, follow: false }`)
  - `src/app/page.tsx` (opcional, hereda del layout pero conviene OG específico)
  *Hecho cuando:* compartir cada URL en WhatsApp da preview específica con título distinto.
  *Esfuerzo:* 2 h.

- [ ] **Arregla la opción "Poniente (Cupo Lleno)" del form de contacto.**
  En `src/app/contacto/page.tsx:113`, cuando el usuario seleccione Poniente, redirige a `/landing/guarderia-canina-cdmx` (que tiene el waitlist form).
  *Hecho cuando:* seleccionar Poniente lleva al lead form, no a un dead-end.
  *Esfuerzo:* 15 min.

- [ ] **Headers de seguridad en `next.config.ts`.**
  Copia el bloque `securityHeaders` y la función `async headers()` desde `Signalia/signalia-landing/next.config.ts` (carpeta vecina). Adapta `connect-src` a Cal.com (`https://*.cal.com`).
  *Hecho cuando:* https://securityheaders.com/?q=pawsclub.com.mx te da nota A.
  *Esfuerzo:* 30 min.

- [ ] **Limpia el repo: saca lo no productivo.**
  Carpetas a mover fuera del repo (a `pawsclub-internal/` o a Drive):
  - `Contexto Paws/`, `Queue/`, `Skills/`, `herramientas/` (raíz, no `public/herramientas`), `visualizer-app/`.
  - `.docx` de aviso/contrato.
  - `prompt_flyer_train_and_go.md`.
  Agregar al `.gitignore`: `tsconfig.tsbuildinfo`, `*.tsbuildinfo`.
  *Hecho cuando:* `git status` solo muestra archivos del producto web.
  *Esfuerzo:* 30 min.

- [ ] **Sanea `console.log` con PII en `/api/booking/norte/route.ts`.**
  Líneas 22, 34, 60, 76: redacta nombre y email antes de loguear, o solo loguea `petName + requestId`. En el catch (línea 121-124), no devuelvas `error: errorMessage` al cliente.
  *Hecho cuando:* logs de Vercel ya no contienen email/nombre completo de clientes.
  *Esfuerzo:* 30 min.

- [ ] **Accesibilidad del Header dropdown.**
  `src/components/Header.tsx`: agregar `aria-haspopup="true"`, `aria-expanded`, soporte de teclado (Enter/Space abre, Esc cierra). Si te da pereza, cambia el dropdown a click-only en lugar de hover.
  *Hecho cuando:* puedes navegar el menú "Servicios"/"Sucursales" solo con Tab + Enter.
  *Esfuerzo:* 1 h.

---

## Próximo mes (P2 — escala)

- [ ] **Rate limiting en `/api/booking/norte`.**
  Vercel KV o Upstash Redis. 5 requests por IP por minuto.
  *Hecho cuando:* abusas con `ab` o `hey` y el endpoint responde 429.
  *Esfuerzo:* 2 h.

- [ ] **CalProvider único en `layout.tsx`.**
  Mover el `getCalApi(...)` fuera de `BookingButton.tsx` a un componente `<CalProvider />` montado una sola vez.
  *Hecho cuando:* en DevTools Network solo ves un load de `embed.js` por sesión.
  *Esfuerzo:* 1 h.

- [ ] **Reemplaza `<img>` por `<Image>` o icono SVG en `WhatsAppButton.tsx`.**
  Usa el `MessageCircle` de lucide-react que ya importas (línea 4). Borra `whatsapp_logo_green.png` si no se usa en otro lado.
  *Esfuerzo:* 10 min.

- [ ] **Genera contenido SEO local: 3 artículos de blog por trimestre.**
  Sugerencias basadas en tus barrios:
  - "Guardería para perros en Polanco: qué buscar antes de dejar a tu lomito"
  - "Adiestramiento canino en Lindavista: cuándo empezar con un cachorro"
  - "Hotel canino sin jaulas en CDMX: comparativa de zonas"
  Usa el sistema de blog que ya tienes (`src/app/blog/[slug]/page.tsx` con `generateMetadata`).
  *Hecho cuando:* Search Console te muestra impresiones por esos keywords.

- [ ] **Embed real de Google Reviews.**
  Reemplaza el array hardcodeado `REVIEWS` en `page.tsx` por embed de Google (vía Place ID + API o widget de tercero como Trustindex). Verifica que tus 25 reviews y 4.9 ⭐ son reales antes de mostrar.
  *Esfuerzo:* 2 h.

---

## Plan de ataque sugerido

```
Día 1 (lunes):    revocar PAT, restaurar cotizador, inyectar GTM, schema Poniente, comitear WIP
Día 2 (martes):   crear endpoint waitlist, configurar GA4
Día 3 (miércoles): testimonios landings (al menos 2 landings)
Día 4 (jueves):   favicon/404/error + optimizar imágenes
Día 5 (viernes):  metadata 7 páginas
Semana 2:         headers seguridad, limpieza repo, accesibilidad header
Mes 2:            content SEO, rate limit, embed reviews real
```

---

## Definition of Done global

Considera la auditoría cerrada cuando:

1. Todos los formularios de leads persisten en algú