import type { StaticImageData } from "next/image";
import { img } from "./images";
import type { ProjectStatus } from "@/components/StatusTag";

/* -------------------------------------------------------------------------- */
/*  Nos expertises                                                            */
/* -------------------------------------------------------------------------- */

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

/** Les cinq domaines d'activité, dans l'ordre du document d'amendements. */
export const expertises: Expertise[] = [
  {
    id: "promotion-immobiliere",
    title: "Promotion immobilière",
    short: "Conception et développement de programmes résidentiels répondant aux attentes des acquéreurs et investisseurs.",
    headline: "L’immobilier pensé pour durer.",
    image: img.mission4,
    alt: "Vue aérienne d’un ensemble de villas contemporaines au milieu de la végétation",
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
    title: "Architecture & Construction",
    short:
      "Conception architecturale et réalisation de bâtiments résidentiels, avec une attention particulière portée à la qualité et à la fonctionnalité.",
    headline: "Construire avec exigence.",
    image: img.chrysantheme3,
    alt: "Rendu 3D de la façade jardin d’une villa Chrysanthème",
    ctaService: "architecture",
  },
  {
    id: "transactions-gestion",
    title: "Gestion des transactions et biens immobiliers",
    short: "Accompagnement dans les opérations immobilières, l’obtention des documents de propriété et la gestion des biens.",
    headline: "Un accompagnement professionnel pour vos opérations.",
    image: img.mission5,
    alt: "Rue résidentielle bordée de villas et de palmiers",
    ctaService: "transactions",
  },
  {
    id: "ameublement-equipements",
    title: "Ameublement et équipements",
    short:
      "Solutions d’approvisionnement en matériaux et matériels destinés aux projets de construction, et en équipements et meubles pour sublimer chaque espace de vie.",
    headline: "Les matériaux et matériels pour vos chantiers.",
    image: img.mission3,
    alt: "Salon spacieux et lumineux, meublé et décoré avec soin",
    ctaService: "ameublement",
  },
];

/* -------------------------------------------------------------------------- */
/*  Notre entreprise                                                          */
/* -------------------------------------------------------------------------- */

export const associates = [
  {
    id: "sy-savane",
    name: "SY Savané Ahmadou",
    role: "Gérant & Associé",
    domain: "Administration, stratégie et développement d’entreprise",
    image: img.associeSySavane,
    alt: "Portrait de SY Savané Ahmadou, gérant et associé",
    paragraphs: [
      "Administrateur d’entreprises et entrepreneur engagé, SY Savané Ahmadou met au service de BEST BUILDING IMMOBILIER une solide expérience en management, en gestion financière et en développement stratégique. Titulaire d’un Master en Administration des Entreprises, complété par une formation en gestion commerciale et en négociation, il possède un parcours professionnel de plus de seize années dans des fonctions de responsabilité.",
      "Depuis 2021, il assure la gestion globale de BEST BUILDING IMMOBILIER, avec pour missions la définition des orientations stratégiques, le pilotage des ressources, la politique d’investissement et la représentation de l’entreprise.",
      "Son approche conjugue rigueur de gestion, vision entrepreneuriale, sens de la négociation et recherche de performance. Particulièrement intéressé par la digitalisation des processus de gestion et l’optimisation financière, il œuvre à structurer une entreprise moderne, performante et résolument tournée vers l’avenir.",
    ],
    vision:
      "Sa vision est de contribuer à faire de BEST BUILDING IMMOBILIER une référence de l’immobilier de luxe en Côte d’Ivoire et dans la sous-région ouest-africaine, en plaçant l’excellence, la confiance et la création de valeur patrimoniale au cœur de son développement.",
  },
  {
    id: "loua",
    name: "M. Loua Nyéléké Félix",
    role: "Associé",
    domain: "Ingénierie, conduite de travaux et management de projets",
    image: img.associeLoua,
    alt: "Portrait de M. Loua Nyéléké Félix, associé",
    paragraphs: [
      "Ingénieur de formation en topographie et professionnel du management de projets, M. Loua Nyéléké Félix dispose d’un parcours alliant expertise technique, conduite de travaux et direction d’entreprise. Fort de plus de seize années d’expérience dans la gestion de projets et d’une expérience significative à la tête de Géants des Travaux Publics en Côte d’Ivoire (GTPCI), il a développé une solide pratique du pilotage opérationnel, du management des équipes et de la maîtrise des budgets.",
      "Son parcours, enrichi par des expériences en France dans la conduite de travaux et le management de projets, notamment au sein d’ENGIE Solutions, témoigne de son ouverture aux environnements techniques exigeants et aux méthodes structurées de gestion de projets. Sa formation en ingénierie topographique, complétée par un parcours en management des entreprises, renforce sa capacité à appréhender les dimensions techniques, organisationnelles et économiques des opérations.",
      "Au sein de BEST BUILDING IMMOBILIER, son profil constitue un atout pour la compréhension des enjeux techniques, le suivi des opérations et la recherche de solutions conciliant qualité d’exécution, maîtrise des coûts et respect des délais.",
    ],
    vision:
      "Il partage l’ambition de contribuer au développement de programmes immobiliers de standing, répondant aux exigences d’une clientèle en quête de qualité, de confort et de valeur durable.",
  },
] as const;

