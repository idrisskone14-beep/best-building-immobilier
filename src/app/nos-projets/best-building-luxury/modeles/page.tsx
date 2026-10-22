import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { RENDER_CREDIT } from "@/lib/images";
import { luxuryModels } from "@/lib/luxury";
import { LuxuryShell } from "@/components/LuxuryShell";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = buildMetadata({
  title: "BEST BUILDING LUXURY — Les deux modèles de villas",
  description:
    "Villa Chrysanthème (7 pièces, 274,88 m²) et villa Orchidée (5 pièces, 197,16 m²) : les deux modèles du programme BEST BUILDING LUXURY.",
  path: "/nos-projets/best-building-luxury/modeles",
});

export default function ModelesPage() {
  return (
    <LuxuryShell
      path="/nos-projets/best-building-luxury/modeles"
      label="Les deux modèles"
      title="Deux signatures architecturales, une même exigence d’excellence."
    >
      <section className="py-12 lg:py-14">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-14">
          {luxuryModels.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.08}>
              <article id={`modele-${m.id}`} className="scroll-mt-28">
                <Photo src={m.main.src} alt={m.main.alt} sizes="(min-width: 1024px) 46vw, 100vw" aspect="aspect-[16/10]" parallax={false} />
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft">{RENDER_CREDIT}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-red">
                  Villa de {m.rooms} pièces · {m.count} villas
                </p>
                <h2 className="display display-md mt-2">Villa {m.name}</h2>
                <p className="display display-sm mt-1 !font-normal italic text-navy">{m.lead}</p>
                <p className="display mt-3 text-4xl">{m.surface}</p>
                <p className="mt-3 text-ink-soft">{m.text}</p>
                <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 border-b border-ink/10 py-2 text-sm">
                      <Check size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-red" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <ButtonLink href={`/contact?objet=prix&service=${m.preset}`} variant="navy">
                    Demander des informations
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="wrap mt-10 text-xs text-ink-soft">
          Surfaces et caractéristiques indicatives, établies en phase esquisse ; elles peuvent évoluer jusqu’aux plans d’exécution.
        </p>
      </section>
    </LuxuryShell>
  );
}
