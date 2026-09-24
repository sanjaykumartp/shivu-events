"use client";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import Eyebrow from "./Eyebrow";
import { dict } from "../lib/site";

function VideoCard({ item }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] shadow-sm border border-maroon/10">
      {playing ? (
        <video
          src={item.video}
          poster={item.poster}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play video testimonial from ${item.name}`}
          className="group relative w-full h-full"
        >
          {item.poster && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.poster} alt="" className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-maroon ml-1" />
            </span>
          </span>
          <span className="absolute bottom-4 left-4 text-white text-left">
            <p className="font-display text-lg">{item.name}</p>
            {item.role && <p className="text-xs text-white/70">{item.role}</p>}
          </span>
        </button>
      )}
    </div>
  );
}

export default function VideoTestimonials() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const items = t.videoTestimonials;

  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <Eyebrow>{t.videoTestimonialsEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-maroon">{t.videoTestimonialsTitle}</h2>
        </Reveal>

        {items.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <Reveal key={item.name} className={i % 3 === 1 ? "delay-150" : i % 3 === 2 ? "delay-300" : ""}>
                <VideoCard item={item} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="max-w-md mx-auto text-center rounded-2xl border border-dashed border-maroon/20 bg-white/60 px-6 py-12">
            <p className="text-ink/60 text-sm leading-relaxed">{t.videoTestimonialsEmpty}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
