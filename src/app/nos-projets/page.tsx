import { buildMetadata } from "@/lib/metadata";
import { img, RENDER_CREDIT } from "@/lib/images";
import { fonciers, programmes } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "Nos projets",
  description:
    "Programmes immobiliers (BEST BUILDING LUXURY, BEST BUILDING CITY) et aménagements fonciers (Mondoukou Village, Quartier Yaou Résidentiel, Audoin Brakré, Yamoussoukro Kacou-Broukro) de BEST BUILDING IMMOBILIER.",
  path: "/nos-projets",
});

export default function ProjetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos projets"
        title="Des projets conçus pour durer."
        intro="Programmes immobiliers et aménagements fonciers : des projets présentés avec leurs caractéristiques, leur localisation et leurs conditions."
        image={img.chrysantheme1}
        imageAlt="Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY"
        position="40% 50%"
        credit={RENDER_CREDIT}
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/nos-projets", label: "Nos projets" }]}
      />

      <section id="programmes" className="scroll-mt-24 py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">
              <span className="tabular-nums">01</span>
              <span>Programmes immobiliers</span>
            </p>
            <h2 className="display display-md mt-6 max-w-3xl">Des résidences pensées pour y vivre et investir.</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {programmes.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} sizes="(min-width: 768px) 45vw, 100vw" aspect="aspect-[16/11]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="amenagements-fonciers" className="scroll-mt-24 bg-white py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">
              <span className="tabular-nums">02</span>
              <span>Aménagements fonciers</span>
            </p>
            <h2 className="display display-md mt-6 max-w-3xl">Des terrains préparés pour bâtir votre patrimoine.</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {fonciers.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={p} sizes="(min-width: 768px) 45vw, 100vw" aspect="aspect-[16/9]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Recevez les informations détaillées d’un projet."
        text="Disponibilités, prix et modalités de paiement vous sont communiqués par un conseiller."
        primary={{ href: "/contact?objet=prix", label: "Demander des informations" }}
        secondary={{ href: "/contact?objet=rendez-vous", label: "Prendre rendez-vous" }}
        image={img.orchidee3}
      />
    </>
  );
}
