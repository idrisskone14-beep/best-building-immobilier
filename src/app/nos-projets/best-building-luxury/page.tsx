import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { buildMetadata, absoluteUrl } from "@/lib/metadata";
import { fullGallery, img, RENDER_CREDIT } from "@/lib/images";
import { programme } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";
import { Gallery } from "@/components/Gallery";
import { LotsGrid } from "@/components/LotsGrid";
import { DimensionLine } from "@/components/DimensionLine";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { StatusTag } from "@/components/StatusTag";

const MAP_URL = "https://maps.app.goo.gl/SMR5NzcikZkBJANy9";

export const metadata = buildMetadata({
  title: "BEST BUILDING LUXURY — 27 villas duplex haut standing à Quartier Yaou Résidentiel",
  description:
    "BEST BUILDING LUXURY : programme de 27 villas duplex haut standing (14 Chrysanthème, 13 Orchidée) à Quartier Yaou Résidentiel, à 700 mètres de l’axe de l’autoroute Grand-Bassam – Assinie.",
  path: "/nos-projets/best-building-luxury",
});

const models = [
  {
    ...programme.models[0],
    id: "chrysantheme",
    preset: "chrysantheme",
    lead: "L’espace et le raffinement.",
    text: "Villa de 7 pièces sur un terrain de 337 à 411 m². La villa Chrysanthème offre également un séjour privé à l’étage et une conciergerie autonome ; une piscine peut y être envisagée en option.",
    features: [
      "4 chambres et 4 salles d’eau",
      "Grand séjour et salle à manger",
      "Séjour privé à l’étage",
      "Conciergerie autonome avec salle d’eau",
      "Buanderie, terrasses et jardin",
      "Garage pour 2 véhicules",
      "Possibilité d’aménager une piscine",
    ],
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
    lead: "L’élégance fonctionnelle.",
    text: "Villa de 5 pièces sur un terrain de 254 à 358 m², alliant fonctionnalité et élégance, avec terrasses avant et arrière et jardin privatif.",
    features: [
      "4 chambres et 4 salles d’eau",
      "Grand séjour et salle à manger",
      "Cuisine et buanderie",
      "Terrasses avant et arrière",
      "Jardin privatif",
      "Garage pour 2 véhicules",
    ],
    main: { src: img.orchidee1, alt: "Rendu 3D de la villa Orchidée : façade principale et garage" },
    thumbs: [
      { src: img.orchidee2, alt: "Rendu 3D de la villa Orchidée en vue latérale" },
      { src: img.orchidee3, alt: "Rendu 3D de la façade jardin de la villa Orchidée, avec claustra en briques" },
    ],
  },
];

const materials = [
  "Structure en agglos et béton de qualité industrielle",
  "Revêtements de sols et de murs haut de gamme",
  "Menuiseries en aluminium inoxydable",
  "Toiture en dalle étanche",
];

const comfort = ["Climatisation centrale", "Domotique de base", "Équipements de sécurité", "Portes et sanitaires intelligents"];

