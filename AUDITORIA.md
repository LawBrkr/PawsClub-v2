# Auditoría PawsClub-v2

**Fecha:** 30 abril 2026
**Stack verificado (instalado):** Next 16.2.1, React 19.2.4, TypeScript 6.0.2, Tailwind 4, framer-motion 12.38, lucide-react 1.6.0, @types/node 25.5.0
**Repo:** github.com/LawBrkr/PawsClub-v2 (público, branch `main`, 41 commits)
**Objetivo del dueño:** atraer más clientes.

---

## Resumen honesto

El sitio tiene fundación sólida y mucho ya bien hecho: stack moderno, componentes limpios, schema JSON-LD por sucursal Zona Norte, sitemap completo, robots configurado, landings por servicio con metadata propia, reviews visibles en home y landings, y un endpoint `/api/booking/norte` con validación robusta. La deuda concentra el dolor en tres frentes: (1) **una fuga real de leads** porque el formulario de Poniente postea a un endpoint inexistente y nada se guarda; (2) **cero medición**: el GTM ID está declarado pero nunca se inyecta en el `<head>`, así que no sabes qué landing convierte ni de qué fuente vienen los clientes; (3) **deuda en seguridad/operación**: hay un GitHub PAT real en un archivo `token git.txt` en disco (no commiteado pero peligroso), `.env` con NOTION_API_KEY y `.env.local` con CAL_API_KEY también en disco, y 36 MB en `/public/img` por cuatro PNGs gigantes (≥5–9 MB cada uno) que probablemente ni se sirven.

Hay una **bomba de tiempo** en el cotizador interno: `public/herramientas/cotizador-train-and-go.html` está marcado como `D` (deleted, staged) en `git status`, pero el archivo sigue existiendo en disco y `panel/ctz-train-go/page.tsx` lo carga vía iframe. El próximo `git commit -a` rompería esa herramienta interna en producción.

Lo bueno: cuando arregles 5 cosas concretas (endpoint waitlist, GTM, imágenes pesadas, headers de seguridad, archivos faltantes de Next como favicon/error/not-found), pasas de "sitio que se ve" a "sitio que mide y captura". El código es enseñable; lo que falta es operación.

---

## Hallazgos P0 — rompen captación de clientes o seguridad

### P0.1 Leads de Poniente se pierden silenciosamente

- **Archivo:** `src/components/PonienteLeadForm.tsx:48-57`
- **Qué pasa:** el form postea a `/api/waitlist/poniente`. Ese endpoint no existe (verificado con `find src/app -name "route.ts"` → solo aparece `/api/booking/norte`). El código muestra "mock success" y abre WhatsApp como fallback. Si el usuario no completa el flujo de WhatsApp (o el navegador bloquea el `window.open`), el lead muere.
- **Impacto:** cada visita de la landing Poniente que llena el form sin abrir WhatsApp = lead 100% perdido. No hay registro en ninguna parte.
- **Fix:** crear `src/app/api/waitlist/poniente/route.ts` que (a) valide el payload, (b) lo persista (Notion vía NOTION_API_KEY que ya tienes, o Google Sheet, o tabla SQLite), (c) dispare un WhatsApp/email a tu número con el lead.

### P0.2 Cero tracking de conversiones

- **Archivos:** `src/lib/constants.ts:16` (declara `gtmId: "GTM-TQ4HDX82"`) y `src/app/layout.tsx` (no contiene ningún script GTM, gtag, ni `next/script`).
- **Qué pasa:** tienes el ID de GTM pero nunca se carga. No hay GA4, no hay Meta Pixel, no hay tracking de eventos de CTA, ni de envío de formulario, ni de clic en WhatsApp.
- **Impacto:** estás invirtiendo tiempo en SEO y landings sin saber cuál convierte. Decisiones a ciegas.
- **Fix:** en `layout.tsx`, después de `<body>`, agregar `<Script id="gtm" strategy="afterInteractive">` con el snippet de GTM. Disparar eventos `lead_submit`, `whatsapp_click`, `booking_open` desde los handlers de cada CTA. Crear contenedor en GTM con tag GA4 + Meta Pixel.

### P0.3 GitHub Personal Access Token guardado en archivo plano

