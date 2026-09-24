"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./components/LanguageProvider";
import { Reveal } from "./components/Reveal";
import { WhatsAppIcon, ClockIcon, TagIcon, CalendarIcon, LocationIcon } from "./components/Icons";
import OpenStatus from "./components/OpenStatus";
import Testimonials from "./components/Testimonials";
import GoogleReviewsBadge from "./components/GoogleReviewsBadge";
import InstagramFeed from "./components/InstagramFeed";
import PastEventsSlider from "./components/PastEventsSlider";
import StatsCounter from "./components/StatsCounter";
import Eyebrow from "./components/Eyebrow";
import { dict, IMAGES, HERO_VIDEO, WHATSAPP_NUMBER } from "./lib/site";

const HIGHLIGHT_ICONS = [ClockIcon, TagIcon, CalendarIcon, LocationIcon];

export default function Home() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const waMsg = encodeURIComponent(t.waMessage);
  const [heroSubList, heroSubTail] = t.heroSub.split(" — ");

  return (
    <>
      {/* HERO — split screen: image (with headline) left, highlights right */}
      <section id="home" className="grid md:grid-cols-2 min-h-[92vh]">
        <div className="relative h-[75vh] md:h-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={IMAGES.hero}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/45 to-maroon/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-cream">
            <p className="petal-divider w-16 mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.1]">
              {t.heroTitle}<br />
              <span className="text-goldSoft italic">{t.heroTitle2}</span>
            </h1>
            <p className="mt-5 max-w-lg text-cream/90 text-base sm:text-lg leading-relaxed">
              {heroSubList}
              <br />
              {heroSubTail}
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-maroon2 via-maroon to-[#2E0B0B] text-cream flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-28 pb-14 md:border-l md:border-gold/20">
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-gold/20 blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-28 -left-20 w-96 h-96 rounded-full bg-goldSoft/10 blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(rgba(228,193,88,0.9) 1px, transparent 1.5px)", backgroundSize: "22px 22px" }}
          />
          <span className="absolute top-6 right-6 sm:top-8 sm:right-10 text-gold/25 font-display text-4xl select-none">✦</span>
          <span className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-gold/25 font-display text-4xl select-none">✦</span>

          <div className="relative">
            <div className="mb-8">
              <OpenStatus />
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`} target="_blank" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-maroon font-semibold text-lg hover:bg-goldSoft transition-colors w-fit shadow-lg shadow-gold/20">
              <WhatsAppIcon className="w-6 h-6" />
              {t.cta}
            </a>

            <div className="mt-14 pt-10 border-t border-gold/20">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-goldSoft text-base">✦</span>
                <p className="font-body text-goldSoft text-sm tracking-widest uppercase">{t.whyChooseUs}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {t.highlights.map((h, i) => {
                  const Icon = HIGHLIGHT_ICONS[i];
                  return (
                    <Reveal key={h.title} className={i % 2 === 1 ? "delay-150" : ""}>
                      <div>
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/40 bg-gold/10 text-goldSoft mb-3 shadow-[0_0_16px_rgba(228,193,88,0.15)]">
                          <Icon className="w-6 h-6" />
                        </span>
                        <h3 className="font-display text-lg text-cream mb-1.5">{h.title}</h3>
                        <p className="text-xs text-cream/75 leading-relaxed">{h.desc}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 px-6 max-w-6xl mx-auto py-24">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <Eyebrow>{t.servicesEyebrow}</Eyebrow>
          <h2 className="font-display text-4xl text-maroon">{t.servicesTitle}</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((s, i) => (
            <Reveal key={s.name} className={i % 3 === 1 ? "delay-150" : i % 3 === 2 ? "delay-300" : ""}>
              <Link href={`/services/${s.slug}`} className="group block rounded-2xl overflow-hidden bg-white shadow-sm border border-maroon/10 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.img} alt={s.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-maroon mb-2">{s.name}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{s.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-gold group-hover:text-goldSoft transition-colors">{t.viewGallery} →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <PastEventsSlider />
      <Testimonials />
      <GoogleReviewsBadge />
      <InstagramFeed />
      <StatsCounter />
    </>
  );
}
