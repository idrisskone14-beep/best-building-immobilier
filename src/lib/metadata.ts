import type { Metadata } from "next";
import { company, env } from "./site";

type Opts = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /** Chemin d'une image Open Graph spécifique (dans /public). */
  image?: string;
};

export function buildMetadata({ title, description, path, noindex, image }: Opts): Metadata {
  const ogImage = image ?? "/og.jpg";
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "fr_CI",
      siteName: company.name,
      title,
      description,
      url: path,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${company.name} — ${title}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export const absoluteUrl = (path: string) => `${env.siteUrl}${path === "/" ? "" : path}`;