- **Archivo:** `token git.txt` en raíz del proyecto (contiene `ghp_REVOKED`).
- **Qué pasa:** verifiqué con `git log --all -- "token git.txt"` que NO está commiteado y `.gitignore` lo bloquea por patrón `*token*`. Pero el archivo existe en disco; cualquiera con acceso al equipo o a un backup lo lee.
- **Impacto:** si ese PAT sigue activo, quien lo tenga puede leer/empujar a tus repos privados desde GitHub.
- **Fix:** revoca el token YA en https://github.com/settings/tokens, borra el archivo (`rm "token git.txt"`), y si necesitas un PAT, guárdalo en el manager de secretos del SO o usa `gh auth login`.

### P0.4 API keys vivas en `.env` y `.env.local` no commiteados pero en disco

- **Archivos:** `.env` (NOTION_API_KEY, NOTION_DATABASE_ID), `.env.local` (CAL_API_KEY de tipo `cal_live_...`).
- **Qué pasa:** ambos están protegidos por `.gitignore` y verifiqué con `git log --all -- ".env*"` que nunca se commitearon. Bien. Pero las claves reales están en disco; si compartes la carpeta o se sube a un drive sin filtrar, se exponen.
- **Impacto:** mismo riesgo que P0.3 a menor severidad — exposición vía equipo o respaldo.
- **Fix:** ya están bien protegidos en git. Suficiente con: rotar las claves (Notion y Cal) cada 6 meses, no compartir la carpeta sin antes excluir `.env*`.

### P0.5 Cotizador Train & Go: `git rm` programado de archivo en uso

- **Archivos:** `public/herramientas/cotizador-train-and-go.html` (existe en disco, 101 KB) y `src/app/panel/ctz-train-go/page.tsx:30` (lo carga en iframe). En `git status` aparece como `D` (deleted, staged).
- **Qué pasa:** el siguiente commit que incluya ese delete romperá la herramienta interna sin aviso. La página `/panel/ctz-train-go` mostrará iframe vacío.
- **Impacto:** pierdes el cotizador que usa tu equipo para vender Train & Go.
- **Fix:** si lo quieres conservar, `git restore public/herramientas/cotizador-train-and-go.html` y vuelve a comitearlo. Si quieres migrarlo a un componente React, hazlo antes de borrarlo.

---

## Hallazgos P1 — frenan al cliente o erosionan SEO

### P1.1 Ocho páginas sin metadata propia

Verificado con grep página por página. Las que faltan exportar `metadata` o `generateMetadata`:

- `src/app/page.tsx` (home) — hereda del layout, aceptable, pero te conviene un OG específico.
- `src/app/contacto/page.tsx`
- `src/app/calculadora/page.tsx`
- `src/app/galeria/page.tsx`
- `src/app/pre-registro/page.tsx`
- `src/app/info/guarderia-hotel/page.tsx`
- `src/app/panel/ctz-interno/page.tsx` (debe llevar `noindex`)
- `src/app/panel/ctz-train-go/page.tsx` (ya tiene `noindex` por su layout, OK).

**Impacto:** preview pobre cuando las compartes en WhatsApp / Facebook / Instagram. El blog dinámico `[slug]` SÍ tiene `generateMetadata` (verificado), bien.

**Fix:** exportar `metadata` específico en cada una. La de paneles internos debe forzar `robots: { index: false, follow: false }`.

### P1.2 Sucursal Poniente sin LocalBusiness schema

- **Archivos:** `src/app/sucursales/poniente/page.tsx` no importa `getLocalBusinessSchema` ni renderiza `<SchemaMarkup>`. Solo `sucursales/zona-norte/page.tsx` lo hace (línea 35).
- **Impacto:** Google Maps Knowledge Panel y rich snippets no aparecen para la sucursal Poniente. Pierdes visibilidad local en Polanco/Lomas/Tecamachalco.
- **Fix:** copiar el patrón de zona-norte → en poniente, `<SchemaMarkup data={getLocalBusinessSchema("poniente")} />`. La función ya existe en `src/lib/schema.ts:7` y soporta ambos branchIds.

### P1.3 Faltan archivos especiales de Next.js

Verificado en `src/app/`:

- No hay `favicon.ico` ni `icon.tsx`.
- No hay `not-found.tsx` global.
- No hay `error.tsx` global.
- No hay `loading.tsx`.
- No hay `manifest.ts` (PWA).
- No hay `apple-icon.tsx`.

