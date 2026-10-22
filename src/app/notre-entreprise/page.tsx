import { buildMetadata, absoluteUrl } from "@/lib/metadata";
import { img } from "@/lib/images";
import { approval, company } from "@/lib/site";
import { EntrepriseShell } from "@/components/EntrepriseShell";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Notre entreprise — Présentation",
  description:
    "BEST BUILDING IMMOBILIER (2BI SARL), société ivoirienne de promotion immobilière agréée, basée à Abidjan et spécialisée dans la construction et la commercialisation de programmes immobiliers.",
  path: "/notre-entreprise",
});

export default function EntreprisePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Notre entreprise", item: absoluteUrl("/notre-entreprise") },
          ],
        }}
      />
      <EntrepriseShell
        path="/notre-entreprise"
        label="Présentation"
        title="Bâtir l’exception."
        intro="Créer de la valeur. Inspirer confiance."
        image={img.entrepriseHero}
        imageAlt="Villa contemporaine aux lignes épurées, avec allée paysagère et bassin"
      >
        <section className="py-12 lg:py-14">
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="space-y-5 text-lg text-ink-soft lg:col-span-7">
              <p className="eyebrow">
                <span className="tabular-nums">I</span>
                <span>Présentation de l’entreprise</span>
              </p>
              <p>
                BEST BUILDING IMMOBILIER, ou 2BI SARL, est une société ivoirienne de promotion immobilière agréée sous le numéro{" "}
                {approval.number}, basée à Abidjan et spécialisée dans la construction et la commercialisation de programmes immobiliers.
              </p>
              <p>
                Animée par une ambition forte, celle de devenir une référence dans l’immobilier de luxe en Côte d’Ivoire et dans la
                sous-région ouest-africaine, notre entreprise place l’excellence, l’intégrité et la satisfaction client au cœur de son approche.
              </p>
              <p>
                Nous concevons des projets immobiliers qui associent élégance architecturale, fonctionnalité, confort et valorisation
                patrimoniale. Chaque réalisation est envisagée comme une opportunité de créer un cadre de vie de qualité et de contribuer
                durablement au développement du secteur immobilier.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
              <Photo
                src={img.vision}
                alt="Villa contemporaine avec piscine et terrasse, entourée de palmiers"
                sizes="(min-width: 1024px) 32vw, 100vw"
                aspect="aspect-[4/3]"
                parallax={false}
              />
              <p className="mt-6 text-lg text-ink-soft">
                Chez BEST BUILDING IMMOBILIER, nous sommes convaincus que l’immobilier ne se limite pas à construire des bâtiments : il consiste
                également à créer des espaces de vie, à bâtir la confiance et à contribuer à la constitution d’un patrimoine durable.
              </p>
              <p className="display display-sm mt-6 !font-normal italic text-navy">{company.slogan}</p>
            </Reveal>
          </div>
        </section>
      </EntrepriseShell>
    </>
  );
}
