import type { ImageMetadata } from "astro";

import f1Simulator from "../assets/projects/f1/simulateur.png";
import f1Summary from "../assets/projects/f1/dashboard-resume.png";
import f1Drivers from "../assets/projects/f1/dashboard-pilotes.png";
import f1Weather from "../assets/projects/f1/simulateur-meteo.png";
import scoolizeFiche from "../assets/projects/scoolize/predict-fiche.png";
import scoolizeHome from "../assets/projects/scoolize/predict-accueil.png";
import scoolizeWeights from "../assets/projects/scoolize/prepare-ponderation.png";
import scoolizeCompare from "../assets/projects/scoolize/predict-comparateur.png";
import scoolizeMobile from "../assets/projects/scoolize/predict-mobile.png";
import scoolizeDashboard from "../assets/projects/scoolize/prepare-tableau.png";
import i2mHome from "../assets/projects/i2m-site/accueil.png";
import i2mExpertise from "../assets/projects/i2m-site/expertises.png";
import i2mMethod from "../assets/projects/i2m-site/methode.png";
import i2mMobile from "../assets/projects/i2m-site/mobile.png";
import soccerLeagues from "../assets/projects/soccer-stat/ligues.png";
import soccerPlayer from "../assets/projects/soccer-stat/joueur.png";
import soccerScorers from "../assets/projects/soccer-stat/buteurs.png";
import soccerPositions from "../assets/projects/soccer-stat/postes.png";

/* Les captures ont été prises en lançant chaque dépôt en local. Aucune n'est
   retouchée ; les zones non publiables (références clients du site I2M) sont
   simplement hors cadre. */

export interface Shot {
  src: ImageMetadata;
  alt: string;
  caption: string;
  /** Capture d'un écran de téléphone. */
  mobile?: boolean;
}

export type CaseBlock =
  | { type: "text"; title: string; paragraphs: string[]; points?: string[] }
  | { type: "media"; shots: Shot[] };

export interface Project {
  slug: string;
  title: string;
  kind: string;
  context: string;
  pitch: string;
  stack: string[];
  repo: string;
  /** Teinte de la fiche, reprise de l'interface du projet. */
  tone: { bg: string; ink: string; muted: string };
  layout: "media-right" | "media-left" | "media-wide";
  cover: Shot;
  secondary: Shot;
  status?: string;
  /** À compléter par Abdallah : sa contribution personnelle exacte. */
  role?: string;
  blocks: CaseBlock[];
}

const repo = (name: string) => `https://github.com/Abdallah94212/${name}`;

