"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import Eyebrow from "./Eyebrow";
import { dict } from "../lib/site";

export default function PastEventsSlider() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const events = t.pastEvents;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % events.length), 4500);
    return () => clearInterval(id);
  }, [paused, events.length]);

  const go = (delta) => setIndex((i) => (i + delta + events.length) % events.length);

  return (
    <section className="px-6 py-24 bg-cream2">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <Eyebrow>{t.pastEventsEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-maroon mb-2">{t.pastEventsTitle}</h2>
          <p className="text-ink/60 text-sm">{t.pastEventsSub}</p>
        </Reveal>

        <div
          className="relative rounded-3xl overflow-hidden shadow-lg aspect-[16/9]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {events.map((e, i) => (
            <div
              key={e.names}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <Image src={e.img} alt={e.names} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-10 text-cream">
                <h3 className="font-display text-2xl sm:text-3xl">{e.names}</h3>
                <p className="text-cream/80 text-sm mt-1">{e.venue} · {e.date}</p>
              </div>
            </div>
          ))}

          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white text-xl transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white text-xl transition-colors"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-gold" : "w-2 bg-maroon/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
