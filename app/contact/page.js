"use client";
import { useLanguage } from "../components/LanguageProvider";
import { Reveal } from "../components/Reveal";
import { WhatsAppIcon } from "../components/Icons";
import OpenStatus from "../components/OpenStatus";
import Eyebrow from "../components/Eyebrow";
import { dict, PHONE_DISPLAY, WHATSAPP_NUMBER } from "../lib/site";

export default function Contact() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const waMsg = encodeURIComponent(t.waMessage);

  return (
    <section className="px-6 max-w-6xl mx-auto pt-32 pb-24 min-h-[70vh]">
      <div className="grid sm:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow align="left">{t.contactEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-maroon mb-4">{t.contactTitle}</h2>
          <p className="text-ink/70 mb-8">{t.contactSub}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`} target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-maroon font-semibold hover:bg-goldSoft transition-colors">
              <WhatsAppIcon className="w-5 h-5" />
              {t.contactBtn}
            </a>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="px-6 py-3 rounded-full border-2 border-maroon text-maroon font-semibold hover:bg-maroon hover:text-cream transition-colors">
              {t.callBtn}
            </a>
          </div>
          <p className="mt-6 text-sm text-ink/60">{PHONE_DISPLAY} · {t.location}</p>
          <div className="mt-3">
            <OpenStatus />
          </div>
        </Reveal>
        <Reveal className="delay-150">
          <div className="rounded-2xl overflow-hidden border border-maroon/10 h-72">
            <iframe
              title="map"
              className="w-full h-full"
              loading="lazy"
              src="https://maps.google.com/maps?q=Madhugiri%2C%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
