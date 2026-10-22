import { buildMetadata } from "@/lib/metadata";
import { values } from "@/lib/content";
import { EntrepriseShell } from "@/components/EntrepriseShell";
import { Reveal } from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Nos valeurs",
  description: "Excellence, intégrité, confiance, innovation, professionnalisme et durabilité : les six valeurs de BEST BUILDING IMMOBILIER.",
  path: "/notre-entreprise/valeurs",
});

export default function ValeursPage() {
  return (
    <EntrepriseShell path="/notre-entreprise/valeurs" label="Nos valeurs" title="Six valeurs pour guider chacun de nos projets.">
      <section className="py-12 lg:py-14">
        <div className="wrap">
          <ul className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={(i % 3) * 0.06} className="border-t border-navy pt-6">
                <span className="display text-3xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="display display-sm mt-3">{v.title}</h2>
                <p className="mt-3 text-ink-soft">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </EntrepriseShell>
  );
}
