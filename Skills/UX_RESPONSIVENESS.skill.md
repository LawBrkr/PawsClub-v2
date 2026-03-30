---
name: UX_RESPONSIVENESS.skill
description: Guía de respuesta UI/UX para Paws Club (Mobile First)
---

# Requerimientos de UX y Responsividad

1. **Enfoque móvil (375px):** Las imágenes Hero y componentes siempre deben iniciar con un foco optimizado en móviles, ajustando `object-position` para asegurar que el contenido crítico (como los perros) se vea completo, usando `object-[50%_90%]` u `object-bottom` de ser necesario.
2. **Priorización de sustrato visual:** Evitar que en móviles se corten elementos fundamentales de la marca Paws Club.
3. **Escalamiento:** Las utilidades de Tailwind (como `md:` o `lg:`) deben usarse para relajar o reacomodar imágenes en pantallas más grandes.
