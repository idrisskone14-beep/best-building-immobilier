import type { StaticImageData } from "next/image";
import { entrepriseNav } from "@/lib/site";
import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { SubNav } from "./SubNav";

/** Gabarit des pages de « Notre entreprise » : bandeau compact, onglets des sous-rubriques, contenu, appel à l'action. */
export function EntrepriseShell({
  title,
  intro,
  path,
  label,
  image,
  imageAlt,
  children,
}: {
  title: string;
  intro?: string;
  path: string;
  label: string;
  image?: StaticImageData;
  imageAlt?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        compact
        eyebrow="Notre entreprise"
        title={title}
        intro={intro}
        image={image}
        imageAlt={imageAlt}
        position="50% 55%"
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/notre-entreprise", label: "Notre entreprise" },
          ...(path === "/notre-entreprise" ? [] : [{ href: path, label }]),
        ]}
      />
      <SubNav label="Notre entreprise" items={entrepriseNav} />
      {children}
      <PageCta />
    </>
  );
}
