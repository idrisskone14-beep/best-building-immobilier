"use client";

import { m, useReducedMotion, useScroll, useSpring } from "motion/react";

/** Tour qui « monte » étage par étage au fil du défilement : la progression de lecture de la page. */
export function BuildProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 });
  const scaleY = reduce ? scrollYProgress : smooth;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center bg-white/85 px-2 pb-2 pt-1.5 shadow-[0_0_0_1px_rgb(32_37_42/0.08)] backdrop-blur-sm min-[1360px]:flex"
    >
      {/* toit */}
      <svg width="20" height="9" viewBox="0 0 20 9" className="mb-1 text-red">
        <path d="M1 8.5L10 1l9 7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <div className="floors relative h-40 w-3.5 overflow-hidden bg-navy/15">
        <m.div className="absolute inset-0 origin-bottom bg-red" style={{ scaleY }} />
      </div>
    </div>
  );
}
