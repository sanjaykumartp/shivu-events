"use client";
import { useLanguage } from "./LanguageProvider";
import { InstagramIcon, FacebookIcon } from "./Icons";
import { dict, INSTAGRAM_URL, FACEBOOK_URL } from "../lib/site";

export default function SocialBar() {
  const { lang } = useLanguage();
  const t = dict[lang];

  return (
    <section className="print:hidden px-6 py-10 bg-cream2 border-t border-maroon/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <p className="text-xs tracking-widest uppercase text-ink/50">{t.socialConnect}</p>
        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
            style={{ background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)" }}
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            aria-label="Facebook"
            className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform bg-[#1877F2]"
          >
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
