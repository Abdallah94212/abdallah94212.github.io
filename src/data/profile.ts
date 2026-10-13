/* Identité, parcours et compétences : une seule source pour le portfolio et le CV.
   Tout ce qui figure ici provient du CV d'Abdallah ou de ses dépôts publics. */

export const profile = {
  name: "Abdallah Borji",
  firstName: "Abdallah",
  lastName: "Borji",
  role: "Étudiant en Pré-MSc à Epitech",
  kicker: ["Pré-MSc à Epitech", "Développement, data et web"],
  statement: "Je développe des applications data et des sites web, de la requête SQL à l’interface.",
  manifesto:
    "Je code surtout en Python et en JavaScript. Côté data, des tableaux de bord et un modèle qui estime les chances de podium en Formule 1. Côté web, des sites et une API REST.",
  email: "abdallah.borji@epitech.eu",
  phone: "07\u00a085\u00a082\u00a088\u00a026",
  phoneHref: "+33785828826",
  location: "La Queue-en-Brie (94)",
  licence: "Permis A2",
  github: "https://github.com/Abdallah94212",
  linkedin: "https://www.linkedin.com/in/abdallah-borji-b566aa343/",
  seo: {
    title: "Abdallah Borji · Développement, data et web",
    description:
      "Portfolio d’Abdallah Borji, étudiant en Pré-MSc à Epitech : applications data en Python, sites web, projets en équipe. Disponible en alternance de janvier à août 2027.",
  },
} as const;

/** Repères affichés sous le manifeste. */
export const facts = [
  { value: "6 mois", label: "Développeur logiciel data chez I2M Advisory, de janvier à juin 2026." },
  { value: "Lauréat", label: "Prix national TF1, catégorie « Sécurité & Confidentialité », en 2025." },
  { value: "2027", label: "Disponible en alternance, de janvier à\u00a0août." },
] as const;

/* La maquette de l'accueil (HeroScene) : le socle, trois verbes pour la
   façon de travailler, et la prochaine étape. Volontairement général : c'est
   une page de garde, le détail des expériences vient plus bas.
   Après un tiret, un gluon (U+2060) : l'espace insécable seule n'empêche
   pas la coupure à cet endroit. */
export const heroScene = {
  base: { title: "Epitech", lines: ["Pré-MSc à Epitech"] },
  steps: [
    { key: "data", title: "Comprendre", detail: "le besoin" },
    { key: "code", title: "Analyser", detail: "les données" },
    { key: "ui", title: "Concevoir", detail: "la solution" },
  ],
  next: { title: "Alternance", detail: "janv.\u00a0–\u2060\u00a0août 2027" },
} as const;

export type JourneyKind ="Expérience" | "Formation" | "Distinction" | "Stage";

export interface JourneyItem {
  when: string;
  kind: JourneyKind;
  title: string;
  place: string;
  text?: string;
  points?: string[];
  tags?: string[];
  featured?: boolean;
}

