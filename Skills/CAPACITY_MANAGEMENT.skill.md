---
name: CapacityManagement
description: Reglas para manejar estados de "Cupo Lleno" en sucursales
globs: ["src/components/cards/**", "src/pages/**", "src/data/**"]
---

# Reglas de Agotamiento de Cupo
- **UI:** Cuando una sucursal esté marcada como "Lleno", el botón principal de reserva debe cambiar su label a "Unirse a lista de espera".
- **Visual:** Añadir un Badge o Overlay con el texto "Cupo Lleno" con alta visibilidad (ej. color rojo o ámbar según diseño).
- **Lógica:** Deshabilitar cualquier DatePicker o Calendario asociado específicamente a esa sucursal para evitar reservaciones accidentales.
- **Consistencia:** Si el estado es "Lleno" en Guardería, verificar si también aplica a Hotel (Default: Sí, a menos que se especifique lo contrario).