import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BEST BUILDING IMMOBILIER",
    short_name: "2BI",
    description: "Promotion immobilière haut standing en Côte d’Ivoire.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ee",
    theme_color: "#0f3450",
    lang: "fr",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