export const missions = [
  {
    title: "Concevoir des biens d’exception",
    text: "Développer des projets immobiliers qui associent architecture contemporaine, élégance, fonctionnalité et confort.",
    image: img.mission1,
    alt: "Villa contemporaine éclairée au crépuscule",
  },
  {
    title: "Promouvoir la qualité et l’excellence",
    text: "Veiller à la qualité des réalisations, au choix des matériaux et au soin apporté aux finitions.",
    image: img.mission2,
    alt: "Immeuble résidentiel contemporain de standing",
  },
  {
    title: "Offrir une expérience immobilière privilégiée",
    text: "Placer les besoins des clients au cœur de chaque projet, de la découverte du bien à sa livraison.",
    image: img.mission3,
    alt: "Salon lumineux et haut de plafond, meublé avec soin",
  },
  {
    title: "Créer de la valeur patrimoniale",
    text: "Développer des actifs immobiliers pensés pour conjuguer qualité d’usage, attractivité et potentiel de valorisation à long terme.",
    image: img.mission4,
    alt: "Vue aérienne d’un ensemble de villas contemporaines",
  },
  {
    title: "Contribuer à la transformation du paysage urbain",
    text: "Participer au développement de cadres de vie modernes, harmonieux et adaptés aux nouvelles aspirations résidentielles en Afrique de l’Ouest.",
    image: img.mission5,
    alt: "Rue résidentielle moderne bordée de palmiers",
  },
] as const;

export const values = [
  { title: "L’excellence", text: "Nous visons un niveau d’exigence élevé dans la conception, la réalisation et la commercialisation de chacun de nos projets." },
  { title: "L’intégrité", text: "Nous privilégions la transparence, l’honnêteté et le respect de nos engagements dans toutes nos relations professionnelles." },
  { title: "La confiance", text: "Nous construisons des relations durables avec nos clients, nos partenaires et nos investisseurs, fondées sur l’écoute et la fiabilité." },
  { title: "L’innovation", text: "Nous recherchons des solutions architecturales, techniques et organisationnelles adaptées aux nouveaux standards de l’immobilier." },
  { title: "Le professionnalisme", text: "Nous accordons une importance particulière à la rigueur, à la maîtrise des projets et à la recherche de résultats durables." },
  { title: "La durabilité", text: "Nous aspirons à développer des biens conçus pour traverser le temps, préserver leur utilité et contribuer à un cadre de vie de qualité." },
] as const;

export const engagements = [
  "Des projets pensés avec exigence",
  "Des biens immobiliers conçus pour répondre aux besoins d’aujourd’hui et aux ambitions de demain",
  "Une attention particulière à la conception, à la fonctionnalité et aux finitions",
  "Un suivi professionnel à chaque étape et une communication claire",
  "Une relation transparente",
  "Une vision patrimoniale",
] as const;

/* -------------------------------------------------------------------------- */
/*  Nos projets                                                               */
/* -------------------------------------------------------------------------- */

export type ProjectSection = { title: string; text?: string; items?: readonly string[] };

