# CLAUDE.md — Paws Club v2

Documento de referencia completo para Claude en el proyecto PawsClub-v2. Contiene todo lo necesario para operar de forma autónoma y consistente.

---

## 1. QUÉ ES PAWS CLUB

Paws Club es un servicio premium de cuidado y adiestramiento canino en CDMX con **dos sucursales activas** que operan de forma asimétrica (cada zona tiene servicios distintos por diseño). Fecha de inicio: Enero 2026.

**Posicionamiento general:** No somos una perrera. Somos un Homestay canino de cupo exclusivo (máximo 5 lomitos) con reportes diarios de fotos y videos.

**Regla legal:** Siempre usar `"Paws Club es una marca registrada"` en footers/secciones de cierre. No usar variantes más largas.

---

## 2. MAPA OPERATIVO — SUCURSALES Y SERVICIOS

| Servicio | Zona Poniente | Zona Norte |
|---|:---:|:---:|
| Hotel Boutique | ❌ No opera | ✅ Activo |
| Guardería Canina | ❌ No opera | ✅ Activo |
| Paseos Caninos | ✅ Activo | ✅ Activo |
| Adiestramiento | ✅ Principal (premium) | ⚠️ Solo casos simples |

**Regla crítica de adiestramiento en Zona Norte:** Solo se acepta obediencia básica o cachorros sin problemas conductuales complejos. Casos de modificación conductual avanzada, agresión o ansiedad severa → derivar/redirigir a Poniente.

---

## 3. DATOS DE CONTACTO Y SITIO

```
Sitio web:   https://pawsclub.com.mx
Email:       contacto@pawsclub.com.mx
Teléfono:    +52 1 56 4408 5356
WhatsApp:    https://wa.me/5215644085356
Instagram:   https://www.instagram.com/pawsclubmx/
Facebook:    https://www.facebook.com/profile.php?id=61586039731313
GTM ID:      GTM-TQ4HDX82
Rating:      4.9★ (25+ reseñas Google)
```

---

## 4. SUCURSALES — DETALLES

### Zona Poniente
- **Nombre:** Paws Club Poniente
- **Slug:** `/sucursales/poniente`
- **Coordenadas:** `19.43207703566728, -99.18103980381663`
- **Zonas de cobertura:** Polanco, Lomas de Chapultepec, Tecamachalco, Miguel Hidalgo, Naucalpan
- **Horario:** Lunes-Viernes 8:00–20:00 | Sábado 8:00–18:00 | Domingo: solo evaluaciones con cita
- **Servicios activos:** Adiestramiento (principal), Paseos

### Zona Norte
- **Nombre:** Paws Club Zona Norte
- **Slug:** `/sucursales/zona-norte`
- **Coordenadas (referencia pública):** `19.4590, -99.1410`
- **Dirección física:** **SECRET** — nunca imprimir en UI, logs ni código. Usar siempre el placeholder `"Colonia San Simón Tolnahuac, CDMX"`
- **Zonas de cobertura:** Santa María la Ribera, San Rafael, Tlatelolco, Buenavista, San Simón Tolnáhuac, Peralvillo, Lindavista, Industrial Vallejo, Magdalena de las Salinas, Estrella, Guadalupe Tepeyac
- **Horario:** Lunes-Viernes 6:00–20:00 | Sábado 7:00–20:00 | Domingo: solo hotel con reserva previa (+20%)
- **Servicios activos:** Hotel, Guardería, Paseos, Adiestramiento (básico)

---

## 5. PRECIOS (fuente de verdad: `src/lib/constants.ts`)

### Hotel Boutique
| | Poniente | Zona Norte |
|---|---|---|
| Entre semana | $450/noche | $340/noche |
| Domingo | $550/noche | $410/noche |

### Guardería Canina
| | Poniente | Zona Norte |
|---|---|---|
| Día | $350 | $260 |

### Adiestramiento
| Paquete | Poniente | Zona Norte |
|---|---|---|
| Obediencia básica (4 sesiones) | $3,950 | $2,950 |
| Cachorro Pro (8 sesiones a domicilio) | $7,900 | $5,900 |
| Adiós Ansiedad (10 sesiones a domicilio) | $11,900 | $8,900 |

**Ancla de conversión:** Evaluación conductual inicial (valor $850) **sin costo** para nuevos clientes.

