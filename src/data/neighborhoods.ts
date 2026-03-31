// ============================================
// PAWS CLUB — Neighborhoods Data (Zona Norte)
// Single Source of Truth for dynamic landing pages
// ============================================

export interface Neighborhood {
  /** URL slug (e.g. 'guarderia-canina-tlatelolco') */
  slug: string;
  /** Display name of the neighborhood */
  name: string;
  /** Estimated travel time by car to Sucursal Zona Norte */
  travelTime: string;
  /** Short customer testimonial from this area */
  localReview: string;
  /** Reviewer name for the testimonial */
  reviewerName: string;
  /** SEO keyword terms for this neighborhood */
  seoKeywords: string[];
  /** Primary service keyword used in meta title */
  primaryService: string;
  /** H1 optimizado SEO */
  h1: string;
  /** Párrafo introductorio conectando colonia local con Paws Club */
  introParagraph: string;
  /** Meta description (max 155 chars) */
  metaDescription: string;
  /** Mensaje de WhatsApp presonalizado */
  whatsappMessage: string;
}

export const ZONA_NORTE_NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: "guarderia-canina-santa-maria-la-ribera",
    name: "Santa María la Ribera",
    travelTime: "10 minutos", // changed to reflect "menos de 10 minutos"
    localReview:
      "Desde que llevamos a Toby a Paws Club, ya no sufre ansiedad por separación. La cercanía desde la Ribera es increíble, en 8 minutos lo dejo y me voy tranquila al trabajo.",
    reviewerName: "Mariana R.",
    seoKeywords: [
      "guardería canina Santa María la Ribera",
      "hotel para perros Santa María la Ribera",
      "adiestramiento canino Santa María la Ribera",
      "cuidado de perros cerca de Kiosco Morisco",
      "pensión canina Ribera CDMX",
    ],
    primaryService: "Guardería Canina",
    h1: "Cuidado personalizado sin jaulas para tu lomito cerca de Santa María la Ribera",
    introParagraph: "Si vives en Santa María la Ribera, sabemos que buscas solo lo mejor para tu pequeño. Nuestra sucursal en Colonia San Simón Tolnahuac, CDMX (Zona Norte), está a menos de 10 minutos de distancia para darte total tranquilidad. Asegura el bienestar de tu mejor amigo con nuestra supervisión 24/7 de cupo exclusivo.",
    metaDescription: "¿Buscas guardería canina en Santa María la Ribera? En Paws Club damos cuidado personalizado sin jaulas y supervisión 24/7 en Zona Norte. ¡Visítanos!",
    whatsappMessage: "Hola Paws Club, vivo en Santa María la Ribera y quiero agendar una visita para mi lomito 🐾"
  },
  {
    slug: "guarderia-canina-san-rafael",
    name: "San Rafael",
    travelTime: "10 minutos",
    localReview:
      "Lo mejor es que recibo fotos y videos de Luna todo el día. Vivimos en San Rafael y nos queda súper cerca. ¡La recomendamos al 100%!",
    reviewerName: "Carlos M.",
    seoKeywords: [
      "guardería canina San Rafael",
      "hotel para perros San Rafael CDMX",
      "adiestramiento canino San Rafael",
      "paseos para perros San Rafael",
      "cuidado canino colonia San Rafael",
    ],
    primaryService: "Guardería Canina",
    h1: "Supervisión 24/7 y libertad sin jaulas: El segundo hogar de tu lomito cerca de San Rafael",
    introParagraph: "Para nuestros vecinos de San Rafael, dejar a su perrito ya no tiene que ser motivo de preocupación. Paws Club en Colonia San Simón Tolnahuac, CDMX (Zona Norte), está a pocos minutos con acceso rápido y sin tráfico complicado. Contáctanos y reserva hoy mismo uno de nuestros cupos exclusivos para su cuidado personalizado.",
    metaDescription: "Descubre el mejor cuidado personalizado sin jaulas cerca de San Rafael. Paws Club Zona Norte te ofrece supervisión 24/7 para tu lomito. ¡Agenda tu visita!",
    whatsappMessage: "Hola Paws Club, los contacto desde San Rafael y me interesa su cuidado personalizado 🐾"
  },
  {
    slug: "guarderia-canina-tlatelolco",
    name: "Tlatelolco",
    travelTime: "10 minutos", // changed to reflect "menos de 10 minutos"
    localReview:
      "Paws Club cambió nuestra rutina por completo. Max sale feliz de sus paseos y el equipo nos manda reportes con fotos. Desde Tlatelolco llegamos en minutos.",
    reviewerName: "Andrea L.",
    seoKeywords: [
      "guardería canina Tlatelolco",
      "hotel para perros Tlatelolco",
      "adiestramiento canino Tlatelolco",
      "paseos caninos Nonoalco-Tlatelolco",
      "pensión para perros Tlatelolco CDMX",
    ],
    primaryService: "Guardería Canina",
    h1: "Guardería premium sin jaulas a minutos de Tlatelolco",
    introParagraph: "Si resides en Tlatelolco y tu lomito se queda solo en el departamento, somos su mejor opción. Llegar a Colonia San Simón Tolnahuac, CDMX (Zona Norte), toma menos de 10 minutos desde tu unidad habitacional. Ven a conocer nuestra supervisión 24/7; el cupo de cuidado personalizado es limitado para garantizar su seguridad y diversión.",
    metaDescription: "¿Vives en Tlatelolco? Paws Club Zona Norte es la opción de cuidado personalizado y sin jaulas ideal para tu lomito con supervisión 24/7. ¡Contáctanos!",
    whatsappMessage: "Hola Paws Club, vivo en Tlatelolco y quiero apartar lugar para mi lomito 🐾"
  },
  {
    slug: "guarderia-canina-buenavista",
    name: "Buenavista",
    travelTime: "10 minutos", // changed to reflect "menos de 10 minutos"
    localReview:
      "Trabajo cerca de la estación Buenavista y dejo a Rocky antes de entrar a la oficina. El trato es de primera y sin jaulas. ¡Totalmente recomendado!",
    reviewerName: "Javier S.",
    seoKeywords: [
      "guardería canina Buenavista",
      "hotel para perros Buenavista CDMX",
      "adiestramiento canino Buenavista",
      "cuidado canino cerca estación Buenavista",
      "pensión canina Buenavista",
    ],
    primaryService: "Guardería Canina",
    h1: "Cuidado personalizado y entorno sin jaulas a un paso de Buenavista",
    introParagraph: "Con una rutina ajetreada en Buenavista, tu lomito merece un lugar seguro donde correr y socializar. A menos de 10 minutos, en Colonia San Simón Tolnahuac, CDMX (Zona Norte), encontrará una segunda casa totalmente segura. Agenda su valoración y asegura uno de nuestros exclusivos lugares con supervisión 24/7.",
    metaDescription: "El mejor cuidado personalizado sin jaulas para vecinos de Buenavista está en Paws Club Zona Norte. Supervisión 24/7 y cupo exclusivo. ¡Conócenos hoy!",
    whatsappMessage: "Hola Paws Club, trabajo/vivo en Buenavista y busco una guardería segura 🐾"
  },
  {
    slug: "guarderia-canina-zona-norte",
    name: "Zona Norte",
    travelTime: "5 minutos",
    localReview:
      "Vivimos a unas cuadras y nuestro Firulais ama ir a la guardería. El ambiente hogareño y el cupo limitado dan mucha confianza. ¡Los mejores de la zona!",
    reviewerName: "Paola G.",
    seoKeywords: [
      "guardería canina Zona Norte CDMX",
      "hotel para perros Zona Norte",
      "adiestramiento canino Zona Norte CDMX",
      "paseos caninos Zona Norte",
      "cuidado canino premium Zona Norte México",
    ],
    primaryService: "Guardería Canina",
    h1: "La mejor experiencia sin jaulas y con supervisión 24/7 en Zona Norte",
    introParagraph: "Si buscas tranquilidad y seguridad extrema en la Zona Norte, tu lomito no podría estar en mejores manos. Estamos justo aquí, en Colonia San Simón Tolnahuac, CDMX (Zona Norte), brindando atención de máximo nivel y sin traslados largos. Escríbenos ahora mismo y no te quedes fuera de nuestro cuidado personalizado de cupos exclusivos.",
    metaDescription: "En Paws Club Zona Norte ofrecemos el mejor cuidado personalizado. 100% sin jaulas, supervisión 24/7 y amor infinito. ¡Agenda tu cita hoy mismo!",
    whatsappMessage: "Hola Paws Club, estoy en la Zona Norte y quiero asegurar el lugar de mi lomito 🐾"
  },
];
