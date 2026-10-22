import { buildMetadata } from "@/lib/metadata";
import { associates } from "@/lib/content";
import { EntrepriseShell } from "@/components/EntrepriseShell";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";

export const metadata = buildMetadata({
  title: "Présentation des associés",
  description:
    "Deux parcours complémentaires, une ambition commune : SY Savané Ahmadou, gérant et associé, et M. Loua Nyéléké Félix, associé, au service de BEST BUILDING IMMOBILIER.",
  path: "/notre-entreprise/associes",
});

export default function AssociesPage() {
  return (
    <EntrepriseShell
      path="/notre-entreprise/associes"
      label="Les associés"
      title="Deux parcours complémentaires, une ambition commune."
      intro="Développer des projets immobiliers de qualité et bâtir une marque de référence."
    >
      <section className="py-12 lg:py-14">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-16">
          {associates.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}>
              <article>
                <div className="flex items-end gap-6">
                  <Photo
                    src={a.image}
                    alt={a.alt}
                    sizes="160px"
                    aspect="aspect-[4/5]"
                    position="50% 22%"
                    parallax={false}
                    reveal={false}
                    className="w-32 shrink-0 sm:w-40"
                  />
                  <div>
                    <h2 className="display display-md">{a.name}</h2>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-red">{a.role}</p>
                    <p className="mt-1 text-sm text-ink-soft">{a.domain}</p>
                  </div>
                </div>
                <div className="mt-8 space-y-4 text-ink-soft">
                  {a.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                  <p className="text-ink">{a.vision}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </EntrepriseShell>
  );
}
