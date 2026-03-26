"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface BookingButtonProps {
  calLink?: string;
  className?: string;
  children: React.ReactNode;
}

export default function BookingButton({ calLink = "pawsclub/visita", className, children }: BookingButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#547097" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace=""
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
