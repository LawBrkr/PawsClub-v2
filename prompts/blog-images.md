# Prompts Gemini — Imágenes de blog Paws Club

Este documento contiene los prompts listos para pegar en Gemini (Imagen 3 / Nano Banana) para generar las imágenes hero de cada post del blog.

## Cómo usarlo

1. Copia el prompt completo del post que vas a generar.
2. Pégalo en Gemini con generación de imágenes activada.
3. **Aspect ratio: 16:9** (ya está pedido en cada prompt — si Gemini te pide elegir, selecciona 16:9 manualmente).
4. Descarga la imagen como `.webp` (si Gemini exporta JPG/PNG, conviértelo con squoosh.app o similar).
5. Renombra al **nombre exacto** indicado en cada sección (es importante porque el código apunta a ese nombre).
6. Pégala en `/public/img/blog/`.
7. Avísame "ya están" y actualizo los paths en `blog-data.ts`.

---

## Estilo común a todas las imágenes

Todas las imágenes deben verse como una colección coherente — no como collage de distintos lugares. Esta es la **dirección de arte compartida** que todos los prompts incluyen:

- **Estilo:** fotografía cinematográfica editorial, no ilustración.
- **Iluminación:** luz natural cálida, hora dorada o luz suave de ventana, jamás flash duro.
- **Paleta:** tonos cálidos crema (`#FFF8E7`) con acentos de azul desaturado (`#547097`) y notas de naranja terracota (`#F4A261`). Evitar saturación alta.
- **Composición:** enfoque selectivo, fondo con bokeh suave, sujeto principal a la izquierda o centro, espacio para texto a la derecha.
- **Importante:** sin texto, sin logos, sin marcas de agua, sin manos humanas anti-naturales, perros con anatomía correcta.
- **Contexto:** Ciudad de México urbana premium (Polanco, Lomas, Lindavista) — interiores cálidos, parques arbolados, no escenarios genéricos de stock.

---

## 1. Guardería para perros en Polanco

**Slug:** `guarderia-perros-polanco-que-revisar`
**Nombre del archivo final:** `blog-guarderia-perros-polanco.webp`
**Categoría:** Tips
**Tema:** Cómo elegir guardería en Polanco, cupo limitado, no jaulas

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Una guardería canina premium en interior cálido tipo casa-loft de Polanco CDMX. Tres perros de razas diferentes (un Golden Retriever, un Schnauzer mediano y un mestizo pequeño tipo French Poodle) descansando relajados sobre una alfombra crema, en una sala con muebles modernos minimalistas en tonos beige y madera clara. Luz suave de ventana grande lateral, hora dorada de tarde. Tonos cálidos crema con acento azul desaturado en un cojín del fondo. Enfoque selectivo en los perros, fondo con ligero bokeh. Sin jaulas visibles, sin personas, ambiente sereno y cuidado. Sin texto ni logos. Estilo editorial profesional, no ilustración.
```

---

## 2. Adiestramiento canino en Lindavista (cachorro)

**Slug:** `adiestramiento-canino-lindavista-cuando-empezar`
**Nombre del archivo final:** `blog-adiestramiento-cachorro-lindavista.webp`
**Categoría:** Entrenamiento
**Tema:** Cuándo empezar adiestramiento, ventana crítica de socialización en cachorros

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Un cachorro Labrador color crema de aproximadamente 10 semanas, sentado en una sala de casa cálida CDMX, mirando con atención y curiosidad hacia un objeto fuera de cuadro a la derecha (insinuando atención al tutor). El cachorro está sobre un piso de madera clara, cerca de una alfombra texturizada beige. Luz natural suave entrando por una ventana, hora dorada matutina. Paleta cálida crema con un acento azul polvo en una almohada del fondo. Profundidad de campo selectiva, bokeh detrás del cachorro. Composición que deje espacio a la derecha. Sin personas, sin texto, sin logos. Estilo fotográfico editorial profesional, alta nitidez en el cachorro.
```

---

## 3. Hotel canino sin jaulas — comparativa de zonas

**Slug:** `hotel-canino-sin-jaulas-cdmx-comparativa-zonas`
**Nombre del archivo final:** `blog-hotel-canino-comparativa-zonas.webp`
**Categoría:** Tips
**Tema:** Hotel sin jaulas, comparativa zona norte vs poniente CDMX

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Un perro mediano tipo Border Collie blanco y negro durmiendo profundamente sobre una cama suave de hotel canino premium, dentro de una habitación tipo casa boutique con paredes color crema, una ventana lateral con luz dorada de atardecer, y una manta texturizada en tonos cálidos beige y arena. Sin jaulas visibles. Espacio sereno y hogareño, no comercial. Decoración mínima: una lámpara cálida y un cuadro abstracto en tonos azul desaturado. Profundidad de campo selectiva, enfoque suave en el perro durmiendo. Sin personas, sin texto, sin logos. Estilo editorial profesional, hora dorada.
```

---

## 4. Ansiedad por separación en perros

**Slug:** `ansiedad-por-separacion-perros`
**Nombre del archivo final:** `blog-ansiedad-separacion.webp`
**Categoría:** Comportamiento
**Tema:** Identificar y tratar ansiedad por separación

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Un perro mediano tipo Beagle o mestizo de orejas caídas, recostado junto a una puerta cerrada de un departamento moderno CDMX, con la cabeza apoyada en el suelo y mirada melancólica pero serena (no sufriendo, sino calma reflexiva). La luz entra suavemente por debajo de la puerta y desde una ventana lateral, creando un mood emotivo e íntimo. Piso de madera clara, una alfombrita en tonos crema cerca del perro. Paleta cálida desaturada, sutil azul en la sombra. Profundidad de campo cerrada, foco en la cara del perro. Sin personas, sin texto, sin logos. Estilo cinematográfico editorial, mood reflexivo no triste.
```