const shots = {
  f1Simulator: {
    src: f1Simulator,
    alt: "Simulateur de Grand Prix : probabilités de victoire et de podium par pilote pour le Grand Prix d’Australie 2023.",
    caption: "Le simulateur. Australie 2023 : le modèle donne 77 % de chances de victoire à Max Verstappen.",
  },
  f1Weather: {
    src: f1Weather,
    alt: "Simulateur F1 avec le panneau météo ouvert : température de l’air, de la piste et vitesse du vent réglables.",
    caption: "Air, piste, vent : chaque réglage relance le calcul des probabilités.",
  },
  f1Summary: {
    src: f1Summary,
    alt: "Dashboard F1 : podiums par équipe et répartition des victoires de 2018 à 2023, avec filtres par période, pays, équipe et météo.",
    caption: "Le dashboard historique, filtrable par période, pays, équipe et météo.",
  },
  f1Drivers: {
    src: f1Drivers,
    alt: "Onglet Pilotes et Équipes du dashboard : victoires et podiums par pilote de 2018 à 2023.",
    caption: "Victoires et podiums par pilote sur six saisons.",
  },
  scoolizeFiche: {
    src: scoolizeFiche,
    alt: "Fiche formation Scoolize Predict : score de correspondance de 82 sur 100, détaillé critère par critère avec le poids de chacun.",
    caption: "Predict : un score expliqué critère par critère, jamais une boîte noire.",
  },
  scoolizeHome: {
    src: scoolizeHome,
    alt: "Accueil de Scoolize Predict : « Comprenez, avant de candidater, si une formation vous correspond ».",
    caption: "L’entrée côté candidat.",
  },
  scoolizeWeights: {
    src: scoolizeWeights,
    alt: "Scoolize Prepare : écran de pondération des critères d’admission d’une formation.",
    caption: "Prepare : la formation pondère ses critères (écran resté au stade de maquette).",
  },
  scoolizeCompare: {
    src: scoolizeCompare,
    alt: "Comparateur de formations de Scoolize Predict.",
    caption: "Le comparateur de formations.",
  },
  scoolizeMobile: {
    src: scoolizeMobile,
    alt: "Fiche formation Scoolize affichée sur mobile.",
    caption: "Le même parcours sur téléphone.",
    mobile: true,
  },
  scoolizeDashboard: {
    src: scoolizeDashboard,
    alt: "Tableau de bord Scoolize Prepare d’une formation : avancement du référentiel et prochaines étapes.",
    caption: "Le tableau de bord d’une formation dans Prepare.",
  },
  i2mHome: {
    src: i2mHome,
    alt: "Accueil du site I2M Advisory : « La donnée au service de la performance financière ».",
    caption: "L’accueil, sur fond encre et accents dorés.",
  },
  i2mExpertise: {
    src: i2mExpertise,
    alt: "Section des cinq domaines d’expertise du site I2M Advisory, en grille asymétrique.",
    caption: "Les expertises, générées à partir des données du site.",
  },
  i2mMethod: {
    src: i2mMethod,
    alt: "Section « Une méthode industrialisée de la donnée » : Comprendre, Industrialiser, Pérenniser.",
    caption: "La méthode du cabinet en trois temps.",
  },
  i2mMobile: {
    src: i2mMobile,
    alt: "Accueil du site I2M Advisory sur mobile.",
    caption: "Version mobile.",
    mobile: true,
  },
  soccerLeagues: {
    src: soccerLeagues,
    alt: "Soccer Stat : buts, passes décisives et minutes moyennes comparés entre les cinq grands championnats européens.",
    caption: "Les cinq championnats comparés : buts, passes décisives, minutes.",
  },
  soccerPlayer: {
    src: soccerPlayer,
    alt: "Fiche de Harry Kane dans Soccer Stat : 36 buts en Bundesliga, 1,12 but par match, comparés à la moyenne des attaquants.",
    caption: "La fiche de Harry Kane : 36 buts en Bundesliga, situés par rapport à la moyenne des attaquants.",
  },
  soccerPositions: {
    src: soccerPositions,
    alt: "Soccer Stat : nombre de joueurs par poste après nettoyage (défenseurs, milieux, attaquants, gardiens).",
    caption: "Après nettoyage, chaque joueur n’a plus qu’un poste principal.",
  },
  soccerScorers: {
    src: soccerScorers,
    alt: "Soccer Stat : les dix meilleurs buteurs des cinq grands championnats, de Harry Kane à Alexander Isak.",
    caption: "Les dix meilleurs buteurs des cinq grands championnats.",
  },
} satisfies Record<string, Shot>;

