"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { dict, BUSINESS_HOURS } from "../lib/site";

export default function OpenStatus({ className = "" }) {
  const { lang } = useLanguage();
  const t = dict[lang];
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const check = () => {
      const hour = new Date().getHours();
      setIsOpen(hour >= BUSINESS_HOURS.openHour && hour < BUSINESS_HOURS.closeHour);
    };
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`inline-flex items-center gap-2 text-sm font-medium ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        {isOpen && <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isOpen ? "bg-green-400" : "bg-red-400"}`} />
      </span>
      <span>{isOpen ? t.openNow : t.closedNow}</span>
      <span className="opacity-60">· {t.hoursDisplay}</span>
    </span>
  );
}
