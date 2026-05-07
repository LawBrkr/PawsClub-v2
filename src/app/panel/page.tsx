import Link from "next/link";
import Image from "next/image";

/**
 * Panel interno · Paws Club
 *
 * Hub que lista las herramientas internas del equipo. Mismo status
 * noindex/nofollow que las herramientas individuales (configurado en
 * src/app/panel/layout.tsx).
 *
 * URL: https://pawsclub.com.mx/panel
 */

const TOOLS = [
  {
    href: "/panel/cotizador",
    icon: "🧮",
    title: "Cotizador",
    description:
      "Calcula precios para Adiestramiento, Hotel, Guardería y Paseos. Genera textos para WhatsApp, documento al cliente, requisitos y FAQ. Bloquea razas PPP automáticamente.",
    tag: "4 servicios",
  },
  {
    href: "/panel/marketing",
    icon: "🎨",
    title: "Marketing de fotos",
    description:
      "Sube la foto del cliente y exporta brandeada para Instagram. 4 plantillas (watermark, cliente feliz, testimonio, end-card video) × 3 formatos. Soporta logo HD personalizado.",
    tag: "Fotos + end-cards",
  },
  {
    href: "/panel/captions",
    icon: "📝",
    title: "Captions Instagram",
    description:
      "Llena un formulario una vez (nombre del peludo, dueño, servicio, sucursal) y los 38 captions se rellenan solos. Pack de hashtags compuesto automáticamente.",
    tag: "38 captions",
  },
];

export default function PanelHomePage() {
  return (
    <main className="min-h-screen bg-cream/30 py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <Image
            src="/img/logo.webp"
            alt="Paws Club"
            width={96}
            height={96}
            className="mx-auto mb-4 rounded-2xl shadow-sm"
            priority
          />
          <h1 className="text-3xl font-extrabold text-brand sm:text-4xl">
            Panel interno
          </h1>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Las herramientas del equipo. Marca esta página como favorita en tu iPad.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-1">
          {TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-brand hover:shadow-md sm:p-6"
            >
              <span
                aria-hidden
                className="text-4xl leading-none transition-transform group-hover:scale-110 sm:text-5xl"
              >
                {t.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold text-brand sm:text-xl">
                    {t.title}
                  </h2>
                  <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand">
                    {t.tag}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600 sm:text-base">
                  {t.description}
                </p>
                <div className="mt-2 text-sm font-semibold text-brand transition group-hover:translate-x-0.5">
                  Abrir →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-10 text-center text-xs text-gray-500">
          <p>
            Las 3 herramientas son <strong>noindex, nofollow</strong> — no aparecen en Google.
          </p>
          <p className="mt-1">
            Cualquiera con el link puede entrar. Si quieres autenticación, pídela al equipo de tech.
          </p>
        </footer>
      </div>
    </main>
  );
}
