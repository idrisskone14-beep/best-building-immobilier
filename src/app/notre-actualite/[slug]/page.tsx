import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { actualites } from "@/lib/content";
import { actualiteNav, company } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/SubNav";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "@/components/ButtonLink";
import { PageCta } from "@/components/PageCta";

export function generateStaticParams() {
  return actualites.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = actualites.find((x) => x.id === slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: `${a.subtitle} ${a.paragraphs[0]}`.slice(0, 300), path: `/notre-actualite/${a.id}` });
}

export default async function ActualiteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = actualites.find((x) => x.id === slug);
  if (!a) notFound();
  const path = `/notre-actualite/${a.id}`;

  return (
    <>
      <PageHero
        compact
        eyebrow={`${a.category} · ${a.date}`}
        title={a.title}
        intro={a.subtitle}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/notre-actualite", label: "Notre actualité" },
          { href: path, label: a.title },
        ]}
      />
      <SubNav label="Notre actualité" items={actualiteNav} />
      <section className="py-12 lg:py-14">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <div className="space-y-5 text-lg text-ink-soft">
              {a.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="display display-sm mt-8 !font-normal italic text-navy">{a.signature}</p>
            {a.href && (
              <p className="mt-8">
                <TextLink href={a.href}>{a.hrefLabel ?? "En savoir plus"}</TextLink>
              </p>
            )}
            <p className="mt-10 border-t border-ink/20 pt-6 text-sm text-ink-soft">
              {company.name}, bâtir aujourd’hui les opportunités immobilières de demain.
            </p>
          </Reveal>
        </div>
      </section>
      <PageCta />
    </>
  );
}
