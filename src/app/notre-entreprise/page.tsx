import Image from "next/image";
import { Check } from "lucide-react";
import { buildMetadata, absoluteUrl } from "@/lib/metadata";
import { img } from "@/lib/images";
import { associates, engagements, missions, values } from "@/lib/content";
import { approval, company } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "Notre entreprise",
  description:
    "BEST BUILDING IMMOBILIER (2BI SARL), société ivoirienne de promotion immobilière agréée basée à Abidjan : présentation, associés, vision, missions, valeurs et engagements envers nos clients.",
  path: "/notre-entreprise",
});

export default function EntreprisePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Notre entreprise", item: absoluteUrl("/notre-entreprise") },
          ],
        }}
      />
      <PageHero
        eyebrow="Notre entreprise"
        title="Bâtir l’exception."
        intro="Créer de la valeur. Inspirer confiance."
        image={img.entrepriseHero}
        imageAlt="Villa contemporaine aux lignes épurées, avec allée paysagère et bassin"
        position="50% 55%"
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/notre-entreprise", label: "Notre entreprise" }]}
      />

      {/* 1 — Présentation de l'entreprise */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="01" eyebrow="Présentation de l’entreprise" title="Bâtir l’exception, créer de la valeur, inspirer confiance." size="md" />
          </div>
          <Reveal className="space-y-5 text-lg text-ink-soft lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p>
              BEST BUILDING IMMOBILIER, ou 2BI SARL, est une société ivoirienne de promotion immobilière agréée sous le numéro {approval.number},
              basée à Abidjan et spécialisée dans la construction et la commercialisation de programmes immobiliers.
            </p>
            <p>
              Animée par une ambition forte, celle de devenir une référence dans l’immobilier de luxe en Côte d’Ivoire et dans la sous-région
              ouest-africaine, notre entreprise place l’excellence, l’intégrité et la satisfaction client au cœur de son approche.
            </p>
            <p>
              Nous concevons des projets immobiliers qui associent élégance architecturale, fonctionnalité, confort et valorisation patrimoniale.
              Chaque réalisation est envisagée comme une opportunité de créer un cadre de vie de qualité et de contribuer durablement au
              développement du secteur immobilier.
            </p>
            <p>
              Chez BEST BUILDING IMMOBILIER, nous sommes convaincus que l’immobilier ne se limite pas à construire des bâtiments : il consiste
              également à créer des espaces de vie, à bâtir la confiance et à contribuer à la constitution d’un patrimoine durable.
            </p>
            <p className="display display-sm !font-normal italic text-navy">{company.slogan}</p>
          </Reveal>
        </div>
      </section>

      {/* 2 — Associés */}
      <section className="bg-white py-24 lg:py-32">
        <div className="wrap">
          <SectionHeading index="02" eyebrow="Présentation des associés" title="Deux parcours complémentaires, une ambition commune." size="md">
            <p>Développer des projets immobiliers de qualité et bâtir une marque de référence.</p>
          </SectionHeading>
          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-14">
            {associates.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.08}>
                <article>
                  <Photo
                    src={a.image}
                    alt={a.alt}
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    aspect="aspect-[4/5]"
                    position="50% 25%"
                    parallax={false}
                    className="max-w-sm"
                  />
                  <h3 className="display display-md mt-8">{a.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-red">
                    {a.role} <span className="text-ink-soft">| {a.domain}</span>
                  </p>
                  <div className="mt-6 space-y-4 text-ink-soft">
                    {a.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                    <p className="text-ink">{a.vision}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Vision */}
      <section className="on-dark relative isolate overflow-hidden bg-navy-deep py-28 text-white lg:py-36">
        <Image src={img.vision} alt="" fill sizes="100vw" loading="lazy" className="-z-20 object-cover opacity-30" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">
              <span className="tabular-nums">03</span>
              <span>Notre vision</span>
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Une vision exigeante de l’immobilier</p>
            <blockquote className="display display-lg mt-4 max-w-5xl !font-normal">
              <p>
                Devenir une <em>référence</em> dans l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine.
              </p>
            </blockquote>
            <p className="lead mt-8 max-w-3xl">
              Cette vision exprime notre ambition de devenir un acteur incontournable du haut de gamme, reconnu pour la qualité de ses
              réalisations, son professionnalisme et sa capacité à concevoir des espaces de vie et d’investissement d’exception.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4 — Missions */}
      <section className="py-24 lg:py-32">
        <div className="wrap">
          <SectionHeading index="04" eyebrow="Notre mission" title="Cinq engagements au service d’une clientèle exigeante." size="md">
            <p>
              À travers chacune de nos opérations, BEST BUILDING IMMOBILIER ambitionne de répondre aux exigences d’une clientèle en quête de
              prestige, de sérénité et d’investissements immobiliers de qualité.
            </p>
          </SectionHeading>
          <ol className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-6">
            {missions.map((m, i) => (
              <Reveal as="li" key={m.title} delay={(i % 3) * 0.07} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                <Photo
                  src={m.image}
                  alt={m.alt}
                  sizes={i < 3 ? "(min-width: 1024px) 30vw, 50vw" : "(min-width: 1024px) 45vw, 50vw"}
                  aspect="aspect-[4/3]"
                  parallax={false}
                />
                <div className="mt-6 flex items-start gap-4">
                  <span className="display text-4xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display display-sm">{m.title}</h3>
                    <p className="mt-3 text-ink-soft">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 — Valeurs */}
      <section className="bg-white py-24 lg:py-32">
        <div className="wrap">
          <SectionHeading index="05" eyebrow="Nos valeurs" title="Six valeurs pour guider chacun de nos projets." size="md" />
          <ul className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={(i % 3) * 0.06} className="border-t border-navy pt-6">
                <h3 className="display display-sm">{v.title}</h3>
                <p className="mt-3 text-ink-soft">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — Engagements envers nos clients */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="06" eyebrow="Nos engagements envers nos clients" title="Bien plus qu’un bien immobilier, une exigence d’excellence." size="md" />
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p className="text-lg text-ink-soft">
              Chez BEST BUILDING IMMOBILIER, nous voulons que chaque acquisition soit une expérience fondée sur la confiance, la qualité et le
              confort.
            </p>
            <ul className="mt-8 border-t border-ink/20">
              {engagements.map((e) => (
                <li key={e} className="flex items-start gap-4 border-b border-ink/10 py-4">
                  <Check size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-red" aria-hidden="true" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <p className="display display-sm mt-10 !font-normal italic text-navy">Notre slogan et signature de marque : {company.slogan}</p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Construire avec exigence. Investir avec confiance."
        primary={{ href: "/contact?objet=rendez-vous", label: "Prendre rendez-vous" }}
        secondary={{ href: "/nos-projets", label: "Découvrir nos projets" }}
        image={img.chrysantheme3}
      />
    </>
  );
}
