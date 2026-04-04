---
name: content-weekly-generator
description: >
  Genera los 4 posts semanales de Paws Club (Instagram + TikTok) cada domingo.
  Lee ideas aprobadas de Notion (Marca="Paws Club" + Estado="Aprobado"),
  produce captions, hashtags y visual brief según la guía de voz de marca,
  actualiza los entries de Notion a "En revisión" y guarda archivos .md en
  Queue/paws/. Ejecutar cada domingo por la mañana para la semana entrante.
---

# Weekly Content Generator — Paws Club

## Cuándo ejecutar
Cada domingo. Genera los posts para Lunes, Miércoles, Viernes y Domingo de
la **semana siguiente**.

---

## Proceso paso a paso

### Paso 1 — Leer contexto de marca

Leer ambos archivos ANTES de generar cualquier contenido:

1. `fase0_brief_maestro.md` — calendario semanal de pilares, ejemplos
   canónicos por pilar, IDs de Notion
2. `Skills/copy-style-paws.md` — tono de voz, vocabulario aprobado/prohibido,
   keywords mandatorias, fórmulas de copy

---

### Paso 2 — Calcular fechas de la semana entrante

Si hoy es domingo `YYYY-MM-DD`, las fechas de publicación son:

| Post | Pilar | Fecha |
|---|---|---|
| Lunes | P01 Educativo | hoy + 1 día |
| Miércoles | P02 Día a día | hoy + 3 días |
| Viernes | P03 Servicios | hoy + 5 días |
| Domingo | P04 Comunidad | hoy + 7 días |

---

### Paso 3 — Consultar Notion DB por ideas aprobadas

**Database ID:** `64bc7188ebd54119b1379710b57f7078`

Usar `notion-search` o `notion-fetch` para consultar la base de datos con
los siguientes filtros obligatorios:

- `Marca` = `"Paws Club"` — **ignorar cualquier entry con Marca = "Signalia"
  o sin marca**
- `Estado` = `"Aprobado"` — **ignorar Draft, En revisión, Publicado, Archivado**

De los entries obtenidos, seleccionar hasta 4 (los más recientes o los que
tengan `Fecha sugerida` más próxima a la semana actual).

**Asignación de pilares:**
- Si el entry tiene campo `Pilar` asignado → respetar esa asignación
- Si el entry NO tiene `Pilar` → inferir el pilar más apropiado según el
  contenido del `Título / Hook` y `Notas`:
  - Tip, dato educativo, comportamiento canino → P01 Educativo
  - Escena real, detrás de cámaras, momento del día → P02 Día a día
  - Beneficio específico de Hotel/Guardería/Adiestramiento/Transporte → P03 Servicios
  - Pregunta, efeméride, raza del día → P04 Comunidad

**Si hay menos de 4 entries aprobados:**
- Para los pilares sin entry de Notion: usar los ejemplos canónicos del
  `fase0_brief_maestro.md` y crear un nuevo entry en Notion con el contenido
  generado (Estado = "En revisión").

---

### Paso 4 — Leer rotación P03

Leer `Queue/rotation-state.json`.

```json
{
  "paws_p03_index": 0,
  "p03_services": ["Hotel", "Guardería", "Adiestramiento", "Transporte"],
  "last_generated_week": null
}
```

El campo `paws_p03_index` indica qué servicio toca esta semana:
- 0 → **Hotel**
- 1 → **Guardería**
- 2 → **Adiestramiento**
- 3 → **Transporte**

**Prevención de duplicados:** Si `last_generated_week` ya contiene la fecha
del lunes de esta semana → detener ejecución y notificar que ya se generó
el contenido esta semana.

---

### Paso 5 — Generar contenido para cada post

Producir para cada post:
- **Caption:** texto listo para copiar/pegar (~100-200 palabras), voz cercana,
  frases cortas, máx 3 líneas en móvil por párrafo
- **Hashtags:** 4-6 hashtags (siempre incluir `#PawsClub`)
- **Visual brief:** descripción concreta para diseñador o generación por IA

#### Reglas de copy que SIEMPRE aplicar

Del archivo `Skills/copy-style-paws.md`:

| Regla | Detalle |
|---|---|
| Vocabulario | Usar "lomitos", nunca "perros" en contexto casual |
| Keywords | "Sin jaulas" · "Supervisión 24/7" · "Cuidado personalizado" · "Zona Norte" — incluir al menos 1 cuando aplique |
| Prohibido | perrera · jaulas · kennels · corrales · "staff" · "empleados" |
| Emoji | Máximo 1 por párrafo; preferir 🐾 y 🏠 |
| Marca | Siempre "Paws Club" (con espacio, capitalized) |
| Tono | Cercano + profesional + empático + enfocado en seguridad/libertad |

---

#### P01 — Educativo (Lunes · Instagram · Carrusel 3-5 slides)

- **Slide 1 (Hook):** dato sorprendente o pregunta empática que detenga el scroll
- **Slides 2-4:** desarrollo educativo del tema (socialización, salud, comportamiento)
- **Slide final:** CTA → `"Agenda la experiencia de tu lomito"`
- **Caption:** presenta el tema + invita a deslizar el carrusel
- **Hashtags ejemplo:** `#PawsClub #guarderiaCDMX #[tema] #comportamientoCanino #lomitos`

En el archivo `.md`, detallar los slides en la sección `## Notas`.

