"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { dict, WHATSAPP_NUMBER } from "../lib/site";
import { HomeIcon, ServicesIcon, AboutIcon, ContactIcon, StarIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = dict[lang];
  const waMsg = encodeURIComponent(t.waMessage);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const services = document.getElementById("services");
      setActiveSection(services && services.getBoundingClientRect().top <= 96 ? "services" : "home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems = [
    { label: t.nav[0], href: "/", Icon: HomeIcon, active: pathname === "/" && activeSection === "home" },
    { label: t.nav[1], href: "/#services", Icon: ServicesIcon, active: pathname === "/" && activeSection === "services" },
    { label: t.nav[2], href: "/about", Icon: AboutIcon, active: pathname === "/about" },
    { label: t.nav[3], href: "/contact", Icon: ContactIcon, active: pathname === "/contact" },
    { label: t.nav[4], href: "/reviews", Icon: StarIcon, active: pathname === "/reviews" },
  ];

  const linkClasses = (active) =>
    `relative flex items-center gap-1.5 pb-1 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
      active ? "text-maroon after:w-full" : "text-ink/80 hover:text-maroon after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      <header className={`print:hidden fixed top-0 inset-x-0 z-40 bg-cream/95 backdrop-blur-md border-b transition-shadow ${scrolled ? "border-maroon/10 shadow-md" : "border-maroon/5"}`}>
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gold text-gold font-display text-lg">✦</span>
            <span className="font-display text-2xl font-semibold text-maroon leading-none">
              {lang === "en" ? "Shivu Events" : "ಶಿವು ಈವೆಂಟ್ಸ್"}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 ml-auto">
            <nav className="flex gap-7 font-body text-sm">
              {navItems.map(({ label, href, Icon, active }) => (
                <Link key={label} href={href} className={linkClasses(active)}>
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 pl-2 border-l border-maroon/10">
              <button onClick={() => setLang("kn")} className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${lang === "kn" ? "bg-maroon text-cream border-maroon" : "border-maroon/30 text-maroon/70 hover:border-maroon"}`}>{t.langNames.kn}</button>
              <button onClick={() => setLang("en")} className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${lang === "en" ? "bg-maroon text-cream border-maroon" : "border-maroon/30 text-maroon/70 hover:border-maroon"}`}>{t.langNames.en}</button>
            </div>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-maroon/20"
          >
            <span className="block w-5 h-[2px] bg-maroon" />
            <span className="block w-5 h-[2px] bg-maroon" />
            <span className="block w-5 h-[2px] bg-maroon" />
          </button>
        </div>
      </header>

      <div
        className={`print:hidden fixed inset-0 z-50 bg-maroon text-cream flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <button
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-6 w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center text-2xl leading-none"
        >
          ×
        </button>
        <nav className="flex flex-col items-center gap-7 font-display text-3xl">
          {navItems.map(({ label, href, Icon, active }) => (
            <Link key={label} href={href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 ${active ? "text-goldSoft" : ""}`}>
              <Icon className="w-6 h-6" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang("kn")} className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${lang === "kn" ? "bg-gold text-maroon border-gold" : "border-cream/30 text-cream/80"}`}>{t.langNames.kn}</button>
          <button onClick={() => setLang("en")} className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${lang === "en" ? "bg-gold text-maroon border-gold" : "border-cream/30 text-cream/80"}`}>{t.langNames.en}</button>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
          target="_blank"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-maroon font-semibold"
        >
          <WhatsAppIcon className="w-5 h-5" />
          {t.contactBtn}
        </a>
      </div>
    </>
  );
}