**Impacto:** la pestaña del navegador muestra el ícono default genérico (se ve amateur al lado de competidores), 404 muestra la pantalla cruda de Next, errores de runtime no se manejan, no se puede instalar como PWA en home screen del móvil.

**Fix:** agregar al menos `favicon.ico`, `not-found.tsx` con CTA a WhatsApp y home, y `error.tsx` que registre el error y ofrezca reintentar.

### P1.4 Reviews del home están armadas pero hay que validar que no son ficticias

- **Archivo:** `src/app/page.tsx` líneas 327-352 (renderiza `SITE.googleRating` 4.9 y mapa de `REVIEWS`).
- **Qué pasa:** hay una constante local `REVIEWS` y el rating viene de `constants.ts:19` (`googleReviewCount: 25`). Si esos 25 reviews son reales en tu Google Business Profile y los testimonios renderizados son de clientes reales, todo OK. Si están inventados, es riesgo de marca y violación de políticas de Google.
- **Fix:** confirma con tu Google Business Profile que efectivamente tienes 25 reseñas y 4.9 promedio. Renderiza testimonios verbatim de Google con nombre real. Si no llegas a 25, baja el número antes de que un cliente lo confronte.

### P1.5 Formulario de contacto con sucursal Poniente "Cupo Lleno" disabled

- **Archivo:** `src/app/contacto/page.tsx:113`: `<option value="Poniente" disabled>📍 Poniente (Cupo Lleno)</option>`.
- **Qué pasa:** esto coincide con la lógica de la lista de espera, pero un visitante interesado en Poniente y que no nota la lista de espera percibe "no me atienden". No hay redirección al lead form.
- **Fix:** cuando el usuario seleccione "Poniente" (o haga hover sobre la opción disabled), redirigirlo a `/landing/guarderia-canina-cdmx` (que tiene el `PonienteLeadForm`). O cambiar el disabled por un value="Poniente (lista de espera)" que dispare el form de waitlist.

### P1.6 Landing pages sin testimonios verificables ni evidencia visual

Las cinco landings (`adiestramiento-domicilio-polanco`, `cachorro-primerizo-polanco`, `guarderia-canina-cdmx`, `hotel-canino-cdmx`, `perro-jala-correa-polanco`) muestran el rating Google pero no incluyen testimonios escritos con nombre + barrio + foto. La prueba social en frío convence más con caras y barrios reconocibles que con un número.

**Fix:** añadir 2-3 testimonios verbatim por landing (mínimo: nombre, barrio, servicio). Si tienes captures de WhatsApp con clientes felices, úsalas (con permiso).

---

## Hallazgos P2 — performance y mobile

### P2.1 36 MB en `/public/img`, casi todo grasa

Verificado con `du -sh`. Los pesados de verdad:

- `Exploración y Libertad...png` — **8.9 MB**
- `Gemini_Generated_Image...png` — **8.1 MB**
- `Más que obediencia...png` — **7.8 MB**
- `El ecosistema Paws Club...png` — **4.9 MB**
- `paseos.jpeg` — 2.0 MB
- `paws-club-og.png` — 1.3 MB
- `hotel.webp` — 536 KB

**Impacto:** ralentiza el deploy a Vercel y, si alguno de esos PNGs llega a renderizarse (incluso por error), destroza el LCP móvil. Los nombres con espacios y mayúsculas también son señal de archivo "abandonado" — hay que verificar si están referenciados en código.

**Fix:** (a) `grep -rln "Gemini_Generated\|El ecosistema Paws Club\|Más que obediencia\|Exploración y Libertad" src public` — si nadie los referencia, bórralos. (b) `paseos.jpeg` es duplicado de `paseos.webp` (96 KB) — borra el jpeg. (c) `paws-club-og.png` (1.3 MB) duplica a `paws-club-og.jpg` (100 KB) — el layout usa `/img/paws-club-og.jpg`, borra el .png. (d) `hotel.webp` regenerar a calidad 80, debería bajar a ~150 KB. Meta global: el folder `/public/img` debería pesar < 4 MB.

### P2.2 Cuatro páginas con `"use client"` que pueden no necesitarlo todo

