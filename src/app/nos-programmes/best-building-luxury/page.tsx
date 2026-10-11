import { buildMetadata, absoluteUrl } from "@/lib/metadata";
import { fullGallery, img, RENDER_CREDIT } from "@/lib/images";
import { programme } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";
import { Gallery } from "@/components/Gallery";
import { MapEmbed } from "@/components/MapEmbed";
import { LotsGrid } from "@/components/LotsGrid";
import { DimensionLine } from "@/components/DimensionLine";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "BEST BUILDING LUXURY — 27 villas duplex haut standing à Grand-Bassam",
  description:
    "BEST BUILDING LUXURY : programme résidentiel haut standing de 27 villas duplex à Grand-Bassam (Yaou Résidentiel), en deux modèles — Chrysanthème, 7 pièces, et Orchidée, 5 pièces.",
  path: "/nos-programmes/best-building-luxury",
});

const models = [
  {
    ...programme.models[0],
    id: "chrysantheme",
    preset: "chrysantheme",
    lead: "Le grand format du programme.",
    text: "Sept pièces, un auvent qui abrite le garage de deux véhicules et des façades ouvertes aussi bien sur la rue que sur le jardin : la Chrysanthème conjugue présence architecturale et confort de vie.",
    main: { src: img.chrysantheme2, alt: "Rendu 3D de la villa Chrysanthème avec auvent et garage pour deux véhicules" },
    thumbs: [
      { src: img.chrysantheme1, alt: "Rendu 3D de la villa Chrysanthème, façade sur rue et haie végétale" },
      { src: img.chrysantheme3, alt: "Rendu 3D de la façade jardin de la villa Chrysanthème, avec piscine et terrasse" },
    ],
  },
  {
    ...programme.models[1],
    id: "orchidee",
    preset: "orchidee",
    lead: "L’élégance en cinq pièces.",
    text: "Un volume compact et expressif, des matières chaleureuses et une façade arrière ouverte sur le jardin : l’Orchidée associe sobriété, fonctionnalité et caractère.",
    main: { src: img.orchidee1, alt: "Rendu 3D de la villa Orchidée : façade principale et garage" },
    thumbs: [
      { src: img.orchidee2, alt: "Rendu 3D de la villa Orchidée en vue latérale" },
      { src: img.orchidee3, alt: "Rendu 3D de la façade jardin de la villa Orchidée, avec claustra en briques" },
    ],
  },
];

