import { buildMetadata } from "@/lib/metadata";
import { img } from "@/lib/images";
import { expertises } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "Nos expertises",
  description:
    "Promotion immobilière, aménagement foncier, architecture & construction, gestion des transactions et biens immobiliers, ameublement et équipements : les cinq expertises de BEST BUILDING IMMOBILIER.",
  path: "/nos-expertises",
});

export default function ExpertisesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos expertises"
        title="Des savoir-faire complémentaires."
        intro="De la préparation du terrain à la livraison de l’habitation, cinq domaines d’activité au service de projets résidentiels exigeants."
        image={img.chrysantheme3}
        imageAlt="Rendu 3D de la façade jardin d’une villa Chrysanthème, avec piscine et terrasse"
        position="50% 60%"
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/nos-expertises", label: "Nos expertises" }]}
      />

      <div className="divide-y divide-ink/10">
        {expertises.map((e, i) => {
          const reverse = i % 2 === 1;
          return (
            <section key={e.id} id={e.id} className={`py-24 lg:py-32 ${i % 2 === 1 ? "bg-white" : ""}`}>
              <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
                <Reveal className={`lg:col-span-7 ${reverse ? "lg:order-2 lg:col-start-6" : ""}`}>
                  <div className={`frame ${reverse ? "frame-left" : ""}`}>
                    <Photo
                      src={e.image}
                      alt={e.alt}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      aspect="aspect-[4/3] lg:aspect-[16/11]"
                      position={e.position}
                      className={reverse ? "cut-tl" : "cut-tr"}
                    />
                  </div>
                </Reveal>
                <Reveal className={`lg:col-span-4 ${reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`} delay={0.08}>
                  <p className="display text-7xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="display display-md mt-6">{e.title}</h2>
                  <p className="display display-sm mt-4 !font-normal italic text-navy">{e.headline}</p>
                  <p className="mt-6 text-lg text-ink-soft">{e.short}</p>
                  <p className="mt-8">
                    <TextLink href={`/contact?objet=conseiller&service=${e.ctaService}`}>Demander un accompagnement</TextLink>
                  </p>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand
        title="Un accompagnement personnalisé pour votre projet."
        text="Décrivez-nous votre besoin : un conseiller de BEST BUILDING IMMOBILIER reviendra vers vous."
        primary={{ href: "/contact?objet=conseiller", label: "Demander un accompagnement" }}
        secondary={{ href: "/nos-projets", label: "Voir nos projets" }}
        image={img.orchidee1}
      />
    </>
  );
}
