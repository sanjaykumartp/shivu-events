"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "../lib/site";

export default function TeamCarousel({ team, hint, callOwnerLabel }) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const ownerIndex = Math.max(0, team.findIndex((m) => m.isOwner));
  const [activeIndex, setActiveIndex] = useState(ownerIndex);

  const centerOn = (i, behavior) => {
    const container = containerRef.current;
    const el = itemRefs.current[i];
    if (!container || !el) return;
    container.scrollTo({
      left: el.offsetLeft + el.offsetWidth / 2 - container.clientWidth / 2,
      behavior,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateActive = () => {
      const center = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActive);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    centerOn(ownerIndex, "auto");

    return () => container.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = team[activeIndex];

  return (
    <div>
      <div
        ref={containerRef}
        className="flex items-end gap-6 sm:gap-10 overflow-x-auto py-6 snap-x snap-mandatory scrollbar-hide"
        style={{ paddingLeft: "40%", paddingRight: "40%" }}
      >
        {team.map((m, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={m.id}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => centerOn(i, "smooth")}
              className="snap-center shrink-0 flex flex-col items-center"
              aria-label={m.name}
            >
              <span
                className={`relative rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  isActive
                    ? "w-28 h-28 sm:w-36 sm:h-36 border-gold shadow-xl"
                    : "w-14 h-14 sm:w-16 sm:h-16 border-maroon/10 opacity-60"
                }`}
              >
                <Image src={m.img} alt={m.name} fill sizes="150px" className="object-cover" />
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-center text-xs text-ink/40 mt-1">{hint}</p>

      <div className="text-center mt-6">
        <h3 className="font-display text-2xl text-maroon">{active.name}</h3>
        <p className="text-sm text-gold uppercase tracking-widest mt-1">{active.role}</p>
        {active.isOwner && (
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full border-2 border-maroon text-maroon font-semibold hover:bg-maroon hover:text-cream transition-colors"
          >
            {callOwnerLabel}
          </a>
        )}
      </div>
    </div>
  );
}
