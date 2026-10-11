"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/** Charge uniquement les fonctionnalités d'animation de base et respecte « réduire les animations ». */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