export default function LuxuryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Nos programmes", item: absoluteUrl("/nos-programmes") },
            { "@type": "ListItem", position: 3, name: "BEST BUILDING LUXURY", item: absoluteUrl("/nos-programmes/best-building-luxury") },
          ],
        }}
      />

      <PageHero
        tall
        eyebrow="Programme résidentiel · Grand-Bassam"
        title="BEST BUILDING LUXURY"
        intro="Une nouvelle expression de l’élégance résidentielle à Grand-Bassam."
        image={img.chrysantheme1}
        imageAlt="Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY"
        position="40% 50%"
        credit={RENDER_CREDIT}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/nos-programmes", label: "Nos programmes" },
          { href: "/nos-programmes/best-building-luxury", label: "BEST BUILDING LUXURY" },
        ]}
      >
        <ButtonLink href="/contact?objet=presentation&service=luxury" variant="red">
          Demander une présentation
        </ButtonLink>
      </PageHero>

      {/* Repères */}
      <section aria-label="Le programme en bref" className="border-b border-ink/15 bg-white">
        <dl className="wrap grid divide-y divide-ink/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["Villas duplex haut standing", String(programme.villas)],
            ["Modèles de villas", "Deux"],
            ["Localisation", `Grand-Bassam, ${programme.district}`],
          ].map(([k, v]) => (
            <div key={k} className="px-0 py-8 sm:px-8 sm:first:pl-0">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">{k}</dt>
              <dd className="display display-md mt-2">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Présentation */}
      <section className="pb-16 pt-28 lg:pb-20 lg:pt-36">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="01" eyebrow="Le programme" title="Un cadre de vie élégant, confortable et privilégié." size="md" />
          </div>
          <Reveal className="space-y-5 text-lg text-ink-soft lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p>
              BEST BUILDING LUXURY est un programme résidentiel haut standing développé à Grand-Bassam, dans le quartier Yaou Résidentiel. Il réunit
              27 villas duplex, déclinées en deux modèles aux lignes contemporaines : volumes blancs, larges baies vitrées, balcons et garages pensés
              pour le quotidien.
            </p>
            <p>
              Chaque villa est conçue pour offrir confort, lumière et intimité, dans un cadre résidentiel soigné où la végétation accompagne
              l’architecture. Le programme s’adresse aux cadres, aux entrepreneurs, aux investisseurs et aux membres de la diaspora qui recherchent un
              cadre de vie de qualité, à la hauteur de leurs ambitions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 27 villas */}
      <section aria-labelledby="titre-villas" className="pb-24 lg:pb-32">
        <div className="wrap">
          <h2 id="titre-villas" className="display display-md max-w-3xl">
            27 villas, <em>deux signatures</em>.
          </h2>
          <div className="mt-14">
            <LotsGrid />
          </div>
        </div>
      </section>

      {/* Les deux modèles */}
      <section id="modeles" aria-labelledby="titre-modeles" className="scroll-mt-24">
        <div className="wrap pb-6">
          <h2 id="titre-modeles" className="eyebrow">
            <span className="tabular-nums">02</span>
            <span>Les deux modèles</span>
          </h2>
        </div>
        {models.map((m, i) => (
          <article key={m.id} id={`modele-${m.id}`} className={`py-20 lg:py-28 ${i === 1 ? "bg-navy text-white on-dark" : "bg-white"}`}>
            <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal className={`lg:col-span-7 ${i === 1 ? "lg:order-2 lg:col-start-6" : ""}`}>
                <Photo src={m.main.src} alt={m.main.alt} sizes="(min-width: 1024px) 58vw, 100vw" aspect="aspect-[4/3] lg:aspect-[16/11]" className={i === 1 ? "cut-tl" : "cut-tr"} />
                <DimensionLine label={`Surface utile ${m.surface}`} onDark={i === 1} />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {m.thumbs.map((t) => (
                    <Photo key={t.alt} src={t.src} alt={t.alt} sizes="(min-width: 1024px) 29vw, 50vw" aspect="aspect-[16/10]" />
                  ))}
                </div>
                <p className={`mt-3 text-[0.7rem] uppercase tracking-[0.18em] ${i === 1 ? "text-white/70" : "text-ink-soft"}`}>{RENDER_CREDIT}</p>
              </Reveal>
              <Reveal className={`lg:col-span-4 ${i === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`} delay={0.08}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">
                  <span className={i === 1 ? "text-white" : ""}>{m.rooms} pièces</span>
                </p>
                <h3 className="display display-lg mt-4">{m.name}</h3>
                <p className="display display-sm mt-3 !font-normal italic">{m.lead}</p>
                <p className={`mt-6 text-lg ${i === 1 ? "text-white/80" : "text-ink-soft"}`}>{m.text}</p>
                <dl className={`mt-8 border-t ${i === 1 ? "border-white/25" : "border-ink/20"}`}>
                  {[
                    ["Villas du programme", String(m.count)],
                    ["Surface utile", m.surface],
                    ["Terrain", m.land],
                    ["Garage", "2 véhicules"],
                  ].map(([k, v]) => (
                    <div key={k} className={`flex items-baseline justify-between gap-4 border-b py-3 ${i === 1 ? "border-white/15" : "border-ink/10"}`}>
                      <dt className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${i === 1 ? "text-white/65" : "text-ink-soft"}`}>{k}</dt>
                      <dd className="text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8">
                  <ButtonLink href={`/contact?objet=prix&service=${m.preset}`} variant={i === 1 ? "line-light" : "navy"}>
                    Demander des informations
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </article>
        ))}
        <p className="wrap py-6 text-xs text-ink-soft">
          Surfaces et caractéristiques indicatives, établies en phase esquisse ; elles peuvent évoluer jusqu’aux plans d’exécution.
        </p>
      </section>

      {/* Galerie */}
      <section className="py-28 lg:py-36">
        <div className="wrap">
          <SectionHeading index="03" eyebrow="Galerie" title="Le programme en images." size="md">
            <p>Rendus 3D officiels des deux modèles. Touchez ou cliquez une image pour l’agrandir.</p>
          </SectionHeading>
          <Reveal className="mt-14">
            <Gallery items={fullGallery} />
          </Reveal>
          <p className="mt-6 text-xs text-ink-soft">Rendus 3D d’illustration, phase esquisse — non contractuels.</p>
        </div>
      </section>

      {/* Localisation */}
      <section className="bg-white py-28 lg:py-36">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="04" eyebrow="Localisation" title="Grand-Bassam, quartier Yaou Résidentiel." size="md" />
            <Reveal className="mt-8 space-y-4 text-lg text-ink-soft" delay={0.06}>
              <p>
                Le programme prend place à Grand-Bassam, entre Mondoukou et Yaou, au point kilométrique 5,5, dans un secteur résidentiel proche de
                l’axe Grand-Bassam–Assinie.
              </p>
              <p className="text-base">Assinie se situe à environ 20 minutes (temps indicatif).</p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <MapEmbed
              lat={programme.coordinates.lat}
              lng={programme.coordinates.lng}
              title="Carte de la localisation indicative du programme BEST BUILDING LUXURY à Grand-Bassam"
              note="Localisation indicative du programme."
            />
          </Reveal>
        </div>
      </section>

      {/* Commercialisation */}
      <section className="py-28 lg:py-36">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="05" eyebrow="Commercialisation" title="Une présentation personnalisée." size="md" />
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p className="text-lg text-ink-soft">
              Les prix, les disponibilités et les conditions détaillées de BEST BUILDING LUXURY sont communiqués sur demande par un conseiller de
              BEST BUILDING IMMOBILIER, qui vous remettra la présentation du programme.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact?objet=prix&service=luxury" variant="red">
                Obtenir prix et disponibilités
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="BEST BUILDING LUXURY"
        title="Découvrez votre futur cadre de vie."
        primary={{ href: "/contact?objet=presentation&service=luxury", label: "Recevoir une présentation" }}
        secondary={{ href: "/contact?objet=conseiller&service=luxury", label: "Échanger avec un conseiller" }}
        image={img.chrysantheme3}
      />
    </>
  );
}
