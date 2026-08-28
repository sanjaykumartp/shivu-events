"use client";
import { useLanguage } from "../components/LanguageProvider";
import { Reveal } from "../components/Reveal";
import TeamCarousel from "../components/TeamCarousel";
import Eyebrow from "../components/Eyebrow";
import { dict } from "../lib/site";

export default function About() {
  const { lang } = useLanguage();
  const t = dict[lang];

  return (
    <>
      <section className="px-6 pt-32 pb-16 bg-cream2">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Eyebrow>{t.aboutEyebrow}</Eyebrow>
            <h2 className="font-display text-4xl text-maroon mb-6">{t.aboutTitle}</h2>
            <p className="text-ink/75 leading-relaxed text-lg">{t.aboutBody}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-4">
            <Eyebrow>{t.teamEyebrow}</Eyebrow>
            <h2 className="font-display text-4xl text-maroon">{t.teamTitle}</h2>
          </Reveal>
          <Reveal className="delay-150">
            <TeamCarousel team={t.team} hint={t.teamHint} callOwnerLabel={t.callOwner} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
