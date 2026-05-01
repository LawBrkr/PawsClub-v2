import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calcula tu Cotización | Paws Club",
  description:
    "Calcula precios de hotel, guardería y adiestramiento canino en CDMX según tu sucursal y servicio. Sin compromiso.",
  alternates: { canonical: "https://pawsclub.com.mx/calculadora" },
  openGraph: {
    title: "Calcula tu cotización — Paws Club",
    description: "Precios transparentes para hotel, guardería y adiestramiento canino.",
    url: "https://pawsclub.com.mx/calculadora",
    images: ["/img/paws-club-og.jpg"],
  },
};

export default function CalculadoraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
