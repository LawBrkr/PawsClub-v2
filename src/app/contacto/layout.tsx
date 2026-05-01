import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Paws Club",
  description:
    "Contáctanos por WhatsApp, llamada o formulario. Respuesta en menos de 30 minutos. Atendemos CDMX y Estado de México.",
  alternates: { canonical: "https://pawsclub.com.mx/contacto" },
  openGraph: {
    title: "Contacto — Paws Club",
    description: "Habla con nosotros: WhatsApp, llamada o agenda online.",
    url: "https://pawsclub.com.mx/contacto",
    images: ["/img/paws-club-og.jpg"],
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
