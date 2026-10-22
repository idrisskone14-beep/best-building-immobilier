import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { HeroBands } from "./HeroBands";
import { HeroBlueprint } from "./HeroBlueprint";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: StaticImageData;
  imageAlt?: string;
  /** Position du cadrage de la photographie (object-position CSS). */
  position?: string;
  tall?: boolean;
  /** Bandeau bas pour les pages de détail : moins de défilement. */
  compact?: boolean;
  credit?: string;
  crumbs?: { href: string; label: string }[];
  children?: React.ReactNode;
};

/** Ouverture de page : grande photographie (ou aplat bleu nuit), titre éditorial, fil d'Ariane. */
export function PageHero({ eyebrow, title, intro, image, imageAlt = "", position = "50% 50%", tall, compact, credit, crumbs, children }: Props) {
  return (
    <section
      className={`on-dark relative isolate flex items-end overflow-hidden bg-navy-deep text-white ${
        tall ? "min-h-[88svh]" : compact ? "min-h-[28svh]" : "min-h-[62svh]"
      }`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="hero-photo -z-20 object-cover"
            style={{ objectPosition: position }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-navy-deep/45" />
          <HeroBands />
          <HeroBlueprint />
        </>
      ) : (
        <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      )}

      <div className={`wrap relative z-10 w-full ${compact ? "pb-8 pt-28 sm:pb-10" : "pb-14 pt-40 sm:pb-20"}`}>
        {crumbs && (
          <nav aria-label="Fil d’Ariane" className="hero-fade mb-8 text-xs uppercase tracking-[0.18em] text-white/70" style={{ ["--d" as string]: "0.1s" }}>
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  <Link href={c.href} className="hover:text-white hover:underline hover:underline-offset-4">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow hero-fade" style={{ ["--d" as string]: "0.2s" }}>
          {eyebrow}
        </p>
        <h1 className={`display mt-6 max-w-5xl ${compact ? "display-lg" : "display-xl"}`}>
          <span className="hero-line">
            <span style={{ ["--d" as string]: "0.3s" }}>{title}</span>
          </span>
        </h1>
        {intro && (
          <p className={`lead hero-fade max-w-2xl ${compact ? "mt-5" : "mt-8"}`} style={{ ["--d" as string]: "0.8s" }}>
            {intro}
          </p>
        )}
        {children && (
          <div className="hero-fade mt-10 flex flex-wrap gap-4" style={{ ["--d" as string]: "1s" }}>
            {children}
          </div>
        )}
        {credit && (
          <p className="relative z-10 mt-10 text-[0.7rem] uppercase tracking-[0.18em] text-white/60 sm:absolute sm:bottom-6 sm:right-[clamp(1.25rem,4vw,4rem)] sm:mt-0">
            {credit}
          </p>
        )}
      </div>
    </section>
  );
}
