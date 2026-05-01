import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería | Paws Club",
  description:
    "Fotos reales de nuestros días en Paws Club: hotel sin jaulas, guardería supervisada, paseos en CDMX y Estado de México.",
  alternates: { canonical: "https://pawsclub.com.mx/galeria" },
  openGraph: {
    title: "Galería — Paws Club",
    description: "Cómo se ve un día con nosotros: hotel, guardería y paseos.",
    url: "https://pawsclub.com.mx/galeria",
    images: ["/img/paws-club-og.jpg"],
  },
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