const expertise = [
  ["Conception architecturale", "Cabinet DOGBA & ASSOCIÉS"],
  ["Aménagement urbain", "Cabinet EUE"],
  ["Études techniques et contrôle", "BAG Ingénierie"],
  ["Entreprises de construction", "Sélectionnées à l’issue d’un appel d’offres, selon leur expérience, la qualité d’exécution et le soin des finitions"],
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
            { "@type": "ListItem", position: 2, name: "Nos projets", item: absoluteUrl("/nos-projets") },
            { "@type": "ListItem", position: 3, name: "BEST BUILDING LUXURY", item: absoluteUrl("/nos-projets/best-building-luxury") },
          ],
        }}
      />

      <PageHero
        tall
        eyebrow="Programme immobilier · Quartier Yaou Résidentiel"
        title="BEST BUILDING LUXURY"
        intro="Le prestige d’un cadre de vie d’exception. Là où l’élégance rencontre l’art de vivre."
        image={img.chrysantheme1}
        imageAlt="Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY"
        position="40% 50%"
        credit={RENDER_CREDIT}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/nos-projets", label: "Nos projets" },
          { href: "/nos-projets/best-building-luxury", label: "BEST BUILDING LUXURY" },
        ]}
      >
        <ButtonLink href="/contact?objet=presentation&service=luxury" variant="red">
          Demander une présentation
        </ButtonLink>
        <ButtonLink href="/contact?objet=rendez-vous&service=luxury" variant="line-light">
          Prendre rendez-vous
        </ButtonLink>
      </PageHero>

      {/* Repères */}
      <section aria-label="Le programme en bref" className="border-b border-ink/15 bg-white">
        <dl className="wrap grid divide-y divide-ink/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["Villas duplex haut standing", String(programme.villas)],
            ["Modèles de villas", "Chrysanthème · Orchidée"],
            ["Localisation", "Quartier Yaou Résidentiel"],
          ].map(([k, v]) => (
            <div key={k} className="px-0 py-8 sm:px-8 sm:first:pl-0">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">{k}</dt>
              <dd className="display display-md mt-2">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Présentation */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="01" eyebrow="Le programme" title="Une nouvelle vision de l’habitat haut de gamme." size="md" />
            <Reveal className="mt-6" delay={0.05}>
              <StatusTag status="Programme en développement" />
            </Reveal>
          </div>
          <Reveal className="space-y-5 text-lg text-ink-soft lg:col-span-6 lg:col-start-7" delay={0.08}>
            <p>
              Ce programme immobilier est composé de {programme.villas} villas duplex haut standing (14 villas Chrysanthème et 13 villas Orchidée),
              situé sur le lotissement Quartier Yaou Résidentiel, à 700 mètres de l’axe de l’autoroute Grand-Bassam – Assinie.
            </p>
            <p>
              Entre Mondoukou et Yaou, au cœur d’un environnement balnéaire privilégié et à environ 30 minutes d’Abidjan, BEST BUILDING LUXURY
              associe architecture contemporaine, espaces généreux et finitions premium pour offrir un cadre de vie pensé autour du confort, de
              l’intimité et du bien-être. À proximité du canal, il s’inscrit dans un secteur à vocation touristique où se rencontrent
              attractivité, évasion et potentiel patrimonial.
            </p>
            <p>
              Choisir BEST BUILDING LUXURY, c’est faire le choix d’un environnement privilégié, d’une architecture contemporaine et d’espaces
              conçus pour le confort et la tranquillité. C’est aussi envisager un patrimoine immobilier dans un secteur balnéaire attractif de la
              Côte d’Ivoire.
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
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Le programme propose deux modèles de villas conçus pour répondre à différents styles de vie : Chrysanthème, une villa spacieuse de 7
            pièces, et Orchidée, une villa de 5 pièces alliant fonctionnalité et élégance.
          </p>
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
                <DimensionLine label={`Surface ${m.surface}`} onDark={i === 1} />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {m.thumbs.map((t) => (
                    <Photo key={t.alt} src={t.src} alt={t.alt} sizes="(min-width: 1024px) 29vw, 50vw" aspect="aspect-[16/10]" />
                  ))}
                </div>
                <p className={`mt-3 text-[0.7rem] uppercase tracking-[0.18em] ${i === 1 ? "text-white/70" : "text-ink-soft"}`}>{RENDER_CREDIT}</p>
              </Reveal>
              <Reveal className={`lg:col-span-4 ${i === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`} delay={0.08}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">
                  <span className={i === 1 ? "text-white" : ""}>
                    Villa de {m.rooms} pièces · {m.count} villas
                  </span>
                </p>
                <h3 className="display display-lg mt-4">Villa {m.name}</h3>
                <p className="display display-sm mt-3 !font-normal italic">{m.lead}</p>
                <p className="mt-4 text-5xl display">{m.surface}</p>
                <p className={`mt-4 ${i === 1 ? "text-white/80" : "text-ink-soft"}`}>{m.text}</p>
                <ul className={`mt-6 border-t ${i === 1 ? "border-white/25" : "border-ink/20"}`}>
                  {m.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 border-b py-2.5 ${i === 1 ? "border-white/15" : "border-ink/10"}`}>
                      <Check size={16} strokeWidth={1.75} className={`mt-1 shrink-0 ${i === 1 ? "text-white" : "text-red"}`} aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Matériaux, équipements, expertise */}
      <section className="py-24 lg:py-32">
        <div className="wrap">
          <SectionHeading index="03" eyebrow="Qualité du projet" title="Des matériaux sélectionnés, des équipements modernes." size="md">
            <p>La qualité du projet s’exprime dans le choix des matériaux et le soin accordé aux finitions.</p>
          </SectionHeading>
          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-3">
            <Reveal>
              <h3 className="display display-sm border-t border-navy pt-6">Matériaux et finitions</h3>
              <ul className="mt-4 space-y-3">
                {materials.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-soft">
                    <Check size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-red" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06}>
              <h3 className="display display-sm border-t border-navy pt-6">Confort quotidien renforcé</h3>
              <ul className="mt-4 space-y-3">
                {comfort.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-soft">
                    <Check size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-red" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="display display-sm border-t border-navy pt-6">L’expertise au service de la qualité</h3>
              <dl className="mt-4 space-y-4">
                {expertise.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">{k}</dt>
                    <dd className="mt-1 text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-white py-24 lg:py-32">
        <div className="wrap">
          <SectionHeading index="04" eyebrow="Galerie" title="Le programme en images." size="md">
            <p>Rendus 3D des deux modèles. Touchez ou cliquez une image pour l’agrandir.</p>
          </SectionHeading>
          <Reveal className="mt-14">
            <Gallery items={fullGallery} />
          </Reveal>
          <p className="mt-6 text-xs text-ink-soft">Rendus 3D d’illustration, phase esquisse — non contractuels.</p>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="05" eyebrow="Localisation" title="Quartier Yaou Résidentiel, entre Mondoukou et Yaou." size="md" />
            <Reveal className="mt-6 space-y-4 text-lg text-ink-soft" delay={0.06}>
              <p>
                À 700 mètres de l’axe de l’autoroute Grand-Bassam – Assinie, à proximité du canal et à environ 30 minutes d’Abidjan.
              </p>
            </Reveal>
            <Reveal className="mt-8" delay={0.1}>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <MapPin size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>Ouvrir dans Google Maps</span>
              </a>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative aspect-[16/9] overflow-hidden bg-stone">
              <Image
                src={img.carteLuxury}
                alt="Vue satellite de la localisation du programme BEST BUILDING LUXURY"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-ink-soft">Localisation indicative du programme.</p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="BEST BUILDING LUXURY"
        title="Plus qu’une villa, un art de vivre."
        text="Les prix, les disponibilités et les conditions détaillées sont communiqués par un conseiller de BEST BUILDING IMMOBILIER."
        primary={{ href: "/contact?objet=presentation&service=luxury", label: "Recevoir une présentation" }}
        secondary={{ href: "/contact?objet=rendez-vous&service=luxury", label: "Prendre rendez-vous" }}
        image={img.chrysantheme3}
      />
    </>
  );
}
