"use client";

import { SITE } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  function handleClick() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dl = (window as any).dataLayer;
      if (Array.isArray(dl)) {
        dl.push({
          event: "whatsapp_click",
          source: "floating_button",
        });
      }
    }
  }

  return (
    <a
      href={SITE.whatsappUrl("¡Hola! 👋 Me interesa conocer más sobre sus servicios. ¿Me podrían dar informes?")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl overflow-hidden"
    >
      <MessageCircle className="h-7 w-7 text-white" strokeWidth={2.25} />
    </a>
  );
}
