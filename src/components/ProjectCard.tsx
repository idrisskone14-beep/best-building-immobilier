import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { Photo } from "./Photo";
import { StatusTag } from "./StatusTag";

/** Carte d'un projet (programme ou lotissement) : visuel, statut, localisation, résumé. */
export function ProjectCard({ project, sizes, aspect = "aspect-[4/3]" }: { project: Project; sizes: string; aspect?: string }) {
  const href = project.href ?? `/nos-projets/${project.slug}`;
  const image = project.cover ?? project.mapImage;
  const alt = project.cover ? (project.coverAlt ?? project.name) : project.mapAlt;
  return (
    <article className="group relative">
      <Photo src={image} alt={alt} sizes={sizes} aspect={aspect} position="50% 50%" parallax={false} />
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.status && <StatusTag status={project.status} />}
        <span className="text-xs uppercase tracking-[0.16em] text-ink-soft">{project.location}</span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className="display display-sm">
          <Link href={href} className="after:absolute after:inset-0">
            {project.name}
          </Link>
        </h3>
        <ArrowUpRight
          size={22}
          strokeWidth={1.5}
          aria-hidden="true"
          className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>
      <p className="mt-3 max-w-xl text-ink-soft">{project.summary}</p>
    </article>
  );
}
