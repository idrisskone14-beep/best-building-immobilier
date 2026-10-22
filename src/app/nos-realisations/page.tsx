import { buildMetadata } from "@/lib/metadata";
import { realisations } from "@/lib/content";
import { img } from "@/lib/images";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StatusTag } from "@/components/StatusTag";
import { TextLink } from "@/components/ButtonLink";
import { Gallery } from "@/components/Gallery";
import { CtaBand } from "@/components/CtaBand";

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
        eyebrow="Nos réalisations"
        title="Des projets pensés pour durer."
        intro="Des espaces conçus pour vous ressembler : découvrez quelques-unes de nos réalisations et laissez-vous inspirer pour imaginer la vôtre."
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/nos-realisations", label: "Nos réalisations" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl text-lg text-ink-soft">
            <p>
              Chez BEST BUILDING IMMOBILIER, chaque projet est une occasion de transformer une ambition en un espace de vie concret. De la
              conception architecturale à la réalisation, nous recherchons le juste équilibre entre fonctionnalité, esthétique et confort, en
              tenant compte des besoins propres à chaque projet, à chaque client.
            </p>
          </Reveal>
        </div>
      </section>

      {realisations.map((r, i) => (
        <section key={r.id} id={r.id} className={`scroll-mt-24 py-20 lg:py-28 ${i % 2 === 0 ? "bg-white" : ""}`}>
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-4">
              <p className="display text-7xl italic leading-none text-red">{r.number}</p>
              <div className="mt-6">
                <StatusTag status={r.status} />
              </div>
              <h2 className="display display-md mt-5">{r.title}</h2>
              <p className="display display-sm mt-3 !font-normal italic text-navy">{r.headline}</p>
              <p className="mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                {r.specs}
                {r.location ? ` · ${r.location}` : ""}
              </p>
              <div className="mt-6 space-y-4 text-ink-soft">
                {r.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-ink">{r.cta}</p>
              <p className="mt-6">
                <TextLink href={r.ctaHref}>Parlons de votre projet</TextLink>
              </p>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={0.08}>
              <Gallery items={r.images} />
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand
        title="Et si votre projet était notre prochaine réalisation ?"
        text="Construction d’une villa, conception de plans, transformation d’un bien existant ou projet immobilier plus ambitieux : chaque projet mérite une approche réfléchie et adaptée. BEST BUILDING IMMOBILIER vous accompagne pour faire passer vos idées du concept à la réalité."
        primary={{ href: "/contact?objet=projet&service=architecture", label: "Parlons de votre projet" }}
        secondary={{ href: "/nos-expertises", label: "Nos expertises" }}
        image={img.chrysantheme2}
      />
    </>
  );
}
