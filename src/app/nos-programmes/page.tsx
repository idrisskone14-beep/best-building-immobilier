import { buildMetadata } from "@/lib/metadata";
import { img, RENDER_CREDIT } from "@/lib/images";
import { programme } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { StatusTag } from "@/components/StatusTag";
import { CtaBand } from "@/components/CtaBand";
import { LotsGrid } from "@/components/LotsGrid";

export const metadata = buildMetadata({
  title: "Nos programmes",
  description:
    "BEST BUILDING LUXURY : 27 villas duplex haut standing à Grand-Bassam, quartier Yaou Résidentiel, en deux modèles, Chrysanthème et Orchidée.",
  path: "/nos-programmes",
});

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos programmes"
        title="Des résidences conçues pour durer."
        intro="Un programme à la fois, développé avec la même exigence architecturale."
        image={img.chrysantheme1}
        imageAlt="Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY"
        position="40% 50%"
        credit={RENDER_CREDIT}
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/nos-programmes", label: "Nos programmes" }]}
      />

      <section className="py-28 lg:py-36">
        <div className="wrap">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-8">
              <div className="frame">
                <Photo
                  src={img.chrysantheme2}
                  alt="Rendu 3D d’une villa Chrysanthème : auvent, garage pour deux véhicules et balcon vitré"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  aspect="aspect-[4/3] lg:aspect-[16/10]"
                  className="cut-tr"
                />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-4" delay={0.1}>
              <StatusTag status="Programme en développement" />
              <h2 className="display display-lg mt-6">
                BEST BUILDING <em>LUXURY</em>
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">Grand-Bassam · {programme.district}</p>
              <p className="mt-8 text-lg text-ink-soft">
                Un programme résidentiel haut standing de {programme.villas} villas duplex, réparties en deux modèles : Chrysanthème, 7 pièces,
                et Orchidée, 5 pièces.
              </p>
              <div className="mt-10 flex flex-col gap-4">
                <ButtonLink href="/nos-programmes/best-building-luxury" variant="navy">
                  Découvrir le programme
                </ButtonLink>
                <ButtonLink href="/contact?objet=presentation&service=luxury" variant="line">
                  Demander une présentation
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <dl className="mt-24 grid gap-px border-y border-ink/20 bg-ink/20 sm:grid-cols-3">
            {[
              ["Villas duplex haut standing", String(programme.villas)],
              ["Deux modèles", "Chrysanthème · Orchidée"],
              ["Localisation", `Grand-Bassam, ${programme.district}`],
            ].map(([k, v]) => (
              <div key={k} className="bg-ivory px-1 py-8 sm:px-8">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">{k}</dt>
                <dd className="display display-sm mt-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-28 lg:pb-36">
        <div className="wrap">
          <h2 className="display display-md max-w-3xl">
            27 villas, <em>deux signatures</em>.
          </h2>
          <div className="mt-14">
            <LotsGrid />
          </div>
        </div>
      </section>

      <CtaBand
        title="Recevez la présentation complète du programme."
        text="Prix, disponibilités et conditions détaillées vous sont communiqués par un conseiller."
        primary={{ href: "/contact?objet=presentation&service=luxury", label: "Recevoir une présentation" }}
        secondary={{ href: "/contact?objet=conseiller&service=luxury", label: "Échanger avec un conseiller" }}
        image={img.orchidee3}
      />
    </>
  );
}
