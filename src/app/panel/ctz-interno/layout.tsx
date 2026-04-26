import type { Metadata } from "next";

// Página de uso interno — no indexar, no seguir
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  title: "Cotizador Interno | Paws Club",
};

export default function CotizadorInternoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
