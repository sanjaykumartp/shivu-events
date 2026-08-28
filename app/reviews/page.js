"use client";
import { useLanguage } from "../components/LanguageProvider";
import { Reveal } from "../components/Reveal";
import TestimonialCards from "../components/TestimonialCards";
import Eyebrow from "../components/Eyebrow";
import { dict, GOOGLE_MAPS_URL } from "../lib/site";

export default function Reviews() {
  const { lang } = useLanguage();
  const t = dict[lang];

  return (
    <section className="px-6 pt-32 pb-24 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <Eyebrow>{t.testimonialsEyebrow}</Eyebrow>
          <h1 className="font-display text-4xl text-maroon mb-3">{t.testimonialsTitle}</h1>
          <p className="text-ink/70 text-sm leading-relaxed">{t.reviewsPageSub}</p>
        </Reveal>

        <TestimonialCards items={t.testimonials} />

        {GOOGLE_MAPS_URL && (
          <div className="text-center mt-14">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              className="inline-block px-6 py-3 rounded-full border-2 border-maroon text-maroon font-semibold hover:bg-maroon hover:text-cream transition-colors"
            >
              {t.reviewsGoogleLink}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
