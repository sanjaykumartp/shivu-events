"use client";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import Eyebrow from "./Eyebrow";
import { dict } from "../lib/site";

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const items = [...t.testimonials, ...t.testimonials];

  return (
    <section className="py-24 bg-cream2 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <Eyebrow>{t.testimonialsEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-maroon">{t.testimonialsTitle}</h2>
        </Reveal>
      </div>

      <div className="group [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-8 w-max animate-marquee group-hover:[animation-play-state:paused] px-6">
          {items.map((r, i) => (
            <div key={`${r.name}-${i}`} className="w-80 shrink-0 rounded-2xl bg-white shadow-sm border border-maroon/10 p-6 flex flex-col">
              <div className="text-gold text-lg mb-3 tracking-widest">★★★★★</div>
              <p className="text-ink/75 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-maroon/10">
                <p className="font-display text-lg text-maroon">{r.name}</p>
                <p className="text-xs text-ink/50">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
