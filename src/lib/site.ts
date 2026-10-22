/**
 * Données institutionnelles (document « Amendements du site internet de 2BI SARL », qui prévaut
 * sur les documents antérieurs). Toute information absente des documents reste un emplacement « à compléter ».
 */

export const company = {
  name: "BEST BUILDING IMMOBILIER",
  acronym: "2BI SARL",
  legalForm: "Société à Responsabilité Limitée (SARL)",
  foundedLabel: "3 septembre 2020",
  foundedISO: "2020-09-03",
  capital: "5 000 000 FCFA",
  rccm: "CI-ABJ-03-2021-M-13931",
  address: {
    street: "Riviera Akouédo Palmeraie, rue Grand Alépé, derrière le supermarché AB Center",
    city: "Abidjan",
    country: "Côte d’Ivoire",
    full: "Riviera Akouédo Palmeraie, rue Grand Alépé, derrière le supermarché AB Center, Abidjan, Côte d’Ivoire",
    /** Localisation Google Maps du siège social. */
    mapUrl: "https://maps.app.goo.gl/8XBstc6dWmFepNxh8?g_st=ic",
  },
  phones: [
    { display: "07 77 80 44 04", tel: "+2250777804404" },
    { display: "07 69 29 69 01", tel: "+2250769296901" },
    { display: "25 21 00 29 43", tel: "+2252521002943" },
  ],
  /** E-mail du secrétariat (adresse de réception des demandes du site). */
  email: "info@best-building.com",
  managerEmail: "a_sysavane@best-building.com",
  manager: { name: "SY Savané Ahmadou", role: "Gérant & Associé" },
  vision: "Devenir une référence dans l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine.",
  slogan: "L’excellence immobilière, notre signature.",
  tagline: "Bâtir aujourd’hui, valoriser demain.",
} as const;

export const approval = {
  number: "22-00098/MCLU/DGLCV/CAPPI/ogla",
  decree: "Arrêté n° 22-00098/MCLU/DGLCV/CAPPI",
  date: "12 octobre 2022",
  authority: "Ministère de la Construction, du Logement et de l’Urbanisme",
  duration: "cinq ans renouvelables, à compter de la date de signature",
} as const;

export type NavLink = { href: string; label: string };
export type NavItem = NavLink & { children?: readonly NavLink[] };

/** Sous-rubriques de « Notre entreprise » : une page chacune. */
export const entrepriseNav: readonly NavLink[] = [
  { href: "/notre-entreprise", label: "Présentation" },
  { href: "/notre-entreprise/associes", label: "Les associés" },
  { href: "/notre-entreprise/vision", label: "Notre vision" },
  { href: "/notre-entreprise/mission", label: "Notre mission" },
  { href: "/notre-entreprise/valeurs", label: "Nos valeurs" },
  { href: "/notre-entreprise/engagements", label: "Nos engagements" },
];

export const expertisesNav: readonly NavLink[] = [
  { href: "/nos-expertises/promotion-immobiliere", label: "Promotion immobilière" },
  { href: "/nos-expertises/amenagement-foncier", label: "Aménagement foncier" },
  { href: "/nos-expertises/architecture-construction", label: "Architecture & Construction" },
  { href: "/nos-expertises/transactions-gestion", label: "Transactions et biens immobiliers" },
  { href: "/nos-expertises/ameublement-equipements", label: "Ameublement et équipements" },
];

export const projetsNav: readonly NavLink[] = [
  { href: "/nos-projets/programmes-immobiliers", label: "Programmes immobiliers" },
  { href: "/nos-projets/amenagements-fonciers", label: "Aménagements fonciers" },
];

export const realisationsNav: readonly NavLink[] = [
  { href: "/nos-realisations/villa-triplex", label: "Villa triplex" },
  { href: "/nos-realisations/villa-basse", label: "Villa basse" },
  { href: "/nos-realisations/transformation-architecturale", label: "Transformation architecturale" },
];

export const actualiteNav: readonly NavLink[] = [
  { href: "/notre-actualite/luxury-agrement", label: "BEST BUILDING LUXURY : agrément" },
  { href: "/notre-actualite/city-immatriculation", label: "BEST BUILDING CITY : foncier" },
  { href: "/notre-actualite/azaguie-partenariat", label: "Azaguié : partenariat" },
];

/** Pages du programme BEST BUILDING LUXURY. */
export const luxuryNav: readonly NavLink[] = [
  { href: "/nos-projets/best-building-luxury", label: "Le programme" },
  { href: "/nos-projets/best-building-luxury/modeles", label: "Les deux modèles" },
  { href: "/nos-projets/best-building-luxury/qualite", label: "Qualité et expertise" },
  { href: "/nos-projets/best-building-luxury/galerie", label: "Galerie" },
  { href: "/nos-projets/best-building-luxury/localisation", label: "Localisation" },
];

export const nav: readonly NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/notre-entreprise", label: "Notre entreprise", children: entrepriseNav },
  { href: "/nos-expertises", label: "Nos expertises", children: expertisesNav },
  { href: "/nos-projets", label: "Nos projets", children: projetsNav },
  { href: "/nos-realisations", label: "Nos réalisations", children: realisationsNav },
  { href: "/notre-actualite", label: "Notre actualité", children: actualiteNav },
  { href: "/contact", label: "Contact" },
];

export const legalNav = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
] as const;

/** Programme BEST BUILDING LUXURY (27 villas duplex haut standing, Quartier Yaou Résidentiel). */
export const programme = {
  slug: "best-building-luxury",
  name: "BEST BUILDING LUXURY",
  district: "Quartier Yaou Résidentiel",
  villas: 27,
  models: [
    {
      id: "chrysantheme",
      name: "Chrysanthème",
      rooms: 7,
      count: 14,
      surface: "274,88 m²",
      land: "337 à 411 m²",
    },
    {
      id: "orchidee",
      name: "Orchidée",
      rooms: 5,
      count: 13,
      surface: "197,16 m²",
      land: "254 à 358 m²",
    },
  ],
  /** Coordonnées indiquées dans le dossier du programme — à valider avant diffusion. */
  coordinates: { lat: 5.202344, lng: -3.6722627 },
} as const;

/** Variables d'environnement publiques (lues au build). */
export const env = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
  hq: (() => {
    const lat = Number(process.env.NEXT_PUBLIC_HQ_LAT);
    const lng = Number(process.env.NEXT_PUBLIC_HQ_LNG);
    return Number.isFinite(lat) && Number.isFinite(lng) && process.env.NEXT_PUBLIC_HQ_LAT && process.env.NEXT_PUBLIC_HQ_LNG
      ? { lat, lng }
      : null;
  })(),
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
};

/**
 * Tant que les mentions légales et la politique de confidentialité n'ont pas été validées
 * par la société (et idéalement un conseil juridique), elles restent marquées « provisoires »
 * et non indexées. Passer à `true` uniquement après validation.
 */
export const LEGAL_PAGES_VALIDATED = false;
