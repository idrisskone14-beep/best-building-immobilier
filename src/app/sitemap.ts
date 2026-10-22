import type { MetadataRoute } from "next";
import { env } from "@/lib/site";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/notre-entreprise", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nos-expertises", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nos-projets", priority: 0.9, changeFrequency: "weekly" },
  { path: "/nos-projets/best-building-luxury", priority: 0.9, changeFrequency: "weekly" },
  { path: "/nos-projets/best-building-city", priority: 0.8, changeFrequency: "weekly" },
  { path: "/nos-projets/mondoukou-village", priority: 0.7, changeFrequency: "monthly" },
  { path: "/nos-projets/quartier-yaou-residentiel", priority: 0.7, changeFrequency: "monthly" },
  { path: "/nos-projets/audoin-brakre-parcelle-famille-niaba", priority: 0.7, changeFrequency: "monthly" },
  { path: "/nos-projets/yamoussoukro-kacou-broukro", priority: 0.7, changeFrequency: "monthly" },
  { path: "/nos-realisations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/notre-actualite", priority: 0.7, changeFrequency: "weekly" },
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
