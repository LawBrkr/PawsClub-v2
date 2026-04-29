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
  title: "Cotizador Train & Go (interno) | Paws Club",
};

export default function CotizadorTrainAndGoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
