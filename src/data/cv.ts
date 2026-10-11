/* Contenu du CV imprimable. Même source que le portfolio (profile.ts et
   projects.ts), réécrite pour tenir sur une page A4 : chaque ligne doit
   apporter un fait vérifiable (dates, lieux, technologies, missions). */

export const cvHeadline = {
  status: "Étudiant en Pré-MSc à Epitech",
  fields: "Développement logiciel · Data · Web",
  availability: "Recherche une alternance de janvier à août 2027",
} as const;

export const cvSummary =
  "Je développe en Python et en JavaScript : applications data, tableaux de bord, modèles prédictifs, sites web. Six mois chez I2M Advisory sur un outil d’analyse de données destiné à des clients bancaires, de la compréhension du besoin jusqu’aux tests.";

export interface CvEntry {
  title: string;
  place: string;
  when: string;
  context?: string;
  points?: string[];
}

export const cvExperience: CvEntry[] = [
  {
    title: "Développeur logiciel Data",
    place: "I2M Advisory",
    when: "Janvier – juin 2026",
    context: "Cabinet de conseil data intervenant auprès de grands acteurs bancaires, dont Natixis.",
    points: [
      "Développement en Python et Streamlit d’une interface de traitement, d’analyse et d’exploitation de données destinée aux clients du cabinet.",
      "Transformation de données et requêtes SQL Server ; conteneurisation avec Docker.",
      "Participation à chaque étape : besoin, conception, développement, tests et améliorations.",
    ],
  },
  {
    title: "Animateur BAFA",
    place: "Aroéven, Champigny-sur-Marne",
    when: "2025",
    points: [
      "Encadrement d’enfants de 3 à 6 ans en centre de loisirs municipal.",
      "Organisation d’activités ludiques et sportives en équipe ; sécurité et bien-être des enfants.",
    ],
  },
  {
    title: "Stage d’observation en comptabilité",
    place: "Borji Expertise Comptable, Pontault-Combault",
    when: "2020",
    points: ["Découverte d’un cabinet comptable : procédures, délais et confidentialité des informations."],
  },
];

export const cvEducation: CvEntry[] = [
  {
    title: "Pré-MSc",
    place: "Epitech, Paris",
    when: "2026 – aujourd’hui",
    context: "Informatique, développement logiciel et conception de projets techniques, en préparation du MSc.",
  },
  {
    title: "Business & Technology Manager",
    place: "Epitech Digital School, Paris",
    when: "2024 – 2026",
    context: "MSc (titre RNCP niveau 7), 1re et 2e années : management, digitalisation, marketing.",
  },
  { title: "Formation générale BAFA", place: "Aroéven Paris, Chennevières-sur-Marne", when: "2024" },
  { title: "Baccalauréat général", place: "Lycée Samuel Champlain, Chennevières-sur-Marne", when: "2023" },
];

/** Projets du portfolio, résumés pour le CV (le titre et le dépôt viennent de projects.ts). */
export const cvProjects = [
  {
    slug: "f1",
    subtitle: "Prédictions en Formule 1",
    stack: "Python · scikit-learn · Streamlit",
    text: "Dashboard et simulateur de Grand Prix (2018 à 2023) : résultats croisés avec la météo, deux modèles RandomForest qui estiment victoire et podium. Exploration sous Jupyter Notebook et JupyterLab.",
  },
  {
    slug: "scoolize",
    subtitle: "Critères d’admission post-bac",
    stack: "Node.js · Express · PostgreSQL · Prisma",
    text: "Projet pédagogique en équipe de trois, en réponse à un appel d’offres du ministère de l’Éducation : audit de Parcoursup, recherche UX et prototype, puis API REST avec authentification JWT et tests Jest.",
  },
  {
    slug: "i2m-site",
    subtitle: "Site vitrine, non publié",
    stack: "Next.js · TypeScript · Tailwind CSS",
    text: "Site d’un cabinet de conseil data pour la finance : pages d’expertise générées à partir de données, articles en MDX, formulaire de contact validé avec Zod.",
  },
  {
    slug: "soccer-stat",
    subtitle: "Statistiques de football",
    stack: "Python · pandas · Seaborn · Streamlit",
    text: "Nettoyage d’un jeu de données brut sur les joueurs des cinq grands championnats européens, puis tableau de bord en huit vues : postes, nations, buteurs, ligues, fiche joueur.",
  },
] as const;

export const cvOtherProjects = "Application mobile React Native, boutique React et Strapi, API REST Express et MySQL.";

export const cvSkills = [
  { title: "Développement", items: "Python, JavaScript, Java, HTML / CSS, Streamlit, React (notions)" },
  { title: "Data", items: "SQL, SQL Server, pandas, analyse et visualisation de données, bases en statistiques" },
  { title: "Outils", items: "Git / GitHub, Docker, Jupyter Notebook, JupyterLab, Figma, Framer" },
  { title: "Méthodes", items: "Gestion de projet, besoins utilisateurs, analyse concurrentielle, marketing digital" },
] as const;

export const cvAward: CvEntry = {
  title: "Prix national TF1",
  place: "Lauréat, catégorie « Sécurité & Confidentialité »",
  when: "2025",
};

export const cvInterests = [
  "Boxe en club",
  "Moto, conduite et mécanique (permis A2)",
  "Veille sur l’IA, la data et le développement",
] as const;
