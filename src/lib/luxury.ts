import { img } from "./images";
import { programme } from "./site";

export const LUXURY_MAP_URL = "https://maps.app.goo.gl/SMR5NzcikZkBJANy9";

export const luxuryModels = [
  {
    ...programme.models[0],
    preset: "chrysantheme",
    lead: "L’espace et le raffinement.",
    text: "Villa de 7 pièces sur un terrain de 337 à 411 m². La villa Chrysanthème offre également un séjour privé à l’étage et une conciergerie autonome ; une piscine peut y être envisagée en option.",
    features: [
      "4 chambres et 4 salles d’eau",
      "Grand séjour et salle à manger",
      "Séjour privé à l’étage",
      "Conciergerie autonome avec salle d’eau",
      "Buanderie, terrasses et jardin",
      "Garage pour 2 véhicules",
      "Possibilité d’aménager une piscine",
    ],
    main: { src: img.chrysantheme2, alt: "Rendu 3D de la villa Chrysanthème avec auvent et garage pour deux véhicules" },
  },
  {
    ...programme.models[1],
    preset: "orchidee",
    lead: "L’élégance fonctionnelle.",
    text: "Villa de 5 pièces sur un terrain de 254 à 358 m², alliant fonctionnalité et élégance, avec terrasses avant et arrière et jardin privatif.",
    features: [
      "4 chambres et 4 salles d’eau",
      "Grand séjour et salle à manger",
      "Cuisine et buanderie",
      "Terrasses avant et arrière",
      "Jardin privatif",
      "Garage pour 2 véhicules",
    ],
    main: { src: img.orchidee1, alt: "Rendu 3D de la villa Orchidée : façade principale et garage" },
  },
];

export const luxuryMaterials = [
  "Structure en agglos et béton de qualité industrielle",
  "Revêtements de sols et de murs haut de gamme",
  "Menuiseries en aluminium inoxydable",
  "Toiture en dalle étanche",
];

export const luxuryComfort = ["Climatisation centrale", "Domotique de base", "Équipements de sécurité", "Portes et sanitaires intelligents"];

export const luxuryExpertise: [string, string][] = [
  ["Conception architecturale", "Cabinet DOGBA & ASSOCIÉS"],
  ["Aménagement urbain", "Cabinet EUE"],
  ["Études techniques et contrôle", "BAG Ingénierie"],
  ["Entreprises de construction", "Sélectionnées à l’issue d’un appel d’offres, selon leur expérience, la qualité d’exécution et le soin des finitions"],
];
