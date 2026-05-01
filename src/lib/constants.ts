// ============================================
// PAWS CLUB — Constantes Centralizadas
// ============================================

export const SITE = {
  name: "Paws Club",
  domain: "pawsclub.com.mx",
  url: "https://pawsclub.com.mx",
  phone: "+5215644085356",
  whatsapp: "5215644085356",
  whatsappUrl: (msg: string) =>
    `https://wa.me/5215644085356?text=${encodeURIComponent(msg)}`,
  email: "contacto@pawsclub.com.mx",
  instagram: "https://www.instagram.com/pawsclubmx/",
  facebook: "https://www.facebook.com/profile.php?id=61586039731313",
  gtmId: "GTM-TQ4HDX82",
  googleRating: 4.9,
  googleReviewCount: 25,
} as const;

export const BRAND = {
  colors: {
    primary: "#547097",
    primaryHover: "#3F5471",
    cream: "#FFF8E7",
    text: "#1F2937",
    textMuted: "#4B5563",
    accent: "#E1306C",
    accentOrange: "#F4A261",
    bgLight: "#F8F9FA",
  },
  fonts: {
    main: "'Inter', system-ui, -apple-system, sans-serif",
  },
} as const;

// ============================================
// SUCURSALES
// ============================================
export type BranchId = "poniente" | "zona-norte";

export interface Branch {
  id: BranchId;
  name: string;
  shortName: string;
  slug: string;
  coordinates: { lat: number; lng: number };
  coverage: string[];
  schedule: string;
  sundayNote: string;
  services: string[];
  hasWalks: boolean;
}

export const BRANCHES: Record<BranchId, Branch> = {
  poniente: {
    id: "poniente",
    name: "Paws Club Poniente",
    shortName: "Poniente",
    slug: "poniente",
    coordinates: { lat: 19.43207703566728, lng: -99.18103980381663 },
    coverage: [
      "Polanco",
      "Lomas de Chapultepec",
      "Tecamachalco",
      "Miguel Hidalgo",
      "Naucalpan",
    ],
    schedule: "Lunes a Viernes: 8:00 a.m. - 8:00 p.m. | Sábado: 8:00 a.m. - 6:00 p.m.",
    sundayNote: "Domingo: previa cita para evaluación de adiestramiento",
    services: ["adiestramiento", "paseos"],
    hasWalks: true,
  },
  "zona-norte": {
    id: "zona-norte",
    name: "Paws Club Zona Norte",
    shortName: "Zona Norte",
    slug: "zona-norte",
    coordinates: { lat: 19.4590, lng: -99.1410 }, // Punto de referencia público en San Simón Tolnahuac
    coverage: [
      "Santa María la Ribera",
      "San Rafael",
      "Tlatelolco",
      "Buenavista",
      "San Simón Tolnáhuac",
      "Peralvillo",
      "Lindavista",
      "Industrial Vallejo",
      "Magdalena de las Salinas",
      "Estrella",
      "Guadalupe Tepeyac",
      "Industrial",
    ],
    schedule: "Lunes a Viernes: 6:00 a.m. - 8:00 p.m. | Sábado: 7:00 a.m. - 8:00 p.m.",
    sundayNote: "Domingo: Solo hotel con reserva previa (+20%)",
    services: ["hotel", "guarderia", "paseos", "adiestramiento"],
    hasWalks: true,
  },
};

// ============================================
// PRECIOS
// ============================================
export interface PriceItem {
  service: string;
  poniente: number | string | null;
  zonaNorte: number | string | null;
  unit: string;
  note?: string;
}

export const PRICES = {
  hotel: {
    poniente: { weekday: 450, sunday: 550 },
    zonaNorte: { weekday: 340, sunday: 410 },
    unit: "noche",
  },
  guarderia: {
    poniente: 350,
    zonaNorte: 260,
    unit: "día",
  },
  adiestramiento: {
    poniente: 3950,
    zonaNorte: 2950,
    unit: "paquete 4 sesiones",
    paquetes: {
      cachorroPro: {
        poniente: 7900,
        zonaNorte: 5900,
        unit: "8 sesiones a domicilio",
      },
      adiosAnsiedad: {
        poniente: 11900,
        zonaNorte: 8900,
        unit: "10 sesiones a domicilio (protocolo gradual)",
      },
    },
  },
  paseos: {
    individual: 150,
    paquete5: 650,
    paquete10: 1200,
    mensual: 2200,
    segundoPerro: 110,
    aventuraSabado: 650,
    paquete4Sabados: 2200,
    segundoPerroSabado: 350,
  },
} as const;

