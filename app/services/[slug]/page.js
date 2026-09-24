"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";
import { Reveal } from "../../components/Reveal";
import Eyebrow from "../../components/Eyebrow";
import GalleryLightbox from "../../components/GalleryLightbox";
import { dict } from "../../lib/site";

export default function ServiceGallery({ params }) {
  const { lang } = useLanguage();
  const t = dict[lang];
  const service = t.services.find((s) => s.slug === params.slug);
  const [active, setActive] = useState("all");
  const [lightboxItem, setLightboxItem] = useState(null);

  if (!service) {
    return (
      <section className="px-6 pt-32 pb-24 text-center min-h-[60vh]">
        <p className="text-ink/60">Service not found.</p>
      </section>
    );
  }

  const subcats = active === "all" ? service.subcategories : service.subcategories.filter((c) => c.id === active);

  return (
    <section className="px-6 pt-32 pb-24 max-w-6xl mx-auto min-h-[80vh]">
      <Link
        href="/#services"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-maroon/70 hover:text-maroon transition-colors mb-8"
      >
        ← {t.backToServices}
      </Link>

      <Reveal className="text-center max-w-xl mx-auto mb-10">
        <Eyebrow>{t.servicesEyebrow}</Eyebrow>
        <h1 className="font-display text-4xl text-maroon mb-3">{service.name}</h1>
        <p className="text-ink/70 text-sm leading-relaxed">{service.desc}</p>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-3 mb-14">
        <button
          onClick={() => setActive("all")}
          className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
            active === "all" ? "bg-gold text-maroon border-gold" : "border-maroon/20 text-maroon/70 hover:border-maroon"
          }`}
        >
          {t.viewAll}
        </button>
        {service.subcategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
              active === c.id ? "bg-gold text-maroon border-gold" : "border-maroon/20 text-maroon/70 hover:border-maroon"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {subcats.map((cat) => (
        <div key={cat.id} className="mb-16 last:mb-0">
          {active === "all" && (
            <h2 className="font-display text-2xl text-maroon mb-6 pb-2 border-b border-maroon/10">{cat.name}</h2>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.items.map((g, i) => (
              <Reveal key={g.id} className={i % 3 === 1 ? "delay-150" : i % 3 === 2 ? "delay-300" : ""}>
                <button
                  onClick={() => setLightboxItem(g)}
                  className="text-left w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-maroon/10 h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image src={g.img} alt={g.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gold tracking-widest uppercase mb-1">{g.id}</p>
                    <h3 className="font-display text-xl text-maroon mb-1">{g.name}</h3>
                    <p className="text-maroon font-semibold">{g.price}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      ))}

      {lightboxItem && <GalleryLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
    </section>
  );
}
