import type { MetadataRoute } from "next";
import { env } from "@/lib/site";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/notre-entreprise", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nos-expertises", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nos-programmes", priority: 0.9, changeFrequency: "weekly" },
  { path: "/nos-programmes/best-building-luxury", priority: 0.9, changeFrequency: "weekly" },
  { path: "/nos-realisations", priority: 0.7, changeFrequency: "monthly" },
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
