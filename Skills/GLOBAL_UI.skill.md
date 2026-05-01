---
name: GlobalUIManager
description: Reglas para la gestión y actualización de componentes de UI globales.
tools: [file_editor, terminal]
---
# Reglas de Actualización de UI
- Localizar siempre el archivo de componente global original (`.js`, `.jsx`, `.vue`, etc.). No hacer cambios en archivos de página individuales.
- Reemplazar imágenes/iconos estáticos con formatos vectoriales (SVG) siempre que sea posible para escalabilidad.
- Generar un diff de código y una captura de pantalla comparativa para cada cambio.
- Probar el componente en al menos 3 páginas diferentes (ej. Home, Nosotros, Contacto) antes de dar la tarea por terminada para asegurar la aplicación global.
# Reglas de Manejo de Assets Locales
- Antes de referenciar un asset en el código, usar la terminal para verificar su existencia y formato.
- Para proyectos web, mapear rutas absolutas de disco (C:\...) a rutas relativas del servidor web (/img/...).
- Si el logo es PNG, asegurar que el atributo 'alt' sea "Chat de WhatsApp" para accesibilidad.
---
name: StrictResponsiveValidation
description: Regla de bloqueo para evitar recortes de sujetos en imágenes.
---
# Validación Obligatoria de Imágenes
- ANTES de dar por terminada una tarea que involucre imágenes 'Hero' o de fondo, el agente DEBE:
    1. Abrir el Navegador Integrado.
    2. Usar las Herramientas de Desarrollador para forzar un viewport móvil (375px de ancho).
    3. [cite_start]Tomar una captura de pantalla y confirmar que el sujeto principal (mascota o humano) no esté recortado por los bordes de la pantalla ni cubierto por texto superpuesto.
---
name: StrictAntiRegression
description: Proceso obligatorio para evitar romper layouts al arreglar otros.
---
# Protocolo de Validación Global
- Queda PROHIBIDO asumir que una solución CSS funciona para imágenes con composiciones diferentes.
- Cada cambio en un componente global (como un Header o Hero) REQUIERE una auditoría de **TODAS** las páginas que lo consumen.
- [cite_start]El agente DEBE generar una **Matriz de Validación Visual** (capturas de pantalla) mostrando el estado de *todas* las secciones afectadas en móvil (375px) y escritorio (1440px) antes de marcar la tarea como completa.