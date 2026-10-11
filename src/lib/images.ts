import chrysantheme1 from "@/assets/images/chrysantheme-1.jpg";
import chrysantheme2 from "@/assets/images/chrysantheme-2.jpg";
import chrysantheme3 from "@/assets/images/chrysantheme-3.jpg";
import orchidee1 from "@/assets/images/orchidee-1.jpg";
import orchidee2 from "@/assets/images/orchidee-2.jpg";
import orchidee3 from "@/assets/images/orchidee-3.jpg";
import detailAmenagement from "@/assets/images/detail-amenagement.jpg";
import detailFacade from "@/assets/images/detail-facade.jpg";
import detailMateriaux from "@/assets/images/detail-materiaux.jpg";

/**
 * Rendus 3D officiels du programme BEST BUILDING LUXURY (phase esquisse),
 * extraits du PowerPoint « Corporate Business VRD ». Les « detail-* » sont de simples recadrages.
 * Aucun de ces visuels n'est une photographie de réalisation achevée.
 */
export const img = {
  chrysantheme1,
  chrysantheme2,
  chrysantheme3,
  orchidee1,
  orchidee2,
  orchidee3,
  detailAmenagement,
  detailFacade,
  detailMateriaux,
};

export const RENDER_CREDIT = "Rendu 3D officiel — BEST BUILDING LUXURY, phase esquisse";

export type GalleryItem = {
  src: (typeof img)[keyof typeof img];
  alt: string;
  caption: string;
};

export const chrysanthemeGallery: GalleryItem[] = [
  { src: img.chrysantheme1, alt: "Villa Chrysanthème, façade principale et haie végétale côté rue", caption: "Chrysanthème — façade sur rue" },
  { src: img.chrysantheme2, alt: "Villa Chrysanthème, perspective avec auvent et garage pour deux véhicules", caption: "Chrysanthème — perspective, garage double" },
  { src: img.chrysantheme3, alt: "Villa Chrysanthème, façade arrière sur jardin et piscine", caption: "Chrysanthème — façade jardin" },
];

export const orchideeGallery: GalleryItem[] = [
  { src: img.orchidee1, alt: "Villa Orchidée, façade principale et garage", caption: "Orchidée — façade principale" },
  { src: img.orchidee2, alt: "Villa Orchidée, vue latérale avec volumes en retrait", caption: "Orchidée — vue latérale" },
  { src: img.orchidee3, alt: "Villa Orchidée, façade arrière et claustra en briques", caption: "Orchidée — façade jardin" },
];

export const fullGallery: GalleryItem[] = [
  chrysanthemeGallery[0],
  orchideeGallery[0],
  chrysanthemeGallery[1],
  orchideeGallery[1],
  chrysanthemeGallery[2],
  orchideeGallery[2],
];
