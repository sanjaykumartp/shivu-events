"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QRPage() {
  const [dataUrl, setDataUrl] = useState("");
  const [siteUrl, setSiteUrl] = useState("");

  useEffect(() => {
    const url = window.location.origin;
    setSiteUrl(url);
    QRCode.toDataURL(url, { width: 480, margin: 2, color: { dark: "#4A1414", light: "#FAF3E6" } }).then(setDataUrl);
  }, []);

  return (
    <section className="px-6 pt-32 pb-24 min-h-[80vh] flex items-center justify-center print:pt-10">
      <div className="text-center max-w-sm w-full">
        <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">Scan &amp; Visit</p>
        <h1 className="font-display text-3xl text-maroon mb-6">Shivu Events Madhugiri</h1>
        <div className="bg-white rounded-2xl border border-maroon/10 shadow-sm p-6 inline-block">
          {dataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={dataUrl} alt="QR code to Shivu Events Madhugiri website" className="w-64 h-64" />
          ) : (
            <div className="w-64 h-64 animate-pulse bg-cream2 rounded-lg" />
          )}
        </div>
        <p className="mt-6 text-ink/70">Scan this to visit our website</p>
        <p className="text-ink/70 text-sm">ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ನಮ್ಮ ವೆಬ್‌ಸೈಟ್ ನೋಡಿ</p>
        <p className="mt-2 text-xs text-ink/40 break-all">{siteUrl}</p>
        <button
          onClick={() => window.print()}
          className="print:hidden mt-8 px-6 py-3 rounded-full bg-gold text-maroon font-semibold hover:bg-goldSoft transition-colors"
        >
          Print this page
        </button>
      </div>
    </section>
  );
}