---

#### P02 — Día a día (Miércoles · Instagram + TikTok · Foto real)

- **Caption only** — el operador provee la foto
- Tono: auténtico, escena real de la guardería, cálido y cercano
- Incluir pregunta al final para fomentar comentarios
- **Visual brief:** descripción de qué tipo de foto seleccionar del día
  (composición, momento, número de lomitos, luz)
- **Nota obligatoria en archivo:** `"Foto la provee el operador — seleccionar
  foto que muestre [descripción]"`

---

#### P03 — Servicios (Viernes · Instagram + TikTok · Reel o Post único)

- **Servicio de esta semana:** [leer de rotation-state.json]
  - **Hotel:** enfatizar "sin jaulas", cama propia, paseos, vacaciones para el lomito
  - **Guardería:** socialización diaria, equilibrio emocional, regresa feliz
  - **Adiestramiento:** técnicas positivas, resultados concretos, confianza
  - **Transporte:** seguridad en traslado, puntualidad, sin estrés
- **Keywords obligatorias:** "Sin jaulas" Y "Supervisión 24/7"
- **Visual brief:** tarjeta gráfica con paleta arcilla `#C4876A` + lino `#F5F0E8`,
  serif para titular, nombre del servicio destacado
- **CTA:** específico al servicio (no genérico)

---

#### P04 — Comunidad (Domingo · Instagram · Post único)

- Tema: efeméride canina, día internacional de una raza, pregunta de comunidad
  o reflexión sobre la relación dueño-lomito
- **SIEMPRE terminar con una pregunta** que invite a comentar o etiquetar
- **Sin CTA de venta** — este post es 100% engagement
- **Hashtags ejemplo:** `#PawsClub #PerrosCDMX #[DíaDelRaza o tema] #lomitos`

---

### Paso 6 — Actualizar entries en Notion

Para cada entry de Notion usado, ejecutar `notion-update-page` con los
siguientes campos:

| Campo Notion | Valor |
|---|---|
| `Caption` | caption generado |
| `Hashtags` | hashtags generados (cadena de texto) |
| `Visual brief` | visual brief generado |
| `Fecha sugerida` | fecha del post (lunes / miércoles / viernes / domingo) |
| `Canal` | `["Instagram"]` (P01, P04) o `["Instagram", "TikTok"]` (P02, P03) |
| `Formato` | `"Carrusel"` (P01) · `"Foto real"` (P02) · `"Reel"` (P03) · `"Post único"` (P04) |
| `Estado` | cambiar `"Aprobado"` → `"En revisión"` |

Si el pilar era fallback (sin entry Notion), crear nueva página con
`notion-create-pages` incluyendo todos los campos anteriores más
`Marca = "Paws Club"` y `Pilar = "[pilar correspondiente]"`.

---

### Paso 7 — Guardar archivos .md en Queue/paws/

Crear un archivo `.md` por canal. Naming:
`Queue/paws/YYYY-MM-DD_paws_P0X_[ig|tiktok].md`

**Archivos generados por semana (6 total):**

```
Queue/paws/
├── YYYY-MM-DD_paws_P01_ig.md         ← Lunes
├── YYYY-MM-DD_paws_P02_ig.md         ← Miércoles
├── YYYY-MM-DD_paws_P02_tiktok.md     ← Miércoles
├── YYYY-MM-DD_paws_P03_ig.md         ← Viernes
├── YYYY-MM-DD_paws_P03_tiktok.md     ← Viernes
└── YYYY-MM-DD_paws_P04_ig.md         ← Domingo
```

**Formato de cada archivo:**

```markdown
---
marca: paws
pilar: P01
canal: ig
fecha_sugerida: YYYY-MM-DD
estado: draft
notion_id: [page-id del entry de Notion, o "generado" si es fallback]
---

## Caption
[texto completo listo para copiar/pegar]

## Hashtags
[hashtags separados por espacios]

## Visual brief
[descripción para diseñador o generación IA]

## Notas
[instrucciones especiales: slides del carrusel, foto del operador, etc.]
```

Para archivos `_tiktok.md`: mismo caption e instrucciones que `_ig.md` pero
agregar en `## Notas` la indicación `"Adaptar a formato vertical 9:16 para TikTok"`.

---

### Paso 8 — Actualizar rotation-state.json

```json
{
  "paws_p03_index": (índice_actual + 1) % 4,
  "p03_services": ["Hotel", "Guardería", "Adiestramiento", "Transporte"],
  "last_generated_week": "YYYY-MM-DD"
}
```

Donde `last_generated_week` es la fecha del lunes de la semana generada.

---

## Checklist de validación final

Antes de terminar, verificar:

- [ ] 4 posts generados (P01 lunes · P02 miércoles · P03 viernes · P04 domingo)
- [ ] 6 archivos `.md` creados en `Queue/paws/`
- [ ] Entries de Notion actualizados con `Estado = "En revisión"`
- [ ] `rotation-state.json` actualizado con nuevo índice y `last_generated_week`
- [ ] Keywords mandatorias presentes donde corresponde (P03 siempre lleva "Sin jaulas")
- [ ] Ningún post usa vocabulario prohibido (jaulas · perrera · kennels · corrales)
- [ ] CTA presente en P01, P02, P03 (ausente en P04)
- [ ] P04 termina con pregunta abierta
