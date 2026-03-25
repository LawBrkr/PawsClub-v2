export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ansiedad-por-separacion-perros",
    title: "Ansiedad por Separación en Perros: Cómo Identificarla y Tratarla",
    excerpt:
      "Descubre las señales de ansiedad por separación en tu perro y aprende técnicas efectivas para ayudarlo a sentirse más seguro cuando no estás.",
    date: "2026-03-15",
    author: "Paws Club",
    category: "Comportamiento",
    image: "/img/perro_alojado_sobre_cama_en_casa.webp",
    readTime: "5 min",
    content: `La ansiedad por separación es uno de los problemas de comportamiento más comunes en perros. Afecta a un estimado del 20-40% de los perros que acuden a consultas de comportamiento.

## ¿Qué es la ansiedad por separación?

Es un estado de estrés que experimenta tu perro cuando se queda solo o separado de sus figuras de apego (generalmente tú). No es un capricho ni una venganza — es malestar genuino.

## Señales comunes

Las señales más frecuentes incluyen: ladrido o aullido excesivo cuando te vas, destrucción de objetos (especialmente cerca de puertas y ventanas), hacer sus necesidades dentro de casa a pesar de estar entrenado, jadeo excesivo, babeo, intentos de escape, y negarse a comer cuando está solo.

## ¿Qué puedes hacer?

El primer paso es no castigar. Tu perro no lo hace por maldad. Algunas estrategias que funcionan incluyen: desensibilización gradual (salir por periodos cada vez más largos), enriquecer su ambiente con juguetes interactivos, establecer una rutina predecible, y en casos severos, consultar con un especialista en comportamiento.

## ¿Cómo ayuda la guardería?

La guardería canina es una excelente herramienta complementaria. En Paws Club, tu perro está acompañado, socializa y se mantiene activo durante el día, reduciendo significativamente los episodios de ansiedad.`,
  },
  {
    slug: "socializacion-cachorros-guia-completa",
    title: "Socialización de Cachorros: Guía Completa para Papás Primerizos",
    excerpt:
      "La ventana de socialización de tu cachorro se cierra rápido. Aprende cómo aprovecharla al máximo para tener un perro equilibrado y seguro.",
    date: "2026-03-08",
    author: "Paws Club",
    category: "Entrenamiento",
    image: "/img/Pome_feliz_en_parque.webp",
    readTime: "7 min",
    content: `La socialización es el proceso más importante en la vida de un cachorro. La ventana crítica va de las 3 a las 14 semanas de vida, y lo que tu cachorro experimente (o no) en este periodo marcará su temperamento para siempre.

## ¿Por qué es tan importante?

Un cachorro correctamente socializado será un adulto seguro, confiado y capaz de manejar situaciones nuevas sin miedo ni agresividad. Un cachorro sin socialización tendrá más probabilidades de desarrollar miedos, reactividad y problemas de comportamiento.

## ¿A qué debe exponerse tu cachorro?

Personas de diferentes edades, géneros y apariencias. Otros perros (vacunados y equilibrados). Diferentes superficies, sonidos y ambientes. Vehículos, bicicletas, patinetas. El veterinario (¡con experiencias positivas!).

## Errores comunes

Forzar al cachorro a interactuar cuando tiene miedo, exponerlo a demasiados estímulos de golpe, y esperar a que tenga todas las vacunas para sacarlo (la socialización no requiere contacto directo con perros desconocidos).

## ¿Cómo ayuda Paws Club?

Nuestro servicio de adiestramiento incluye socialización asistida con perros mentor equilibrados. Tu cachorro aprende de perros que ya saben comportarse, en un ambiente controlado y seguro.`,
  },
  {
    slug: "elegir-hotel-canino-cdmx",
    title: "Cómo Elegir un Hotel Canino en CDMX: Lo Que Debes Revisar",
    excerpt:
      "No todos los hoteles caninos son iguales. Conoce los criterios clave para elegir el mejor hospedaje para tu perro en Ciudad de México.",
    date: "2026-02-28",
    author: "Paws Club",
    category: "Tips",
    image: "/img/hotel.webp",
    readTime: "4 min",
    content: `Dejar a tu perro en un hotel canino puede generar ansiedad — sobre todo la primera vez. Elegir bien es fundamental para tu tranquilidad y el bienestar de tu lomito.

## Criterios esenciales

Visita las instalaciones antes de reservar. Un buen hotel canino te invitará a conocerlo sin presión. Fíjate en la limpieza, el espacio disponible, y cómo interactúa el personal con los perros.

## Preguntas que debes hacer

¿Cuántos perros tienen al mismo tiempo? (menos es mejor). ¿Usan jaulas? ¿Tienen supervisión nocturna? ¿Cómo manejan emergencias médicas? ¿Piden cartilla de vacunación? ¿Hacen prueba de socialización? ¿Envían reportes con fotos?

## Señales de alerta

Que no te dejen visitar las instalaciones. Que no pidan vacunas ni prueba de socialización. Que tengan demasiados perros para el espacio disponible. Que no ofrezcan ningún tipo de reporte o comunicación durante la estancia.

## ¿Por qué Paws Club?

En Paws Club tenemos cupo máximo de 5 lomitos, cero jaulas, supervisión 24/7, y reportes diarios con fotos y videos por WhatsApp. Además, la prueba de socialización es gratuita y obligatoria para todos los huéspedes.`,
  },
];
