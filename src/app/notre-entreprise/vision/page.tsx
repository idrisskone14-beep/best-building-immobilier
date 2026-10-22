import { buildMetadata } from "@/lib/metadata";
import { img } from "@/lib/images";
import { EntrepriseShell } from "@/components/EntrepriseShell";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";

export const metadata = buildMetadata({
  title: "Notre vision",
  description:
    "Une vision exigeante de l’immobilier : devenir une référence dans l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine.",
  path: "/notre-entreprise/vision",
});

export default function VisionPage() {
  return (
    <EntrepriseShell path="/notre-entreprise/vision" label="Notre vision" title="Une vision exigeante de l’immobilier.">
      <section className="py-12 lg:py-14">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">
              <span className="tabular-nums">III</span>
              <span>Notre ambition</span>
            </p>
            <blockquote className="display display-lg mt-6 !font-normal">
              <p>
                Devenir une <em>référence</em> dans l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine.
              </p>
            </blockquote>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft">
              Cette vision exprime notre ambition de devenir un acteur incontournable du haut de gamme, reconnu pour la qualité de ses
              réalisations, son professionnalisme et sa capacité à concevoir des espaces de vie et d’investissement d’exception.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <Photo
              src={img.vision}
              alt="Villa contemporaine avec piscine et terrasse, entourée de palmiers"
              sizes="(min-width: 1024px) 40vw, 100vw"
              aspect="aspect-[4/3]"
              parallax={false}
            />
          </Reveal>
        </div>
      </section>
    </EntrepriseShell>
  );
}
