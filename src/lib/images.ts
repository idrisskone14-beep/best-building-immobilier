import chrysantheme1 from "@/assets/images/chrysantheme-1.jpg";
import chrysantheme2 from "@/assets/images/chrysantheme-2.jpg";
import chrysantheme3 from "@/assets/images/chrysantheme-3.jpg";
import orchidee1 from "@/assets/images/orchidee-1.jpg";
import orchidee2 from "@/assets/images/orchidee-2.jpg";
import orchidee3 from "@/assets/images/orchidee-3.jpg";
import detailAmenagement from "@/assets/images/detail-amenagement.jpg";
import detailFacade from "@/assets/images/detail-facade.jpg";
import detailMateriaux from "@/assets/images/detail-materiaux.jpg";
import entrepriseHero from "@/assets/images/entreprise-hero.jpg";
import associeSySavane from "@/assets/images/associe-sy-savane.jpg";
import associeLoua from "@/assets/images/associe-loua.jpg";
import vision from "@/assets/images/vision.jpg";
import mission1 from "@/assets/images/mission-1.jpg";
import mission2 from "@/assets/images/mission-2.jpg";
import mission3 from "@/assets/images/mission-3.jpg";
import mission4 from "@/assets/images/mission-4.jpg";
import mission5 from "@/assets/images/mission-5.jpg";
import carteMondoukou from "@/assets/images/carte-mondoukou.jpg";
import carteYaou from "@/assets/images/carte-yaou.jpg";
import carteBrakre from "@/assets/images/carte-brakre.jpg";
import carteYamoussoukro from "@/assets/images/carte-yamoussoukro.jpg";
import carteLuxury from "@/assets/images/carte-luxury.jpg";
import carteCity from "@/assets/images/carte-city.jpg";
import chrysantheme4 from "@/assets/images/chrysantheme-4.jpg";
import orchidee4 from "@/assets/images/orchidee-4.jpg";
import triplex1 from "@/assets/images/triplex-1.jpg";
import triplex2 from "@/assets/images/triplex-2.jpg";
import triplex3 from "@/assets/images/triplex-3.jpg";
import triplex4 from "@/assets/images/triplex-4.jpg";
import basse1 from "@/assets/images/basse-1.jpg";
import basse2 from "@/assets/images/basse-2.jpg";
import transformation1 from "@/assets/images/transformation-1.jpg";

/**
 * Rendus 3D officiels du programme BEST BUILDING LUXURY (phase esquisse),
 * extraits du PowerPoint « Corporate Business VRD ». Les « detail-* » sont de simples recadrages.
 * Les visuels « mission-* », « vision », « entreprise-hero », « carte-* » (captures Google Maps annotées),
 * « triplex-* », « basse-* », « transformation-* » et les portraits des associés, ainsi que « chrysantheme-4 » et
 * « orchidee-4 », proviennent du document « Amendements du site internet de 2BI SARL ».
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
  entrepriseHero,
  associeSySavane,
  associeLoua,
  vision,
  mission1,
  mission2,
  mission3,
  mission4,
  mission5,
  carteMondoukou,
  carteYaou,
  carteBrakre,
  carteYamoussoukro,
  carteLuxury,
  carteCity,
  chrysantheme4,
  orchidee4,
  triplex1,
  triplex2,
  triplex3,
  triplex4,
  basse1,
  basse2,
  transformation1,
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
  { src: img.chrysantheme4, alt: "Villa Chrysanthème, séjour ouvert sur la terrasse et la piscine", caption: "Chrysanthème — séjour et piscine" },
];

export const orchideeGallery: GalleryItem[] = [
  { src: img.orchidee1, alt: "Villa Orchidée, façade principale et garage", caption: "Orchidée — façade principale" },
  { src: img.orchidee2, alt: "Villa Orchidée, vue latérale avec volumes en retrait", caption: "Orchidée — vue latérale" },
  { src: img.orchidee3, alt: "Villa Orchidée, façade arrière et claustra en briques", caption: "Orchidée — façade jardin" },
  { src: img.orchidee4, alt: "Villa Orchidée, façade avec terrasse et jardin", caption: "Orchidée — terrasse et jardin" },
];

export const fullGallery: GalleryItem[] = [
  chrysanthemeGallery[0],
  orchideeGallery[0],
  chrysanthemeGallery[1],
  orchideeGallery[1],
  chrysanthemeGallery[2],
  orchideeGallery[2],
  chrysanthemeGallery[3],
  orchideeGallery[3],
];
