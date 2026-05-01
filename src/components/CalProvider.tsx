"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

/**
 * Inicializa el SDK de Cal.com una sola vez por sesion.
 * Debe montarse en el root layout para evitar que cada
 * BookingButton lance su propia instancia del embed.
 */
export default function CalProvider() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#547097" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}
