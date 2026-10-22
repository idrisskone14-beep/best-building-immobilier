import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { img, RENDER_CREDIT } from "@/lib/images";
import { projects } from "@/lib/content";
import { approval, company } from "@/lib/site";
import { ButtonLink, TextLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { HeroBands } from "@/components/HeroBands";
import { HeroBlueprint } from "@/components/HeroBlueprint";

export const metadata = buildMetadata({
  title: "BEST BUILDING IMMOBILIER — Promoteur immobilier agréé à Abidjan",
  description:
    "Promoteur immobilier agréé à Abidjan, BEST BUILDING IMMOBILIER (2BI SARL) conçoit des projets immobiliers d’exception, alliant prestige, confort et valeur patrimoniale en Côte d’Ivoire et en Afrique de l’Ouest.",
  path: "/",
});

const flagships = ["best-building-luxury", "best-building-city", "quartier-yaou-residentiel"]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p));

export default function HomePage() {
  return (
    <>
      {/* 1 — Grande bannière */}
      <section className="on-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-deep text-white">
        <Image
          src={img.chrysantheme2}
          alt="Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="hero-photo -z-20 object-cover object-[62%_50%]"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/85 via-navy-deep/0 to-navy-deep/30" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/75 via-navy-deep/25 to-transparent" />

        <HeroBands />
        <HeroBlueprint />
        <div className="wrap relative z-10 w-full pb-16 pt-44 sm:pb-24">
          <p className="eyebrow hero-fade" style={{ ["--d" as string]: "0.15s" }}>
            Promoteur Immobilier Agréé · Abidjan
          </p>
          <h1 className="display display-xl mt-7 max-w-[15ch] sm:max-w-none">
            <span className="hero-line">
              <span style={{ ["--d" as string]: "0.25s" }}>Bâtir aujourd’hui,</span>
            </span>
            <span className="hero-line">
              <span style={{ ["--d" as string]: "0.45s" }}>
                <em>valoriser demain.</em>
              </span>
            </span>
          </h1>
          <p className="lead hero-fade mt-9 max-w-2xl" style={{ ["--d" as string]: "0.95s" }}>
            Des projets immobiliers d’exception, conçus pour conjuguer prestige, confort et valeur patrimoniale en Côte d’Ivoire et en Afrique de
            l’Ouest.
          </p>
          <div className="hero-fade mt-10 flex flex-col gap-4 sm:flex-row" style={{ ["--d" as string]: "1.15s" }}>
            <ButtonLink href="/nos-projets" variant="red">
              Découvrir nos projets
            </ButtonLink>
            <ButtonLink href="/contact?objet=rendez-vous" variant="line-light">
              Prendre rendez-vous
            </ButtonLink>
          </div>
        </div>
        <p className="absolute bottom-6 right-[clamp(1.25rem,4vw,4rem)] z-10 hidden text-[0.7rem] uppercase tracking-[0.18em] text-white/65 lg:block">
          {RENDER_CREDIT}
        </p>
      </section>

      {/* 2 — Vision et slogan */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">
                <span className="tabular-nums">01</span>
                <span>Notre vision</span>
              </p>
              <h2 className="display display-lg mt-6">Une vision exigeante de l’immobilier.</h2>
              <div className="mt-8 space-y-5 text-lg text-ink-soft">
                <p>
                  Notre ambition : devenir une référence dans l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine.
                </p>
                <p>
                  BEST BUILDING IMMOBILIER ne vend pas simplement des logements : nous garantissons l’excellence dans la conception, la confiance
                  dans la relation et la valeur patrimoniale dans la durée.
                </p>
              </div>
              <p className="display display-sm mt-10 !font-normal italic text-navy">{company.slogan}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-ink-soft">Agrément n° {approval.number}</p>
              <p className="mt-8">
                <TextLink href="/notre-entreprise">Découvrir notre entreprise</TextLink>
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <div className="frame">
              <Photo
                src={img.vision}
                alt="Villa contemporaine avec piscine et terrasse, entourée de palmiers"
                sizes="(min-width: 1024px) 42vw, 100vw"
                aspect="aspect-[4/5]"
                className="cut-tr"
                position="42% 50%"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Projets phares */}
      <section className="bg-white py-24 lg:py-32">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading index="02" eyebrow="Projets phares" title="Des programmes et des terrains pour bâtir votre avenir." size="md" />
            <Reveal>
              <TextLink href="/nos-projets">Tous nos projets</TextLink>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {flagships.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Appel à l'action */}
      <CtaBand
        title="Votre prochain projet immobilier mérite un partenaire à la hauteur."
        text="Prenez rendez-vous avec un conseiller de BEST BUILDING IMMOBILIER."
        primary={{ href: "/contact?objet=rendez-vous", label: "Prendre rendez-vous" }}
        secondary={{ href: "/contact?objet=conseiller", label: "Parler à un conseiller" }}
        image={img.orchidee2}
      />
    </>
  );
}