export type Project = {
  slug: string;
  kind: "foncier" | "programme";
  name: string;
  hook: string;
  status?: ProjectStatus;
  /** Localisation courte, affichée sur les cartes. */
  location: string;
  summary: string;
  intro: readonly string[];
  sections: readonly ProjectSection[];
  facts: readonly (readonly [string, string])[];
  mapImage: StaticImageData;
  mapAlt: string;
  mapUrl: string;
  /** Image de couverture d'une carte ; à défaut, la vue satellite de la localisation. */
  cover?: StaticImageData;
  coverAlt?: string;
  signature: string;
  closing: string;
  /** Valeur de `?service=` du formulaire de contact. */
  service: string;
  /** Page dédiée (programme BEST BUILDING LUXURY) : remplace la page générique. */
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "mondoukou-village",
    kind: "foncier",
    name: "Lotissement MONDOUKOU VILLAGE",
    hook: "Votre nouvel horizon balnéaire.",
    status: "Lots avec ACD",
    location: "Mondoukou, littoral atlantique",
    summary: "Des lots de 400 m² avec ACD, au bord de l’océan Atlantique, à 36 km de l’aéroport international Félix-Houphouët-Boigny.",
    intro: [
      "Et si votre prochain investissement vous rapprochait de l’océan et d’un art de vivre privilégié ? Bienvenue à Mondoukou, un cadre côtier où la beauté de l’océan Atlantique rencontre la tranquillité d’un environnement résidentiel recherché, entouré de restaurants, de résidences et de complexes hôteliers.",
      "À seulement 36 km de l’aéroport international Félix-Houphouët-Boigny d’Abidjan, saisissez l’opportunité d’acquérir un lot de 400 m² doté d’un Arrêté de Concession Définitive (ACD) et donnez vie à votre projet : résidence secondaire, maison familiale ou investissement immobilier, dans un environnement où nature et qualité de vie se conjuguent au quotidien.",
    ],
    sections: [
      {
        title: "Des parcelles de 400 m² avec ACD",
        text: "Le lotissement propose des lots de 400 m² bénéficiant d’un Arrêté de Concession Définitive (ACD), un document de propriété foncière essentiel pour sécuriser votre acquisition et garantir vos droits sur le terrain. Ces superficies permettent d’envisager une villa de villégiature, une résidence familiale ou un projet immobilier destiné à la location.",
      },
      {
        title: "Pourquoi choisir Mondoukou Village ?",
        items: [
          "Un cadre côtier recherché : un site situé en bordure de l’océan Atlantique.",
          "Une accessibilité pratique : à environ 36 km de l’aéroport international Félix-Houphouët-Boigny.",
          "Un environnement touristique : restaurants, résidences et complexes hôteliers à proximité.",
          "Des lots de 400 m² : des superficies adaptées à différents projets immobiliers.",
          "Des titres de propriété foncière : des parcelles proposées avec ACD.",
        ],
      },
    ],
    facts: [
      ["Superficie des lots", "400 m²"],
      ["Titre foncier", "Arrêté de Concession Définitive (ACD)"],
      ["Aéroport international", "≈ 36 km"],
      ["Environnement", "Restaurants, résidences, complexes hôteliers"],
    ],
    mapImage: img.carteMondoukou,
    mapAlt: "Vue satellite de la localisation du lotissement Mondoukou Village, en bordure de l’océan Atlantique",
    mapUrl: "https://maps.app.goo.gl/T2rVgiW51UK3fDSN8",
    signature: "MONDOUKOU VILLAGE, un emplacement, un projet, un patrimoine à construire.",
    closing: "Ne vous contentez pas de rêver votre projet immobilier : donnez-lui un emplacement. Renseignez-vous dès maintenant sur les disponibilités, les prix et les modalités d’acquisition des parcelles.",
    service: "mondoukou",
  },
  {
    slug: "quartier-yaou-residentiel",
    kind: "foncier",
    name: "Lotissement QUARTIER YAOU RÉSIDENTIEL",
    hook: "Entre Abidjan et Assinie, une nouvelle dimension pour vos ambitions.",
    status: "Lots avec ACD",
    location: "Entre Abidjan et Assinie",
    summary: "Plus de 2 000 lots de 400 à 500 m², approuvés et dotés d’ACD, à proximité du péage de Mondoukou.",
    intro: [
      "Et si vous donniez vie à vos ambitions immobilières dans un emplacement stratégique entre Abidjan et Assinie ? Quartier Yaou Résidentiel est un projet d’envergure de plus de 2 000 lots de 400 à 500 m², approuvés et dotés d’un Arrêté de Concession Définitive (ACD), idéal pour bâtir votre résidence ou investir dans une zone à fort potentiel.",
      "À proximité du péage de Mondoukou, à environ 25 km des plages d’Assinie et 35 km de l’aéroport international Félix-Houphouët-Boigny, profitez d’une localisation privilégiée, au carrefour du développement du Grand Abidjan et de l’attractivité touristique d’Assinie.",
    ],
    sections: [
      {
        title: "Un emplacement stratégique, au cœur des opportunités",
        items: [
          "À environ 25 km des plages d’Assinie : profitez de la proximité d’une destination balnéaire prisée.",
          "35 km de l’aéroport international Félix-Houphouët-Boigny : restez connecté à Abidjan et à ses infrastructures.",
          "À proximité du péage de Mondoukou : bénéficiez d’un accès pratique à cette autoroute stratégique.",
        ],
      },
      {
        title: "Un terrain, mille possibilités",
        items: [
          "Construire votre résidence et façonner un cadre de vie à votre image.",
          "Préparer votre avenir familial en constituant un patrimoine foncier.",
          "Développer un projet immobilier adapté à vos objectifs.",
          "Diversifier votre patrimoine en considérant le potentiel de développement du secteur.",
        ],
      },
      {
        title: "La sécurité foncière au cœur de votre projet",
        text: "Parce qu’un investissement immobilier commence par la confiance, les lots proposés sont approuvés ou dotés d’un ACD. Ce document constitue un élément important pour la sécurisation de votre propriété foncière.",
      },
    ],
    facts: [
      ["Nombre de lots", "Plus de 2 000"],
      ["Superficie des lots", "400 à 500 m²"],
      ["Titre foncier", "Approuvés et dotés d’ACD"],
      ["Plages d’Assinie", "≈ 25 km"],
      ["Aéroport international", "≈ 35 km"],
    ],
    mapImage: img.carteYaou,
    mapAlt: "Vue satellite du lotissement Quartier Yaou Résidentiel, près du péage de Mondoukou",
    mapUrl: "https://maps.app.goo.gl/SMR5NzcikZkBJANy9",
    signature: "QUARTIER YAOU RÉSIDENTIEL, le bon emplacement pour bâtir aujourd’hui et valoriser demain.",
    closing: "Votre projet mérite un emplacement à la hauteur de vos ambitions. Contactez notre équipe commerciale pour découvrir les parcelles disponibles, connaître les conditions d’acquisition et concrétiser votre projet immobilier.",
    service: "yaou",
  },
  {
    slug: "audoin-brakre-parcelle-famille-niaba",
    kind: "foncier",
    name: "Lotissement AUDOIN BRAKRÉ PARCELLE FAMILLE NIABA",
    hook: "Une place au cœur de l’exception, à la Baie des Milliardaires.",
    status: "En cours d’approbation",
    location: "Baie des Milliardaires, lagune Ébrié et lac Brakré",
    summary: "Des lots de 400 m² ouverts à la réservation, entre la lagune Ébrié et le lac Brakré, près du Romano Lodge.",
    intro: [
      "Entre la majestueuse lagune Ébrié et le lac Brakré, découvrez un site immobilier au cadre naturel remarquable, où emplacement privilégié et art de vivre se conjuguent harmonieusement. À proximité du prestigieux Romano Lodge et du célèbre Boulay Beach Resort (BBR), ce projet vous ouvre les portes d’un environnement recherché, propice à la concrétisation de vos ambitions immobilières.",
      "À seulement 650 mètres de la lagune Ébrié et 500 mètres du lac Brakré, le site bénéficie d’un emplacement singulier, au cœur d’un secteur qui séduit par son cadre naturel et son attrait touristique.",
    ],
    sections: [
      {
        title: "Des parcelles de 400 m² pour donner vie à vos ambitions",
        text: "Le lotissement propose des lots de 400 m², actuellement ouverts à la réservation, pour les acquéreurs qui souhaitent anticiper leur projet immobilier et se positionner sur ce secteur : résidence familiale, maison de villégiature ou constitution d’un patrimoine foncier.",
      },
      {
        title: "Pourquoi s’intéresser à ce lotissement ?",
        items: [
          "Un cadre naturel privilégié : entre la lagune Ébrié et le lac Brakré.",
          "Une proximité touristique appréciable : à environ 600 mètres du Romano Lodge et 2,9 km du BBR.",
          "Des parcelles de 400 m² : des superficies adaptées à différents projets immobiliers.",
          "Un patrimoine à construire : une opportunité de préparer votre avenir et celui de votre famille.",
          "Un potentiel immobilier à valoriser : un emplacement à considérer dans une stratégie patrimoniale de long terme.",
        ],
      },
    ],
    facts: [
      ["Superficie des lots", "400 m²"],
      ["Statut", "Lotissement en cours d’approbation — lots ouverts à la réservation"],
      ["Lagune Ébrié", "≈ 650 m"],
      ["Lac Brakré", "≈ 500 m"],
      ["Romano Lodge", "≈ 600 m"],
      ["Boulay Beach Resort (BBR)", "≈ 2,9 km"],
    ],
    mapImage: img.carteBrakre,
    mapAlt: "Vue satellite de la localisation du lotissement Audoin Brakré, entre la lagune Ébrié et le lac Brakré",
    mapUrl: "https://maps.app.goo.gl/AoHjLKdvRNMw7NWy9",
    signature: "AUDOIN BRAKRÉ PARCELLE FAMILLE NIABA, un emplacement inspirant pour bâtir vos projets de demain.",
    closing:
      "Le lotissement étant en cours d’approbation, les réservations s’effectuent dans le respect des conditions communiquées par le promoteur et du cadre juridique applicable. Prenez contact avec notre équipe commerciale pour obtenir les informations disponibles sur les parcelles, les conditions de réservation et l’état d’avancement de la procédure d’approbation.",
    service: "brakre",
  },
  {
    slug: "yamoussoukro-kacou-broukro",
    kind: "foncier",
    name: "Lotissement YAMOUSSOUKRO KACOU-BROUKRO",
    hook: "Un emplacement stratégique au cœur de Yamoussoukro.",
    location: "Axe Yamoussoukro – Attiégouakro",
    summary: "Un site sur l’axe Yamoussoukro – Attiégouakro, à proximité de la BCEAO et à 7 minutes du stade Charles Konan Banny.",
    intro: [
      "Faites le choix d’un emplacement stratégique pour concrétiser vos ambitions immobilières au cœur de Yamoussoukro. Situé sur l’axe Yamoussoukro – Attiégouakro, le site vous offre l’opportunité de donner vie à vos projets dans un secteur bénéficiant de la proximité de points de repère importants de la capitale politique ivoirienne.",
      "À proximité de la BCEAO de Yamoussoukro et à seulement 7 minutes du stade Charles Konan Banny, il s’adresse à celles et ceux qui souhaitent s’implanter dans la capitale politique, construire leur résidence ou préparer leur avenir patrimonial.",
    ],
    sections: [
      {
        title: "Un emplacement pour concrétiser vos ambitions",
        text: "Que vous envisagiez de construire votre maison, de préparer un projet familial ou de réaliser un investissement foncier, Yamoussoukro Kacou-Broukro vous invite à transformer vos ambitions en un projet concret. Sa situation sur l’axe Yamoussoukro – Attiégouakro permet d’envisager différents usages immobiliers, selon les caractéristiques des parcelles, les règles d’urbanisme applicables et l’évolution du secteur.",
      },
      {
        title: "Pourquoi choisir Yamoussoukro Kacou-Broukro ?",
        items: [
          "Un axe stratégique : sur la route reliant Yamoussoukro à Attiégouakro.",
          "Des repères connus à proximité : la BCEAO de Yamoussoukro et le stade Charles Konan Banny.",
          "Un emplacement à considérer : pour un projet résidentiel ou patrimonial.",
          "Une perspective d’avenir : l’occasion de planifier votre projet immobilier dans la capitale politique de la Côte d’Ivoire.",
        ],
      },
    ],
    facts: [
      ["Situation", "Axe Yamoussoukro – Attiégouakro"],
      ["Repères", "BCEAO de Yamoussoukro"],
      ["Stade Charles Konan Banny", "≈ 7 minutes"],
    ],
    mapImage: img.carteYamoussoukro,
    mapAlt: "Vue satellite de la localisation du lotissement Yamoussoukro Kacou-Broukro",
    mapUrl: "https://maps.app.goo.gl/SyYy3G1mXz9TgQ3QA",
    signature: "YAMOUSSOUKRO KACOU-BROUKRO, prenez position aujourd’hui pour construire votre avenir.",
    closing: "Contactez notre équipe commerciale pour découvrir les caractéristiques des parcelles disponibles, les prix et les modalités d’acquisition.",
    service: "yamoussoukro",
  },
  {
    slug: "best-building-luxury",
    kind: "programme",
    name: "BEST BUILDING LUXURY",
    hook: "Le prestige d’un cadre de vie d’exception.",
    status: "Programme en développement",
    location: "Quartier Yaou Résidentiel",
    summary: "27 villas duplex haut standing (14 Chrysanthème et 13 Orchidée), à 700 mètres de l’axe de l’autoroute Grand-Bassam – Assinie.",
    intro: [],
    sections: [],
    facts: [],
    cover: img.chrysantheme1,
    coverAlt: "Rendu 3D d’une villa duplex Chrysanthème du programme BEST BUILDING LUXURY",
    mapImage: img.carteLuxury,
    mapAlt: "Vue satellite de la localisation du programme BEST BUILDING LUXURY",
    mapUrl: "https://maps.app.goo.gl/SMR5NzcikZkBJANy9",
    signature: "BEST BUILDING LUXURY — L’excellence immobilière, notre signature.",
    closing: "",
    service: "luxury",
    href: "/nos-projets/best-building-luxury",
  },
  {
    slug: "best-building-city",
    kind: "programme",
    name: "BEST BUILDING CITY",
    hook: "202 logements, un cadre de vie intégré, toutes les commodités à portée de main.",
    status: "Parcelle immatriculée",
    location: "Quartier Yaou Résidentiel",
    summary: "Un programme de 202 logements sur 19 400 m², conçu comme une petite ville résidentielle clôturée et sécurisée.",
    intro: [
      "Et si votre prochain lieu de vie réunissait, au même endroit, le confort d’un logement moderne, la proximité des services essentiels et le plaisir de vivre dans un environnement pensé pour toute la famille ? Découvrez BEST BUILDING CITY, un programme immobilier d’envergure implanté sur un site de 19 400 m² au sein de Quartier Yaou Résidentiel, à proximité de l’axe autoroutier Abidjan-Lagos.",
      "BEST BUILDING CITY ambitionne de créer une véritable petite ville résidentielle, clôturée et sécurisée, conçue autour d’une vision moderne de l’habitat : vivre, travailler, se divertir et accéder aux services essentiels dans un environnement intégré.",
    ],
    sections: [
      {
        title: "10 villas duplex haut standing",
        text: "Des résidences pensées pour les familles en quête d’espace, d’intimité et de confort.",
      },
      {
        title: "8 immeubles R+4 à vocation économique — 128 appartements",
        items: ["64 appartements de type T3", "64 appartements de type T4"],
        text: "Une offre conçue pour proposer différentes configurations de logement dans une approche accessible et fonctionnelle.",
      },
      {
        title: "4 immeubles de standing — 64 appartements",
        items: ["32 appartements de type T3", "32 appartements de type T4"],
        text: "Des logements destinés aux acquéreurs recherchant un niveau de standing supérieur dans un ensemble résidentiel intégré.",
      },
      {
        title: "Éducation et santé",
        items: ["Une école privée comprenant le préscolaire, le primaire et le secondaire", "Une clinique privée"],
      },
      {
        title: "Commerces et services",
        items: ["Un supermarché", "Des magasins et commerces de proximité", "Des salons de beauté", "Une salle de sport", "Un restaurant"],
      },
      {
        title: "Espaces de vie et de loisirs",
        items: ["Des espaces verts aménagés", "Des aires de jeux pour les enfants", "Des espaces de circulation organisés"],
      },
      {
        title: "Des infrastructures pensées pour le confort quotidien",
        items: [
          "Des voies intérieures bitumées",
          "Des ouvrages d’assainissement",
          "Un réseau d’électrification",
          "Une alimentation en eau potable",
          "Des solutions de connectivité pour Internet et le téléphone",
          "Des places de stationnement pour les résidents et les visiteurs",
          "Un dispositif de clôture et de sécurisation du site",
        ],
      },
    ],
    facts: [
      ["Logements", "202"],
      ["Site", "19 400 m²"],
      ["Villas duplex haut standing", "10"],
      ["Appartements économiques (R+4)", "128 — T3 et T4"],
      ["Appartements de standing", "64 — T3 et T4"],
      ["Situation", "Quartier Yaou Résidentiel, axe autoroutier Abidjan-Lagos"],
    ],
    mapImage: img.carteCity,
    mapAlt: "Vue satellite de la localisation du programme BEST BUILDING CITY, à Quartier Yaou Résidentiel",
    mapUrl: "https://maps.app.goo.gl/Ys66yrhr6PbzZdcGA",
    signature: "BEST BUILDING CITY, la ville de vos ambitions.",
    closing:
      "Un programme immobilier conçu pour habiter autrement, investir dans un projet structuré et envisager l’avenir dans un environnement où les commodités essentielles sont réunies. Les caractéristiques, les prix et les modalités sont communiqués par un conseiller.",
    service: "city",
  },
];

