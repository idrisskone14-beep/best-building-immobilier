import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { realisations } from "@/lib/content";
import { realisationsNav } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/SubNav";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { StatusTag } from "@/components/StatusTag";
import { PageCta } from "@/components/PageCta";

export const metadata = buildMetadata({
  title: "Nos réalisations",
  description:
    "Les projets livrés par BEST BUILDING IMMOBILIER : villa triplex à Grand-Bassam, villa basse à Yaou et transformation architecturale d’une villa basse en duplex.",
  path: "/nos-realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Nos réalisations"
        title="Des projets pensés pour durer."
        intro="Des espaces conçus pour vous ressembler : laissez-vous inspirer pour imaginer le vôtre."
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/nos-realisations", label: "Nos réalisations" }]}
      />
      <SubNav label="Nos réalisations" items={realisationsNav} />
      <section className="py-12 lg:py-14">
        <div className="wrap">
          <Reveal className="max-w-3xl text-lg text-ink-soft">
            <p>
              Chez BEST BUILDING IMMOBILIER, chaque projet est une occasion de transformer une ambition en un espace de vie concret. De la
              conception architecturale à la réalisation, nous recherchons le juste équilibre entre fonctionnalité, esthétique et confort.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {realisations.map((r, i) => (
              <Reveal as="li" key={r.id} delay={i * 0.07} className="group relative">
                <Photo src={r.images[0].src} alt={r.images[0].alt} sizes="(min-width: 768px) 30vw, 100vw" aspect="aspect-[4/3]" parallax={false} />
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <StatusTag status={r.status} />
                  {r.location && <span className="text-xs uppercase tracking-[0.16em] text-ink-soft">{r.location}</span>}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="display display-sm">
                      <Link href={`/nos-realisations/${r.id}`} className="after:absolute after:inset-0">
                        {r.number}. {r.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-ink-soft">{r.headline}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-soft">{r.specs}</p>
                  </div>
                  <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <PageCta
        text="Et si votre projet était notre prochaine réalisation ?"
        primary={{ href: "/contact?objet=projet&service=architecture", label: "Parlons de votre projet" }}
      />
    </>
  );
}
