import { buildMetadata } from "@/lib/metadata";
import { programme } from "@/lib/site";
import { LuxuryShell } from "@/components/LuxuryShell";
import { Reveal } from "@/components/Reveal";
import { LotsGrid } from "@/components/LotsGrid";
import { StatusTag } from "@/components/StatusTag";

export const metadata = buildMetadata({
  title: "BEST BUILDING LUXURY — 27 villas duplex haut standing à Quartier Yaou Résidentiel",
  description:
    "BEST BUILDING LUXURY : programme de 27 villas duplex haut standing (14 Chrysanthème, 13 Orchidée) à Quartier Yaou Résidentiel, à 700 mètres de l’axe de l’autoroute Grand-Bassam – Assinie.",
  path: "/nos-projets/best-building-luxury",
});

export default function LuxuryPage() {
  return (
    <LuxuryShell
      path="/nos-projets/best-building-luxury"
      label="Le programme"
      title="BEST BUILDING LUXURY"
      intro="Le prestige d’un cadre de vie d’exception. Là où l’élégance rencontre l’art de vivre."
    >
      <section className="py-12 lg:py-14">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="space-y-5 text-lg text-ink-soft lg:col-span-6">
            <StatusTag status="Programme en développement" />
            <p>
              Ce programme immobilier est composé de {programme.villas} villas duplex haut standing (14 villas Chrysanthème et 13 villas Orchidée),
              situé sur le lotissement Quartier Yaou Résidentiel, à 700 mètres de l’axe de l’autoroute Grand-Bassam – Assinie.
            </p>
            <p>
              Entre Mondoukou et Yaou, au cœur d’un environnement balnéaire privilégié et à environ 30 minutes d’Abidjan, BEST BUILDING LUXURY
              associe architecture contemporaine, espaces généreux et finitions premium pour offrir un cadre de vie pensé autour du confort, de
              l’intimité et du bien-être.
            </p>
            <p>
              Choisir BEST BUILDING LUXURY, c’est faire le choix d’un environnement privilégié, d’une architecture contemporaine et d’espaces
              conçus pour le confort et la tranquillité : un patrimoine immobilier dans un secteur balnéaire attractif de la Côte d’Ivoire.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <h2 className="display display-md">
              27 villas, <em>deux signatures</em>.
            </h2>
            <p className="mt-3 text-ink-soft">
              Chrysanthème, une villa spacieuse de 7 pièces, et Orchidée, une villa de 5 pièces alliant fonctionnalité et élégance.
            </p>
            <div className="mt-8">
              <LotsGrid />
            </div>
          </Reveal>
        </div>
      </section>
    </LuxuryShell>
  );
}
