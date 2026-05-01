import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardería y Hotel — Información | Paws Club",
  description:
    "Detalles de nuestro hotel boutique sin jaulas y la guardería canina premium en CDMX: rutina diaria, requisitos, precios y zonas de cobertura.",
  alternates: { canonical: "https://pawsclub.com.mx/info/guarderia-hotel" },
  openGraph: {
    title: "Guardería y Hotel — Paws Club",
    description: "Cómo funcionan nuestros servicios de hospedaje y guardería sin jaulas.",
    url: "https://pawsclub.com.mx/info/guarderia-hotel",
    images: ["/img/hotel.webp"],
  },
};

export default function InfoGuarderiaHotelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
