import Image, { type StaticImageData } from "next/image";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";

type Action = { href: string; label: string };

/** Bandeau d'appel à l'action pleine largeur, fond bleu nuit (photographie facultative). */
export function CtaBand({
  eyebrow = "Parlons de votre projet",
  title,
  text,
  primary,
  secondary,
  image,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  primary: Action;
  secondary?: Action;
  image?: StaticImageData;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-deep py-24 text-white lg:py-32">
      {image ? (
        <>
          <Image src={image} alt="" fill sizes="100vw" loading="lazy" className="-z-20 object-cover opacity-30" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        </>
      ) : (
        <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      )}
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display display-lg mt-6 max-w-4xl">{title}</h2>
          {text && <p className="lead mt-6 max-w-2xl">{text}</p>}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={primary.href} variant="red">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="line-light">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
