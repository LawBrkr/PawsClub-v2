"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/img/hero.webp",
    alt: "Perro feliz en Paws Club CDMX",
    category: "General",
  },
  {
    src: "/img/hotel.webp",
    alt: "Hotel boutique canino — área de descanso",
    category: "Hotel",
  },
  {
    src: "/img/Perro_pomerania_en_sofa_hotel.webp",
    alt: "Pomerania descansando en sofá del hotel canino",
    category: "Hotel",
  },
  {
    src: "/img/perro_alojado_sobre_cama_en_casa.webp",
    alt: "Perro alojado sobre cama en hotel boutique",
    category: "Hotel",
  },
  {
    src: "/img/Perros_descansando_en_cama_ortopedica.webp",
    alt: "Perros descansando en camas ortopédicas",
    category: "Hotel",
  },
  {
    src: "/img/daycare.webp",
    alt: "Perros jugando en guardería canina",
    category: "Guardería",
  },
  {
    src: "/img/training.webp",
    alt: "Sesión de adiestramiento canino con refuerzo positivo",
    category: "Adiestramiento",
  },
  {
    src: "/img/Pome_feliz_en_parque.webp",
    alt: "Perro feliz durante paseo en parque de CDMX",
    category: "Paseos",
  },
  {
    src: "/img/hotel-guarderia-canina-miguel-hidalgo.png",
    alt: "Instalaciones Paws Club en Miguel Hidalgo",
    category: "General",
  },
];

const CATEGORIES = ["Todas", ...Array.from(new Set(GALLERY_IMAGES.map((i) => i.category)))];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "Todas"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Galería</h1>
          <p className="mt-4 text-lg text-white/90">
            Fotos reales de nuestros lomitos en acción.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-brand text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/60 p-4 transition-transform group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-white">{img.alt}</p>
                  <span className="text-xs text-white/70">{img.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1
              );
            }}
            className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/20"
            aria-label="Anterior"
          >
            ←
          </button>

          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              fill
              className="object-contain"
              quality={90}
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0
              );
            }}
            className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/20"
            aria-label="Siguiente"
          >
            →
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm font-semibold text-white">
              {filtered[lightboxIndex].alt}
            </p>
            <span className="text-xs text-white/60">
              {lightboxIndex + 1} / {filtered.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
