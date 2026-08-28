"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import Eyebrow from "./Eyebrow";
import { GoogleIcon, StarIcon } from "./Icons";
import { dict, GOOGLE_MAPS_URL, GOOGLE_RATING } from "../lib/site";

export default function GoogleReviewsBadge() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const fullStars = GOOGLE_RATING ? Math.round(GOOGLE_RATING) : 5;

  return (
    <section className="px-6 py-16">
      <Reveal className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-cream2 via-cream to-cream2 border border-gold/20 shadow-sm px-6 sm:px-12 py-12 grid sm:grid-cols-[auto,1fr] gap-10 items-center">
        <div className="mx-auto sm:mx-0 w-40 h-40 rounded-full bg-white border border-gold/20 shadow-md flex flex-col items-center justify-center shrink-0">
          <GoogleIcon className="w-8 h-8 mb-1" />
          {GOOGLE_RATING ? (
            <>
              <span className="font-display text-4xl text-maroon">{GOOGLE_RATING}</span>
              <span className="flex gap-0.5 text-gold my-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <StarIcon key={n} className="w-3.5 h-3.5" filled={n <= fullStars} />
                ))}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-ink/40">{t.outOfFive}</span>
            </>
          ) : (
            <span className="flex gap-0.5 text-gold mt-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <StarIcon key={n} className="w-4 h-4" filled />
              ))}
            </span>
          )}
        </div>

        <div className="text-center sm:text-left">
          <Eyebrow align="left">{t.googleEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon leading-tight">
            {GOOGLE_RATING ? t.googleTitleRated.replace("{rating}", GOOGLE_RATING) : t.googleTitleNoRating}
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">{t.googleSub}</p>
          <div className="mt-7 flex flex-wrap justify-center sm:justify-start gap-4">
            {GOOGLE_MAPS_URL && (
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                className="px-6 py-3 rounded-full bg-gold text-maroon font-semibold hover:bg-goldSoft transition-colors"
              >
                {t.googleReadBtn}
              </a>
            )}
            <Link
              href="/reviews"
              className="px-6 py-3 rounded-full border-2 border-maroon text-maroon font-semibold hover:bg-maroon hover:text-cream transition-colors"
            >
              {t.googleWriteBtn}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