- `src/app/calculadora/page.tsx` — necesita "use client" por la calculadora interactiva.
- `src/app/contacto/page.tsx` — necesita "use client" por `useState(submitted)` y el handler. OK.
- `src/app/galeria/page.tsx` — verificar si la galería es estática (en cuyo caso, splittear: server para grid, client solo para lightbox).
- `src/app/pre-registro/page.tsx` — necesita "use client" por el form. OK.

**Impacto:** menor; lo que sí conviene es **mover el JSX no interactivo a Server Components hijos** dentro de cada page. Hoy una `page.tsx` "use client" hace que TODO su árbol se hidrate.

### P2.3 `WhatsAppButton` usa `<img>` raw en vez de `<Image>`

- **Archivo:** `src/components/WhatsAppButton.tsx:15-19`. Usa `<img src="/img/whatsapp_logo_green.png">` con `brightness-0 invert`. Ya importas `MessageCircle` de lucide-react pero no lo usas.
- **Impacto:** carga PNG de 40×40 sin optimización next/image. El icono puede ser SVG inline o el `MessageCircle` de lucide.
- **Fix:** reemplazar el `<img>` por `<MessageCircle className="h-7 w-7 text-white" strokeWidth={2.2} />` o usar SVG inline. Eliminar el archivo PNG si nadie más lo usa.

### P2.4 `BookingButton` inicializa Cal.com en cada montaje

