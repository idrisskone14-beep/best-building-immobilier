import { buildMetadata } from "@/lib/metadata";
import { img } from "@/lib/images";
import { engagements } from "@/lib/content";
import { approval, company } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Photo } from "@/components/Photo";
import { CtaBand } from "@/components/CtaBand";
import { TextLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Notre entreprise",
  description:
    "BEST BUILDING IMMOBILIER (2BI SARL), société ivoirienne de promotion immobilière créée en 2020 : vision, missions, engagements, direction et agrément de promoteur immobilier.",
  path: "/notre-entreprise",
});

const identity: [string, string][] = [
  ["Raison sociale", company.name],
  ["Sigle", company.acronym],
  ["Forme juridique", company.legalForm],
  ["Création", company.foundedLabel],
  ["Capital social", company.capital],
  ["RCCM", company.rccm],
  ["Siège", `${company.address.street}, ${company.address.city}`],
];

const timeline = [
  {
    when: company.foundedLabel,
    title: "Création de la société",
    text: `BEST BUILDING IMMOBILIER est créée sous la forme d’une SARL, au capital de ${company.capital}.`,
  },
  {
    when: approval.date,
    title: "Agrément de promoteur immobilier",
    text: "Le ministre de la Construction, du Logement et de l’Urbanisme agrée la société pour l’exercice de la profession de promoteur immobilier.",
  },
  {
    when: "Réalisations",
    title: "Des premières villas aux projets d’architecture",
    text: "Construction d’une villa duplex de 5 pièces et conception-réalisation d’une villa duplex haut standing de 6 pièces à Grand-Bassam ; conception de plans d’architecture pour six projets immobiliers.",
  },
  {
    when: "Aujourd’hui",
    title: "BEST BUILDING LUXURY",
    text: "Développement d’un programme de 27 villas duplex haut standing à Grand-Bassam, quartier Yaou Résidentiel.",
  },
];

const missions = [
  "Concevoir des projets immobiliers répondant aux normes internationales.",
  "Promouvoir et faciliter l’accès à des logements de qualité.",
  "Contribuer à la modernisation et à la valorisation du paysage urbain ivoirien.",
];

const organisation: [string, string][] = [
  ["Direction", "Un gérant associé, entouré des associés de la société."],
  ["Conseil", "Conseil juridique, conseil en gestion comptable et fiscale."],
  ["Études et technique", "Architecte, ingénieur VRD, conducteur de travaux."],
  ["Administration et commercial", "Administration et finances, commercial et marketing, gestion des stocks, communication."],
];

