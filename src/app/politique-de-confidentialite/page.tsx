import { buildMetadata } from "@/lib/metadata";
import { company, LEGAL_PAGES_VALIDATED } from "@/lib/site";
import { LegalPage, ToFill } from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site de BEST BUILDING IMMOBILIER (2BI SARL) : données collectées via le formulaire de contact.",
  path: "/politique-de-confidentialite",
  noindex: !LEGAL_PAGES_VALIDATED,
});

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      crumbs={[{ href: "/", label: "Accueil" }, { href: "/politique-de-confidentialite", label: "Confidentialité" }]}
    >
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          {company.name} — {company.acronym}, {company.address.street}, {company.address.city}. Contact :{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>Les seules données collectées sont celles que vous saisissez dans le formulaire de contact :</p>
        <ul>
          <li>nom et prénoms, numéro de téléphone, adresse email ;</li>
          <li>objet de la demande, programme ou service concerné ;</li>
          <li>contenu de votre message.</li>
        </ul>
      </section>

      <section>
        <h2>Finalité et base du traitement</h2>
        <p>
          Ces données sont utilisées uniquement pour répondre à votre demande (présentation d’un programme, information, accompagnement). Le traitement
          repose sur votre consentement, exprimé en cochant la case du formulaire.
        </p>
      </section>

      <section>
        <h2>Destinataires</h2>
        <p>
          Les données sont destinées aux collaborateurs de {company.name} en charge des demandes. Elles transitent par le prestataire technique
          chargé de l’envoi des messages électroniques <ToFill>nom du prestataire à confirmer selon la configuration retenue</ToFill>.
        </p>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p>
          <ToFill>Durée de conservation à définir par la société</ToFill>
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l’accès, la rectification ou la suppression de vos données, ou vous opposer à leur traitement, en écrivant à{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>. <ToFill>Référence à la loi applicable et à l’autorité de protection des données à confirmer par un conseil juridique</ToFill>
        </p>
      </section>

      <section>
        <h2>Cookies et services tiers</h2>
        <p>
          Le site n’utilise ni cookie publicitaire ni outil de mesure d’audience. La carte du programme (OpenStreetMap) n’est chargée que si vous
          cliquez sur « Afficher la carte ». Si une vérification anti-spam (Cloudflare Turnstile) est activée sur le formulaire, elle peut déposer un
          élément technique nécessaire à son fonctionnement.
        </p>
      </section>
    </LegalPage>
  );
}
