"use client";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "918217328664"; // TODO: update if number changes
const PHONE_DISPLAY = "+91 82173 28664";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=70",
  flowers: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=60",
  photography: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=60",
  sound: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=60",
  utensils: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=60",
};

const dict = {
  en: {
    nav: ["Home", "Services", "About Us", "Contact"],
    heroTitle: "Every celebration,",
    heroTitle2: "beautifully arranged.",
    heroSub: "Flower Decoration · Photography · Sound Systems · Event Utensils — everything your function needs, from one trusted team in Madhugiri.",
    cta: "Enquire on WhatsApp",
    servicesEyebrow: "What we do",
    servicesTitle: "Our Services",
    services: [
      { name: "Flower Decoration", desc: "Stage, mandap, entrance and hall decoration for weddings, engagements, house-warmings and all functions.", img: IMAGES.flowers },
      { name: "Photography", desc: "Candid and traditional photography & videography to capture every moment of your event.", img: IMAGES.photography },
      { name: "Sound Systems", desc: "Professional sound systems and DJ setup for weddings, receptions and celebrations of any size.", img: IMAGES.sound },
      { name: "Event Utensils Rental", desc: "Plates, glasses, vessels and catering essentials on rent for your function, delivered on time.", img: IMAGES.utensils },
    ],
    aboutEyebrow: "About Us",
    aboutTitle: "A trusted name for events in Madhugiri",
    aboutBody: "Shivu Events Madhugiri has been arranging weddings and functions with care and attention to detail. From the first flower on the stage to the last plate served, we handle every part of your event so you can enjoy the celebration with your family.",
    ownerLabel: "Owner",
    contactEyebrow: "Get in touch",
    contactTitle: "Planning an event? Let's talk.",
    contactSub: "Tell us your date and what you need — we'll take it from there.",
    contactBtn: "Message on WhatsApp",
    callBtn: "Call Now",
    location: "Madhugiri, Karnataka",
    footer: "Shivu Events Madhugiri",
  },
  kn: {
    nav: ["ಮುಖಪುಟ", "ಸೇವೆಗಳು", "ನಮ್ಮ ಬಗ್ಗೆ", "ಸಂಪರ್ಕ"],
    heroTitle: "ಪ್ರತಿ ಸಂಭ್ರಮವನ್ನೂ,",
    heroTitle2: "ಸುಂದರವಾಗಿ ಅಲಂಕರಿಸುತ್ತೇವೆ.",
    heroSub: "ಹೂ ಅಲಂಕಾರ · ಫೋಟೋಗ್ರಫಿ · ಸೌಂಡ್ ಸಿಸ್ಟಂ · ಈವೆಂಟ್ ಪಾತ್ರೆ ಸಾಮಾನು — ನಿಮ್ಮ ಫಂಕ್ಷನ್‌ಗೆ ಬೇಕಾದ ಎಲ್ಲಾ, ಮಧುಗಿರಿಯ ಒಂದೇ ವಿಶ್ವಾಸಾರ್ಹ ತಂಡದಿಂದ.",
    cta: "WhatsApp‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
    servicesEyebrow: "ನಾವು ಏನು ಮಾಡ್ತೇವೆ",
    servicesTitle: "ನಮ್ಮ ಸೇವೆಗಳು",
    services: [
      { name: "ಹೂ ಅಲಂಕಾರ", desc: "ಮದುವೆ, ನಿಶ್ಚಿತಾರ್ಥ, ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಎಲ್ಲಾ ಫಂಕ್ಷನ್‌ಗೆ ಸ್ಟೇಜ್, ಮಂಟಪ, ಪ್ರವೇಶದ್ವಾರ ಮತ್ತು ಹಾಲ್ ಅಲಂಕಾರ.", img: IMAGES.flowers },
      { name: "ಫೋಟೋಗ್ರಫಿ", desc: "ನಿಮ್ಮ ಈವೆಂಟ್‌ನ ಪ್ರತಿ ಕ್ಷಣ ಸೆರೆಹಿಡಿಯೋಕೆ ಕ್ಯಾಂಡಿಡ್ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಫೋಟೋಗ್ರಫಿ & ವಿಡಿಯೋಗ್ರಫಿ.", img: IMAGES.photography },
      { name: "ಸೌಂಡ್ ಸಿಸ್ಟಂ", desc: "ಎಲ್ಲಾ ಗಾತ್ರದ ಮದುವೆ, ರಿಸೆಪ್ಷನ್ ಮತ್ತು ಸಂಭ್ರಮಗಳಿಗೆ ಪ್ರೊಫೆಷನಲ್ ಸೌಂಡ್ ಸಿಸ್ಟಂ ಮತ್ತು DJ ಸೆಟಪ್.", img: IMAGES.sound },
      { name: "ಈವೆಂಟ್ ಪಾತ್ರೆ ಸಾಮಾನು ಬಾಡಿಗೆ", desc: "ತಟ್ಟೆ, ಲೋಟ, ಪಾತ್ರೆ ಮತ್ತು ಕ್ಯಾಟರಿಂಗ್ ಸಾಮಾನು ಬಾಡಿಗೆಗೆ, ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಡೆಲಿವರಿ.", img: IMAGES.utensils },
    ],
    aboutEyebrow: "ನಮ್ಮ ಬಗ್ಗೆ",
    aboutTitle: "ಮಧುಗಿರಿಯ ವಿಶ್ವಾಸಾರ್ಹ ಈವೆಂಟ್ ಹೆಸರು",
    aboutBody: "ಶಿವು ಈವೆಂಟ್ಸ್ ಮಧುಗಿರಿ ಕಾಳಜಿ ಮತ್ತು ಸೂಕ್ಷ್ಮ ಗಮನದಿಂದ ಮದುವೆ ಮತ್ತು ಫಂಕ್ಷನ್‌ಗಳನ್ನ ಅಲಂಕರಿಸ್ತಾ ಬಂದಿದೆ. ಸ್ಟೇಜ್‌ನ ಮೊದಲ ಹೂವಿಂದ ಕೊನೆಯ ತಟ್ಟೆವರೆಗೆ, ನಿಮ್ಮ ಈವೆಂಟ್‌ನ ಪ್ರತಿ ಭಾಗವನ್ನೂ ನಾವು ನೋಡಿಕೊಳ್ತೀವಿ — ನೀವು ಕುಟುಂಬದ ಜೊತೆ ಸಂಭ್ರಮ ಆನಂದಿಸಬಹುದು.",
    ownerLabel: "ಓನರ್",
    contactEyebrow: "ಸಂಪರ್ಕಿಸಿ",
    contactTitle: "ಈವೆಂಟ್ ಪ್ಲಾನ್ ಮಾಡ್ತಾ ಇದ್ದೀರಾ? ಮಾತಾಡೋಣ.",
    contactSub: "ನಿಮ್ಮ ದಿನಾಂಕ ಮತ್ತು ಏನು ಬೇಕು ಅಂತ ಹೇಳಿ — ಮುಂದಿನದೆಲ್ಲ ನಾವು ನೋಡಿಕೊಳ್ತೀವಿ.",
    contactBtn: "WhatsApp‌ನಲ್ಲಿ ಮೆಸೇಜ್ ಮಾಡಿ",
    callBtn: "ಈಗಲೇ ಕರೆ ಮಾಡಿ",
    location: "ಮಧುಗಿರಿ, ಕರ್ನಾಟಕ",
    footer: "ಶಿವು ಈವೆಂಟ್ಸ್ ಮಧುಗಿರಿ",
  },
};

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in"); io.unobserve(el); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = dict[lang];
  const waMsg = encodeURIComponent(
    lang === "en"
      ? "Hi, I saw your website. I want to enquire about an event."
      : "ನಮಸ್ಕಾರ, ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್ ನೋಡಿದೆ. ಈವೆಂಟ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಬೇಕಿತ್ತು."
  );

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 bg-cream/90 backdrop-blur-md border-b border-maroon/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-2xl font-semibold text-maroon">
            {lang === "en" ? "Shivu Events" : "ಶಿವು ಈವೆಂಟ್ಸ್"}
          </span>
          <nav className="hidden md:flex gap-7 font-body text-sm text-ink/80">
            <a href="#home" className="hover:text-maroon transition-colors">{t.nav[0]}</a>
            <a href="#services" className="hover:text-maroon transition-colors">{t.nav[1]}</a>
            <a href="#about" className="hover:text-maroon transition-colors">{t.nav[2]}</a>
            <a href="#contact" className="hover:text-maroon transition-colors">{t.nav[3]}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang("kn")} className={`px-2.5 py-1 rounded-full text-xs border transition-colors ${lang === "kn" ? "bg-maroon text-cream border-maroon" : "border-maroon/30 text-maroon/70 hover:border-maroon"}`}>KN</button>
            <button onClick={() => setLang("en")} className={`px-2.5 py-1 rounded-full text-xs border transition-colors ${lang === "en" ? "bg-maroon text-cream border-maroon" : "border-maroon/30 text-maroon/70 hover:border-maroon"}`}>EN</button>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`} target="_blank" className="ml-1 px-4 py-2 rounded-full bg-gold text-maroon text-sm font-semibold hover:bg-goldSoft transition-colors">
              {lang === "en" ? "Contact" : "ಸಂಪರ್ಕ"}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative h-[92vh] min-h-[560px] flex items-end">
        <img src={IMAGES.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/50 to-maroon/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 text-cream">
          <p className="petal-divider w-16 mb-6" />
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.1]">
            {t.heroTitle}<br />
            <span className="text-goldSoft italic">{t.heroTitle2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-cream/90 text-lg">{t.heroSub}</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`} target="_blank" className="inline-block mt-8 px-7 py-3.5 rounded-full bg-gold text-maroon font-semibold hover:bg-goldSoft transition-colors">
            {t.cta}
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 max-w-6xl mx-auto py-24">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">{t.servicesEyebrow}</p>
          <h2 className="font-display text-4xl text-maroon">{t.servicesTitle}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-8">
          {t.services.map((s, i) => (
            <Reveal key={s.name} className={i % 2 === 1 ? "delay-150" : ""}>
              <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-maroon/10 h-full">
                <div className="h-48 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-maroon mb-2">{s.name}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 bg-cream2">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">{t.aboutEyebrow}</p>
            <h2 className="font-display text-4xl text-maroon mb-6">{t.aboutTitle}</h2>
            <p className="text-ink/75 leading-relaxed text-lg">{t.aboutBody}</p>
            <p className="mt-6 font-display text-xl text-maroon">{t.ownerLabel}: Shivu</p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 max-w-6xl mx-auto py-24">
        <div className="grid sm:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">{t.contactEyebrow}</p>
            <h2 className="font-display text-4xl text-maroon mb-4">{t.contactTitle}</h2>
            <p className="text-ink/70 mb-8">{t.contactSub}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`} target="_blank" className="px-6 py-3 rounded-full bg-gold text-maroon font-semibold hover:bg-goldSoft transition-colors">
                {t.contactBtn}
              </a>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="px-6 py-3 rounded-full border-2 border-maroon text-maroon font-semibold hover:bg-maroon hover:text-cream transition-colors">
                {t.callBtn}
              </a>
            </div>
            <p className="mt-6 text-sm text-ink/60">{PHONE_DISPLAY} · {t.location}</p>
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

      <footer className="px-6 py-8 text-center text-sm text-cream bg-maroon">
        {t.footer}
      </footer>
    </main>
  );
}
