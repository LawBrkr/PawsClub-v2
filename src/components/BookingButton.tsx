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
 */
export default function BookingButton({
  calLink = "pawsclub",
  className,
  children,
}: BookingButtonProps) {
  return (
    <button
      type="button"
      data-cal-namespace=""
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
