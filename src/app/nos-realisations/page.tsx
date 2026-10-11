import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { img, RENDER_CREDIT } from "@/lib/images";
import { realisations, type Realisation } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { StatusTag, type ProjectStatus } from "@/components/StatusTag";
import { TextLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "Nos réalisations",
  description:
    "Les réalisations et projets documentés de BEST BUILDING IMMOBILIER : villas duplex à Grand-Bassam, conceptions architecturales et programme BEST BUILDING LUXURY.",
  path: "/nos-realisations",
});

const groups: { status: ProjectStatus; title: string; text: string }[] = [
  { status: "Programme en développement", title: "Programme en développement", text: "Un programme en cours de développement, présenté en rendus 3D." },
  { status: "Réalisation achevée", title: "Réalisations achevées", text: "Constructions livrées par BEST BUILDING IMMOBILIER." },
  { status: "Projet architectural", title: "Projets architecturaux", text: "Études et plans conçus par la société." },
];

function Meta({ r }: { r: Realisation }) {
  return (
    <p className="mt-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
      {r.category}
      {r.location ? ` · ${r.location}` : ""}
    </p>
  );
}

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos réalisations"
        title="Ce que nous avons bâti, ce que nous bâtissons."
        intro="Uniquement des projets documentés, présentés pour ce qu’ils sont : réalisation achevée, projet architectural ou programme en développement."
        image={img.orchidee1}
        imageAlt="Rendu 3D d’une villa Orchidée du programme BEST BUILDING LUXURY"
        position="50% 55%"
        credit={RENDER_CREDIT}
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/nos-realisations", label: "Nos réalisations" }]}
      />

      <section className="py-24 lg:py-32">
        <div className="wrap space-y-28">
          {groups.map((g) => {
            const items = realisations.filter((r) => r.status === g.status);
            if (!items.length) return null;
            return (
              <div key={g.status} className="grid gap-12 lg:grid-cols-12 lg:gap-10">
                <Reveal className="lg:col-span-4">
                  <StatusTag status={g.status} />
                  <h2 className="display display-md mt-5">{g.title}</h2>
                  <p className="mt-4 text-ink-soft">{g.text}</p>
                </Reveal>
                <ul className="space-y-16 lg:col-span-7 lg:col-start-6">
                  {items.map((r) => (
                    <Reveal as="li" key={r.id}>
                      {r.image ? (
                        <Link href={r.href ?? "#"} className="group block">
                          <div className="frame">
                            <Photo
                              src={r.image}
                              alt={r.imageAlt ?? r.title}
                              sizes="(min-width: 1024px) 58vw, 100vw"
                              aspect="aspect-[4/3] lg:aspect-[16/10]"
                              position="40% 50%"
                            />
                          </div>
                          <h3 className="display display-md mt-10 transition-colors group-hover:text-red">{r.title}</h3>
                          <Meta r={r} />
                          <p className="mt-3 max-w-xl text-lg text-ink-soft">{r.description}</p>
                          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-soft">Rendu 3D, phase esquisse</p>
                        </Link>
                      ) : (
                        <div className="grid gap-6 sm:grid-cols-[14rem_1fr]">
                          <Placeholder className="aspect-[16/7] sm:aspect-[4/3]" />
                          <div>
                            <h3 className="display display-sm">{r.title}</h3>
                            <Meta r={r} />
                            <p className="mt-3 text-ink-soft">{r.description}</p>
                          </div>
                        </div>
                      )}
                      {r.href && (
                        <p className="mt-6">
                          <TextLink href={r.href}>Découvrir le programme</TextLink>
                        </p>
                      )}
                    </Reveal>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Votre projet pourrait être le prochain."
        primary={{ href: "/contact?objet=projet", label: "Parler de mon projet" }}
        secondary={{ href: "/nos-expertises", label: "Nos expertises" }}
        image={img.chrysantheme2}
      />
    </>
  );
}
