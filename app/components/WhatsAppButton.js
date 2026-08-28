"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { dict, WHATSAPP_NUMBER } from "../lib/site";
import { WhatsAppIcon, ServicesIcon } from "./Icons";

export default function WhatsAppButton() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const waMsg = encodeURIComponent(t.waMessage);

  return (
    <div className="print:hidden fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
        target="_blank"
        className="flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-lg hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="w-5 h-5" />
        WhatsApp
      </a>
      <Link
        href="/contact"
        className="flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-gold text-maroon font-semibold text-sm shadow-lg hover:bg-goldSoft hover:scale-105 transition-all"
      >
        <ServicesIcon className="w-4 h-4" />
        {t.enquire}
      </Link>
    </div>
  );
}
