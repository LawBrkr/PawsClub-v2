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

Personas de diferentes edades, generos y apariencias. Otros perros (vacunados y equilibrados). Diferentes superficies, sonidos y ambientes. Vehículos, bicicletas, patinetas. El veterinario (¡con experiencias positivas!).

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
  {
    slug: "exploracion-libertad-paseos-marquesa-dinamos",
    title: "Exploración y Libertad: La importancia de los paseos en La Marquesa y Los Dinamos",
    excerpt:
      "Descubre cómo las aventuras de fin de semana en espacios naturales impactan positivamente en la salud mental y física de tu lomito.",
    date: "2026-03-26",
    author: "Paws Club",
    category: "Aventuras",
    image: "/img/paseos-la-marquesa-los-dinamos.webp",
    readTime: "6 min",
    content: `La estimulación sensorial fuera del entorno urbano es vital para el equilibrio cognitivo de los caninos. En Paws Club, hemos diseñado nuestras "Aventuras de Fin de Semana" en destinos como La Marquesa y Los Dinamos para ofrecer algo más que un simple paseo: una experiencia de reconexión instintiva.

## Socialización en Espacios Abiertos

A diferencia de los parques urbanos, la inmensidad de La Marquesa permite una socialización de "baja presión". Los lomitos pueden interactuar en dinámicas de grupo más fluidas, reduciendo la reactividad y fomentando una jerarquía saludable bajo la supervisión de nuestros especialistas. El aire puro y los senderos naturales de Los Dinamos proporcionan una riqueza de estímulos olfativos que el asfalto simplemente no puede ofrecer.

## Beneficios Físicos y Mentales

Estas expediciones no solo agotan la energía física; la navegación por terrenos irregulares mejora la propiocepción y fortalece el sistema muscular. Para el tutor, esto se traduce en un lomito más tranquilo, satisfecho y emocionalmente estable al regresar a casa.

## Logística y Seguridad

Nuestras aventuras sabatinas comienzan con la recolección a domicilio desde las 8:00 a.m. a 9:00 a.m. (sujeto a zona). Mantenemos grupos reducidos para garantizar que cada integrante reciba atención personalizada. Si buscas que tu mejor amigo experimente la verdadera libertad en un entorno controlado, nuestras salidas a La Marquesa son la opción ideal.

¿Listo para la próxima aventura? Agenda el próximo sábado de exploración y dale a tu lomito el regalo de la naturaleza.`,
  },
  {
    slug: "impacto-emocional-adiestramiento-pro",
    title: "Más que obediencia: El impacto emocional del Adiestramiento Pro",
    excerpt:
      "El adiestramiento moderno no busca el control, sino la comunicación. Analizamos cómo los paquetes 'Cachorro Pro' y 'Adiós Ansiedad' transforman vidas.",
    date: "2026-03-25",
    author: "Paws Club",
    category: "Bienestar",
    image: "/img/adiestramiento-pro-paws-club.webp",
    readTime: "8 min",
    content: `El adiestramiento canino ha evolucionado de la dominancia hacia la cooperación. En Paws Club, entendemos que un lomito que "obedece" por miedo no es un animal equilibrado. Nuestra metodología Pro se enfoca en el vínculo emocional entre el tutor y su compañero.

## Cachorro Pro: Cimentando el Futuro

El programa "Cachorro Pro" está diseñado para intervenir en la ventana crítica de socialización. No solo enseñamos comandos básicos; establecemos un lenguaje común en el hogar. Prevenir problemas como el ladrido excesivo o la destrucción de muebles es mucho más efectivo que corregirlos años después. Un cachorro que entiende sus límites es un lomito feliz y seguro.

## Adiós Ansiedad: Desensibilización Sistemática

Para aquellos que sufren de ansiedad por separación o reactividad severa, el paquete "Adiós Ansiedad" utiliza protocolos de desensibilización sistemática. Trabajamos de forma gradual, exponiendo al lomito a sus detonantes en niveles manejables, recompensando la calma. Este enfoque técnico permite que el sistema nervioso del animal aprenda a autorregularse, eliminando el pánico por soledad.

## El Rol del Tutor

El éxito de estos programas radica en la transferencia de conocimiento. No entrenamos perros para nosotros, sino para ti. Cada sesión incluye una fase de aprendizaje para el tutor, asegurando que el progreso sea sostenible en el tiempo.

Transforma la relación con tu mejor amigo. Solicita una evaluación conductual hoy mismo y descubre el potencial de tu lomito.`,
  },
  {
    slug: "ecosistema-paws-club-bienestar-total",
    title: "El ecosistema Paws Club: Cómo integramos Hotel, Guardería y Paseos para el bienestar total",
    excerpt:
      "La salud de un lomito es multifactorial. Te explicamos cómo nuestra integración de servicios crea un círculo virtuoso de felicidad.",
    date: "2026-03-24",
    author: "Paws Club",
    category: "Paws Club",
    image: "/img/ecosistema-paws-club.webp",
    readTime: "5 min",
    content: `En Paws Club no vemos los servicios como unidades aisladas, sino como un ecosistema diseñado para cubrir todas las dimensiones de la vida canina: física, social y emocional. Esta integración es lo que nos define como el club más exclusivo de la ciudad.

## Guardería y Paseos: El Motor Diario

La Guardería Canina proporciona la estructura y socialización diaria necesaria para prevenir el aburrimiento. Al combinarla con nuestro servicio de Paseos, aseguramos que el lomito reciba tanto ejercicio cardiovascular como estimulación mental olfativa. Un lomito que asiste a la guardería y tiene sus paseos regulares es 80% menos propenso a desarrollar conductas destructivas.

## Hotel Boutique: Continuidad del Hogar

Cuando el tutor viaja, el Hotel Boutique ofrece una transición sin estrés. Al ser un ambiente ya conocido por los clientes de guardería, el lomito no siente el abandono; siente que está en una "pijamada" prolongada con sus amigos de siempre, sin jaulas y con supervisión 24/7.

## Adiestramiento: El Hilo Conductor

El Adiestramiento Pro atraviesa todos nuestros servicios. El personal de guardería y hotel aplica los mismos principios de refuerzo positivo, reforzando los buenos hábitos de manera constante. Si tu lomito está en un programa de modificación de conducta, nuestro ecosistema garantiza que no habrá mensajes contradictorios durante su estancia con nosotros.

## Un Solo Lugar, Todo el Cuidado

La ventaja para el tutor es la tranquilidad absoluta. Conocer a los cuidadores, saber que las rutinas se respetan y tener reportes unificados por WhatsApp simplifica la vida y maximiza el bienestar del lomito.

Únete a la familia Paws Club y vive la experiencia de un cuidado integral. Agenda tu primera visita ahora.`,
  },
];
