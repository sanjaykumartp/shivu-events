"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GalleryLightbox({ item, onClose }) {
  const images = item.images && item.images.length > 0 ? item.images : [item.img];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex flex-col items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl leading-none transition-colors"
      >
        ×
      </button>

      <div className="relative w-full max-w-3xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
        <Image src={images[index]} alt={item.name} fill sizes="(max-width: 768px) 100vw, 768px" className="object-contain" />

        {images.length > 1 && (
          <>
            <button
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center text-xl transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center text-xl transition-colors"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="mt-4 text-center text-cream" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs text-gold tracking-widest uppercase mb-1">{item.id}</p>
        <h3 className="font-display text-xl">{item.name}</h3>
        <p className="text-goldSoft font-semibold text-sm mt-1">{item.price}</p>
        {images.length > 1 && (
          <p className="text-xs text-cream/50 mt-2">{index + 1} / {images.length}</p>
        )}
      </div>
    </div>
  );
}
