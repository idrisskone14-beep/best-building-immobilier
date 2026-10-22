import { buildMetadata } from "@/lib/metadata";
import { actualites } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { company } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Notre actualité",
  description:
    "L’actualité de BEST BUILDING IMMOBILIER : avancées des projets (BEST BUILDING LUXURY, BEST BUILDING CITY), opportunités d’investissement et perspectives de développement.",
  path: "/notre-actualite",
});

export default function ActualitePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre actualité"
        title="Les avancées qui façonnent nos ambitions immobilières."
        intro="Chez BEST BUILDING IMMOBILIER, chaque avancée traduit notre engagement à concevoir des projets immobiliers structurés, durables et porteurs de valeur."
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/notre-actualite", label: "Notre actualité" }]}
      />

      <section className="py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <p className="max-w-3xl text-lg text-ink-soft">
              Découvrez les dernières évolutions de nos projets et de nos perspectives de développement.
            </p>
          </Reveal>
          <ol className="mt-16">
            {actualites.map((a, i) => (
              <Reveal as="li" key={a.id} delay={0.04} className="grid gap-8 border-t border-ink/20 py-14 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <p className="display text-6xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-navy">{a.category}</p>
                  <p className="mt-2 text-sm text-ink-soft">{a.date}</p>
                </div>
                <article className="lg:col-span-8 lg:col-start-5">
                  <h2 className="display display-md">{a.title}</h2>
                  <p className="display display-sm mt-4 !font-normal italic text-navy">{a.subtitle}</p>
                  <div className="mt-6 max-w-2xl space-y-4 text-lg text-ink-soft">
                    {a.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                  <p className="mt-6 font-medium text-ink">{a.signature}</p>
                  {a.href && (
                    <p className="mt-6">
                      <TextLink href={a.href}>{a.hrefLabel ?? "En savoir plus"}</TextLink>
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </ol>
          <p className="mt-10 border-t border-ink/20 pt-8 display display-sm !font-normal italic text-navy">
            {company.name}, bâtir aujourd’hui les opportunités immobilières de demain.
          </p>
        </div>
      </section>

      <CtaBand
        title="Restez informé de nos projets et opportunités."
        text="Contactez-nous : un conseiller vous présente les offres et les évolutions de nos programmes."
        primary={{ href: "/contact?objet=conseiller", label: "Parler à un conseiller" }}
        secondary={{ href: "/nos-projets", label: "Voir nos projets" }}
      />
    </>
  );
}
