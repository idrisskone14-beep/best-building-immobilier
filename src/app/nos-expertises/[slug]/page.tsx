import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { expertises } from "@/lib/content";
import { expertisesNav } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/SubNav";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "@/components/ButtonLink";
import { PageCta } from "@/components/PageCta";

export function generateStaticParams() {
  return expertises.map((e) => ({ slug: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = expertises.find((x) => x.id === slug);
  if (!e) return {};
  return buildMetadata({ title: e.title, description: `${e.headline} ${e.short}`, path: `/nos-expertises/${e.id}` });
}

export default async function ExpertisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = expertises.findIndex((x) => x.id === slug);
  if (index === -1) notFound();
  const e = expertises[index];
  const path = `/nos-expertises/${e.id}`;

  return (
    <>
      <PageHero
        compact
        eyebrow={`Nos expertises · ${String(index + 1).padStart(2, "0")}`}
        title={e.title}
        intro={e.headline}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/nos-expertises", label: "Nos expertises" },
          { href: path, label: e.title },
        ]}
      />
      <SubNav label="Nos expertises" items={expertisesNav} />
      <section className="py-12 lg:py-14">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <Photo src={e.image} alt={e.alt} sizes="(min-width: 1024px) 58vw, 100vw" aspect="aspect-[4/3] lg:aspect-[16/10]" position={e.position} parallax={false} />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <p className="display text-7xl italic leading-none text-red">{String(index + 1).padStart(2, "0")}</p>
            <p className="display display-sm mt-4 !font-normal italic text-navy">{e.headline}</p>
            <p className="mt-6 text-lg text-ink-soft">{e.short}</p>
            <p className="mt-8">
              <TextLink href={`/contact?objet=conseiller&service=${e.ctaService}`}>Demander un accompagnement</TextLink>
            </p>
          </Reveal>
        </div>
      </section>
      <PageCta text="Un accompagnement personnalisé pour votre projet." primary={{ href: `/contact?objet=conseiller&service=${e.ctaService}`, label: "Demander un accompagnement" }} />
    </>
  );
}