- **Archivo:** `src/components/BookingButton.tsx:13-21`. `useEffect` con `getCalApi` corre cada vez que el componente se monta. Si la página tiene 5 botones, dispara 5 veces.
- **Fix:** mover la inicialización a un componente `<CalProvider>` montado una sola vez en `layout.tsx` (o usar el patrón [singleton recomendado por Cal.com](https://cal.com/docs/embed/react)).

### P2.5 Sin headers de caché ni de seguridad en `next.config.ts`

- **Archivo:** `next.config.ts` (19 líneas, solo declara `images`).
- **Falta:** CSP, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security, Referrer-Policy, Permissions-Policy.
- **Comparación:** el proyecto Signalia que tienes en otra carpeta SÍ tiene un set completo de `securityHeaders` que puedes copiar tal cual.

---

## Hallazgos P3 — código y operación

### P3.1 Sandbox del repo lleno de basura no productiva

En `git status` y `ls`:

- Carpetas: `Contexto Paws/`, `Queue/`, `Skills/`, `herramientas/` (raíz), `visualizer-app/` — material de trabajo, no debería estar en el repo de la web.
- Archivos: `Aviso_Privacidad_PawsClub.docx`, `Contrato_PawsClub.docx`, `prompt_flyer_train_and_go.md` en raíz.
- `tsconfig.tsbuildinfo` (121 KB) — generado, no debería commitearse.

**Fix:** mover todo eso a un repo separado (`pawsclub-internal`) o a `/docs`. Agregar al `.gitignore`: `tsconfig.tsbuildinfo`, `Contexto Paws/`, `Queue/`, `Skills/`, `visualizer-app/`. Quita los `.docx` del repo público.

### P3.2 33 archivos modificados sin commitear

`git status -s` muestra 33+ archivos `M` (incluye todos los `Skills/*.md`, `next.config.ts`, `package.json`, todas las landings, blog, calculadora, contacto, etc.). El repo está en un WIP gigante sin commits.

**Impacto:** si alguien (incluida tú) hace `git reset --hard` por error, pierdes muchísimo trabajo. Vercel solo despliega lo que está commiteado, así que los cambios que ves en local pueden no estar en producción.

**Fix:** revisar el diff (`git diff --stat`), separar por temas y comitear en bloques pequeños. Si hay cambios que no quieres conservar, descartarlos. La memoria que tengo guardada indica que en este proyecto los commits requieren `GIT_INDEX_FILE=/tmp` por virtiofs — usa el workaround.

### P3.3 `console.log` con datos personales en endpoint productivo

- **Archivo:** `src/app/api/booking/norte/route.ts` líneas 22, 34, 60, 76 — registra payload completo (nombre, email, mascota, fecha) en cada paso.
- **Impacto:** en Vercel los logs son visibles y persisten. Es PII de clientes. Privacidad/cumplimiento (LFPDPPP en México).
- **Fix:** redactar antes de loguear: `console.log("...", { ownerName: redact(body.ownerName), email: redact(body.ownerEmail) })` o solo loguear el `petName` y un `requestId`. En el bloque catch, no devuelvas `error: errorMessage` al cliente; loguéalo y responde mensaje genérico.

### P3.4 Sin `aria-current`, sin foco visible en dropdown del Header

- **Archivo:** `src/components/Header.tsx` (dropdown desktop usa `onMouseEnter/onMouseLeave`). No hay manejo de teclado para abrirlo (Tab/Enter), no hay `aria-expanded` ni `aria-haspopup` en el botón.
- **Impacto:** usuario que navega con teclado o con lector de pantalla no puede usar el menú "Servicios" / "Sucursales".
- **Fix:** agregar `aria-haspopup="true"`, `aria-expanded={openDropdown===item.label}` al botón, y reaccionar a click (no solo hover) para que funcione con teclado y móvil.

### P3.5 Endpoint booking sin rate limiting ni captcha

- **Archivo:** `src/app/api/booking/norte/route.ts`.
- **Impacto:** un script puede inundarlo de requests, agotando tu cuota de Cal.com (que en `.env.local` veo es plan `cal_live_...`). Cada llamado quema cupo.
- **Fix:** añadir rate limit por IP (con Upstash Redis o Vercel KV). Validar honeypot field. Considerar Turnstile de Cloudflare.

---

## Tabla resumen de impacto

| Hallazgo | Impacto en clientes | Esfuerzo | Quién lo arregla |
|---|---|---|---|
| P0.1 Endpoint waitlist Poniente | Alto (leads perdidos) | 1-2 h | Dev |
| P0.2 GTM no inyectado | Alto (sin medición) | 30 min | Dev |
| P0.3 PAT en archivo | Medio (riesgo seguridad) | 5 min | Tú (revocar) |
| P0.5 Cotizador en staged delete | Alto (interna se rompe) | 5 min | Dev |
| P1.1 8 páginas sin metadata | Medio-alto (CTR redes) | 2 h | Dev |
| P1.2 Schema Poniente | Medio (Maps) | 15 min | Dev |
| P1.3 Falta favicon/error/404 | Bajo-medio (marca) | 1 h | Dev |
| P1.6 Testimonios en landings | Alto (conversión) | 1 h por landing | Tú (copy) + Dev |
| P2.1 Imágenes 36 MB | Medio (LCP móvil, deploy) | 1 h | Dev |
| P2.5 Headers seguridad | Bajo (postura) | 20 min | Dev (copiar de Signalia) |

---

## Lo que está bien y no hay que tocar

- Stack moderno y consistente.
- `src/lib/schema.ts` está casi completo (solo falta usarlo en Poniente).
- `src/app/api/booking/norte/route.ts` valida con `qualification-engine`, maneja flujo de slot y buffer correctamente.
- `sitemap.ts` y `robots.ts` están bien configurados; las rutas dinámicas existen (verificado).
- `layout.tsx` tiene metadata, OG, Twitter, robots, canonical — bien.
- Reviews y rating sí se renderizan en home y landings (no como reportó el primer borrador).
- `next/image` se usa en home y la mayoría de páginas.
- `.gitignore` está bien armado y bloquea secretos por patrón.

---

## Verificación de claims dudosas (para que no quede como "el agente dijo")

| Claim | Verificado | Resultado |
|---|---|---|
| "10 páginas sin metadata" | `grep` por archivo | **8** páginas sin metadata, no 10 |
| "Schema falta por sucursal" | Lectura de `schema.ts` | **Existe**; solo falta llamar en Poniente |
| "Reviews no se muestran en home" | Lectura de `page.tsx:327-352` | **Sí se muestran** |
| "Versiones de Next/TS/lucide no existen" | `node -p require` | **Existen** las versiones instaladas |
| "Cotizador HTML no está en repo" | `ls public/herramientas/` | **Sí está** en disco, pero staged-deleted |
| "7 use client innecesarios" | `grep -l "use client"` | Son **4** páginas, todas con razón aparente |
| "Tokens commiteados" | `git log --all -- ".env*" "token*"` | **No commiteados**; `Skills/envpawsclub.env` sí pero solo placeholders |

---

**Siguiente paso:** revisa `TASKS.md` (junto a este archivo) para el plan de ataque concreto en orden de impacto sobre captación de clientes.
