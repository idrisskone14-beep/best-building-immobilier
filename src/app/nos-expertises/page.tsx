import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { expertises } from "@/lib/content";
import { expertisesNav } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/SubNav";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { PageCta } from "@/components/PageCta";

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
        compact
        eyebrow="Nos expertises"
        title="Des savoir-faire complémentaires."
        intro="De la préparation du terrain à la livraison de l’habitation, cinq domaines d’activité au service de projets résidentiels exigeants."
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/nos-expertises", label: "Nos expertises" }]}
      />
      <SubNav label="Nos expertises" items={expertisesNav} />
      <section className="py-12 lg:py-14">
        <div className="wrap">
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((e, i) => (
              <Reveal as="li" key={e.id} delay={(i % 3) * 0.06} className="group relative">
                <Photo src={e.image} alt={e.alt} sizes="(min-width: 1024px) 30vw, 50vw" aspect="aspect-[16/10]" position={e.position} parallax={false} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="display text-3xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="display display-sm mt-2">
                      <Link href={`/nos-expertises/${e.id}`} className="after:absolute after:inset-0">
                        {e.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-ink-soft">{e.headline}</p>
                  </div>
                  <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" className="mt-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <PageCta text="Un accompagnement personnalisé pour votre projet." />
    </>
  );
}
