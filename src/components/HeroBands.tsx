/** Bandes bleu nuit qui se lèvent du sol vers le toit : l'image « se construit » étage par étage (CSS pur). */
export function HeroBands({ count = 6 }: { count?: number }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] flex flex-col">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="hero-band" style={{ ["--i" as string]: count - 1 - i }} />
      ))}
    </div>
  );
}
