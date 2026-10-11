"use client";

import { m } from "motion/react";

/**
 * Emplacement visuel pour une réalisation dont la photographie n'a pas encore été fournie.
 * On n'invente jamais d'image : la place est tenue par un croquis d'architecte qui se dessine.
 */
export function Placeholder({ label = "Photographie à venir", className = "" }: { label?: string; className?: string }) {
  const line = (delay: number, dashed = false) => ({
    initial: { pathLength: 0 },
    className: "rm-path",
    whileInView: { pathLength: 1 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] as const },
    strokeDasharray: dashed ? "3 5" : undefined,
  });
  return (
    <div role="img" aria-label={label} className={`relative flex items-end overflow-hidden bg-stone text-navy ${className}`}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-[0.6]" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <m.path d="M0 230H400" {...line(0)} />
          <m.path d="M60 230V120L200 54L340 120V230" {...line(0.2)} />
          <m.path d="M60 120H340" {...line(0.6)} />
          <m.path d="M150 230V160H250V230" {...line(0.9)} />
          <m.path d="M200 54V230" {...line(1.2, true)} />
          <m.path d="M20 250H380" {...line(1.4, true)} />
        </g>
      </svg>
      <span className="relative m-4 text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.16em] text-navy/70">{label}</span>
    </div>
  );
}
