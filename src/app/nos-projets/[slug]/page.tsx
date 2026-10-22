import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import { buildMetadata, absoluteUrl } from "@/lib/metadata";
import { projects } from "@/lib/content";
import { company } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { StatusTag } from "@/components/StatusTag";
import { PageCta } from "@/components/PageCta";
import { JsonLd } from "@/components/JsonLd";

/** Pages génériques : tous les projets, sauf ceux qui disposent d'une page dédiée (champ `href`). */
const pageProjects = projects.filter((p) => !p.href);

export function generateStaticParams() {
  return pageProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = pageProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return buildMetadata({ title: project.name, description: project.summary, path: `/nos-projets/${project.slug}` });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = pageProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const path = `/nos-projets/${project.slug}`;
  const isFoncier = project.kind === "foncier";
  const categoryHref = isFoncier ? "/nos-projets/amenagements-fonciers" : "/nos-projets/programmes-immobiliers";
  const categoryLabel = isFoncier ? "Aménagements fonciers" : "Programmes immobiliers";
  const contactHref = `/contact?objet=prix&service=${project.service}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Nos projets", item: absoluteUrl("/nos-projets") },
            { "@type": "ListItem", position: 3, name: categoryLabel, item: absoluteUrl(categoryHref) },
            { "@type": "ListItem", position: 4, name: project.name, item: absoluteUrl(path) },
          ],
        }}
      />

      <PageHero
        compact
        eyebrow={categoryLabel}
        title={project.name}
        intro={project.hook}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/nos-projets", label: "Nos projets" },
          { href: categoryHref, label: categoryLabel },
          { href: path, label: project.name },
        ]}
      >
        <ButtonLink href={contactHref} variant="red">
          Demander des informations
        </ButtonLink>
        <ButtonLink href={`/contact?objet=rendez-vous&service=${project.service}`} variant="line-light">
          Prendre rendez-vous
        </ButtonLink>
      </PageHero>

      <section className="py-14 lg:py-16">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="space-y-5 text-lg text-ink-soft lg:col-span-7">
            {project.status && <StatusTag status={project.status} />}
            {project.intro.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <p className="display display-sm !font-normal italic text-navy">{project.signature}</p>
            <p className="text-base">{project.closing}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1 pt-2 text-ink">
              {company.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="hover:text-red hover:underline hover:underline-offset-4">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">Caractéristiques</p>
            <dl className="mt-4 border-t border-ink/25">
              {project.facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-ink/15 py-3 sm:grid-cols-[9rem_1fr] sm:gap-5">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden bg-stone">
              <Image src={project.mapImage} alt={project.mapAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" placeholder="blur" className="object-cover" />
            </div>
            <p className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-soft">
              <span>Localisation indicative : {project.location}.</span>
              <a href={project.mapUrl} target="_blank" rel="noopener noreferrer" className="link-arch !text-[0.7rem]">
                <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
                Google Maps
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {project.sections.length > 0 && (
        <section className="bg-white py-14 lg:py-16">
          <div className="wrap grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {project.sections.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.05}>
                <h2 className="display display-sm border-t border-navy pt-5">{s.title}</h2>
                {s.text && <p className="mt-3 text-ink-soft">{s.text}</p>}
                {s.items && (
                  <ul className="mt-3 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-ink-soft">
                        <Check size={16} strokeWidth={1.75} className="mt-1 shrink-0 text-red" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <PageCta text="Concrétisez votre projet immobilier." primary={{ href: contactHref, label: "Demander des informations" }} secondary={{ href: categoryHref, label: categoryLabel }} />
    </>
  );
}
