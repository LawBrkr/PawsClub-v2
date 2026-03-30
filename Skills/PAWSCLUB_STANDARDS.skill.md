---
name: PawsClubBrandStandards
description: Reglas de estilo y narrativa para el proyecto Paws Club
globs: ["src/components/**", "src/content/**", "public/locales/**"]
---

# Directrices de Paws Club
- **Tono de Voz:** Profesional, sofisticado, empático pero técnico. Evitar términos genéricos como "perrera" o "jaula". Usar "Homestay", "Experiencia Insignia", "Cuidado 24/7".
- **UI/UX:** Diseño Mobile-First obligatorio. Las tablas de precios deben convertirse en Cards apilables en móviles.
- **Validación Legal:** Siempre incluir la leyenda de "Paws Club es una marca registrada" en el footer o secciones de confianza.
- **Estrategia de Conversión:** Todo aviso de "Cupo Lleno" debe ir acompañado obligatoriamente de un CTA a la lista de espera.
# Iconografía y Assets
- **Librería Preferida:** Priorizar Lucide-React o Heroicons por su peso ligero y estética minimalista.
- **Estilo:** Todos los iconos deben usar el mismo grosor de trazo (stroke-width) y escala cromática definida en el Tailwind config (si aplica).
- **Accesibilidad:** Cada icono decorativo debe tener `aria-hidden="true"` y los iconos con acción deben incluir un `aria-label` descriptivo.
# Etiquetas de Servicios Adicionales
- [cite_start]Todo servicio que no sea parte del paquete base (ej. Transporte) debe llevar el label "(costo adicional)"[cite: 10].
- Usar estilos de tipografía secundaria definidos en el Tailwind config para estas aclaraciones.
# Gestión de Precios Dinámicos
- Los precios deben mostrarse claramente indicando la zona (Norte/Poniente) si existe diferenciación.
- [cite_start]Todo paquete de adiestramiento debe incluir el desglose de sesiones y si incluye servicio a domicilio.
- [cite_start]Mantener el uso de "Experiencia Insignia" para paquetes premium.
# Validación Legal (Actualizado)
- ELIMINAR: Cualquier variante larga antigua.
- USAR SIEMPRE: "Paws Club es una marca registrada".
- UBICACIÓN: Footer y secciones de cierre de ventas.
---
name: PawsClub_Metrics_Standard
description: Reglas para la actualización de métricas de confianza.
---
- **Realismo Temporal:** Las métricas deben ser coherentes con la fecha de inicio (Enero 2026).
- **Nomenclatura:** Preferir siempre "Lomitos" sobre "Perros" para mantener el tono empático.
- **Validación:** Al cambiar una métrica, verificar que el diseño responsive (flex-col en móvil) no se desborde.
---
name: PawsClub_Deployment_Protocol
description: Reglas para sincronización con el repositorio principal.
---
- **Git Flow:** Cada cambio debe incluir un mensaje de commit descriptivo (ej. "fix(ui): update metrics for 2026 consistency").
- **SEO Sync:** Queda estrictamente prohibido actualizar números en la UI sin verificar su consistencia en los meta-tags de redes sociales (OpenGraph/Twitter Cards).
- **Final Health Check:** Tras el deploy, el agente debe navegar por la URL de producción para validar que los componentes críticos (Headers, Cal.com) cargan correctamente.