import type { MetadataRoute } from "next";
import { actualiteNav, entrepriseNav, env, expertisesNav, luxuryNav, projetsNav, realisationsNav } from "@/lib/site";
import { projects } from "@/lib/content";

type Freq = "weekly" | "monthly" | "yearly";

const routes: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  ...entrepriseNav.map((n) => ({ path: n.href, priority: 0.8, changeFrequency: "monthly" as const })),
  { path: "/nos-expertises", priority: 0.8, changeFrequency: "monthly" },
  ...expertisesNav.map((n) => ({ path: n.href, priority: 0.7, changeFrequency: "monthly" as const })),
  { path: "/nos-projets", priority: 0.9, changeFrequency: "weekly" },
  ...projetsNav.map((n) => ({ path: n.href, priority: 0.9, changeFrequency: "weekly" as const })),
  ...luxuryNav.map((n) => ({ path: n.href, priority: 0.9, changeFrequency: "weekly" as const })),
  ...projects.filter((p) => !p.href).map((p) => ({ path: `/nos-projets/${p.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
  { path: "/nos-realisations", priority: 0.7, changeFrequency: "monthly" },
  ...realisationsNav.map((n) => ({ path: n.href, priority: 0.6, changeFrequency: "monthly" as const })),
  { path: "/notre-actualite", priority: 0.7, changeFrequency: "weekly" },
  ...actualiteNav.map((n) => ({ path: n.href, priority: 0.6, changeFrequency: "weekly" as const })),
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${env.siteUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
