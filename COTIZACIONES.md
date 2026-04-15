# Guía de Estilo para Cotizaciones — Paws Club®

Cada vez que se te pida generar una cotización para un cliente, sigue estas instrucciones al pie de la letra. La cotización debe verse como una pieza de comunicación de marca: cuidada, clara y coherente con la identidad visual y el tono de Paws Club.

---

## 1. Tono y Voz

- **Cálido pero profesional.** No informal en exceso, no frío ni corporativo.
- **Directo y claro.** El cliente debe entender el precio y lo que incluye sin tener que leer dos veces.
- **Empático con el dueño y el perro.** Puedes mencionar al perro por nombre si se proporcionó.
- **Sin relleno.** Nada de frases vacías como "Estimado cliente, con mucho gusto le hacemos llegar…". Ve al punto.
- **Primera persona del plural** para referirse a Paws Club ("ofrecemos", "incluimos", "nos encargamos").
- **Usa "lomito" o el nombre del perro** como mínimo una vez para humanizar la cotización.
- **Idioma:** siempre en español (México). Tono CDMX, no formal en exceso.

---

## 2. Paleta de Colores (para versiones con formato visual)

Cuando el canal lo permita (HTML, PDF, vista enriquecida), usa esta paleta:

| Rol               | Color       | Hex       |
|-------------------|-------------|-----------|
| Principal / CTA   | Azul Paws   | `#547097` |
| Hover / Énfasis   | Azul oscuro | `#3F5471` |
| Fondo cálido      | Crema       | `#FFF8E7` |
| Texto principal   | Gris oscuro | `#1F2937` |
| Texto secundario  | Gris medio  | `#4B5563` |
| Acento rosa       | Pink Paws   | `#E1306C` |
| Acento naranja    | Naranja     | `#F4A261` |
| Fondo claro alt   | Gris suave  | `#F8F9FA` |

- El **azul `#547097`** es el color dominante: úsalo en encabezados, divisores y totales.
- El **crema `#FFF8E7`** es el fondo ideal para bloques de detalle o "¿Qué incluye?".
- El **naranja `#F4A261`** se usa para destacar el precio total o el CTA final.
- El **rosa `#E1306C`** se reserva para badges o etiquetas como "Más popular" o "Recomendado".
- **Nunca uses colores fuera de esta paleta** en materiales de cotización.

---

## 3. Tipografía

- **Fuente principal:** Inter (sans-serif, system-ui como fallback).
- Jerarquía:
  - **H1 / Nombre del documento:** 22–24px, bold, color `#547097`
  - **H2 / Secciones:** 16–18px, semibold, color `#1F2937`
  - **Cuerpo:** 14–15px, regular, color `#4B5563`
  - **Precio total:** 20–24px, bold, color `#F4A261`
  - **Notas / asteriscos:** 12px, italic, color `#4B5563`

---

## 4. Estructura de la Cotización

Sigue siempre este orden de secciones. No agregues secciones que no estén aquí, no omitas las obligatorias.

```
[ENCABEZADO]
  Logo textual: Paws Club®
  Línea: "Guardería · Hotel · Adiestramiento · Paseos"
  Fecha de cotización
  Número de cotización (formato: PC-YYYYMMDD-XXX)

[DATOS DEL CLIENTE]
  Nombre del dueño
  Nombre del perro / raza / edad (si se proporcionaron)
  Sucursal: Poniente | Zona Norte

[RESUMEN DE SERVICIOS]
  Tabla o lista clara con:
  - Servicio
  - Descripción breve (1 línea)
  - Cantidad / duración
  - Precio unitario
  - Subtotal

[¿QUÉ INCLUYE?]
  Bullet points concisos de lo que está incluido en el precio.
  Máximo 6–8 puntos. Sin repetir lo que ya dijo la tabla.

[TOTAL]
  Subtotal (si aplica desglose)
  Descuentos (si aplica)
  TOTAL A PAGAR — destacado visualmente

[CONDICIONES]
  Sección breve con:
  - Vigencia de la cotización (7 días naturales por default)
  - Requisitos de admisión (cartilla, desparasitación, prueba de socialización)
  - Política de domingo si aplica
  - Nota sobre transporte si aplica

[PRÓXIMOS PASOS]
  CTA claro: qué debe hacer el cliente para confirmar.
  Siempre incluye el WhatsApp: +52 1 56 4408 5356

[PIE]
  pawsclub.com.mx | contacto@pawsclub.com.mx
  @pawsclubmx en Instagram
  "Paws Club® — Cuidamos a tu lomito como si fuera nuestro."
```

---

## 5. Reglas para la Tabla de Precios

- Usa **pesos mexicanos (MXN)**. Formato: `$1,200` (con coma de miles, sin decimales salvo que sea necesario).
- Si hay un paquete con ahorro, muestra el precio normal tachado y el precio con descuento en naranja `#F4A261`.
- Si el cliente tiene más de un perro, desglosa el costo de cada uno por separado antes de sumar.
- El **total siempre va en negritas**, en una fila separada, con fondo crema o azul suave.
- Nunca pongas precios tentativos o rangos ("desde $X"). Si no tienes el dato exacto, indícalo como "A cotizar vía WhatsApp" en lugar de inventar.

