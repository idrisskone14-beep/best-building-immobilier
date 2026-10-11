"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="on-dark relative flex min-h-[80svh] items-center bg-navy-deep pb-24 pt-40 text-white">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div className="wrap relative">
        <p className="eyebrow">Une erreur est survenue</p>
        <h1 className="display display-xl mt-6">Désolé, un incident technique.</h1>
        <p className="lead mt-8 max-w-xl">La page n’a pas pu s’afficher. Vous pouvez réessayer, ou revenir à l’accueil.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button type="button" onClick={reset} className="btn btn-red">
            Réessayer
          </button>
          <Link href="/" className="btn btn-line-light">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
