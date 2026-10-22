import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import { buildMetadata, absoluteUrl } from "@/lib/metadata";
import { projects } from "@/lib/content";
import { company } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { StatusTag } from "@/components/StatusTag";
import { CtaBand } from "@/components/CtaBand";
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
  const typeLabel = project.kind === "foncier" ? "Aménagement foncier" : "Programme immobilier";
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
            { "@type": "ListItem", position: 3, name: project.name, item: absoluteUrl(path) },
          ],
        }}
      />

      <PageHero
        eyebrow={typeLabel}
        title={project.name}
        intro={project.hook}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/nos-projets", label: "Nos projets" },
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

      {/* Présentation et repères */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="space-y-5 text-lg text-ink-soft lg:col-span-7">
            {project.status && <StatusTag status={project.status} />}
            {project.intro.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">Caractéristiques</p>
            <dl className="mt-5 border-t border-ink/25">
              {project.facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-5">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Détails */}
      <section className="bg-white py-24 lg:py-32">
        <div className="wrap grid gap-x-12 gap-y-14 md:grid-cols-2">
          {project.sections.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.06}>
              <h2 className="display display-sm border-t border-navy pt-6">{s.title}</h2>
              {s.text && <p className="mt-4 text-ink-soft">{s.text}</p>}
              {s.items && (
                <ul className="mt-4 space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-soft">
                      <Check size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-red" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Localisation */}
      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Localisation</p>
            <h2 className="display display-md mt-6">{project.location}.</h2>
            <p className="mt-6 text-ink-soft">Localisation indicative sur vue satellite.</p>
            <p className="mt-8">
              <a href={project.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <MapPin size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>Ouvrir dans Google Maps</span>
              </a>
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.1}>
            <div className="relative aspect-[16/9] overflow-hidden bg-stone">
              <Image src={project.mapImage} alt={project.mapAlt} fill sizes="(min-width: 1024px) 64vw, 100vw" placeholder="blur" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature et contact */}
      <section className="border-t border-ink/10 bg-white py-20 lg:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="display display-sm !font-normal italic text-navy">{project.signature}</p>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">{project.closing}</p>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">Contactez-nous</p>
            <ul className="mt-5 space-y-2">
              {company.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="text-lg hover:text-red hover:underline hover:underline-offset-4">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href={contactHref} className="link-arch">
                Écrire à l’équipe commerciale
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow={project.name}
        title="Concrétisez votre projet immobilier."
        primary={{ href: contactHref, label: "Demander des informations" }}
        secondary={{ href: "/nos-projets", label: "Voir tous nos projets" }}
      />
    </>
  );
}
