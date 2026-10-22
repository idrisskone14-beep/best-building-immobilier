import { buildMetadata } from "@/lib/metadata";
import { missions } from "@/lib/content";
import { EntrepriseShell } from "@/components/EntrepriseShell";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";

export const metadata = buildMetadata({
  title: "Notre mission",
  description: "Cinq engagements au service d’une clientèle en quête de prestige, de sérénité et d’investissements immobiliers de qualité.",
  path: "/notre-entreprise/mission",
});

export default function MissionPage() {
  return (
    <EntrepriseShell
      path="/notre-entreprise/mission"
      label="Notre mission"
      title="Cinq engagements au service d’une clientèle exigeante."
      intro="Prestige, sérénité et investissements immobiliers de qualité."
    >
      <section className="py-12 lg:py-14">
        <div className="wrap">
          <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
            {missions.map((m, i) => (
              <Reveal as="li" key={m.title} delay={(i % 3) * 0.07} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                <Photo
                  src={m.image}
                  alt={m.alt}
                  sizes={i < 3 ? "(min-width: 1024px) 30vw, 50vw" : "(min-width: 1024px) 45vw, 50vw"}
                  aspect={i < 3 ? "aspect-[16/10]" : "aspect-[16/7]"}
                  parallax={false}
                />
                <div className="mt-5 flex items-start gap-4">
                  <span className="display text-4xl italic leading-none text-red">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="display display-sm">{m.title}</h2>
                    <p className="mt-2 text-ink-soft">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </EntrepriseShell>
  );
}