---

## 5. Socialización de cachorros — guía completa

**Slug:** `socializacion-cachorros-guia-completa`
**Nombre del archivo final:** `blog-socializacion-cachorros.webp`
**Categoría:** Entrenamiento
**Tema:** Ventana crítica 3-14 semanas, exposición a estímulos

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Tres cachorros de razas diferentes (un Golden, un French Bulldog y un mestizo pequeño peludo) jugando juntos sobre pasto verde de un parque arbolado tipo Bosque de Chapultepec o Parque México en CDMX, en una mañana de luz dorada filtrada por hojas de árboles. Los cachorros están en pleno juego social, uno explorando una hoja caída, otro corriendo, otro observando. Tonos cálidos verde oliva, crema y dorados del bosque. Profundidad de campo media, bokeh suave de árboles al fondo. Sin personas, sin texto, sin logos, sin correas visibles. Estilo editorial profesional, captura de momento natural.
```

---

## 6. Cómo elegir hotel canino en CDMX

**Slug:** `elegir-hotel-canino-cdmx`
**Nombre del archivo final:** `blog-elegir-hotel-canino.webp`
**Categoría:** Tips
**Tema:** Criterios para elegir hotel canino, qué revisar

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Vista interior de una recepción de hotel canino boutique en CDMX, con un mostrador de madera clara, una lámpara cálida, plantas tipo monstera, y un perro Schnauzer gris parado tranquilamente en primer plano siendo recibido (sin que se vea ninguna persona, solo se insinúa una mano sosteniendo una correa fuera de cuadro). Atrás se ve una sala de descanso con almohadas beige. Luz natural suave de ventana lateral, paleta cálida crema con acentos de verde planta y azul desaturado en un detalle de mostrador. Sin texto, sin logos visibles, sin caras humanas. Estilo editorial premium, no comercial agresivo.
```

---

## 7. Aventuras en La Marquesa y Los Dinamos

**Slug:** `exploracion-libertad-paseos-marquesa-dinamos`
**Nombre del archivo final:** `blog-aventuras-marquesa-dinamos.webp`
**Categoría:** Aventuras
**Tema:** Paseos de fin de semana en bosque, libertad, exploración

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Un perro mediano-grande tipo Pastor Australiano o mestizo activo, corriendo libre por un sendero de bosque de oyamel en La Marquesa o Los Dinamos, Estado de México. Luz dorada matutina filtrándose entre los árboles altos, neblina baja sutil al fondo. El perro está en pleno movimiento, capturado con velocidad de obturación que congela la acción pero conserva un poco de energía visual. Tonos verdes del bosque, dorados de la luz, terracota del sendero. Profundidad de campo amplia que muestre el entorno natural. Sin personas, sin correas visibles, sin texto, sin logos. Estilo cinematográfico de aventura outdoor, sensación de libertad.
```

---

## 8. Adiestramiento — impacto emocional

**Slug:** `impacto-emocional-adiestramiento-pro`
**Nombre del archivo final:** `blog-adiestramiento-impacto-emocional.webp`
**Categoría:** Bienestar
**Tema:** Adiestramiento como vínculo emocional, comunicación, refuerzo positivo

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Un perro adulto mediano tipo Labrador chocolate, sentado en posición de obediencia relajada, mirando con atención y conexión emocional fuera de cuadro a la izquierda (insinuando contacto visual con su tutor). El perro está sobre un piso de madera clara de una sala de casa cálida CDMX. Luz dorada de ventana grande, hora dorada de tarde. Composición con espacio a la izquierda para que la mirada del perro tenga aire. Paleta cálida tierra y crema, sutil acento azul en un cojín lejano. Profundidad de campo cerrada, máxima nitidez en los ojos del perro. Sin personas visibles, sin correas, sin collares de castigo, sin texto, sin logos. Estilo editorial emocional, mood de conexión y respeto.
```

---

## 9. Ecosistema Paws Club

**Slug:** `ecosistema-paws-club-bienestar-total`
**Nombre del archivo final:** `blog-ecosistema-paws-club.webp`
**Categoría:** Paws Club
**Tema:** Integración de servicios, ecosistema, bienestar total

### Prompt

```
Fotografía editorial cinematográfica, aspect ratio 16:9. Tres perros distintos (un Golden Retriever adulto, un Pomerania pequeño y un mestizo mediano tipo Beagle) descansando relajados juntos en una sala amplia tipo loft moderno CDMX, cada uno en su espacio (cama, alfombra, sillón) pero compartiendo el mismo ambiente sereno. Decoración minimalista cálida: madera clara, almohadas crema, una manta texturizada beige, una planta verde grande tipo monstera al fondo. Luz natural suave de ventanas grandes laterales, hora dorada. Paleta cálida crema dominante con acento azul desaturado en una almohada y verde de la planta. Profundidad de campo selectiva, los tres perros nítidos pero el fondo con bokeh suave. Sin personas, sin texto, sin logos. Estilo editorial premium, sensación de comunidad y bienestar compartido.
```

---

## Cuando termines de generar

Avísame "**ya generé las imágenes**" y yo:

1. Verifico que los 9 archivos existen en `/public/img/blog/` con el nombre correcto.
2. Actualizo `src/lib/blog-data.ts` para que cada post apunte a su imagen nueva.
3. Verifico que el build pase.

Si alguna imagen no te convence, regrésame el prompt que ajustamos y la regeneras hasta que te late.
