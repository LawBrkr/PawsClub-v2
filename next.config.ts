import type { NextConfig } from "next";

/**
 * Security headers — objetivo: A en https://securityheaders.com
 *
 * Notas:
 * - GTM (googletagmanager.com) y GA4 (google-analytics.com) requieren script-src + connect-src.
 * - Cal.com (embed.cal.com, app.cal.com, *.cal.com) requiere frame-src + script-src + connect-src.
 * - 'unsafe-inline' en script-src es necesario para el snippet de GTM en layout.tsx.
 *   Se podria endurecer con nonces, pero requiere refactor del Script tag.
 * - Imagenes remotas: googleusercontent (Google reviews) y propio dominio.
 */
const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.cal.com https://app.cal.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https: https://www.google-analytics.com https://www.googletagmanager.com https://lh3.googleusercontent.com",
  "connect-src 'self' https://www.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://api.notion.com https://graph.facebook.com https://*.cal.com https://app.cal.com",
  "frame-src https://*.cal.com https://app.cal.com https://www.googletagmanager.com",
  "media-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "pawsclub.com.mx" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
