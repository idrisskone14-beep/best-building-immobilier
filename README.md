# BEST BUILDING IMMOBILIER — site officiel (2BI SARL)

Site corporate multipage, en français, « Bâtir aujourd’hui, valoriser demain ». Contenu aligné sur le document **« Amendements du site internet de 2BI SARL »**.
Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lucide.

## Démarrer

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # TypeScript
npm run lint         # ESLint
npm run build        # build de production
npm start            # sert le build
```

## Structure

| Chemin | Rôle |
| --- | --- |
| `src/app/` | Pages : Accueil, Notre entreprise, Nos expertises, Nos projets (`/nos-projets`, fiches `[slug]` et page dédiée BEST BUILDING LUXURY), Nos réalisations, Notre actualité, Contact, pages légales ; `api/contact`, sitemap, robots, manifest. `/nos-programmes` redirige vers `/nos-projets` |
| `src/components/` | Header, Footer, PageHero, Gallery (visionneuse), MapEmbed, ContactForm, Reveal… |
| `src/lib/site.ts` | **Toutes les données institutionnelles** (raison sociale, RCCM, coordonnées, programme) |
| `src/lib/content.ts` | Expertises, associés, missions, valeurs, **projets** (programmes et lotissements), réalisations, actualités |
| `src/lib/images.ts` | Registre des visuels et légendes |
| `src/assets/images/` | Rendus 3D du programme + images extraites du document d’amendements (portraits, cartes de localisation, réalisations) |
| `scripts/prepare-images.mjs` | Régénère les rendus 3D depuis `design-sources/` (les images du document d’amendements ont été ajoutées directement) |
| `public/brand/logo-2bi.png` | Logo officiel (redimensionné uniquement, jamais redessiné ni recoloré) |

Palette échantillonnée sur le logo : rouge `#A73030`, bleu nuit `#0F3450` ; ivoire `#F6F3EE`, pierre `#E7E5E1`, anthracite `#20252A`.

## Configuration (variables d’environnement)

Copier `.env.example` vers `.env.local` (local) ou renseigner les variables dans Vercel.

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (canonical, sitemap, Open Graph). Sans elle : `VERCEL_PROJECT_PRODUCTION_URL`, puis `localhost`. |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Envoi du formulaire de contact via [Resend](https://resend.com). L’expéditeur doit être sur un domaine vérifié dans Resend. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Anti-spam Cloudflare Turnstile (facultatif, recommandé). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Numéro WhatsApp professionnel **validé** (format `2250700000000`). Vide = bouton masqué. |
| `NEXT_PUBLIC_HQ_LAT`, `NEXT_PUBLIC_HQ_LNG` | Coordonnées exactes du siège. Renseignées = carte affichée sur /contact ; sinon liens de recherche d’adresse. |

**Formulaire.** Validation côté client et serveur (zod), champ piège, délai minimal, limitation de débit par IP, contrôle d’origine, Turnstile optionnel. Tant que Resend n’est pas configuré, l’API répond `503` et le formulaire **n’affirme jamais** qu’un message est parti : il propose un e-mail pré-rempli et les téléphones. La limitation de débit est en mémoire (par instance serverless) : pour un trafic réel, activer Turnstile et/ou les règles du pare-feu Vercel.

## Déploiement sur Vercel

1. Pousser le dossier sur un dépôt Git (`design-sources/` est ignoré).
2. Vercel → *Add New Project* → importer le dépôt. Framework détecté : Next.js (aucun réglage de build).
3. Renseigner les variables ci-dessus (*Settings → Environment Variables*), au minimum `NEXT_PUBLIC_SITE_URL` et les trois variables Resend.
4. Déployer, rattacher le nom de domaine, puis mettre à jour `NEXT_PUBLIC_SITE_URL` et redéployer.
5. Soumettre `https://<domaine>/sitemap.xml` à Google Search Console.

## À compléter / confirmer avant la mise en production

**Contenu**
- Vidéos des projets (demandées dans la rubrique « Nos projets ») : aucune vidéo n’a été fournie.
- Plans, modalités de paiement, prix et disponibilités des projets : non fournis, renvoyés vers un conseiller.
- Photographies des lotissements : seules des vues satellite annotées (captures Google Maps) ont été fournies.
- Numéro WhatsApp professionnel validé ; coordonnées exactes du siège (carte OpenStreetMap).
- Mentions légales et politique de confidentialité : textes **provisoires**, non indexés (`LEGAL_PAGES_VALIDATED` dans `src/lib/site.ts`).
- **Base de données prospects** (objectif du formulaire) : les demandes sont envoyées par e-mail (Resend). Aucune base n’est branchée : à choisir (Supabase, Vercel Postgres, Google Sheets…).

**Points à confirmer (incohérences du document d’amendements)**
1. **Adresse du siège** : « Riviera Akouédo Palmeraie, rue Grand Alépé, derrière le supermarché AB Center » (section Contacts, retenue) vs « Riviera Abatta, après AB Center » (pied de page du document).
2. **E-mail** : `info@best-building.com` (section Contacts, retenu) vs `infos@2bi-sarl.com` (pied de page). Téléphones : 07 77 80 44 04 (Contacts) ; les deux autres numéros proviennent du pied de page.
3. **Quartier Yaou Résidentiel** : distance aux plages d’Assinie « 25 km » (texte) vs « 24 km » (puce) — 25 km retenu ; lots « approuvés **et** dotés d’ACD » vs « approuvés **ou** dotés d’ACD ».
4. **Yamoussoukro** : « Kacou-Broukro » (texte) vs « Kakou-Broukro » (carte).
5. **Statut BEST BUILDING LUXURY** : présenté « en développement » ; l’agrément du programme (CAPPI) n’est annoncé que pour début novembre 2026 — le site ne l’affirme pas.
6. **Orthographe** : « Nyéléké » (lecture du PDF, à confirmer) ; « SY Savané Ahmadou » (document) vs « SY SAVANE » (arrêté).
7. **Surfaces et terrains** des villas : publiés comme indicatifs (phase esquisse).
8. **Réalisations** : la localisation de la transformation architecturale n’est pas indiquée ; les visuels proviennent du document (rendus et photos non légendés plus précisément).
9. **Données non publiées** : n° de compte bancaire, CNPS, compte contribuable, régime fiscal.

## Accessibilité et performances

Lien d’évitement, focus visible, menu mobile avec piège à focus et Échap, visionneuse en `<dialog>` natif (flèches, Échap, retour du focus), `prefers-reduced-motion` respecté (CSS et Motion), Motion chargé en `LazyMotion` (fonctionnalités minimales), images `next/image` (AVIF/WebP, chargement différé hors hero), polices `next/font`, carte OpenStreetMap chargée uniquement sur demande (aucune requête tierce avant clic).