/** Du plus ancien au plus récent : le temps se lit de gauche à droite. */
export const journey: JourneyItem[] = [
  {
    when: "2020",
    kind: "Stage",
    title: "Stage d’observation en comptabilité",
    place: "Borji Expertise Comptable, Pontault-Combault",
    text: "Premier contact avec le monde de l’entreprise : procédures, délais, confidentialité des informations.",
  },
  {
    when: "2023",
    kind: "Formation",
    title: "Baccalauréat général",
    place: "Lycée Samuel Champlain, Chennevières-sur-Marne",
  },
  {
    when: "2024 - 2026",
    kind: "Formation",
    title: "Business & Technology Manager",
    place: "Epitech Digital School, Paris",
    text: "Deux années du programme Master of Science (titre RNCP niveau 7) : management, digitalisation, marketing et gestion de projet.",
  },
  {
    when: "2024 - 2025",
    kind: "Expérience",
    title: "Animateur BAFA",
    place: "Aroéven, Champigny-sur-Marne",
    text: "Formation BAFA en 2024, puis animateur en centre de loisirs pour des enfants de 3 à 6 ans : activités, sécurité, travail en équipe.",
  },
  {
    when: "2025",
    kind: "Distinction",
    title: "Prix national TF1",
    place: "Lauréat, au niveau national",
    text: "Catégorie Sécurité & Confidentialité.",
  },
  {
    when: "Janv. - juin 2026",
    kind: "Expérience",
    title: "Développeur logiciel Data",
    place: "I2M Advisory",
    featured: true,
    text: "Six mois dans un cabinet de conseil data qui travaille pour de grands acteurs bancaires, dont Natixis.",
    points: [
      "Développement d’une interface de traitement, d’analyse et d’exploitation de données pour les clients du cabinet, en Python et Streamlit.",
      "Requêtes et transformations sur SQL Server, environnements conteneurisés avec Docker.",
      "Présent à chaque étape : besoin, conception, développement, tests, améliorations.",
    ],
    tags: ["Python", "Streamlit", "SQL Server", "Docker"],
  },
  {
    when: "Depuis 2026",
    kind: "Formation",
    title: "Pré-MSc",
    place: "Epitech, Paris",
    text: "Informatique, développement logiciel et conception de projets techniques, en préparation du MSc.",
  },
];

/* Où chaque compétence a été mise en pratique : identifiants de projets
   (voir projects.ts) ou contextes ci-dessous. */
export const evidenceLabels = {
  "i2m-data": { label: "Expérience I2M Advisory", code: "I2M" },
  "epitech": { label: "Cursus Epitech", code: "EPI" },
  "portfolio": { label: "Ce portfolio", code: "ab." },
} as const;

export interface Skill {
  name: string;
  usedIn: string[];
}

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Code",
    skills: [
      { name: "Python", usedIn: ["f1", "soccer-stat", "i2m-data"] },
      { name: "JavaScript", usedIn: ["scoolize", "portfolio"] },
      { name: "HTML / CSS", usedIn: ["scoolize", "portfolio"] },
      { name: "Streamlit", usedIn: ["f1", "soccer-stat", "i2m-data"] },
      { name: "React (notions)", usedIn: ["i2m-site"] },
      { name: "Java", usedIn: ["epitech"] },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "SQL & SQL Server", usedIn: ["i2m-data", "scoolize"] },
      { name: "pandas", usedIn: ["f1", "soccer-stat"] },
      { name: "Visualisation", usedIn: ["f1", "soccer-stat", "i2m-data"] },
      { name: "Modèles prédictifs", usedIn: ["f1"] },
      { name: "Statistiques", usedIn: ["f1", "soccer-stat"] },
    ],
  },
  {
    title: "Outils",
    skills: [
      { name: "Git & GitHub", usedIn: ["f1", "scoolize", "i2m-site", "soccer-stat", "portfolio"] },
      { name: "Docker", usedIn: ["i2m-data", "scoolize"] },
      { name: "Figma", usedIn: ["scoolize"] },
      { name: "Jupyter", usedIn: ["f1"] },
      { name: "Framer", usedIn: ["epitech"] },
    ],
  },
  {
    title: "Projet",
    skills: [
      { name: "Gestion de projet", usedIn: ["scoolize"] },
      { name: "Besoins utilisateurs", usedIn: ["scoolize", "i2m-data"] },
      { name: "Analyse concurrentielle", usedIn: ["scoolize"] },
      { name: "Marketing digital", usedIn: ["epitech"] },
    ],
  },
];

export const languages = [
  { name: "Anglais", level: "B2" },
  { name: "Espagnol", level: "B1" },
] as const;

export const interests = [
  {
    name: "Boxe",
    keyword: "En club, régulièrement.",
    text: "Pour l’effort, la technique et la discipline que ce sport impose.",
  },
  {
    name: "Moto",
    keyword: "Permis A2.",
    text: "La conduite autant que la mécanique, et les évolutions techniques des deux-roues.",
  },
  {
    name: "IA",
    keyword: "Une veille régulière.",
    text: "Je suis l’actualité de l’IA, de la data et du développement, et je teste les nouveaux outils.",
  },
] as const;
