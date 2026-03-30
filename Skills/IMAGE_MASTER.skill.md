---
name: ImageMaster
description: Reglas consolidadas para coherencia visual, rendimiento y responsividad de imágenes en Paws Club.
tools: [browser, image_gen, image_editor, terminal]
---
# Reglas de ORO: Estilo, Performance y Responsividad

## 1. Estética de Marca
- Siempre usar una iluminación cálida y natural.
- Las mascotas deben lucir felices, saludables y bien cuidadas.
- Estilo fotográfico realista y premium (no stock genérico).
- Prohibido incluir texto dentro de las imágenes.

## 2. Visibilidad y Responsividad (Confianza)
- Las imágenes que muestran una conexión humano-mascota deben ser visibles al 100% en el "abrazamiento" o el "foco de interacción".
- No permitir que el texto superpuesto cubra los rostros de las mascotas o las personas.
- Validar siempre en viewports Desktop (1440px) y Mobile (375px) antes de entregar.
- Priorizar el uso de `background-position` precisos o `object-fit: contain` para evitar el cropeado accidental.

## 3. Optimización y Performance (Límites Estrictos)
- Todas las imágenes para web deben entregarse obligatoriamente en formato **WebP** con un nivel de calidad de 80-85.
- Peso máximo absoluto para imágenes de cabecera (header) y principales: **200KB**.
- Asegurar que cualquier nueva imagen cumpla estas reglas antes de subirla o integrarla.
- El agente debe usar la terminal para verificar el tamaño del archivo resultante antes de dar por completada cualquier integración.
