"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Home, MessageCircle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log al server (Vercel Logs lo recoge)
    console.error("[error.tsx]", error.message, error.digest);
  }, [error]);

  const wa = SITE.whatsappUrl(
    "Hola! Tuve un error en su sitio web y queria avisarles."
  );

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700">
          Algo salio mal
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Ups. Tropezamos con un error
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Ya nos enteramos del problema. Puedes reintentar, volver al inicio o
          escribirnos por WhatsApp y te ayudamos directo.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-xl"
          >
            <RotateCcw className="h-5 w-5" />
            Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-8 py-4 text-base font-bold text-brand shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand/5"
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
            WhatsApp
          </a>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-gray-400">
            Codigo de referencia: {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
