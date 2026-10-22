import { buildMetadata } from "@/lib/metadata";
import { fonciers } from "@/lib/content";
import { ProjectsCategory } from "@/components/ProjectsCategory";

export const metadata = buildMetadata({
  title: "Aménagements fonciers",
  description:
    "Lotissements Mondoukou Village, Quartier Yaou Résidentiel, Audoin Brakré Parcelle Famille Niaba et Yamoussoukro Kacou-Broukro : les aménagements fonciers de BEST BUILDING IMMOBILIER.",
  path: "/nos-projets/amenagements-fonciers",
});

export default function FonciersPage() {
  return (
    <ProjectsCategory
      path="/nos-projets/amenagements-fonciers"
      label="Aménagements fonciers"
      title="Des terrains préparés pour bâtir votre patrimoine."
      intro="Quatre lotissements au bord de l’océan, de la lagune et à Yamoussoukro."
      projects={fonciers}
    />
  );
}
