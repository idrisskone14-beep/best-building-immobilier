import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { img } from "@/lib/images";
import { fonciers, programmes } from "@/lib/content";
import { projetsNav } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/SubNav";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { PageCta } from "@/components/PageCta";

export const metadata = buildMetadata({
  title: "Nos projets",
  description:
    "Programmes immobiliers (BEST BUILDING LUXURY, BEST BUILDING CITY) et aménagements fonciers (Mondoukou Village, Quartier Yaou Résidentiel, Audoin Brakré, Yamoussoukro Kacou-Broukro) de BEST BUILDING IMMOBILIER.",
  path: "/nos-projets",
});

const categories = [
  {
    href: "/nos-projets/programmes-immobiliers",
    title: "Programmes immobiliers",
    text: "Des résidences pensées pour y vivre et investir.",
    names: programmes.map((p) => p.name),
    image: img.chrysantheme1,
    alt: "Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY",
    position: "40% 50%",
  },
  {
    href: "/nos-projets/amenagements-fonciers",
    title: "Aménagements fonciers",
    text: "Des terrains préparés pour bâtir votre patrimoine.",
    names: fonciers.map((p) => p.name.replace("Lotissement ", "")),
    image: img.carteMondoukou,
    alt: "Vue satellite du lotissement Mondoukou Village",
    position: "50% 50%",
  },
];

export default function ProjetsPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Nos projets"
        title="Des projets conçus pour durer."
        intro="Programmes immobiliers et aménagements fonciers : caractéristiques, localisation et conditions."
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/nos-projets", label: "Nos projets" }]}
      />
      <SubNav label="Nos projets" items={projetsNav} />
      <section className="py-12 lg:py-14">
        <div className="wrap grid gap-10 md:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.08}>
              <article className="group relative">
                <Photo src={c.image} alt={c.alt} sizes="(min-width: 768px) 46vw, 100vw" aspect="aspect-[16/10]" position={c.position} parallax={false} />
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="display display-md">
                      <Link href={c.href} className="after:absolute after:inset-0">
                        {c.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-ink-soft">{c.text}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.14em] text-navy">{c.names.join(" · ")}</p>
                  </div>
                  <ArrowUpRight size={26} strokeWidth={1.5} aria-hidden="true" className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <PageCta text="Recevez les informations détaillées d’un projet." primary={{ href: "/contact?objet=prix", label: "Demander des informations" }} />
    </>
  );
}
