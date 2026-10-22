"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/lib/images";

/** Compositions asymétriques (grille 12 colonnes) pour une galerie de six visuels. */
const row = "aspect-[4/3] md:aspect-auto md:h-[clamp(18rem,30vw,30rem)]";
const layout = [
  `${row} md:col-span-7`,
  `${row} md:col-span-5`,
  `${row} md:col-span-5`,
  `${row} md:col-span-7`,
  `${row} md:col-span-6`,
  `${row} md:col-span-6`,
];

/** `columns` : mosaïque asymétrique (défaut) ou grille régulière de 2 ou 4 vignettes par rangée (moins de défilement). */
export function Gallery({ items, columns }: { items: GalleryItem[]; columns?: 2 | 4 }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
  }, [index]);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  const current = index !== null ? items[index] : null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {items.map((item, i) => (
          <li key={item.caption} className={columns ? `aspect-[4/3] ${columns === 4 ? "md:col-span-3" : "md:col-span-6"}` : layout[i % layout.length]}>
            <button
              type="button"
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setIndex(i);
              }}
              aria-label={`Agrandir l’image : ${item.caption}`}
              className="photo group relative block h-full w-full cursor-zoom-in text-left"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={columns === 4 ? "(min-width: 768px) 25vw, 100vw" : "(min-width: 768px) 60vw, 100vw"}
                placeholder="blur"
                loading="lazy"
                className="object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 to-transparent p-4 pt-12 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white sm:p-5 sm:pt-14">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Galerie du programme"
        onClose={() => {
          setIndex(null);
          openerRef.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-navy-deep/95 p-0 text-white backdrop:bg-black/80"
      >
        {current && (
          <div className="on-dark flex h-full flex-col">
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80" aria-live="polite">
                {String((index ?? 0) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} — {current.caption}
              </p>
              <button type="button" onClick={close} aria-label="Fermer la galerie" className="flex h-11 w-11 items-center justify-center hover:text-white/70">
                <X size={26} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Image précédente"
                className="absolute left-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-navy-deep/60 hover:bg-red sm:left-5"
              >
                <ChevronLeft size={26} strokeWidth={1.5} aria-hidden="true" />
              </button>
              <Image
                src={current.src}
                alt={current.alt}
                sizes="100vw"
                className="max-h-full w-auto max-w-full object-contain"
                style={{ maxHeight: "calc(100dvh - 9rem)" }}
              />
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Image suivante"
                className="absolute right-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-navy-deep/60 hover:bg-red sm:right-5"
              >
                <ChevronRight size={26} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
            <p className="px-5 py-4 text-center text-xs text-white/60">
              Rendu 3D d’illustration, phase esquisse — non contractuel.
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
