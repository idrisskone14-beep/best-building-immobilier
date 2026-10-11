import { TriangleAlert } from "lucide-react";
import { PageHero } from "./PageHero";
import { LEGAL_PAGES_VALIDATED } from "@/lib/site";

/** Gabarit des pages légales. Tant que le contenu n'est pas validé, un bandeau le signale clairement. */
export function LegalPage({
  title,
  crumbs,
  children,
}: {
  title: string;
  crumbs: { href: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Informations légales" title={title} crumbs={crumbs} />
      <section className="py-20 lg:py-28">
        <div className="wrap">
          {!LEGAL_PAGES_VALIDATED && (
            <aside role="note" className="mb-14 flex max-w-3xl gap-4 border-l-2 border-red bg-white p-6">
              <TriangleAlert className="mt-1 shrink-0 text-red" size={20} aria-hidden="true" />
              <p className="text-sm text-ink-soft">
                <strong className="text-ink">Version provisoire — à valider avant mise en ligne.</strong> Ce texte regroupe les informations
                disponibles ; les mentions entre crochets restent à compléter par la société. Il doit être relu et validé (idéalement par un
                conseil juridique) avant diffusion publique.
              </p>
            </aside>
          )}
          <div className="max-w-3xl space-y-12 text-lg text-ink-soft [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:text-ink [&_h2]:mb-4 [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

/** Marque visuelle d'une information à compléter. */
export function ToFill({ children }: { children: React.ReactNode }) {
  return <mark className="bg-red/10 px-1 text-red">[{children}]</mark>;
}
