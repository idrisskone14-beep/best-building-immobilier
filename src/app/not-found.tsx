import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = { title: "Page introuvable", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="on-dark relative flex min-h-[80svh] items-center bg-navy-deep pb-24 pt-40 text-white">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div className="wrap relative">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="display display-xl mt-6">Cette page n’existe pas.</h1>
        <p className="lead mt-8 max-w-xl">Le lien est peut-être incorrect ou la page a été déplacée. Reprenez la visite depuis l’accueil.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/" variant="red">
            Retour à l’accueil
          </ButtonLink>
          <ButtonLink href="/contact" variant="line-light">
            Nous contacter
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
