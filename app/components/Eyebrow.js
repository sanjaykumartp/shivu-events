export default function Eyebrow({ children, align = "center" }) {
  return (
    <p className={`flex items-center gap-3 font-body text-gold text-sm tracking-widest uppercase mb-3 ${align === "left" ? "justify-start" : "justify-center"}`}>
      <span className="w-8 h-px bg-gold/50" />
      {children}
      <span className="w-8 h-px bg-gold/50" />
    </p>
  );
}