export const fonciers = projects.filter((p) => p.kind === "foncier");
export const programmes = projects.filter((p) => p.kind === "programme");

/* -------------------------------------------------------------------------- */
/*  Nos réalisations (projets livrés)                                         */
/* -------------------------------------------------------------------------- */

export type Realisation = {
  id: string;
  number: string;
  title: string;
  headline: string;
  status: ProjectStatus;
  specs: string;
  location?: string;
  paragraphs: readonly string[];
  cta: string;
  ctaHref: string;
  images: { src: StaticImageData; alt: string; caption: string }[];
};

export const realisations: Realisation[] = [
  {
    id: "villa-triplex",
    number: "01",
    title: "Villa triplex",
    headline: "L’élégance sur trois niveaux.",
    status: "Projet livré",
    specs: "300 m² · 5 pièces · 4 chambres autonomes",
    location: "Grand-Bassam",
    paragraphs: [
      "Une architecture qui affirme son caractère. Des espaces qui invitent au confort.",
      "Située à Grand-Bassam, cette villa triplex se distingue par son architecture contemporaine et l’organisation de ses espaces sur trois niveaux. Pensée pour conjuguer intimité familiale et convivialité, elle offre quatre chambres autonomes, un séjour accueillant et une grande cuisine. Le garage, la cour arrière et le préau complètent cet ensemble conçu pour répondre aux exigences d’un habitat moderne.",
    ],
    cta: "Votre projet mérite la même attention au détail. Parlons de la villa que vous souhaitez construire.",
    ctaHref: "/contact?objet=projet&service=architecture",
    images: [
      { src: img.triplex4, alt: "Façade de la villa triplex à Grand-Bassam", caption: "Façade" },
      { src: img.triplex1, alt: "Vue de façade de la villa triplex", caption: "Vue d’architecte" },
      { src: img.triplex3, alt: "Séjour de la villa triplex", caption: "Séjour" },
      { src: img.triplex2, alt: "Espace de vie de la villa triplex", caption: "Espace de vie" },
    ],
  },
  {
    id: "villa-basse",
    number: "02",
    title: "Villa basse",
    headline: "Le confort d’un art de vivre.",
    status: "Projet livré",
    specs: "250 m² · 5 pièces · 4 chambres, dont 3 autonomes",
    location: "Yaou",
    paragraphs: [
      "Un cadre de vie fonctionnel où chaque espace trouve naturellement sa place.",
      "Située à Yaou, cette villa basse mise sur une organisation intérieure pratique et un rapport agréable aux espaces extérieurs. Elle comprend quatre chambres, dont trois autonomes, un séjour et une grande cuisine, avec une cour avant et un fond de jardin qui prolongent les espaces de vie. Une conception adaptée à ceux qui recherchent une maison confortable, conviviale et pensée pour le quotidien.",
    ],
    cta: "Vous souhaitez construire une maison adaptée à votre mode de vie ? Nous vous accompagnons pour donner forme à vos idées.",
    ctaHref: "/contact?objet=projet&service=architecture",
    images: [
      { src: img.basse1, alt: "Façade de la villa basse à Yaou", caption: "Façade" },
      { src: img.basse2, alt: "Séjour de la villa basse", caption: "Séjour" },
    ],
  },
  {
    id: "transformation-architecturale",
    number: "03",
    title: "Transformation architecturale",
    headline: "D’une villa basse à un duplex.",
    status: "Projet livré",
    specs: "230 m² · passage de 4 à 6 pièces · 4 chambres autonomes",
    paragraphs: [
      "Révéler le potentiel d’un bien existant pour lui offrir une nouvelle dimension.",
      "Un projet immobilier ne commence pas toujours sur un terrain vierge : parfois, le véritable potentiel se trouve dans l’existant. Cette opération illustre une démarche de conception et de transformation architecturale : faire évoluer une villa basse de quatre pièces vers une villa duplex de six pièces, en repensant son organisation et ses volumes. Le programme prévoit quatre chambres autonomes, un séjour, une grande cuisine, un garage, une cour arrière et un préau.",
    ],
    cta: "Votre maison actuelle ne correspond plus à vos besoins ? Étudions ensemble les possibilités de transformation et de valorisation de votre bien.",
    ctaHref: "/contact?objet=projet&service=architecture",
    images: [{ src: img.transformation1, alt: "Villa duplex issue de la transformation d’une villa basse", caption: "Villa duplex de six pièces" }],
  },
];

