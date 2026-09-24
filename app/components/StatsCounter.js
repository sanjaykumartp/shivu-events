"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { dict } from "../lib/site";

function Counter({ value, suffix, started }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value]);

  return <>{display}{suffix}</>;
}

export default function StatsCounter() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-16 bg-maroon text-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {t.stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl sm:text-5xl text-goldSoft">
              <Counter value={s.value} suffix={s.suffix} started={started} />
            </p>
            <p className="mt-2 text-xs sm:text-sm tracking-wide text-cream/70 uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
