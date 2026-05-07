import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  title: "Panel interno · Paws Club",
};

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