### Paseos Caninos
| Plan | Precio |
|---|---|
| Paseo individual | $150 |
| Paquete 5 paseos | $650 |
| Paquete 10 paseos | $1,200 |
| Plan mensual | $2,200 |
| Segundo perro | +$110 |
| Aventura sábado | $650 |
| Paquete 4 sábados | $2,200 |
| Segundo perro sábado | +$350 |

**Regla de precios:** Nunca mostrar precios de Zona Norte en contenido dirigido a Poniente y viceversa. La diferencia genera confusión y devalúa la marca premium.

---

## 6. STACK TÉCNICO

| Aspecto | Tecnología |
|---|---|
| Framework | Next.js 16.2.1 (App Router) |
| UI | React 19.2.4 + TypeScript 6.0.2 |
| Estilos | Tailwind CSS v4.2.2 + PostCSS |
| Iconos | Lucide-react 1.6.0 (preferido) |
| Animaciones | Framer Motion 12.38.0 |
| Booking embed | @calcom/embed-react 1.5.3 |
| Utilidades | clsx 2.1.1 |
| Rendering | SSR + SSG (Server Components) |
| Base de datos | Ninguna — datos estáticos en `.ts` |
| Auth | Ninguna (sitio público) |
| Deploy | Vercel (inferido por configuración Next.js) |

### Comandos de desarrollo
```bash
npm run dev      # localhost:3000
npm run build    # build producción
npm start        # servidor producción (requiere build previo)
npm run lint     # ESLint strict
```

### Alias de paths
`@/*` → `./src/*`

---

## 7. VARIABLES DE ENTORNO

Crear `.env.local` (nunca committear). Ver plantilla en `Skills/envpawsclub.env`.

```env
# Cal.com — obtener en cal.com/settings/developer/api-keys
CAL_API_KEY="..."
CAL_API_BASE_URL="https://api.cal.com/v1"

# IDs de eventos Cal.com (ver URL de edición en Cal.com dashboard)
CAL_EVENT_ID_NORTE="..."
CAL_EVENT_ID_PONIENTE="..."
CAL_EVENT_ID_DOMICILIO="..."

# Lógica de negocio
PAWS_MIN_BUFFER_MINUTES=15
PAWS_TIMEZONE="America/Mexico_City"
PAWS_DEFAULT_DURATION=60

# Webhooks (opcional)
CAL_WEBHOOK_SECRET="..."
```

**Regla de seguridad:** Nunca hardcodear el API Key de Cal.com en código. Siempre usar variables de entorno.

---

## 8. INTEGRACIONES EXTERNAS

### Cal.com (Scheduling)
- **API Base:** `https://api.cal.com/v1`
- **Endpoints usados:** `GET /slots`, `POST /bookings`, `GET /bookings`
- **Buffer post-cita:** 15 minutos (limpieza)
- **Timezone:** Siempre `America/Mexico_City`
- **Duración default:** 60 minutos
- **Validación vacunas:** Obligatoria antes de agendar
- **Implementación:** `src/lib/calcom-client.ts`
- **Widget embed:** `src/components/BookingButton.tsx` (v1.5.3)

### WhatsApp Business
- **Número:** +52 1 56 4408 5356 → `wa.me/5215644085356`
- **Botón flotante:** `src/components/WhatsAppButton.tsx`
- **URLs con mensaje predefinido:** `SITE.whatsappUrl(msg)` en `constants.ts`

### Google Tag Manager
- **ID:** `GTM-TQ4HDX82`
- **Uso:** Conversión tracking (Google Analytics)

### Google Maps
- **Implementación:** `src/components/GoogleMap.tsx` (iFrame)
- **Remote patterns permitidos:** `lh3.googleusercontent.com` (avatars)

---

## 9. API INTERNA

### `POST /api/booking/norte`
Agendamiento autónomo para Zona Norte.

**Request body:**
```ts
{
  petName: string;
  ownerName: string;
  ownerEmail: string;
  phone?: string;
  date: string;           // YYYY-MM-DD
  timeSlot: string;       // ISO 8601
  vaccinationConfirmed: true;
  branch: "norte";
}
```

**Respuestas:**
- `201` — Booking creado (incluye `id`, `uid`, `startTime`, `bufferApplied`, `nextAvailableAfter`)
- `422` — Cualificación fallida (vacunas/campos)
- `409` — Slot no disponible
- `500` — Error interno

### `GET /api/booking/norte`
Metadata del servicio: preguntas de cualificación, campos requeridos, reglas de negocio.

---

## 10. ESTRUCTURA DE ARCHIVOS CLAVE

