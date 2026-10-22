import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { luxuryComfort, luxuryExpertise, luxuryMaterials } from "@/lib/luxury";
import { LuxuryShell } from "@/components/LuxuryShell";
import { Reveal } from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "BEST BUILDING LUXURY — Qualité et expertise",
  description:
    "Des matériaux sélectionnés, des équipements modernes et des cabinets spécialisés (DOGBA & ASSOCIÉS, EUE, BAG Ingénierie) pour le programme BEST BUILDING LUXURY.",
  path: "/nos-projets/best-building-luxury/qualite",
});

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-ink-soft">
          <Check size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-red" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function QualitePage() {
  return (
    <LuxuryShell
      path="/nos-projets/best-building-luxury/qualite"
      label="Qualité et expertise"
      title="Des matériaux sélectionnés, des équipements modernes."
      intro="La qualité du projet s’exprime dans le choix des matériaux et le soin accordé aux finitions."
    >
      <section className="py-12 lg:py-14">
        <div className="wrap grid gap-x-12 gap-y-12 md:grid-cols-3">
          <Reveal>
            <h2 className="display display-sm border-t border-navy pt-6">Matériaux et finitions</h2>
            <CheckList items={luxuryMaterials} />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display display-sm border-t border-navy pt-6">Confort quotidien renforcé</h2>
            <CheckList items={luxuryComfort} />
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="display display-sm border-t border-navy pt-6">L’expertise au service de la qualité</h2>
            <dl className="mt-4 space-y-4">
              {luxuryExpertise.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">{k}</dt>
                  <dd className="mt-1 text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </LuxuryShell>
  );
}
