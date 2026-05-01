import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE } from "@/lib/constants";
import { getOrganizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Guardería, Hotel & Adiestramiento Premium en CDMX | Paws Club",
    template: "%s | Paws Club",
  },
  description:
    "Guardería y hotel canino sin jaulas en CDMX con +45 noches de hotel, +28 lomitos atendidos y +10 graduados de adiestramiento. Supervisión 24/7. Agenda hoy.",
  keywords: [
    "guardería canina CDMX",
    "hotel para perros CDMX",
    "adiestramiento canino CDMX",
    "paseos para perros CDMX",
    "cuidado canino premium México",
    "guardería perros sin jaulas",
    "Paws Club",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE.url,
    siteName: SITE.name,
    title: "Guardería, Hotel & Adiestramiento Premium en CDMX | Paws Club",
    description:
      "Guardería, Alojamiento Boutique y Adiestramiento para perros. Más de 45 noches de hotel, 28 lomitos felices y 10 graduados. Diversión y seguridad.",
    images: [
      {
        url: "/img/paws-club-og.jpg",
        width: 1200,
        height: 630,
        alt: "Paws Club - Hotel y Guardería Canina CDMX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardería, Hotel & Adiestramiento Premium en CDMX | Paws Club",
    description:
      "Guardería, Alojamiento Boutique y Adiestramiento para perros. Más de 45 noches de hotel, 28 lomitos felices y 10 graduados.",
    images: ["/img/paws-club-og.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]|