```
src/
├── app/
│   ├── layout.tsx                   ← RootLayout global
│   ├── page.tsx                     ← Home (10 secciones)
│   ├── api/booking/norte/route.ts   ← API de agendamiento
│   ├── blog/                        ← Listado + [slug]
│   ├── servicios/                   ← hotel, guarderia, adiestramiento, paseos
│   ├── sucursales/                  ← poniente, zona-norte, zona-norte/[slug]
│   ├── landing/                     ← 5 landings Google Ads
│   ├── calculadora/                 ← calculadora de precios
│   ├── faq/, galeria/, nosotros/, contacto/, pre-registro/
│   └── info/guarderia-hotel/        ← tarjeta imprimible
├── components/
│   ├── Header.tsx, Footer.tsx
│   ├── BookingButton.tsx            ← Cal.com embed
│   ├── WhatsAppButton.tsx           ← botón flotante
│   ├── SchemaMarkup.tsx             ← JSON-LD en <head>
│   ├── PonienteLeadForm.tsx         ← lista espera → WhatsApp
│   ├── GoogleMap.tsx, Counter.tsx
├── lib/
│   ├── constants.ts                 ← SITE, BRAND, BRANCHES, PRICES, SERVICES, NAV_ITEMS
│   ├── calcom-client.ts             ← wrapper Cal.com API
│   ├── qualification-engine.ts      ← validación requisitos
│   ├── schema.ts                    ← JSON-LD schemas
│   ├── blog-data.ts                 ← 4 posts estáticos
│   └── utils.ts                     ← formatPrice, cn
├── data/
│   └── neighborhoods.ts             ← 5 barrios Zona Norte con SEO
└── config/
    └── paws-status.json             ← capacidad por sucursal/servicio
```

---

## 11. CAPACIDAD ACTUAL (`src/config/paws-status.json`)

```json
{
  "poniente": {
    "hotel": { "full": true },
    "guarderia": { "full": true },
    "adiestramiento": { "full": false }
  },
  "zona-norte": {
    "hotel": { "full": false },
    "guarderia": { "full": false },
    "adiestramiento": { "full": false },
    "paseos": { "full": false }
  }
}
```

**Regla:** Todo aviso de "Cupo Lleno" debe incluir obligatoriamente un CTA a lista de espera.

---

## 12. BRANDING Y ESTILOS

### Colores (fuente: `src/app/globals.css` + `constants.ts`)
| Token | Valor | Uso |
|---|---|---|
| `primary` | `#547097` | Azul-gris principal |
| `primaryHover` | `#3F5471` | Hover/activo |
| `cream` | `#FFF8E7` | Fondo cálido |
| `text` | `#1F2937` | Texto principal |
| `textMuted` | `#4B5563` | Texto secundario |
| `accent` | `#E1306C` | Rosa (alertas, badges) |
| `accentOrange` | `#F4A261` | Naranja (CTA secundarios) |
| `bgLight` | `#F8F9FA` | Fondo neutro |

### Tipografía
- **Font:** Inter (Google Fonts), fallback system-ui

### Tono de comunicación
- Profesional, sofisticado, empático y técnico
- **Usar:** "Homestay", "Experiencia Insignia", "Lomitos", "Cuidado 24/7"
- **Evitar:** "perrera", "jaula", "primera sesión gratis" (anclar valor primero)
- Nunca ofrecer descuento por precio → responder con diferenciación

### Imágenes
- Siempre en formato WebP
- Calidad 80-85, peso <200KB
- Assets en `/public/img/`
- Fotos reales > imágenes generadas con IA

---

## 13. SEO Y SCHEMA

- **Robots:** allow `/`, disallow `/api/`
- **Sitemap:** dinámico (`src/app/sitemap.ts`) — incluye páginas estáticas + blog + barrios
- **Schemas JSON-LD:** LocalBusiness, Service, FAQPage, Article (`src/lib/schema.ts`)
- **E-E-A-T:** Experience, Expertise, Authority, Trustworthiness — obligatorio en contenido
- **Barrios Zona Norte** (páginas SEO local dinámicas):
  - Santa María la Ribera (`/sucursales/zona-norte/santa-maria-la-ribera`)
  - San Rafael
  - Tlatelolco
  - Buenavista
  - Zona Norte (general)
- **Landings Google Ads** (`/landing/`):
  - `adiestramiento-domicilio-polanco`
  - `cachorro-primerizo-polanco`
  - `guarderia-canina-cdmx`
  - `hotel-canino-cdmx`
  - `perro-jala-correa-polanco`

