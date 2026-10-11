"use client";

import { m } from "motion/react";

/** Cotation d'architecte (trait, repères d'extrémité, valeur) qui se trace sous une image. */
export function DimensionLine({ label, onDark = false }: { label: string; onDark?: boolean }) {
  const color = onDark ? "bg-white/70" : "bg-navy/60";
  const view = { once: true, margin: "0px 0px -5% 0px" } as const;
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <div className="mt-6 flex items-center gap-4" role="note">
      <div className="relative h-3 flex-1">
        <m.span
          className={`rm-reset absolute left-0 right-0 top-1/2 h-px origin-left ${color}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={view}
          transition={{ duration: 1.3, ease }}
        />
        <m.span className={`rm-reset absolute left-0 top-0 h-3 w-px ${color}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={{ duration: 0.4 }} />
        <m.span className={`rm-reset absolute right-0 top-0 h-3 w-px ${color}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={{ duration: 0.4, delay: 1.2 }} />
      </div>
      <m.span
        className={`rm-reset shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${onDark ? "text-white/85" : "text-navy"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={view}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {label}
      </m.span>
    </div>
  );
}
