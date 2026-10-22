import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { realisations } from "@/lib/content";
import { realisationsNav } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/SubNav";
import { Reveal } from "@/components/Reveal";
import { StatusTag } from "@/components/StatusTag";
import { Gallery } from "@/components/Gallery";
import { PageCta } from "@/components/PageCta";

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = realisations.find((x) => x.id === slug);
  if (!r) return {};
  return buildMetadata({ title: r.title, description: `${r.headline} ${r.specs}.`, path: `/nos-realisations/${r.id}` });
}

export default async function RealisationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = realisations.find((x) => x.id === slug);
  if (!r) notFound();
  const path = `/nos-realisations/${r.id}`;

  return (
    <>
      <PageHero
        compact
        eyebrow={`Nos réalisations · ${r.number}`}
        title={r.title}
        intro={r.headline}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/nos-realisations", label: "Nos réalisations" },
          { href: path, label: r.title },
        ]}
      />
      <SubNav label="Nos réalisations" items={realisationsNav} />
      <section className="py-12 lg:py-14">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <StatusTag status={r.status} />
            <p className="mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              {r.specs}
              {r.location ? ` · ${r.location}` : ""}
            </p>
            <div className="mt-6 space-y-4 text-lg text-ink-soft">
              {r.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-ink">{r.cta}</p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.08}>
            <Gallery items={r.images} columns={2} />
          </Reveal>
        </div>
      </section>
      <PageCta text="Parlons de votre projet." primary={{ href: r.ctaHref, label: "Parlons de votre projet" }} />
    </>
  );
}
