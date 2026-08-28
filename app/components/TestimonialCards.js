import { Reveal } from "./Reveal";

export default function TestimonialCards({ items }) {
  return (
    <div className="grid sm:grid-cols-3 gap-8">
      {items.map((r, i) => (
        <Reveal key={`${r.name}-${i}`} className={i % 3 === 1 ? "delay-150" : i % 3 === 2 ? "delay-300" : ""}>
          <div className="rounded-2xl bg-white shadow-sm border border-maroon/10 h-full p-6 flex flex-col">
            <div className="text-gold text-lg mb-3 tracking-widest">
              {"★".repeat(r.rating || 5)}{"☆".repeat(5 - (r.rating || 5))}
            </div>
            <p className="text-ink/75 text-sm leading-relaxed flex-1">"{r.text}"</p>
            <div className="mt-5 pt-4 border-t border-maroon/10">
              <p className="font-display text-lg text-maroon">{r.name}</p>
              {r.role && <p className="text-xs text-ink/50">{r.role}</p>}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
