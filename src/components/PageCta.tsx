import { ButtonLink } from "./ButtonLink";

/** Bandeau d'appel à l'action discret en bas des pages de détail. */
export function PageCta({
  text = "Un conseiller de BEST BUILDING IMMOBILIER vous répond.",
  primary = { href: "/contact?objet=rendez-vous", label: "Prendre rendez-vous" },
  secondary = { href: "/contact?objet=conseiller", label: "Parler à un conseiller" },
}: {
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="on-dark bg-navy-deep py-10 text-white">
      <div className="wrap flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="display display-sm max-w-2xl !font-normal">{text}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={primary.href} variant="red">
            {primary.label}
          </ButtonLink>
          <ButtonLink href={secondary.href} variant="line-light">
            {secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
