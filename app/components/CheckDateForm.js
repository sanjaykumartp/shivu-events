"use client";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import Eyebrow from "./Eyebrow";
import { WhatsAppIcon } from "./Icons";
import { dict, WHATSAPP_NUMBER } from "../lib/site";

export default function CheckDateForm() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = [
      t.checkDateMsgIntro,
      name ? `${t.checkDateNameLabel}: ${name}` : null,
      date ? `${t.checkDateMsgDate}: ${date}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="px-6 py-20 bg-cream2">
      <div className="max-w-lg mx-auto">
        <Reveal className="text-center mb-10">
          <Eyebrow>{t.checkDateEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon mb-3">{t.checkDateTitle}</h2>
          <p className="text-ink/70 text-sm leading-relaxed">{t.checkDateSub}</p>
        </Reveal>

        <Reveal className="delay-150">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white shadow-sm border border-maroon/10 p-6 sm:p-8 flex flex-col sm:flex-row gap-4 items-end">
            <label className="flex-1 flex flex-col gap-1.5 w-full">
              <span className="text-sm font-medium text-maroon">{t.checkDateNameLabel}</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-maroon/20 focus:border-gold focus:outline-none text-ink"
              />
            </label>
            <label className="flex-1 flex flex-col gap-1.5 w-full">
              <span className="text-sm font-medium text-maroon">{t.checkDateDateLabel}</span>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-maroon/20 focus:border-gold focus:outline-none text-ink"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold text-maroon font-semibold hover:bg-goldSoft transition-colors w-full sm:w-auto shrink-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {t.checkDateBtn}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