---

## 14. REGLAS DE DESARROLLO

### UI / Frontend
- **Mobile-first obligatorio** — tablas de precios → Cards apilables en móvil
- Iconos: Lucide-react (preferido sobre Heroicons por peso ligero)
- Iconos decorativos: `aria-hidden="true"` | Iconos con acción: `aria-label` descriptivo
- Servicios adicionales no incluidos en paquete base → label `"(costo adicional)"`
- Mostrar zona (Norte/Poniente) en toda diferenciación de precios

### Git / Deploy
- Mensajes de commit descriptivos: `fix(ui): update metrics for 2026 consistency`
- **No actualizar números en UI sin verificar meta-tags** (OpenGraph/Twitter Cards)
- Post-deploy: navegar URL de producción y validar Header + Cal.com

### Cal.com
- Validar sede (Norte/Poniente) y vacunas antes de agendar
- Tras acción exitosa: generar Summary con ID de reserva y link de cancelación
- Timezone: siempre `America/Mexico_City`

### Privacidad
- Dirección física exacta es un **Secret** — nunca en logs, código ni UI
- Usar siempre: `"Colonia San Simón Tolnahuac, CDMX"` como placeholder público

---

## 15. CONTENIDO Y BLOG

### Posts estáticos actuales (`src/lib/blog-data.ts`)
- `ansiedad-por-separacion-perros`
- `socializacion-cachorros-guia-completa`
- `elegir-hotel-canino-cdmx`
- `exploracion-libertad-paseos-marquesa-dinamos`

### Distribución de contenido semanal (IG/TikTok)
| Pilar | Posts/semana | Zona |
|---|:---:|---|
| Adiestramiento (educativo + casos) | 2 | Poniente |
| Guardería / Hotel / Día a día | 2 | Zona Norte |
| Paseos / Aventuras | 1 | Ambas |
| Comunidad / Social proof | 1 | Ambas |

**Regla editorial:** Posts de adiestramiento → CTA siempre a evaluación en Poniente. Posts de guardería/hotel → mencionar colonia y proximidad en Zona Norte.

---

## 16. MÉTRICAS DE CONFIANZA (Q2 2026)

- Rating: **4.9★** (25+ reseñas Google)
- Noches de hotel: **45+**
- Mascotas atendidas: **28+**
- Graduados de adiestramiento: **10+**
- Cupo máximo siempre: **5 lomitos**

---

## 17. REQUISITOS DE INGRESO (obligatorio para todas las sedes)

1. Cartilla de vacunación al día (Múltiple/Séxtuple + Antirrábica)
2. Bordetella y Giardia vigentes
3. Desparasitación interna y externa al día
4. Prueba de socialización (evaluación conductual previa)

---

## 18. DESTINOS DE PASEOS

- Bosque de Chapultepec (CDMX)
- Los Dinamos, Magdalena Contreras (CDMX)
- Parque del Centenario, Coyoacán (CDMX)
- Bosque de San Juan de Aragón, GAM (CDMX)
- Parque Bicentenario, Azcapotzalco (CDMX)
- La Marquesa, Parque Nacional (Estado de México) — aventura premium sábados

---

## 19. ARCHIVOS DE REFERENCIA ADICIONALES

Los siguientes archivos en el repositorio contienen guías operativas más detalladas:

| Archivo | Contenido |
|---|---|
| `Skills/PawsClub_Core_Master_Skill.md` | Reglas de oro innegociables |
| `Skills/PAWSCLUB_STANDARDS.skill.md` | Estándares UI/UX y branding |
| `Skills/CAL_PAWSCLUB.md` | Reglas Cal.com API |
| `Skills/paws-privacy-guard.md` | Privacidad dirección física |
| `Skills/SEO_EEAT_STANDARDS.skill.md` | Estándares E-E-A-T |
| `Skills/content-weekly-generator.md` | Generador contenido IG/TikTok |
| `Skills/internal-linking-rules.md` | Estrategia enlaces internos |
| `Contexto Paws/BRAND_BRIEF_V2.md` | Estrategia comercial completa + scripts de cierre |
| `Queue/rotation-state.json` | Estado rotación de contenido semanal |

---

## 20. GIT — RAMA DE DESARROLLO ACTIVA

- **Rama:** `claude/paws-club-documentation-ByNwd`
- **Repositorio GitHub:** `lawbrkr/pawsclub-v2`
- **Push:** `git push -u origin claude/paws-club-documentation-ByNwd`
