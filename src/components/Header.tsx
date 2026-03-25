"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/img/logo.webp"
            alt="Paws Club"
            width={150}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 rounded-b-xl bg-white py-2 shadow-lg">
                    <div className="absolute -top-4 left-0 h-4 w-full" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand"
                      >
                        <span className="text-lg">{child.icon}</span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Social + CTA Desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-brand transition-colors hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-brand transition-colors hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href={SITE.whatsappUrl("Hola Paws Club! 🐾 Vengo de su página web.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-lg"
          >
            Agenda tu visita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-brand lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 z-40 border-t border-gray-100 bg-cream shadow-xl lg:hidden">
          <nav className="flex flex-col pb-6">
            {NAV_ITEMS.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex w-full items-center justify-between px-6 py-4 text-base font-semibold text-brand"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-white/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-10 py-3 text-sm text-gray-700"
                        >
                          <span>{child.icon}</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-gray-100/50 px-6 py-4 text-base font-semibold text-brand"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-4 px-6">
              <a
                href={SITE.whatsappUrl("Hola Paws Club! 🐾 Vengo de su página web.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-brand py-3.5 text-center text-base font-semibold text-white shadow-md"
              >
                Agenda tu visita
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
