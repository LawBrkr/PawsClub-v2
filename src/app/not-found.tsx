import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Home, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina no encontrada — Paws Club",
  description: "La pagina que buscas no existe. Vuelve al inicio o escribenos por WhatsApp.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const wa = SITE.whatsappUrl(
    "Hola! Llegue a una pagina que no existe en el sitio y queria preguntarles algo."
  );

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
          Error 404
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Esta pagina se nos escapo
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Probablemente movimos algo de lugar o el enlace ya no es valido. Te
          regresamos al inicio o te respondemos por WhatsApp en menos de 30 min.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-xl"
          >
            <Home className="h-5 w-5" />
            Volver al inicio
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-green-600 bg-white px-8 py-4 text-base font-bold text-green-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-green-50"
          >
            <MessageCircle className="h-5 w-5" />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
