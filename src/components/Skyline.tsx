"use client";

import { m, useReducedMotion } from "motion/react";

/**
 * Ligne d'horizon en traits fins qui se dessine au défilement : villas, tour, chantier et grue.
 * La charge de la grue monte et descend en boucle, doucement.
 */
const paths = [
  "M0 150H1440", // sol
  "M70 150V102H158V150M62 102H166M70 126H158", // villa 1
  "M200 150V50H266V150M200 70H266M200 90H266M200 110H266M200 130H266M233 50V150", // immeuble
  "M312 150V96H356V74H420V150M304 96H364M356 74L388 54L420 74", // duplex avec toit
  "M470 150V86H540V150M462 86H548M492 150V118H518V150", // villa 2
  "M590 150V118H640V150M590 118L615 98L640 118", // maison
  "M690 150V18M690 18H1000M690 18L650 18M690 18L690 -6M690 40L1000 18", // grue (mât + flèche)
  "M690 150H720V84H690", // base de grue
  "M1030 150V90H1100V150M1030 110H1100M1030 130H1100M1065 90V150", // immeuble 2
  "M1150 150V104H1240V150M1142 104H1248M1150 126H1240", // villa 3
  "M1290 150V70H1340V150M1290 90H1340M1290 110H1340M1290 130H1340", // tour 2
  "M1380 150V112H1432V150M1374 112H1438", // villa 4
];

export function Skyline({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 -10 1440 170" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      {paths.map((d, i) => (
        <m.path
          key={i}
          d={d}
          initial={{ pathLength: 0 }}
          className="rm-path"
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          transition={{ duration: i === 0 ? 2.2 : 1.6, delay: i === 0 ? 0 : 0.25 + i * 0.16, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      {/* câble et charge suspendue à la flèche */}
      <m.g
        animate={reduce ? undefined : { y: [0, 38, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
      >
        <path d="M940 18V62" strokeWidth="1.2" />
        <path d="M928 62H952V76H928Z" fill="currentColor" fillOpacity="0.35" />
      </m.g>
    </svg>
  );
}
