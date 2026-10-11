import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { img, RENDER_CREDIT } from "@/lib/images";
import { engagements, expertises, realisations } from "@/lib/content";
import { programme } from "@/lib/site";
import { ButtonLink, TextLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatusTag } from "@/components/StatusTag";
import { Placeholder } from "@/components/Placeholder";
import { HeroBands } from "@/components/HeroBands";
import { HeroBlueprint } from "@/components/HeroBlueprint";
import { LotsGrid } from "@/components/LotsGrid";

export const metadata = buildMetadata({
  title: "BEST BUILDING IMMOBILIER — Promotion immobilière haut standing en Côte d’Ivoire",
  description:
    "Promotion immobilière, architecture et construction : BEST BUILDING IMMOBILIER (2BI SARL) donne vie à des projets résidentiels d’exception. Découvrez BEST BUILDING LUXURY, 27 villas duplex à Grand-Bassam.",
  path: "/",
});

const homeExpertises = expertises.slice(0, 4);
const expertiseLayout = [
  { col: "lg:col-span-7", aspect: "aspect-[16/11]", offset: "" },
  { col: "lg:col-span-5", aspect: "aspect-[4/5]", offset: "lg:mt-28" },
  { col: "lg:col-span-5", aspect: "aspect-[4/5]", offset: "" },
  { col: "lg:col-span-7", aspect: "aspect-[16/11]", offset: "lg:mt-28" },
];

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero immersif */}
      <section className="on-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-deep text-white">
        <Image
          src={img.chrysantheme2}
          alt="Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY, à Grand-Bassam"
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
            Promotion immobilière · Abidjan
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
            Promotion immobilière, architecture et construction : BEST BUILDING IMMOBILIER donne vie à des projets résidentiels d’exception en Côte
            d’Ivoire.
          </p>
          <div className="hero-fade mt-10 flex flex-col gap-4 sm:flex-row" style={{ ["--d" as string]: "1.15s" }}>
            <ButtonLink href="/notre-entreprise" variant="red">
              Découvrir notre entreprise
            </ButtonLink>
            <ButtonLink href="/nos-programmes" variant="line-light">
              Explorer nos programmes
            </ButtonLink>
          </div>
        </div>
        <p className="absolute bottom-6 right-[clamp(1.25rem,4vw,4rem)] z-10 hidden text-[0.7rem] uppercase tracking-[0.18em] text-white/65 lg:block">
          {RENDER_CREDIT}
        </p>
      </section>

      {/* 2 — Présentation institutionnelle */}
      <section className="py-28 lg:py-40">
        <div className="wrap grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">
                <span className="tabular-nums">01</span>
                <span>Notre société</span>
              </p>
              <h2 className="display display-lg mt-6">Une vision exigeante de l’immobilier.</h2>
              <div className="mt-8 space-y-5 text-lg text-ink-soft">
                <p>
                  BEST BUILDING IMMOBILIER, ou 2BI SARL, est une société ivoirienne de promotion immobilière, d’aménagement foncier,
                  d’architecture et de construction, basée à Abidjan.
                </p>
                <p>
                  Notre ambition : devenir une référence de l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine, en
                  concevant des projets résidentiels qui répondent aux normes internationales.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-6">
                <p className="display text-7xl italic leading-none text-red">
                  2020
                  <span className="mt-2 block font-sans text-[0.7rem] font-semibold not-italic uppercase tracking-[0.2em] text-ink-soft">
                    Création de la société
                  </span>
                </p>
                <TextLink href="/notre-entreprise">Notre entreprise</TextLink>
              </div>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="frame">
              <Photo
                src={img.detailFacade}
                alt="Rendu 3D de la façade d’une villa Chrysanthème : volumes blancs, balcon vitré et auvent"
                sizes="(min-width: 1024px) 48vw, 100vw"
                aspect="aspect-[4/5] sm:aspect-[5/6]"
                className="cut-tr"
                position="50% 40%"
              />
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-ink-soft">Rendu 3D — villa Chrysanthème</p>
          </Reveal>
        </div>
      </section>

      {/* 3 — Nos expertises */}
      <section className="bg-white py-28 lg:py-40">
        <div className="wrap">
          <SectionHeading index="02" eyebrow="Nos expertises" title="Des expertises complémentaires pour donner vie à vos ambitions." />
          <div className="mt-20 grid gap-x-10 gap-y-16 lg:grid-cols-12 lg:gap-y-8">
            {homeExpertises.map((e, i) => {
              const l = expertiseLayout[i];
              return (
                <Reveal key={e.id} className={`${l.col} ${l.offset}`} delay={(i % 2) * 0.08}>
                  <article className="relative">
                    <Photo src={e.image} alt={e.alt} sizes="(min-width: 1024px) 55vw, 100vw" aspect={l.aspect} position={e.position} />
                    <div className="mt-6 flex items-start gap-5">
                      <span className="display text-4xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="display display-sm">
                          <Link href={`/nos-expertises#${e.id}`} className="after:absolute after:inset-0">
                            {e.title}
                          </Link>
                        </h3>
                        <p className="mt-3 max-w-md text-ink-soft">{e.short}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-20 flex justify-start lg:justify-end">
            <TextLink href="/nos-expertises">Toutes nos expertises</TextLink>
          </Reveal>
        </div>
      </section>

      {/* 4 — Programme à la une */}
      <section className="on-dark relative overflow-hidden bg-navy py-24 text-white lg:py-36">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div className="wrap relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-0">
            <Reveal className="relative z-10 lg:col-span-5">
              <p className="eyebrow">
                <span className="tabular-nums">03</span>
                <span>Programme à la une</span>
              </p>
              <h2 className="display mt-6 text-[clamp(2.6rem,4.1vw,4.2rem)] leading-[0.98]">
                BEST BUILDING
                <br />
                <em>LUXURY</em>
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/75">Grand-Bassam</p>
              <p className="lead mt-8 max-w-lg">
                Découvrez BEST BUILDING LUXURY, un programme résidentiel haut standing situé à Grand-Bassam, conçu pour offrir un cadre de vie
                élégant, confortable et privilégié.
              </p>
              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-7 border-t border-white/20 pt-8">
                <div>
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/60">Villas duplex haut standing</dt>
                  <dd className="display mt-1 text-5xl">{programme.villas}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/60">Modèles de villas</dt>
                  <dd className="display mt-1 text-5xl">Deux</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/60">Localisation</dt>
                  <dd className="mt-1 text-lg">Grand-Bassam, quartier {programme.district}</dd>
                </div>
              </dl>
              <div className="mt-10">
                <ButtonLink href="/nos-programmes/best-building-luxury" variant="red">
                  Découvrir le programme
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal className="relative lg:col-span-8 lg:col-start-6 lg:-mr-[clamp(1.25rem,4vw,4rem)]" delay={0.1}>
              <Photo
                src={img.chrysantheme1}
                alt="Rendu 3D d’une villa duplex Chrysanthème, façade sur rue avec balcon vitré et haie végétale"
                sizes="(min-width: 1024px) 66vw, 100vw"
                aspect="aspect-[4/3] lg:aspect-[16/11]"
                className="cut-tl"
                position="40% 50%"
              />
              <div className="mt-4 flex items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.18em] text-white/65">
                <span>{RENDER_CREDIT}</span>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 lg:mt-32">
            <p className="eyebrow mb-10">27 villas, deux signatures</p>
            <LotsGrid dark />
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:mt-28">
            {[
              { name: "Chrysanthème", detail: "Villa de 7 pièces", image: img.chrysantheme3, alt: "Rendu 3D de la façade jardin de la villa Chrysanthème" },
              { name: "Orchidée", detail: "Villa de 5 pièces", image: img.orchidee1, alt: "Rendu 3D de la façade principale de la villa Orchidée" },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <Link href="/nos-programmes/best-building-luxury#modeles" className="group relative block">
                  <Photo src={m.image} alt={m.alt} sizes="(min-width: 640px) 45vw, 100vw" aspect="aspect-[16/9]" />
                  <div className="mt-5 flex items-end justify-between border-b border-white/25 pb-4 transition-colors group-hover:border-white">
                    <div>
                      <h3 className="display display-sm">{m.name}</h3>
                      <p className="mt-1 text-sm text-white/70">{m.detail}</p>
                    </div>
                    <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Notre engagement */}
      <section className="py-28 lg:py-40">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading index="04" eyebrow="Notre engagement" title="Bien plus que construire, créer de la valeur durable." size="md" />
              <Reveal className="mt-12 hidden lg:block" delay={0.1}>
                <Photo
                  src={img.detailMateriaux}
                  alt="Détail en rendu 3D d’un claustra en briques, d’un palmier et d’un mur enduit"
                  sizes="30vw"
                  aspect="aspect-[4/3]"
                  position="70% 50%"
                />
              </Reveal>
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {engagements.map((e, i) => (
              <Reveal as="li" key={e.title} className="border-t border-ink/20 py-12 first:border-t-0 first:pt-0 lg:py-14">
                <span className="display text-6xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display display-md mt-5">{e.title}</h3>
                <p className="mt-4 max-w-lg text-lg text-ink-soft">{e.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 — Nos réalisations */}
      <section className="bg-stone/60 py-28 lg:py-40">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading index="05" eyebrow="Nos réalisations" title="Des projets documentés, une exigence constante." size="md" />
            <Reveal>
              <TextLink href="/nos-realisations">Toutes nos réalisations</TextLink>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-6">
              <Link href="/nos-programmes/best-building-luxury" className="group block">
                <div className="frame">
                  <Photo
                    src={img.chrysantheme1}
                    alt="Rendu 3D d’une villa Chrysanthème du programme BEST BUILDING LUXURY"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    aspect="aspect-[4/5]"
                    position="38% 50%"
                  />
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <StatusTag status="Programme en développement" />
                  <span className="text-xs uppercase tracking-[0.18em] text-ink-soft">Rendu 3D, phase esquisse</span>
                </div>
                <h3 className="display display-md mt-4 transition-colors group-hover:text-red">BEST BUILDING LUXURY</h3>
                <p className="mt-2 text-ink-soft">Grand-Bassam, quartier Yaou Résidentiel</p>
              </Link>
            </Reveal>

            <ul className="lg:col-span-6 lg:col-start-7">
              {realisations
                .filter((r) => r.id !== "best-building-luxury")
                .map((r, i) => (
                  <Reveal as="li" key={r.id} delay={i * 0.08} className="grid gap-5 border-t border-ink/20 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]">
                    <Placeholder className="aspect-[16/7] sm:aspect-[4/3]" label="Photographie à venir" />
                    <div>
                      <StatusTag status={r.status} />
                      <h3 className="display display-sm mt-4">{r.title}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.14em] text-ink-soft">
                        {r.category}
                        {r.location ? ` · ${r.location}` : ""}
                      </p>
                      <p className="mt-3 text-ink-soft">{r.description}</p>
                    </div>
                  </Reveal>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 — Appel à l'action */}
      <section className="on-dark relative isolate overflow-hidden bg-navy-deep py-28 text-white lg:py-40">
        <Image
          src={img.orchidee2}
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="-z-20 object-cover opacity-30"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Parlons de votre projet</p>
            <h2 className="display display-lg mt-6 max-w-4xl">Votre prochain projet immobilier mérite un partenaire à la hauteur.</h2>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact?objet=conseiller" variant="red">
                Parler à un conseiller
              </ButtonLink>
              <ButtonLink href="/contact" variant="line-light">
                Nous contacter
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
