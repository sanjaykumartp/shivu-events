"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { dict, PHONE_DISPLAY, WHATSAPP_NUMBER } from "../lib/site";
import { InstagramIcon, FacebookIcon, ContactIcon, LocationIcon } from "./Icons";

// TODO: replace "#" with real social profile URLs once available.
const SOCIALS = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
];

export default function Footer() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="print:hidden bg-maroon text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-goldSoft text-goldSoft font-display text-lg">✦</span>
            <div>
              <p className="font-display text-2xl leading-none">{lang === "en" ? "Shivu Events" : "ಶಿವು ಈವೆಂಟ್ಸ್"}</p>
              <p className="text-[11px] tracking-widest uppercase text-goldSoft mt-1">{t.footerTagline}</p>
            </div>
          </div>
          <p className="text-sm text-cream/60 leading-relaxed mt-4 max-w-xs">{t.footerDesc}</p>
          <div className="flex items-center gap-3 mt-6">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-cream/25 flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-goldSoft text-sm tracking-widest uppercase mb-5">{t.footerQuickLinks}</p>
          <nav className="flex flex-col gap-3 text-sm text-cream/70">
            <Link href="/" className="hover:text-cream transition-colors">{t.nav[0]}</Link>
            <Link href="/#services" className="hover:text-cream transition-colors">{t.nav[1]}</Link>
            <Link href="/about" className="hover:text-cream transition-colors">{t.nav[2]}</Link>
            <Link href="/contact" className="hover:text-cream transition-colors">{t.nav[3]}</Link>
            <Link href="/reviews" className="hover:text-cream transition-colors">{t.nav[4]}</Link>
          </nav>
        </div>

        <div>
          <p className="text-goldSoft text-sm tracking-widest uppercase mb-5">{t.footerContact}</p>
          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2.5 hover:text-cream transition-colors">
              <ContactIcon className="w-4 h-4 text-goldSoft shrink-0" />
              {PHONE_DISPLAY}
            </a>
            <span className="flex items-center gap-2.5">
              <LocationIcon className="w-4 h-4 text-goldSoft shrink-0" />
              {t.location}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-5 text-center text-xs text-cream/50">
        © {year} {t.footer} · {t.rightsReserved}
      </div>
    </footer>
  );
}
