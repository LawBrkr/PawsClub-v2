import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-registro | Paws Club",
  description:
    "Registra a tu lomito antes de su primera estancia: ficha conductual, vacunas y datos de contacto. Te ahorra tiempo el día del check-in.",
  alternates: { canonical: "https://pawsclub.com.mx/pre-registro" },
  openGraph: {
    title: "Pre-registro de tu lomito — Paws Club",
    description: "Llena la ficha antes de tu primera visita.",
    url: "https://pawsclub.com.mx/pre-registro",
    images: ["/img/paws-club-og.jpg"],
  },
};

export default function PreRegistroLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
