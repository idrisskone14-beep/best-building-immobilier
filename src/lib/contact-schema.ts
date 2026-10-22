import { z } from "zod";

z.config(z.locales.fr());

export const SUBJECTS = [
  "Prise de rendez-vous",
  "Demande de présentation du projet",
  "Prix, disponibilités et modalités de paiement",
  "Échange avec un conseiller",
  "Projet d’architecture ou de construction",
  "Terrain ou aménagement foncier",
  "Autre demande",
] as const;

export const SERVICES = [
  "BEST BUILDING LUXURY — villa Chrysanthème (7 pièces)",
  "BEST BUILDING LUXURY — villa Orchidée (5 pièces)",
  "BEST BUILDING CITY",
  "Lotissement Mondoukou Village",
  "Lotissement Quartier Yaou Résidentiel",
  "Lotissement Audoin Brakré Parcelle Famille Niaba",
  "Lotissement Yamoussoukro Kacou-Broukro",
  "Promotion immobilière",
  "Aménagement foncier",
  "Architecture & Construction",
  "Gestion des transactions et biens immobiliers",
  "Ameublement et équipements",
  "Autre",
] as const;

/** Raccourcis utilisés par les boutons d'appel à l'action : /contact?objet=...&service=... */
export const SUBJECT_PRESETS: Record<string, (typeof SUBJECTS)[number]> = {
  "rendez-vous": SUBJECTS[0],
  presentation: SUBJECTS[1],
  prix: SUBJECTS[2],
  conseiller: SUBJECTS[3],
  projet: SUBJECTS[4],
  terrain: SUBJECTS[5],
};
export const SERVICE_PRESETS: Record<string, (typeof SERVICES)[number]> = {
  luxury: SERVICES[0],
  chrysantheme: SERVICES[0],
  orchidee: SERVICES[1],
  city: SERVICES[2],
  mondoukou: SERVICES[3],
  yaou: SERVICES[4],
  brakre: SERVICES[5],
  yamoussoukro: SERVICES[6],
  promotion: SERVICES[7],
  foncier: SERVICES[8],
  architecture: SERVICES[9],
  transactions: SERVICES[10],
  ameublement: SERVICES[11],
};

const phoneRe = /^\+?[0-9][0-9 .()-]{6,19}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom et prénoms.").max(120, "Texte trop long."),
  phone: z.string().trim().regex(phoneRe, "Indiquez un numéro de téléphone valide."),
  email: z.string().trim().max(160, "Texte trop long.").pipe(z.email("Indiquez une adresse email valide.")),
  subject: z.enum(SUBJECTS, { message: "Choisissez l’objet de votre demande." }),
  service: z.enum(SERVICES, { message: "Choisissez le programme ou le service concerné." }),
  slot: z.string().trim().max(120, "Texte trop long.").optional(),
  message: z.string().trim().min(10, "Votre message est un peu court (10 caractères minimum).").max(3000, "Message trop long (3 000 caractères maximum)."),
  consent: z.literal(true, { message: "Votre accord est nécessaire pour traiter la demande." }),
});

export type ContactValues = z.input<typeof contactSchema>;
export type ContactField = keyof ContactValues;

/** Champs invisibles (anti-spam) ajoutés au corps de requête. */
export const contactPayloadSchema = contactSchema.extend({
  website: z.string().max(200).optional(), // honeypot : doit rester vide
  startedAt: z.number().int().optional(), // horodatage d'ouverture du formulaire
  turnstileToken: z.string().max(4096).optional(),
});
