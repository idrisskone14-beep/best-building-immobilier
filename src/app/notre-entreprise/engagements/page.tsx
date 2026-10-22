import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { engagements } from "@/lib/content";
import { company } from "@/lib/site";
import { EntrepriseShell } from "@/components/EntrepriseShell";
import { Reveal } from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Nos engagements envers nos clients",
  description: "Bien plus qu’un bien immobilier, une exigence d’excellence : les engagements de BEST BUILDING IMMOBILIER envers ses clients.",
  path: "/notre-entreprise/engagements",
});

export default function EngagementsPage() {
  return (
    <EntrepriseShell
      path="/notre-entreprise/engagements"
      label="Nos engagements"
      title="Bien plus qu’un bien immobilier, une exigence d’excellence."
    >
      <section className="py-12 lg:py-14">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="text-lg text-ink-soft">
              Chez BEST BUILDING IMMOBILIER, nous voulons que chaque acquisition soit une expérience fondée sur la confiance, la qualité et le
              confort.
            </p>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-red">Notre slogan et signature de marque</p>
            <p className="display display-md mt-3 !font-normal italic text-navy">{company.slogan}</p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
            <ul className="border-t border-ink/20">
              {engagements.map((e) => (
                <li key={e} className="flex items-start gap-4 border-b border-ink/10 py-4 text-lg">
                  <Check size={20} strokeWidth={1.75} className="mt-1 shrink-0 text-red" aria-hidden="true" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </EntrepriseShell>
  );
}
