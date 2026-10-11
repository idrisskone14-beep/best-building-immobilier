"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { m, useScroll, useTransform } from "motion/react";

/**
 * Photographie recadrée par `aspect` (classe Tailwind).
 * - `reveal` : l'image « monte » comme un mur, du bas vers le haut, à l'entrée dans l'écran ;
 * - `parallax` : léger décalage de la photo à l'intérieur de son cadre au défilement.
 * Les deux sont neutralisés en CSS (.rm-reset) si le visiteur préfère réduire les animations.
 */
export function Photo({
  src,
  alt,
  sizes,
  aspect = "aspect-[4/3]",
  position = "50% 50%",
  className = "",
  priority = false,
  reveal = true,
  parallax = true,
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  aspect?: string;
  position?: string;
  className?: string;
  priority?: boolean;
  reveal?: boolean;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const frame = (
    <div ref={ref} className={`photo relative ${aspect} ${className}`}>
      <m.div className="rm-reset absolute inset-0" style={parallax ? { y, scale: 1.13 } : undefined}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </m.div>
    </div>
  );

  if (!reveal) return frame;
  return (
    <m.div
      className="rm-reset"
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {frame}
    </m.div>
  );
}
