import Link from "next/link";
import { Logo } from "./Logo";
import { approval, company, legalNav, nav } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark relative bg-navy-deep text-white">
      <div className="wrap grid gap-10 pb-10 pt-12 lg:grid-cols-12 lg:pb-12">
        <div className="lg:col-span-5">
          <Logo variant="plate" className="w-52" />
          <p className="display display-sm mt-6 max-w-md !font-normal italic text-white/90">{company.tagline}</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
            Promoteur immobilier agréé n° {approval.number}, arrêté ministériel du {approval.date}. {company.acronym}, capital de {company.capital}, RCCM{" "}
            {company.rccm}.
          </p>
        </div>

        <nav aria-label="Pied de page" className="lg:col-span-3 lg:col-start-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Naviguer</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/90 transition-colors hover:text-white hover:underline hover:underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Nous joindre</p>
          <address className="mt-4 space-y-2 not-italic text-white/90">
            <p>{company.address.street}</p>
            <p>
              {company.address.city}, {company.address.country}
            </p>
            <ul className="space-y-1 pt-2">
              {company.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="hover:underline hover:underline-offset-4">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              <a href={`mailto:${company.email}`} className="break-all hover:underline hover:underline-offset-4">
                {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap flex flex-col gap-3 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between lg:pr-24">
          <p>
            © {year} {company.name} — {company.acronym}. Tous droits réservés.
          </p>
          <p className="max-w-xl md:text-right">
            Les visuels du programme BEST BUILDING LUXURY sont des rendus 3D d’illustration en phase esquisse, non contractuels.
          </p>
          <ul className="flex gap-6">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline hover:underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
