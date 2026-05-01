"use client";

import type { ReactNode } from "react";

interface BookingButtonProps {
  calLink?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Boton que abre el embed de Cal.com.
 * El SDK se inicializa una sola vez en <CalProvider /> (montado en root layout),
 * asi que aqui solo declaramos los data-attributes que el SDK lee.
 *
 * Tracking: emite evento 'booking_open' al dataLayer cuando se hace click.
 */
export default function BookingButton({
  calLink = "pawsclub",
  className,
  children,
}: BookingButtonProps) {
  function handleClick() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dl = (window as any).dataLayer;
      if (Array.isArray(dl)) {
        dl.push({
          event: "booking_open",
          cal_link: calLink,
        });
      }
    }
  }

  return (
    <button
      type="button"
      data-cal-namespace=""
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
