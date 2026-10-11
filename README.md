# BEST BUILDING IMMOBILIER — site officiel (2BI SARL)

Site corporate multipage, en français, « L’architecture du patrimoine ».
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
| `src/app/` | Pages (Accueil, Notre entreprise, Nos expertises, Nos programmes, BEST BUILDING LUXURY, Nos réalisations, Contact, pages légales), `api/contact`, sitemap, robots, manifest, erreurs |
| `src/components/` | Header, Footer, PageHero, Gallery (visionneuse), MapEmbed, ContactForm, Reveal… |
| `src/lib/site.ts` | **Toutes les données institutionnelles** (raison sociale, RCCM, coordonnées, programme) |
| `src/lib/content.ts` | Expertises, engagements, réalisations |
| `src/lib/images.ts` | Registre des visuels et légendes |
| `src/assets/images/` | Rendus 3D officiels optimisés (générés) |
| `scripts/prepare-images.mjs` | Régénère les visuels depuis `design-sources/` (rendus du PowerPoint, logo) |
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
- Photographies des réalisations achevées (villas duplex 5 et 6 pièces) : emplacements « Photographie à venir » dans `src/lib/content.ts` (champ `image`).
- Portrait officiel du gérant : emplacement réservé dans `src/app/notre-entreprise/page.tsx`.
- Numéro WhatsApp professionnel validé ; coordonnées exactes du siège.
- Mentions légales et politique de confidentialité : textes **provisoires**, marqués `[à compléter]`, non indexés. Après validation (idéalement juridique), passer `LEGAL_PAGES_VALIDATED` à `true` dans `src/lib/site.ts`.
- Photographies d’ambiance sous licence (facultatif) : les sections générales utilisent des recadrages des rendus 3D du programme, toujours légendés comme tels.

**Points à confirmer (contradictions ou zones d’ombre dans les documents)**
1. **Agrément** : arrêté n° 22-00098/MCLU/DGLCV/CAPPI du 12 octobre 2022, valable cinq ans renouvelables (échéance nominale : octobre 2027). Le site présente la date de délivrance, sans affirmer la validité actuelle. Confirmer le statut / renouvellement. L’article 4 de l’arrêté exige un **agrément de programme** avant tout démarrage : le site ne prétend pas que BEST BUILDING LUXURY en dispose.
2. **Gérance** : l’arrêté mentionne deux co-gérants (M. LOUA NYELEKE FELIX et M. SY SAVANE AHMADOU) ; le brief présente M. Ahmadou SY SAVANE comme gérant associé. Seul ce dernier est publié.
3. **Orthographe du nom** : « SY Savané Ahmadou » (présentation) / « SY SAVANE Ahmadou » (arrêté, deck) / « Ahmadou SY SAVANE » (brief). Version du brief retenue.
4. **Rendus 3D** : dans la version finale du PowerPoint, Chrysanthème = images 6-7-8, Orchidée = images 9-10-11. Les façades des diapositives 3 et 13/15 sont marquées « non attribuées à un modèle précis » et ne sont pas utilisées comme visuel d’un modèle.
5. **« 4 chambres autonomes »** figure à l’identique pour les deux modèles (7 et 5 pièces) : non publié tant que non confirmé.
6. **Surfaces et terrains** (Chrysanthème 274,88 m² / 337–411 m² ; Orchidée 197,16 m² / 254–358 m²) : publiés comme indicatifs (phase esquisse). Confirmer.
7. **Prix, échelonnement VEFA, remise comptant, garantie décennale, « ACD des îlots »** : présents dans le PowerPoint (adressé à un partenaire), volontairement **non publiés** ; le site renvoie vers un conseiller.
8. **Localisation du programme** : coordonnées (5,2023440 ; −3,6722627), PK 5,5 entre Mondoukou et Yaou, Assinie ≈ 20 min — issus du dossier, présentés comme indicatifs. Le temps « aéroport ≈ 30 min » est ambigu (quel aéroport ?) : non publié.
9. **Réalisations** : « Réalisation achevée » est déduit de la rubrique « Nos réalisations » de la présentation ; localisation « Grand-Bassam » reprise du brief (le document dit « Bassam »). Le duplex 5P est de « standing moyen ».
10. **Partenaires techniques** : présentés par discipline. Les raisons sociales de l’organigramme (cabinet d’architecture, bureau d’études) ne sont pas publiées sans accord de ces partenaires.
11. **E-mail** : le domaine `gtpci.com` diffère de celui de la société ; confirmer qu’il s’agit bien de l’adresse officielle.
12. **Données non publiées** : n° de compte bancaire, CNPS, n° de compte contribuable, régime fiscal, réserves foncières, matériel, plans VRD, notes de calcul, montages financiers, partenariat en négociation.

## Accessibilité et performances

Lien d’évitement, focus visible, menu mobile avec piège à focus et Échap, visionneuse en `<dialog>` natif (flèches, Échap, retour du focus), `prefers-reduced-motion` respecté (CSS et Motion), Motion chargé en `LazyMotion` (fonctionnalités minimales), images `next/image` (AVIF/WebP, chargement différé hors hero), polices `next/font`, carte OpenStreetMap chargée uniquement sur demande (aucune requête tierce avant clic).
