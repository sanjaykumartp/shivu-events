"use client";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import Eyebrow from "./Eyebrow";
import { LocationIcon } from "./Icons";
import { dict } from "../lib/site";

export default function AreasWeServe() {
  const { lang } = useLanguage();
  const t = dict[lang];

  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <Eyebrow>{t.areasEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon mb-3">{t.areasTitle}</h2>
          <p className="text-ink/70 text-sm leading-relaxed mb-8">{t.areasSub}</p>
        </Reveal>
        <Reveal className="delay-150">
          <div className="flex flex-wrap justify-center gap-3">
            {t.areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-maroon/10 text-sm text-maroon font-medium shadow-sm"
              >
                <LocationIcon className="w-3.5 h-3.5 text-gold" />
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