export const projects: Project[] = [
  {
    slug: "f1",
    title: "Victory Vision Analytics",
    kind: "Data · Machine learning",
    context: "Projet data",
    pitch: "Six saisons de Formule 1 croisées avec la météo, pour estimer avant le départ qui gagnera et qui finira sur le podium.",
    stack: ["Python", "pandas", "scikit-learn", "Streamlit", "Plotly", "Jupyter"],
    repo: repo("F1"),
    tone: { bg: "#1a0f12", ink: "#f7eeef", muted: "#c9aeb2" },
    layout: "media-right",
    cover: shots.f1Simulator,
    secondary: shots.f1Summary,
    blocks: [
      {
        type: "text",
        title: "La question",
        paragraphs: [
          "Les résultats de Formule 1 sont publics, mais dispersés dans une dizaine de tables : circuits, courses, pilotes, résultats. La question du projet était simple à poser : en les recoupant avec la météo de chaque Grand Prix, peut-on estimer les chances d’un pilote avant même le départ ?",
        ],
      },
      { type: "media", shots: [shots.f1Weather] },
      {
        type: "text",
        title: "Deux interfaces",
        paragraphs: [
          "Un dashboard pour lire le passé, un simulateur pour jouer avec l’avenir.",
        ],
        points: [
          "Le dashboard historique résume 2018 à 2023 : podiums par équipe, répartition des victoires, classements des pilotes. Tout se filtre par période, pays, équipe et météo.",
          "Le simulateur part d’une course réelle. On change la température de l’air ou de la piste, le vent, la grille de départ : deux modèles recalculent en direct les probabilités de victoire et de podium de chaque pilote.",
        ],
      },
      { type: "media", shots: [shots.f1Summary, shots.f1Drivers] },
      {
        type: "text",
        title: "Sous le capot",
        paragraphs: [
          "Le jeu de données final est construit en cinq étapes, du fichier brut au fichier enrichi par la météo, et chaque étape est conservée pour pouvoir revenir en arrière.",
        ],
        points: [
          "Pas de fuite d’information : chaque variable décrit la situation avant la course (points au championnat, taux de podium et d’abandon des courses précédentes, position moyenne, place sur la grille).",
          "Deux classifieurs RandomForest de scikit-learn, entraînés séparément pour la victoire et pour le podium.",
          "Exploration et feature engineering documentés dans deux notebooks Jupyter.",
        ],
      },
    ],
  },
  {
    slug: "scoolize",
    title: "Scoolize",
    kind: "Produit · UX · Full-stack",
    context: "Projet en équipe de trois",
    pitch: "Rendre lisibles les critères d’admission post-bac : un outil pour que les formations publient leurs attentes, un autre pour que les candidats sachent s’ils y correspondent.",
    stack: ["Recherche UX", "HTML / CSS / JS", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
    repo: repo("scoolise-"),
    tone: { bg: "#0b2623", ink: "#ecf7f5", muted: "#9cc5bf" },
    layout: "media-left",
    cover: shots.scoolizeFiche,
    secondary: shots.scoolizeMobile,
    blocks: [
      {
        type: "text",
        title: "Le constat",
        paragraphs: [
          "Projet pédagogique mené en équipe de trois, en réponse à un appel d’offres du ministère de l’Éducation. L’audit de Parcoursup qui ouvre le projet arrive à un constat : les critères d’examen des vœux existent, mais ils restent difficiles à lire pour les candidats et à formaliser pour les formations.",
          "Scoolize ne remplace pas Parcoursup. Il rend lisible ce qui ne l’est pas encore, avec deux produits qui partagent un même référentiel de compétences.",
        ],
      },
      { type: "media", shots: [shots.scoolizeHome, shots.scoolizeMobile] },
      {
        type: "text",
        title: "Deux produits, un référentiel",
        paragraphs: [],
        points: [
          "Prepare, côté formations : construire un référentiel de compétences, pondérer les critères, prévisualiser ce que verra un candidat, puis publier.",
          "Predict, côté candidats : importer son bulletin, obtenir un score de correspondance expliqué critère par critère, comparer plusieurs formations.",
          "Autour du produit : audit heuristique, benchmark, personas, conformité RGPD et non-discrimination, plan de conduite du changement.",
        ],
      },
      { type: "media", shots: [shots.scoolizeDashboard, shots.scoolizeCompare] },
      {
        type: "text",
        title: "Du prototype au vrai produit",
        paragraphs: [
          "Le jury a relevé l’absence de back-end lors de la première soutenance. L’équipe a donc construit l’application complète derrière les maquettes.",
        ],
        points: [
          "API REST Node.js et Express, documentée avec Swagger.",
          "Base PostgreSQL gérée avec Prisma, authentification JWT avec trois rôles : candidat, personnel d’établissement, administrateur.",
          "Validation des données avec Zod et tests Jest + Supertest exécutés contre une vraie base de test.",
          "Le tout se lance avec Docker Compose : base de données, API et front-end.",
        ],
      },
      { type: "media", shots: [shots.scoolizeWeights] },
    ],
    status: "Le constructeur de référentiel pondéré de Prepare est resté au stade de maquette.",
  },
  {
    slug: "i2m-site",
    title: "I2M Advisory",
    kind: "Web · Next.js",
    context: "Site vitrine, non publié",
    pitch: "Le site d’un cabinet de conseil data pour la finance : sobre, rapide, et simple à faire évoluer quand le cabinet grandit.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Zod"],
    repo: repo("i2m-advisory"),
    tone: { bg: "#0d1426", ink: "#eef1f8", muted: "#a5afc6" },
    layout: "media-wide",
    cover: shots.i2mHome,
    secondary: shots.i2mMobile,
    blocks: [
      {
        type: "text",
        title: "Le besoin",
        paragraphs: [
          "Un cabinet de conseil s’adresse à des directions data de banques, de sociétés de gestion et d’assurances. Son site doit inspirer confiance en quelques secondes, puis rester facile à enrichir : nouvelles expertises, articles, offres d’emploi.",
        ],
      },
      { type: "media", shots: [shots.i2mExpertise] },
      {
        type: "text",
        title: "Ce que fait le site",
        paragraphs: [],
        points: [
          "Des pages d’expertise générées à partir de données, et non écrites à la main une par une.",
          "Des articles rédigés en MDX, des pages carrières et cabinet, des mentions légales.",
          "Un formulaire de contact validé avec React Hook Form et Zod, relié à une route API.",
          "Un sitemap et un robots.txt générés automatiquement.",
        ],
      },
      { type: "media", shots: [shots.i2mMethod, shots.i2mMobile] },
      {
        type: "text",
        title: "Sous le capot",
        paragraphs: [
          "Next.js 16 avec l’App Router, en TypeScript. Tailwind CSS v4 et des composants shadcn/ui pour l’interface, Framer Motion pour les animations.",
        ],
      },
    ],
    status: "Le site n’est pas encore en ligne : certains contenus, dont les références clients, attendent une validation. Ils sont exclus des captures.",
  },
  {
    slug: "soccer-stat",
    title: "Soccer Stat",
    kind: "Data · Visualisation",
    context: "Projet data",
    pitch: "Les joueurs des cinq grands championnats européens, nettoyés puis explorés par poste, par nation, par ligue et joueur par joueur.",
    stack: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
    repo: repo("soccer_stat"),
    tone: { bg: "#0e2117", ink: "#eef6f0", muted: "#a3c2ad" },
    layout: "media-right",
    cover: shots.soccerScorers,
    secondary: shots.soccerPositions,
    blocks: [
      {
        type: "text",
        title: "D’abord, nettoyer",
        paragraphs: [
          "Le point de départ est un fichier brut de statistiques de joueurs. Avant la moindre analyse, un script de nettoyage garde le poste principal de chaque joueur, supprime les doublons, écarte les âges aberrants et les colonnes vides, puis traduit les postes.",
        ],
      },
      { type: "media", shots: [shots.soccerPositions] },
      {
        type: "text",
        title: "Huit façons de lire le jeu",
        paragraphs: [
          "Le dashboard Streamlit propose huit vues : la répartition par poste, les nations les plus représentées, les meilleurs buteurs, les minutes par poste, les joueurs et nations les plus efficaces (buts rapportés au temps de jeu), la comparaison entre ligues, et une fiche individuelle.",
          "La fiche joueur est la plus utile : elle situe chaque joueur par rapport à la moyenne de son poste, plutôt que de livrer des chiffres sans repère.",
        ],
      },
      { type: "media", shots: [shots.soccerPlayer, shots.soccerLeagues] },
    ],
  },
];

export interface ArchiveRepo {
  name: string;
  text: string;
  stack: string;
  url: string;
}

export const archive: ArchiveRepo[] = [
  { name: "Smart City", text: "Application mobile : carte, liste et fiche de stations.", stack: "Expo · React Native", url: repo("smart_city") },
  { name: "Sneakers", text: "Boutique en deux parties : front React et back-office Strapi.", stack: "React · Vite · Strapi", url: repo("sneakers") },
  { name: "REST API", text: "API d’articles avec lecture, création, modification et suppression.", stack: "Express · MySQL", url: repo("restAPI") },
  { name: "Rush 2", text: "Catalogue de meubles : cartes produits, recherche et filtres.", stack: "HTML · CSS · JS", url: repo("rush2") },
  { name: "Factsheet App", text: "Application Python organisée en modules d’interface, de mapping et de requêtes.", stack: "Python", url: repo("factsheet-app") },
  { name: "Exercices Epitech", text: "Piscine MSc, bootcamp web et exercices quotidiens.", stack: "JavaScript · Python · Shell", url: "https://github.com/Abdallah94212?tab=repositories" },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