const partners = [
  "Cabinet d’architecture",
  "Bureau d’études et de contrôle",
  "Cabinet d’urbanisme",
  "Entreprises de construction",
];

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
        title="Construire avec exigence."
        intro="BEST BUILDING IMMOBILIER conçoit et développe des projets résidentiels haut standing depuis Abidjan, avec l’ambition de devenir une référence de l’immobilier de luxe en Côte d’Ivoire."
        image={img.orchidee2}
        imageAlt="Rendu 3D d’une villa Orchidée en vue latérale, haie végétale et ciel dégagé"
        position="50% 55%"
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/notre-entreprise", label: "Notre entreprise" }]}
      />

      {/* 1 — Présentation générale */}
      <section className="py-28 lg:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionHeading index="01" eyebrow="Présentation générale" title="Promoteur, aménageur, architecte et constructeur." size="md" />
            <Reveal className="mt-8 space-y-5 text-lg text-ink-soft" delay={0.05}>
              <p>
                BEST BUILDING IMMOBILIER, ou 2BI SARL, est une société à responsabilité limitée de droit ivoirien. Elle intervient dans la
                promotion immobilière, l’aménagement foncier, l’architecture et la construction, les transactions et la gestion immobilières,
                ainsi que dans la vente de matériaux de construction.
              </p>
              <p>
                Dirigée par M. Ahmadou SY SAVANE, elle s’appuie sur des collaborateurs qualifiés et des partenaires techniques expérimentés
                pour porter sa vision.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">Fiche d’identité</p>
            <dl className="mt-6 border-t border-ink/25">
              {identity.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 2 — Histoire */}
      <section className="bg-white py-28 lg:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading index="02" eyebrow="Notre histoire" title="Quelques repères depuis 2020." size="md" />
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 0.05} className="grid gap-3 border-t border-ink/20 py-9 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-red">{t.when}</p>
                <div>
                  <h3 className="display display-sm">{t.title}</h3>
                  <p className="mt-3 text-ink-soft">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 — Vision */}
      <section className="on-dark relative overflow-hidden bg-navy py-28 text-white lg:py-40">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div className="wrap relative">
          <Reveal>
            <p className="eyebrow">
              <span className="tabular-nums">03</span>
              <span>Notre vision</span>
            </p>
            <blockquote className="display display-lg mt-8 max-w-5xl !font-normal">
              <p>
                Être une <em>référence</em> dans l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 4 — Missions */}
      <section className="py-28 lg:py-36">
        <div className="wrap">
          <SectionHeading index="04" eyebrow="Nos missions" title="Trois missions, un même cap." size="md" />
          <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {missions.map((m, i) => (
              <Reveal as="li" key={m} delay={i * 0.08} className="border-t border-navy pt-6">
                <span className="display text-5xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</span>
                <p className="display display-sm mt-6 !font-normal">{m}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 — Valeurs et engagements */}
      <section className="bg-white py-28 lg:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="05" eyebrow="Valeurs et engagements" title="Bien plus que construire, créer de la valeur durable." size="md" />
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {engagements.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 0.06} className="border-t border-ink/20 py-8 first:border-t-0 first:pt-0">
                <h3 className="display display-sm">{e.title}</h3>
                <p className="mt-3 max-w-lg text-ink-soft">{e.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — Direction */}
      <section className="py-28 lg:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            {/* Emplacement réservé : portrait officiel à fournir (aucun portrait n'est inventé). */}
            <div
              role="img"
              aria-label="Emplacement réservé au portrait officiel de la direction"
              className="frame-left frame relative aspect-[4/5] bg-stone"
            >
              <div className="flex h-full w-full items-end bg-stone p-5">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-navy/60">Portrait officiel à venir</span>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <SectionHeading index="06" eyebrow="Notre direction" title={company.manager.name} size="md">
              <p className="!text-red">{company.manager.role}</p>
            </SectionHeading>
            <Reveal className="mt-8 max-w-2xl space-y-5 text-lg text-ink-soft" delay={0.05}>
              <p>
                Titulaire d’un Master en administration des entreprises, Ahmadou SY SAVANE dirige BEST BUILDING IMMOBILIER et porte la vision
                de l’entreprise : bâtir des programmes résidentiels de qualité, au service des familles, des cadres, des investisseurs et de
                la diaspora.
              </p>
              <p>Il s’appuie sur une équipe de collaborateurs et de partenaires techniques spécialisés.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 — Compétences et partenaires */}
      <section className="bg-white py-28 lg:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              index="07"
              eyebrow="Compétences et partenaires techniques"
              title="Une organisation structurée autour de chaque projet."
              size="md"
            />
            <Reveal className="mt-10" delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">Partenaires techniques</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {partners.map((p) => (
                  <li key={p} className="border border-navy/40 px-4 py-2 text-sm text-navy">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <dl className="border-t border-ink/25">
              {organisation.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-ink/15 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
                  <dt className="display display-sm">{k}</dt>
                  <dd className="text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 8 — Agrément */}
      <section className="py-28 lg:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading index="08" eyebrow="Agrément et informations institutionnelles" title="Un agrément de promoteur immobilier." size="md" />
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <div className="border border-navy/25 bg-white p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">Agrément de promoteur immobilier</p>
              <p className="display display-sm mt-4">
                {approval.decree}
                <br />
                du {approval.date}
              </p>
              <p className="mt-5 text-ink-soft">
                Arrêté portant agrément de la société BEST BUILDING IMMOBILIER à l’exercice de la profession de promoteur immobilier, pris par le{" "}
                {approval.authority}, après avis de la Commission d’agrément des promoteurs immobiliers et des programmes immobiliers (CAPPI).
              </p>
              <p className="mt-4 text-sm text-ink-soft">Durée prévue par l’arrêté : {approval.duration}.</p>
            </div>
            <dl className="mt-8 border-t border-ink/25">
              {[
                ["RCCM", company.rccm],
                ["Capital social", company.capital],
                ["Siège", `${company.address.street}, ${company.address.city}`],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8">
              <TextLink href="/contact">Nous poser une question</TextLink>
            </p>
          </Reveal>
        </div>
      </section>

      <Photo src={img.chrysantheme3} alt="Rendu 3D de la façade jardin d’une villa Chrysanthème" sizes="100vw" aspect="aspect-[16/9] sm:aspect-[21/9]" position="50% 45%" />

      <CtaBand
        title="Construire avec exigence. Investir avec confiance."
        primary={{ href: "/contact?objet=conseiller", label: "Parler à un conseiller" }}
        secondary={{ href: "/nos-programmes", label: "Explorer nos programmes" }}
      />
    </>
  );
}
