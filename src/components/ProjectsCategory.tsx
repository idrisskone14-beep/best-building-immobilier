import type { Project } from "@/lib/content";
import { projetsNav } from "@/lib/site";
import { PageHero } from "./PageHero";
import { SubNav } from "./SubNav";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { PageCta } from "./PageCta";

/** Page d'une catégorie de projets (programmes immobiliers ou aménagements fonciers) : une page, une rangée de cartes. */
export function ProjectsCategory({
  path,
  label,
  title,
  intro,
  projects,
}: {
  path: string;
  label: string;
  title: string;
  intro: string;
  projects: Project[];
}) {
  return (
    <>
      <PageHero
        compact
        eyebrow="Nos projets"
        title={title}
        intro={intro}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/nos-projets", label: "Nos projets" },
          { href: path, label },
        ]}
      />
      <SubNav label="Nos projets" items={projetsNav} />
      <section className="py-12 lg:py-14">
        <div className="wrap">
          <ul className={`grid gap-x-8 gap-y-14 md:grid-cols-2 ${projects.length > 2 ? "lg:grid-cols-4" : ""}`}>
            {projects.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 4) * 0.06}>
                <ProjectCard
                  project={p}
                  sizes={projects.length > 2 ? "(min-width: 1024px) 24vw, (min-width: 768px) 45vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
                  aspect={projects.length > 2 ? "aspect-[4/3]" : "aspect-[16/10]"}
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <PageCta text="Recevez les informations détaillées d’un projet." primary={{ href: "/contact?objet=prix", label: "Demander des informations" }} />
    </>
  );
}
