import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";

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
    "Guardería y hotel canino sin jaulas en CDMX. Supervisión 24/7, cupo limitado y socialización segura. Dos sucursales: Poniente y Zona Norte. Agenda hoy.",
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
      "Guardería, Alojamiento Boutique y Adiestramiento. Seguridad y diversión garantizada para tu mejor amigo.",
    images: [
      {
        url: "/img/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Paws Club - Hotel y Guardería Canina CDMX",
      },
    ],
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
      <body className="bg-cream text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
