"use client";

import { SITE } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappUrl("¡Hola! 👋 Me interesa conocer más sobre sus servicios. ¿Me podrían dar informes?")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl overflow-hidden"
    >
      <img 
        src="/img/whatsapp_logo_green.png" 
        alt="WhatsApp" 
        className="h-10 w-10 object-contain brightness-0 invert" 
      />
    </a>
  );
}