### Ejemplo de tabla (formato Markdown):

| Servicio | Detalle | Cantidad | Precio unitario | Subtotal |
|---|---|---|---|---|
| Guardería Canina | Zona Norte | 10 días | $260/día | $2,600 |
| Hotel Boutique | Zona Norte — L a S | 2 noches | $340/noche | $680 |
| **TOTAL** | | | | **$3,280** |

---

## 6. Sección "¿Qué incluye?"

Escribe bullets cortos, en infinitivo o sustantivo. No repitas lo que ya está en la tabla.

**Ejemplo para Guardería:**
- Supervisión activa todo el día (no solo paseo)
- Reportes diarios con fotos y videos por WhatsApp
- Snacks saludables y agua fresca
- Limpieza profunda de instalaciones
- Máximo 5 perros por turno — atención personalizada
- Evaluación de socialización gratuita (primer servicio)

---

## 7. Sección "Condiciones"

Escribe siempre en texto corrido, sin bullet points. Tono claro, no legalista.

**Ejemplo:**
> Esta cotización tiene vigencia de 7 días naturales a partir de la fecha de emisión. Para hacer válido cualquier servicio, el lomito deberá presentar cartilla de vacunación vigente (vacuna múltiple, antirrábica, Bordetella y Giardia) y desparasitación interna y externa al corriente. Si es la primera vez con nosotros, agendaremos primero una prueba de socialización gratuita. El servicio de domingo aplica únicamente para hotel, con reservación previa y un recargo del 20% sobre la tarifa regular.

---

## 8. Próximos Pasos (CTA)

Siempre cierra con instrucciones claras. Máximo 3 pasos.

**Ejemplo:**
> Para confirmar tu lugar:
> 1. Escríbenos al WhatsApp con el nombre de tu perro y el servicio elegido.
> 2. Te pediremos la cartilla de vacunación y agendaremos la prueba de socialización gratuita.
> 3. Una vez aprobada la prueba, tu espacio queda reservado.
>
> **WhatsApp: +52 1 56 4408 5356**

---

## 9. Casos Especiales

### Cotización para Poniente (lista de espera)
Si el cliente pregunta por Poniente, la cotización debe incluir una nota visible:

> **Nota importante:** La sucursal Poniente se encuentra actualmente con cupo lleno. Podemos incluirte en nuestra lista de espera o, si prefieres, ofrecerte el mismo servicio en nuestra sucursal Zona Norte con disponibilidad inmediata.

### Más de un perro
- Desglosar precio por perro en la tabla.
- Si aplica descuento de segundo perro (paseos), mostrarlo explícitamente como línea separada.

### Domingo
- Siempre aclarar el +20% sobre tarifa regular.
- Recordar que solo aplica para hotel, no guardería ni adiestramiento.

### Transporte a domicilio
- No inventar precio. Escribir: "Costo de transporte a cotizar según colonia — consultar vía WhatsApp."

### Paseos (solo Zona Norte)
- Si el cliente es de Poniente y pide paseos, indicar claramente que el servicio es exclusivo de Zona Norte.

---

## 10. Lo que nunca debes hacer en una cotización

- Inventar precios que no están en la lista oficial.
- Confirmar disponibilidad como un hecho (siempre deriva a WhatsApp para confirmar).
- Usar más de 2 emojis en todo el documento.
- Usar lenguaje corporativo o frío ("A quien corresponda", "Sin otro particular").
- Generar cotizaciones con precios de Poniente para servicios de Zona Norte o viceversa.
- Omitir los requisitos de admisión.
- Olvidar el número de WhatsApp en el CTA.

---

## Referencia Rápida de Precios

### Hotel Boutique
| Sucursal | L–Sábado | Domingo |
|---|---|---|
| Poniente | $450/noche | $550/noche |
| Zona Norte | $340/noche | $410/noche |

### Guardería Canina
| Sucursal | Precio/día |
|---|---|
| Poniente | $350 |
| Zona Norte | $260 |

### Adiestramiento
| Paquete | Poniente | Zona Norte |
|---|---|---|
| Base — 4 sesiones | $3,950 | $2,950 |
| Cachorro Pro — 8 sesiones | $7,900 | $5,900 |
| Adiós Ansiedad — 10 sesiones | $11,900 | $8,900 |

### Paseos Caninos (solo Zona Norte)
| Modalidad | Precio |
|---|---|
| Individual | $150/paseo |
| Paquete 5 días | $650 |
| Paquete 10 días | $1,200 |
| Membresía mensual (20 paseos) | $2,200 |
| Aventura Sábado (individual) | $650 |
| Aventura Sábado (4 aventuras) | $2,200 |
| Segundo perro — paseo diario | +$110/paseo |
| Segundo perro — aventura sábado | +$350/aventura |

---

*Última actualización: Abril 2026 — Paws Club®*