// ============================================
// PASEOS — DESTINOS
// ============================================
export const WALK_DESTINATIONS = [
  {
    name: "Bosque de Chapultepec",
    description: "El parque urbano más grande de CDMX. Amplia zona arbolada, ideal para socialización.",
    location: "CDMX",
  },
  {
    name: "Los Dinamos",
    description: "Área natural en Magdalena Contreras. Senderos y río para actividades más demandantes.",
    location: "CDMX",
  },
  {
    name: "Parque del Centenario",
    description: "Coyoacán. Espacio tranquilo, excelente para perros que necesitan exposición gradual.",
    location: "CDMX",
  },
  {
    name: "Bosque de San Juan de Aragón",
    description: "Gustavo A. Madero. Parque extenso con áreas verdes amplias, accesible para zona norte.",
    location: "CDMX",
  },
  {
    name: "Parque Bicentenario",
    description: "Azcapotzalco. Moderno, bien mantenido, con áreas pet-friendly.",
    location: "CDMX",
  },
  {
    name: "La Marquesa",
    description: "Parque Nacional. Bosques de oyamel, ideal para paseos de aventura premium.",
    location: "Estado de México",
  },
] as const;

// ============================================
// SERVICIOS
// ============================================
export const SERVICES = [
  {
    id: "hotel",
    name: "Hotel Boutique",
    shortName: "Hotel",
    slug: "hotel",
    icon: "🏨",
    tagline: "Dulces sueños, sin jaulas.",
    description:
      "Hospedaje sin jaulas dentro de casa. Tu lomito dormirá cómodamente con atención personalizada y monitoreo en cada momento.",
    features: [
      "Duermen en interior, en sus propias camas o las nuestras",
      "Reportes diarios con fotos y videos",
      "Transporte disponible a domicilio",
      "Check-in y check-out flexible",
    ],
    image: "/img/hotel.webp",
  },
  {
    id: "guarderia",
    name: "Guardería Canina",
    shortName: "Guardería",
    slug: "guarderia",
    icon: "☀️",
    tagline: "Diversión supervisada todo el día.",
    description:
      "Días llenos de diversión y ejercicio bajo la supervisión de expertos. Fomentamos la socialización positiva en un ambiente controlado y seguro.",
    features: [
      "Juego supervisado todo el día",
      "Cupo limitado a máximo 5 lomitos",
      "Fotos y videos vía WhatsApp",
      "Higiene premium con limpieza profunda diaria",
    ],
    image: "/img/daycare.webp",
  },
  {
    id: "adiestramiento",
    name: "Adiestramiento Canino",
    shortName: "Adiestramiento",
    slug: "adiestramiento",
    icon: "🎓",
    tagline: "Evaluación conductual. Resultados medibles.",
    description:
      "Diagnóstico conductual de 16 puntos antes de cualquier plan. Ideal para primerizos, cachorros nuevos y hogares que quieren empezar bien desde el inicio. Refuerzo positivo, sesiones 1 a 1, a domicilio o en instalaciones.",
    features: [
      "Evaluación conductual inicial sin costo (valor $850)",
      "Plan personalizado según temperamento y contexto",
      "Obediencia básica, cachorro pro y modificación de conducta",
      "Sesiones 1 a 1 con perros mentor",
    ],
    image: "/img/training.webp",
    primaryBranch: "poniente" as BranchId,
  },
  {
    id: "paseos",
    name: "Paseos Caninos",
    shortName: "Paseos",
    slug: "paseos",
    icon: "🐾",
    tagline: "Aventura diaria para tu lomito.",
    description:
      "Paseos diarios de mínimo 1 hora y aventuras de sábado a los mejores parques caninos de CDMX. Exclusivo Zona Norte.",
    features: [
      "Paseos diarios de mínimo 1 hora",
      "Aventuras de sábado a parques caninos",
      "Reportes con fotos y ruta GPS",
      "Grupos reducidos y supervisión dedicada",
    ],
    image: "/img/paseos_paws.webp",
    exclusiveBranch: "zona-norte" as BranchId,
  },
] as const;

// ============================================
// NAVEGACIÓN
// ============================================
export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Hotel Boutique", href: "/servicios/hotel", icon: "🏨" },
      { label: "Guardería", href: "/servicios/guarderia", icon: "☀️" },
      { label: "Adiestramiento", href: "/servicios/adiestramiento", icon: "🎓" },
      { label: "Paseos", href: "/servicios/paseos", icon: "🐾" },
    ],
  },
  {
    label: "Sucursales",
    href: "/sucursales",
    children: [
      { label: "Poniente", href: "/sucursales/poniente", icon: "📍" },
      { label: "Zona Norte", href: "/sucursales/zona-norte", icon: "📍" },
    ],
  },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;
