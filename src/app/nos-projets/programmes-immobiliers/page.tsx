import { buildMetadata } from "@/lib/metadata";
import { programmes } from "@/lib/content";
import { ProjectsCategory } from "@/components/ProjectsCategory";

export const metadata = buildMetadata({
  title: "Programmes immobiliers",
  description: "BEST BUILDING LUXURY (27 villas duplex haut standing) et BEST BUILDING CITY (202 logements) : les programmes immobiliers de BEST BUILDING IMMOBILIER.",
  path: "/nos-projets/programmes-immobiliers",
});

export default function ProgrammesPage() {
  return (
    <ProjectsCategory
      path="/nos-projets/programmes-immobiliers"
      label="Programmes immobiliers"
      title="Des résidences pensées pour y vivre et investir."
      intro="Deux programmes à Quartier Yaou Résidentiel, entre Abidjan et Assinie."
      projects={programmes}
    />
  );
}
