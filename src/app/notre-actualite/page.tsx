import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { actualites } from "@/lib/content";
import { actualiteNav } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/SubNav";
import { Reveal } from "@/components/Reveal";
import { PageCta } from "@/components/PageCta";

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
        compact
        eyebrow="Notre actualité"
        title="Les avancées qui façonnent nos ambitions immobilières."
        intro="Chaque avancée traduit notre engagement à concevoir des projets immobiliers structurés, durables et porteurs de valeur."
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/notre-actualite", label: "Notre actualité" }]}
      />
      <SubNav label="Notre actualité" items={actualiteNav} />
      <section className="py-12 lg:py-14">
        <div className="wrap">
          <ul className="grid gap-8 md:grid-cols-3">
            {actualites.map((a, i) => (
              <Reveal as="li" key={a.id} delay={i * 0.07} className="group relative flex flex-col border-t-2 border-navy bg-white p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-red">{a.category}</p>
                <p className="mt-1 text-sm text-ink-soft">{a.date}</p>
                <h2 className="display display-sm mt-5">
                  <Link href={`/notre-actualite/${a.id}`} className="after:absolute after:inset-0">
                    {a.title}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 text-ink-soft">{a.subtitle}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                  Lire l’actualité
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <PageCta text="Restez informé de nos projets et opportunités." />
    </>
  );
}
