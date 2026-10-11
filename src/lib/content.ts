import type { StaticImageData } from "next/image";
import { img } from "./images";
import type { ProjectStatus } from "@/components/StatusTag";

export type Expertise = {
  id: string;
  title: string;
  short: string;
  headline: string;
  image: StaticImageData;
  alt: string;
  position?: string;
  ctaService: string;
};

/** Les cinq domaines d'activité (objet social et présentation de 2BI SARL). */
export const expertises: Expertise[] = [
  {
    id: "promotion-immobiliere",
    title: "Promotion immobilière",
    short: "Conception et développement de programmes résidentiels répondant aux attentes des acquéreurs et investisseurs.",
    headline: "L’immobilier pensé pour durer.",
    image: img.orchidee1,
    alt: "Rendu 3D d’une villa Orchidée du programme BEST BUILDING LUXURY",
    ctaService: "promotion",
  },
  {
    id: "amenagement-foncier",
    title: "Aménagement foncier",
    short: "Valorisation et préparation de terrains destinés à accueillir des projets immobiliers structurés.",
    headline: "Des terrains préparés pour des projets structurés.",
    image: img.detailAmenagement,
    alt: "Rendu 3D d’une voie résidentielle bordée de haies, extrait du programme BEST BUILDING LUXURY",
    position: "50% 70%",
    ctaService: "foncier",
  },
  {
    id: "architecture-construction",
    title: "Architecture et construction",
    short:
      "Conception architecturale et réalisation de bâtiments résidentiels, avec une attention particulière portée à la qualité et à la fonctionnalité.",
    headline: "Construire avec exigence.",
    image: img.chrysantheme3,
    alt: "Rendu 3D de la façade jardin d’une villa Chrysanthème",
    ctaService: "architecture",
  },
  {
    id: "transactions-gestion",
    title: "Transactions et gestion immobilières",
    short: "Accompagnement dans les opérations immobilières et la gestion des biens.",
    headline: "Un accompagnement professionnel pour vos opérations.",
    image: img.orchidee2,
    alt: "Rendu 3D d’une villa Orchidée en vue latérale",
    ctaService: "transactions",
  },
  {
    id: "materiaux-construction",
    title: "Matériaux de construction",
    short: "Solutions d’approvisionnement en matériaux destinés aux projets de construction.",
    headline: "Les matériaux au service des chantiers.",
    image: img.detailMateriaux,
    alt: "Détail en rendu 3D d’un claustra en briques et d’un mur enduit",
    position: "70% 50%",
    ctaService: "materiaux",
  },
];

export const engagements = [
  {
    title: "Qualité architecturale",
    text: "Des lignes contemporaines, des espaces pensés pour le confort et une attention constante à la fonctionnalité de chaque habitation.",
  },
  {
    title: "Accompagnement professionnel",
    text: "Une équipe structurée, appuyée par des partenaires techniques spécialisés, pour suivre chaque projet avec rigueur.",
  },
  {
    title: "Valorisation du patrimoine immobilier",
    text: "Des programmes situés et conçus pour conserver leur attrait dans le temps, au service de votre patrimoine.",
  },
] as const;

export type Realisation = {
  id: string;
  title: string;
  status: ProjectStatus;
  category: string;
  location?: string;
  description: string;
  image?: StaticImageData;
  imageAlt?: string;
  href?: string;
};

/** Uniquement des projets documentés dans la présentation de 2BI SARL et le dossier du programme. */
export const realisations: Realisation[] = [
  {
    id: "duplex-5p",
    title: "Villa duplex de 5 pièces",
    status: "Réalisation achevée",
    category: "Construction résidentielle",
    location: "Grand-Bassam",
    description: "Construction d’une villa duplex de cinq pièces, de standing moyen.",
  },
  {
    id: "duplex-6p",
    title: "Villa duplex de 6 pièces haut standing",
    status: "Réalisation achevée",
    category: "Conception et réalisation",
    location: "Grand-Bassam",
    description: "Conception et réalisation d’une villa duplex haut standing de six pièces.",
  },
  {
    id: "conception-architecturale",
    title: "Conception architecturale de six projets immobiliers",
    status: "Projet architectural",
    category: "Architecture",
    description: "Conception des plans d’architecture de six projets immobiliers.",
  },
  {
    id: "best-building-luxury",
    title: "BEST BUILDING LUXURY",
    status: "Programme en développement",
    category: "Programme résidentiel haut standing",
    location: "Grand-Bassam, Yaou Résidentiel",
    description: "27 villas duplex haut standing réparties en deux modèles, Chrysanthème et Orchidée.",
    image: img.chrysantheme1,
    imageAlt: "Rendu 3D d’une villa Chrysanthème du programme BEST BUILDING LUXURY",
    href: "/nos-programmes/best-building-luxury",
  },
];
