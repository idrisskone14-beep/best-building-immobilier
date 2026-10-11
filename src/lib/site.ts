/**
 * Données institutionnelles vérifiées (Présentation de 2BI SARL, agrément, brief client).
 * Toute information absente des documents doit rester un emplacement « à compléter ».
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
    street: "Riviera Palmeraie, route de Faya, après Top Bâtiment",
    city: "Abidjan",
    country: "Côte d’Ivoire",
    full: "Riviera Palmeraie, route de Faya, après Top Bâtiment, Abidjan, Côte d’Ivoire",
  },
  phones: [
    { display: "25 21 00 29 43", tel: "+2252521002943" },
    { display: "07 69 29 69 01", tel: "+2250769296901" },
    { display: "07 77 80 44 04", tel: "+2250777804404" },
  ],
  email: "info.2bi@gtpci.com",
  manager: { name: "Ahmadou SY SAVANE", role: "Gérant associé" },
  vision: "Être une référence dans l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine.",
} as const;

export const approval = {
  decree: "Arrêté n° 22-00098/MCLU/DGLCV/CAPPI",
  date: "12 octobre 2022",
  authority: "Ministère de la Construction, du Logement et de l’Urbanisme",
  duration: "cinq ans renouvelables, à compter de la date de signature",
} as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/notre-entreprise", label: "Notre entreprise" },
  { href: "/nos-expertises", label: "Nos expertises" },
  { href: "/nos-programmes", label: "Nos programmes" },
  { href: "/nos-realisations", label: "Nos réalisations" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
] as const;

/** Programme BEST BUILDING LUXURY — informations confirmées par la présentation du programme. */
export const programme = {
  slug: "best-building-luxury",
  name: "BEST BUILDING LUXURY",
  city: "Grand-Bassam",
  district: "Yaou Résidentiel",
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
