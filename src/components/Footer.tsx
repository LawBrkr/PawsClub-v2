import Link from "next/link";
import { SITE, BRANCHES } from "@/lib/constants";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold">
              Paws Club<span className="text-brand">.</span>
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              El estándar en cuidado canino. Guardería, hotel y adiestramiento
              premium en CDMX, sin jaulas y con cupo limitado.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 transition-colors hover:text-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
              Servicios
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/servicios/hotel" className="text-gray-300 transition-colors hover:text-white">Hotel Boutique</Link></li>
              <li><Link href="/servicios/guarderia" className="text-gray-300 transition-colors hover:text-white">Guardería Canina</Link></li>
              <li><Link href="/servicios/adiestramiento" className="text-gray-300 transition-colors hover:text-white">Adiestramiento</Link></li>
              <li><Link href="/servicios/paseos" className="text-gray-300 transition-colors hover:text-white">Paseos Caninos</Link></li>
            </ul>
          </div>

          {/* Sucursales */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
              Sucursales
            </h4>
            {Object.values(BRANCHES).map((branch) => (
              <div key={branch.id} className="mb-4">
                <Link
                  href={`/sucursales/${branch.slug}`}
                  className="text-sm font-semibold text-white hover:text-brand"
                >
                  {branch.name}
                </Link>
                <div className="mt-1 flex items-start gap-2 text-xs text-gray-400">
                  <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
                  <span>{branch.coverage.slice(0, 3).join(", ")}...</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="h-3 w-3 shrink-0" />
                  <span>L-V 6:00 a.m. - 8:00 p.m. | S 7:00 a.m. - 8:00 p.m.</span>
                </div>
              </div>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
              Contacto
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +52 1 56 4408 5356
              </a>
              <a
                href={SITE.whatsappUrl("¡Hola! 👋 Me interesa conocer más sobre sus servicios. ¿Me podrían dar informes?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-green-700"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.556-.693-6.41-1.874l-.448-.29-2.65.888.888-2.65-.29-.448A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="mt-6">
              <Link href="/blog" className="text-sm text-gray-400 transition-colors hover:text-white">
                📰 Ir a PawsBlog
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Paws Club. Todos los derechos reservados.</p>
          <p className="mt-2">Paws Club es una marca registrada.</p>
        </div>
      </div>
    </footer>
  );
}
