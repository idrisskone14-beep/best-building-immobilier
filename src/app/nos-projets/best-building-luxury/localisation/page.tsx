import Image from "next/image";
import { MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { img } from "@/lib/images";
import { LUXURY_MAP_URL } from "@/lib/luxury";
import { LuxuryShell } from "@/components/LuxuryShell";
import { Reveal } from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "BEST BUILDING LUXURY — Localisation",
  description:
    "Quartier Yaou Résidentiel, entre Mondoukou et Yaou : à 700 mètres de l’axe de l’autoroute Grand-Bassam – Assinie et à environ 30 minutes d’Abidjan.",
  path: "/nos-projets/best-building-luxury/localisation",
});

export default function LocalisationPage() {
  return (
    <LuxuryShell
      path="/nos-projets/best-building-luxury/localisation"
      label="Localisation"
      title="Quartier Yaou Résidentiel, entre Mondoukou et Yaou."
    >
      <section className="py-12 lg:py-14">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="text-lg text-ink-soft">
              À 700 mètres de l’axe de l’autoroute Grand-Bassam – Assinie, à proximité du canal et à environ 30 minutes d’Abidjan, dans un
              secteur à vocation touristique où se rencontrent attractivité, évasion et potentiel patrimonial.
            </p>
            <p className="mt-8">
              <a href={LUXURY_MAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <MapPin size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>Ouvrir dans Google Maps</span>
              </a>
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.1}>
            <div className="relative aspect-[16/9] overflow-hidden bg-stone">
              <Image
                src={img.carteLuxury}
                alt="Vue satellite de la localisation du programme BEST BUILDING LUXURY"
                fill
                sizes="(min-width: 1024px) 64vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-ink-soft">Localisation indicative du programme.</p>
          </Reveal>
        </div>
      </section>
    </LuxuryShell>
  );
}
