import { img, RENDER_CREDIT } from "@/lib/images";
import { luxuryNav } from "@/lib/site";
import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { SubNav } from "./SubNav";
import { JsonLd } from "./JsonLd";
import { absoluteUrl } from "@/lib/metadata";

/** Gabarit des pages du programme BEST BUILDING LUXURY. */
export function LuxuryShell({
  title,
  intro,
  path,
  label,
  children,
}: {
  title: string;
  intro?: string;
  path: string;
  label: string;
  children: React.ReactNode;
}) {
  const root = "/nos-projets/best-building-luxury";
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Nos projets", item: absoluteUrl("/nos-projets") },
            { "@type": "ListItem", position: 3, name: "BEST BUILDING LUXURY", item: absoluteUrl(root) },
            ...(path === root ? [] : [{ "@type": "ListItem", position: 4, name: label, item: absoluteUrl(path) }]),
          ],
        }}
      />
      <PageHero
        compact
        eyebrow="Programme immobilier · Quartier Yaou Résidentiel"
        title={title}
        intro={intro}
        image={img.chrysantheme1}
        imageAlt="Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY"
        position="40% 50%"
        credit={RENDER_CREDIT}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/nos-projets", label: "Nos projets" },
          { href: root, label: "BEST BUILDING LUXURY" },
          ...(path === root ? [] : [{ href: path, label }]),
        ]}
      />
      <SubNav label="BEST BUILDING LUXURY" items={luxuryNav} />
      {children}
      <PageCta
        text="Plus qu’une villa, un art de vivre."
        primary={{ href: "/contact?objet=presentation&service=luxury", label: "Recevoir une présentation" }}
        secondary={{ href: "/contact?objet=rendez-vous&service=luxury", label: "Prendre rendez-vous" }}
      />
    </>
  );
}
