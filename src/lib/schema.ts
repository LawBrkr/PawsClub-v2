import { SITE, BRANCHES, PRICES, SERVICES } from "./constants";
import { BLOG_POSTS } from "./blog-data";

// ============================================
// LocalBusiness Schema (one per branch)
// ============================================
export function getLocalBusinessSchema(branchId: "poniente" | "zona-norte") {
  const branch = BRANCHES[branchId];
  const isZN = branchId === "zona-norte";

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/sucursales/${branch.slug}`,
    name: branch.name,
    description: `Servicios caninos premium en ${branch.coverage.slice(0, 3).join(", ")}. Hotel boutique sin jaulas, guardería, adiestramiento${isZN ? " y paseos caninos" : ""}.`,
    url: `${SITE.url}/sucursales/${branch.slug}`,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/img/${isZN ? "Pome_feliz_en_parque.webp" : "hotel-guarderia-canina-miguel-hidalgo.png"}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.coordinates.lat,
      longitude: branch.coordinates.lng,
    },
    areaServed: branch.coverage.map((zone) => ({
      "@type": "City",
      name: `${zone}, Ciudad de México`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating,
      reviewCount: SITE.googleReviewCount,
      bestRating: 5,
    },
    priceRange: isZN
      ? `$${PRICES.paseos.individual} - $${PRICES.adiestramiento.zonaNorte} MXN`
      : `$${PRICES.guarderia.poniente} - $${PRICES.adiestramiento.poniente} MXN`,
    sameAs: [SITE.instagram, SITE.facebook],
  };
}

// ============================================
// Service Schema
// ============================================
export function getServiceSchema(serviceId: string) {
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE.url}/servicios/${service.slug}`,
    image: `${SITE.url}${service.image}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      "@type": "City",
      name: "Ciudad de México",
    },
    serviceType: "Pet Care",
  };
}

// ============================================
// FAQPage Schema
// ============================================
export function getFAQSchema(
  faqs: { q: string; a: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// ============================================
// Article Schema (Blog)
// ============================================
export function getArticleSchema(slug: string) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/img/logo.webp`,
      },
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };
}

// ============================================
// Organization Schema (global)
// ============================================
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/img/logo.webp`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
    sameAs: [SITE.instagram, SITE.facebook],
  };
}
