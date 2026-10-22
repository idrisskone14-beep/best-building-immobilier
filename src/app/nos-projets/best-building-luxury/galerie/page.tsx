import { buildMetadata } from "@/lib/metadata";
import { fullGallery } from "@/lib/images";
import { LuxuryShell } from "@/components/LuxuryShell";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";

export const metadata = buildMetadata({
  title: "BEST BUILDING LUXURY — Galerie",
  description: "Rendus 3D des villas Chrysanthème et Orchidée du programme BEST BUILDING LUXURY.",
  path: "/nos-projets/best-building-luxury/galerie",
});

export default function GaleriePage() {
  return (
    <LuxuryShell
      path="/nos-projets/best-building-luxury/galerie"
      label="Galerie"
      title="Le programme en images."
      intro="Rendus 3D des deux modèles. Touchez ou cliquez une image pour l’agrandir."
    >
      <section className="py-12 lg:py-14">
        <div className="wrap">
          <Reveal>
            <Gallery items={fullGallery} columns={4} />
          </Reveal>
          <p className="mt-6 text-xs text-ink-soft">Rendus 3D d’illustration, phase esquisse — non contractuels.</p>
        </div>
      </section>
    </LuxuryShell>
  );
}