/* -------------------------------------------------------------------------- */
/*  Notre actualité                                                           */
/* -------------------------------------------------------------------------- */

export type ActualiteCategory = "Information projet" | "Opportunité d’investissement" | "Événement";

export type Actualite = {
  id: string;
  category: ActualiteCategory;
  date: string;
  title: string;
  subtitle: string;
  paragraphs: readonly string[];
  signature: string;
  href?: string;
  hrefLabel?: string;
};

export const actualites: Actualite[] = [
  {
    id: "luxury-agrement",
    category: "Information projet",
    date: "Début novembre 2026",
    title: "BEST BUILDING LUXURY : cap sur l’agrément du programme immobilier",
    subtitle: "Une étape importante dans la concrétisation de notre projet.",
    paragraphs: [
      "BEST BUILDING IMMOBILIER prévoit de présenter son programme BEST BUILDING LUXURY à la Commission d’Agrément des Promoteurs immobiliers et des Programmes Immobiliers (CAPPI), dans le cadre des démarches visant à obtenir l’agrément du programme immobilier, puis le permis de construire nécessaire à sa réalisation.",
      "Cette démarche s’inscrit dans notre volonté de conduire le projet dans le respect des procédures réglementaires applicables et de préparer sa mise en œuvre dans les meilleures conditions.",
    ],
    signature: "BEST BUILDING LUXURY : une ambition immobilière qui avance avec méthode.",
    href: "/nos-projets/best-building-luxury",
    hrefLabel: "Découvrir le programme",
  },
  {
    id: "city-immatriculation",
    category: "Information projet",
    date: "Évolution du projet",
    title: "BEST BUILDING CITY : une avancée majeure en matière de sécurité foncière",
    subtitle: "La parcelle du projet est désormais immatriculée.",
    paragraphs: [
      "La parcelle destinée à accueillir le programme immobilier BEST BUILDING CITY a fait l’objet d’une immatriculation conformément aux procédures en vigueur. Cette étape contribue à sécuriser la situation foncière du terrain destiné au projet et constitue un jalon important dans sa préparation.",
      "La prochaine étape envisagée est l’obtention de l’ACD, en vue de poursuivre les démarches réglementaires nécessaires à sa réalisation.",
    ],
    signature: "Sécuriser le foncier, structurer le projet, préparer l’avenir.",
    href: "/nos-projets/best-building-city",
    hrefLabel: "Découvrir le programme",
  },
  {
    id: "azaguie-partenariat",
    category: "Opportunité d’investissement",
    date: "Perspective",
    title: "AZAGUIÉ : une perspective de partenariat pour un projet de lotissement",
    subtitle: "BEST BUILDING IMMOBILIER explore de nouvelles opportunités de développement foncier.",
    paragraphs: [
      "Dans le cadre de sa stratégie de développement, BEST BUILDING IMMOBILIER envisage la conclusion d’un partenariat portant sur la réalisation d’un projet de lotissement à Azaguié, sur une parcelle d’une superficie d’environ vingt hectares. Cette perspective témoigne de notre volonté d’élargir notre portefeuille de projets et de contribuer au développement de nouvelles opportunités foncières et immobilières.",
      "Les modalités du partenariat et les prochaines étapes du projet restent à préciser.",
    ],
    signature: "De nouvelles perspectives pour aménager les territoires et bâtir des opportunités durables.",
    href: "/contact?objet=terrain&service=foncier",
    hrefLabel: "Nous contacter",
  },
];
