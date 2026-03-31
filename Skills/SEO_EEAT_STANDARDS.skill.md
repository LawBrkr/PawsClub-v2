---
name: "Paws Club SEO & E-E-A-T Standards"
description: "Estándares obligatorios para la creación de contenido y SEO local."
triggers: ["schema", "blog", "seo", "sucursal", "landing page"]
---

# Paws Club SEO & E-E-A-T Standards

Este documento define los lineamientos obligatorios para asegurar que el contenido de Paws Club cumpla con los estándares de Google (E-E-A-T) y optimización de SEO Local.

## Reglas Globales de SEO para Paws Club

1.  **Autoría (E-E-A-T):** Nunca publicar artículos anónimos. Todo post de blog debe firmarse explícitamente como "Equipo Paws Club — Especialistas en bienestar canino".
2.  **Prueba Social Explicita:** Prohibido usar métricas genéricas (ej. "+45 perros"). Usar siempre calificaciones reales ("4.9★ en Google") y métricas de escasez ("Cupo exclusivo de 5").
3.  **Schema Markup:** Toda página que represente una sucursal física debe inyectar un script de tipo `application/ld+json` con la entidad `LocalBusiness`, incluyendo `openingHours`, `priceRange`, y `address`.

## 1. Local SEO & Schema.org
Para cada página de sucursal o servicio, se deben implementar los siguientes esquemas:
- **LocalBusiness / PetStore:** Incluir `address`, `telephone`, `openingHours`, y `geo` coordinates.
- **Service:** Detallar servicios como "Hotel Canino", "Adiestramiento", y "Guardería".
- **Review / AggregateRating:** Mostrar pruebas sociales reales para mejorar el CTR en las SERPs.

## 2. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- **Experiencia:** Usar siempre fotografías reales del "staff" interactuando con los perros. Evitar el exceso de stock photos genéricas.
- **Pericia:** Las páginas de servicios técnicos (como adiestramiento) deben mencionar las certificaciones de los entrenadores.
- **Autoridad:** Mantener consistencia en el nombre, dirección y teléfono (NAP) en todo el sitio y perfiles externos.
- **Confianza:** Enlaces claros a Términos y Condiciones, Aviso de Privacidad y protocolos de seguridad canina.

## 3. SEO de Contenido (Blog & Landing Pages)
- **Keyword Research:** Enfoque en términos transaccionales de intención local (ej: "hotel para perros cerca de mi", "adiestramiento canino en [zona]").
- **Estructura Semántica:** 
  - Un solo `H1` por página.
  - `H2` para beneficios y servicios principales.
  - `H3` para detalles específicos.
- **Meta-datos:** Títulos de menos de 60 caracteres y descripciones de menos de 160 que incluyan la propuesta de valor y la ubicación.

## 4. Auditoría de Métricas de Confianza (Trust Signals)
Actualizar periódicamente los contadores de "perros felices servidos", "noches de hotel" y "graduados de adiestramiento" en la UI para reflejar el crecimiento real del negocio.

