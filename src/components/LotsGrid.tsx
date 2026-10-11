"use client";

import { m } from "motion/react";
import { programme } from "@/lib/site";

const COLS = 7;
const CELL_W = 44;
const CELL_H = 50;

/** Pictogramme d'une villa duplex (toit, volume, baies, porte) dessiné dans une case de 44 × 50. */
function Villa({ x, y, index, tone }: { x: number; y: number; index: number; tone: string }) {
  return (
    <m.g
      className="rm-reset"
      style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <g transform={`translate(${x} ${y})`} fill="none" stroke={tone} strokeWidth="1.6" strokeLinejoin="round">
        <path d="M4 20 22 6l18 14" />
        <path d="M8 18v26h28V18" />
        <path d="M8 44h28" strokeWidth="2.2" />
        <rect x="13" y="24" width="7" height="7" fill={tone} fillOpacity="0.9" stroke="none" className="win" style={{ ["--del" as string]: `${(index % 9) * 0.45 + 1.5}s`, ["--dur" as string]: "4.5s" }} />
        <rect x="24" y="24" width="7" height="7" fill={tone} fillOpacity="0.9" stroke="none" className="win" style={{ ["--del" as string]: `${(index % 7) * 0.6 + 2}s`, ["--dur" as string]: "5.2s" }} />
        <path d="M18 44v-8h8v8" />
      </g>
    </m.g>
  );
}

function Group({ count, offset, tone }: { count: number; offset: number; tone: string }) {
  const rows = Math.ceil(count / COLS);
  return (
    <svg viewBox={`0 0 ${COLS * CELL_W} ${rows * CELL_H}`} className="w-full" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Villa key={i} index={offset + i} x={(i % COLS) * CELL_W} y={Math.floor(i / COLS) * CELL_H} tone={tone} />
      ))}
    </svg>
  );
}

/**
 * Schéma illustratif des 27 villas du programme : 14 Chrysanthème + 13 Orchidée.
 * Ce n'est pas un plan de masse : il ne représente aucune implantation réelle.
 */
export function LotsGrid({ dark = false }: { dark?: boolean }) {
  const [chrysantheme, orchidee] = programme.models;
  const toneA = dark ? "#ffffff" : "#a73030";
  const toneB = dark ? "#d9a4a6" : "#0f3450";
  const muted = dark ? "text-white/65" : "text-ink-soft";

  return (
    <figure aria-label={`Schéma des ${programme.villas} villas du programme : ${chrysantheme.count} Chrysanthème et ${orchidee.count} Orchidée`}>
      <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
        <div>
          <Group count={chrysantheme.count} offset={0} tone={toneA} />
          <p className="mt-5 border-t pt-4" style={{ borderColor: dark ? "rgb(255 255 255 / 0.25)" : "rgb(32 37 42 / 0.2)" }}>
            <span className="display display-sm block">
              {chrysantheme.count} villas <em>Chrysanthème</em>
            </span>
            <span className={`mt-1 block text-sm ${muted}`}>{chrysantheme.rooms} pièces</span>
          </p>
        </div>
        <div>
          <Group count={orchidee.count} offset={chrysantheme.count} tone={toneB} />
          <p className="mt-5 border-t pt-4" style={{ borderColor: dark ? "rgb(255 255 255 / 0.25)" : "rgb(32 37 42 / 0.2)" }}>
            <span className="display display-sm block">
              {orchidee.count} villas <em>Orchidée</em>
            </span>
            <span className={`mt-1 block text-sm ${muted}`}>{orchidee.rooms} pièces</span>
          </p>
        </div>
      </div>
      <figcaption className={`mt-8 text-xs ${muted}`}>Schéma illustratif de la répartition des villas — ne représente pas le plan de masse.</figcaption>
    </figure>
  );
}
