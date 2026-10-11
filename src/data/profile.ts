/* Identité, parcours et compétences : une seule source pour le portfolio et le CV.
   Tout ce qui figure ici provient du CV d'Abdallah ou de ses dépôts publics. */

export const profile = {
  name: "Abdallah Borji",
  firstName: "Abdallah",
  lastName: "Borji",
  role: "Étudiant en Pré-MSc à Epitech",
  kicker: ["Pré-MSc à Epitech", "Développement, data et business"],
  statement: "Je transforme des données brutes en outils qu’on a envie d’ouvrir.",
  manifesto:
    "J’ai étudié le business avant de me spécialiser dans le code. J’en garde un réflexe : comprendre qui utilisera l’outil et ce qu’il doit l’aider à décider. Ensuite seulement, j’ouvre l’éditeur.",
  email: "abdallah.borji@epitech.eu",
  phone: "07\u00a085\u00a082\u00a088\u00a026",
  phoneHref: "+33785828826",
  location: "La Queue-en-Brie (94)",
  licence: "Permis A2",
  github: "https://github.com/Abdallah94212",
  linkedin: "https://www.linkedin.com/in/abdallah-borji-b566aa343/",
  seo: {
    title: "Abdallah Borji · Développement, data et produit",
    description:
      "Abdallah Borji, étudiant en Pré-MSc à Epitech. Des outils data et des interfaces web : Python, SQL, Streamlit, JavaScript, avec une vraie attention au besoin métier.",
  },
} as const;

/** Repères affichés sous le manifeste. */
export const facts = [
  { value: "6 mois", label: "Développeur logiciel Data chez I2M Advisory, conseil data pour la banque." },
  { value: "Lauréat", label: "Prix national TF1 « Sécurité & Confidentialité », en 2025." },
  { value: "Pré-MSc", label: "Epitech, informatique et développement logiciel, depuis 2026." },
] as const;

export type JourneyKind = "Expérience" | "Formation" | "Distinction" | "Stage";

export interface JourneyItem {
  when: string;
  kind: JourneyKind;
  title: string;
  place: string;
  text: string;
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
    text: "Première immersion en entreprise : le fonctionnement d’un cabinet, ses procédures, ses délais et la confidentialité des informations.",
  },
  {
    when: "2023",
    kind: "Formation",
    title: "Baccalauréat général",
    place: "Lycée Samuel Champlain, Chennevières-sur-Marne",
    text: "Fin du lycée et choix d’un cursus qui mêle technique et business.",
  },
  {
    when: "2024 - 2026",
    kind: "Formation",
    title: "Business & Technology",
    place: "Epitech Digital School, Paris",
    text: "Développement, data, marketing, stratégie et gestion de projet : comprendre les enjeux techniques et commerciaux d’un produit.",
  },
  {
    when: "2024 - 2025",
    kind: "Expérience",
    title: "Animateur BAFA",
    place: "Aroéven, Champigny-sur-Marne",
    text: "Formé au BAFA en 2024, puis animateur en centre de loisirs auprès d’enfants de 3 à 6 ans : préparer les activités, garantir leur sécurité, travailler en équipe.",
  },
  {
    when: "2025",
    kind: "Distinction",
    title: "Prix national TF1",
    place: "Catégorie Sécurité & Confidentialité",
    text: "Lauréat du prix national TF1 dans la catégorie Sécurité & Confidentialité.",
  },
  {
    when: "Janv. - juin 2026",
    kind: "Expérience",
    title: "Développeur logiciel Data",
    place: "I2M Advisory",
    featured: true,
    text: "Six mois dans un cabinet de conseil data, au service de grands acteurs bancaires dont Natixis.",
    points: [
      "Une interface de traitement, d’analyse et d’exploitation de données pour les clients du cabinet, en Python et Streamlit.",
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
      { name: "Framer", usedIn: ["epitech"] },
    ],
  },
  {
    title: "Business",
    skills: [
      { name: "Besoins utilisateurs", usedIn: ["scoolize", "i2m-data"] },
      { name: "Analyse concurrentielle", usedIn: ["scoolize"] },
      { name: "Proposition de valeur", usedIn: ["scoolize", "i2m-site"] },
      { name: "Gestion de projet", usedIn: ["scoolize"] },
      { name: "Marketing & SWOT", usedIn: ["epitech"] },
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
    keyword: "La régularité.",
    text: "Une pratique régulière en club en Île-de-France : rigueur, persévérance et maîtrise de soi. Progresser sur le long terme, et savoir se remettre en question.",
  },
  {
    name: "Moto",
    keyword: "La précision.",
    text: "Autant pour la conduite que pour la mécanique : l’ingénierie et les innovations appliquées à la mobilité.",
  },
  {
    name: "IA",
    keyword: "La curiosité.",
    text: "Une veille régulière sur l’intelligence artificielle, la data et le développement, pour tester les outils et comprendre ce qu’ils changent aux métiers.",
  },
] as const;
