"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import Eyebrow from "./Eyebrow";
import { InstagramIcon } from "./Icons";
import { dict, IMAGES, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../lib/site";

const GRID_IMAGES = [IMAGES.flowers, IMAGES.hero, IMAGES.sound, IMAGES.photography, IMAGES.utensils, IMAGES.teamOwner];

export default function InstagramFeed() {
  const { lang } = useLanguage();
  const t = dict[lang];

  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-4">
          <Eyebrow>{t.instagramEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-maroon mb-2">{t.instagramTitle}</h2>
          <p className="text-ink/60 text-sm">{t.instagramSub}</p>
        </Reveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 mt-10">
          {GRID_IMAGES.map((img, i) => (
            <Reveal key={i} className={i % 3 === 1 ? "delay-150" : i % 3 === 2 ? "delay-300" : ""}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                <Image src={img} alt="" fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/50 transition-colors flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-maroon text-maroon font-semibold hover:bg-maroon hover:text-cream transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
            {t.instagramFollowBtn} {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
