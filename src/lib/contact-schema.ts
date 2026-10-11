import { z } from "zod";

z.config(z.locales.fr());

export const SUBJECTS = [
  "Demande de présentation du programme",
  "Prix, disponibilités et conditions",
  "Échange avec un conseiller",
  "Projet d’architecture ou de construction",
  "Terrain ou aménagement foncier",
  "Autre demande",
] as const;

export const SERVICES = [
  "BEST BUILDING LUXURY — villa Chrysanthème (7 pièces)",
  "BEST BUILDING LUXURY — villa Orchidée (5 pièces)",
  "Promotion immobilière",
  "Aménagement foncier",
  "Architecture et construction",
  "Transactions et gestion immobilières",
  "Matériaux de construction",
  "Autre",
] as const;

/** Raccourcis utilisés par les boutons d'appel à l'action : /contact?objet=...&service=... */
export const SUBJECT_PRESETS: Record<string, (typeof SUBJECTS)[number]> = {
  presentation: SUBJECTS[0],
  prix: SUBJECTS[1],
  conseiller: SUBJECTS[2],
  projet: SUBJECTS[3],
  terrain: SUBJECTS[4],
};
export const SERVICE_PRESETS: Record<string, (typeof SERVICES)[number]> = {
  luxury: SERVICES[0],
  chrysantheme: SERVICES[0],
  orchidee: SERVICES[1],
  promotion: SERVICES[2],
  foncier: SERVICES[3],
  architecture: SERVICES[4],
  transactions: SERVICES[5],
  materiaux: SERVICES[6],
};

const phoneRe = /^\+?[0-9][0-9 .()-]{6,19}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom et prénoms.").max(120, "Texte trop long."),
  phone: z.string().trim().regex(phoneRe, "Indiquez un numéro de téléphone valide."),
  email: z.string().trim().max(160, "Texte trop long.").pipe(z.email("Indiquez une adresse email valide.")),
  subject: z.enum(SUBJECTS, { message: "Choisissez l’objet de votre demande." }),
  service: z.enum(SERVICES, { message: "Choisissez le programme ou le service concerné." }),
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
