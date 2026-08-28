"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";
import { Reveal } from "../../components/Reveal";
import { dict } from "../../lib/site";

export default function ServiceGallery({ params }) {
  const { lang } = useLanguage();
  const t = dict[lang];
  const service = t.services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <section className="px-6 pt-32 pb-24 text-center min-h-[60vh]">
        <p className="text-ink/60">Service not found.</p>
      </section>
    );
  }

  return (
    <section className="px-6 pt-32 pb-24 max-w-6xl mx-auto min-h-[80vh]">
      <Link
        href="/#services"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-maroon/70 hover:text-maroon transition-colors mb-8"
      >
        ← {t.backToServices}
      </Link>

      <Reveal className="text-center max-w-xl mx-auto mb-14">
        <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">{t.servicesEyebrow}</p>
        <h1 className="font-display text-4xl text-maroon mb-3">{service.name}</h1>
        <p className="text-ink/70 text-sm leading-relaxed">{service.desc}</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.gallery.map((g, i) => (
          <Reveal key={g.id} className={i % 3 === 1 ? "delay-150" : i % 3 === 2 ? "delay-300" : ""}>
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-maroon/10 h-full">
              <div className="relative h-52 overflow-hidden">
                <Image src={g.img} alt={g.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-xs text-gold tracking-widest uppercase mb-1">{g.id}</p>
                <h3 className="font-display text-xl text-maroon mb-1">{g.name}</h3>
                <p className="text-maroon font-semibold">{g.price}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
