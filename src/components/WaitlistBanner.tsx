import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";
import { WAITLIST_COPY } from "@/lib/constants";

interface WaitlistBannerProps {
  service?: "hotel" | "guarderia";
  className?: string;
  // Cuando es true, ancla al form de la propia página (#waitlist).
  // Cuando es false, va a la página dedicada /lista-de-espera.
  inPageForm?: boolean;
}

export default function WaitlistBanner({
  service,
  className = "",
  inPageForm = true,
}: WaitlistBannerProps) {
  const href = inPageForm
    ? `#waitlist${service ? `?servicio=${service}` : ""}`
    : `/lista-de-espera${service ? `?servicio=${service}` : ""}`;

  return (
    <div
      className={`flex flex-col items-start gap-3 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" aria-hidden="true" />
        <div>
          <p className="text-base font-bold text-amber-900">
            {WAITLIST_COPY.bannerTitle}
          </p>
          <p className="text-sm text-amber-800">{WAITLIST_COPY.bannerBody}</p>
        </div>
      </div>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-700 hover:shadow-md"
      >
        {WAITLIST_COPY.ctaShort}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
