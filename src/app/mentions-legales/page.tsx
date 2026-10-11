import { buildMetadata } from "@/lib/metadata";
import { approval, company, LEGAL_PAGES_VALIDATED } from "@/lib/site";
import { LegalPage, ToFill } from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site de BEST BUILDING IMMOBILIER (2BI SARL).",
  path: "/mentions-legales",
  noindex: !LEGAL_PAGES_VALIDATED,
});

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" crumbs={[{ href: "/", label: "Accueil" }, { href: "/mentions-legales", label: "Mentions légales" }]}>
      <section>
        <h2>Éditeur du site</h2>
        <p>
          {company.name} — {company.acronym}, {company.legalForm}, au capital de {company.capital}.
          <br />
          RCCM : {company.rccm}.
          <br />
          Siège social : {company.address.street}, {company.address.city}, {company.address.country}.
          <br />
          Téléphone : {company.phones.map((p) => p.display).join(" / ")}.
          <br />
          Email : <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
        <p>
          Directeur de la publication : {company.manager.name}, {company.manager.role} <ToFill>à confirmer</ToFill>.
        </p>
      </section>

      <section>
        <h2>Agrément</h2>
        <p>
          Société agréée pour l’exercice de la profession de promoteur immobilier par {approval.decree} du {approval.date} (
          {approval.authority}), pour une durée de {approval.duration}.
        </p>
        <p>
          <ToFill>Statut actuel de l’agrément et, le cas échéant, références du renouvellement à compléter par la société</ToFill>
        </p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          <ToFill>Nom, adresse et contact de l’hébergeur à compléter selon le déploiement retenu</ToFill>
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Le logo, les textes, les rendus 3D et l’ensemble des éléments du site sont la propriété de {company.name} ou utilisés avec l’autorisation de
          leurs titulaires. Toute reproduction ou réutilisation sans accord écrit préalable est interdite.
        </p>
      </section>

      <section>
        <h2>Nature des informations</h2>
        <p>
          Les visuels du programme BEST BUILDING LUXURY sont des rendus 3D d’illustration, en phase esquisse, non contractuels. Les surfaces, les
          caractéristiques, les prix, les disponibilités et les délais sont communiqués sur demande et peuvent évoluer ; seuls les documents
          contractuels engagent la société.
        </p>
      </section>

      <section>
        <h2>Conception du site</h2>
        <p>
          <ToFill>Mention du concepteur du site, si souhaitée</ToFill>
        </p>
      </section>
    </LegalPage>
  );
}
