/* Source de contenu : le CV fourni par Abdallah. Les données restent séparées
   de leur affichage. Un script classique fonctionne aussi en ouvrant index.html. */
window.resumeData = {
  name: "Abdallah Borji",
  title: "Étudiant en Pré-MSc à Epitech",
  fields: "Développement logiciel, Data, Business & Technology",
  email: "Abdallah.borji@epitech.eu",
  phone: "07 85 82 88 26",
  phoneLink: "+33785828826",
  location: "La Queue-en-Brie (94510)",
  licence: "Permis A2",
  github: "https://github.com/Abdallah94212",
  linkedin: "https://www.linkedin.com/in/abdallah-borji-b566aa343/",
  profile: [
    "Étudiant en Pré-MSc à Epitech, je développe un profil hybride à l’intersection du développement logiciel, de la data et du business.",
    "Mon parcours à Epitech Digital School, complété par une expérience professionnelle en développement logiciel orienté Data, m’a permis d’acquérir une vision à la fois technique et métier des projets numériques.",
    "Curieux et autonome, je m’intéresse particulièrement aux nouvelles technologies et à l’intelligence artificielle. J’apprécie autant la conception technique d’une solution que la compréhension du besoin auquel elle doit répondre.",
    "Cette double compétence Business & Technology me permet d’aborder un projet dans sa globalité : compréhension du besoin, réflexion autour de l’expérience utilisateur, développement de la solution et prise en compte des objectifs métier."
  ],
  experience: [
    {
      date: "Janvier - Juin 2026", role: "Développeur logiciel · Data", company: "I2M Advisory",
      summary: "Rendre les données accessibles et exploitables grâce à des outils adaptés aux besoins métier.",
      points: [
        "Développement d’une interface de traitement, d’analyse et d’exploitation de données destinée aux besoins des clients de l’entreprise.",
        "Développement de solutions en Python et conception d’interfaces interactives avec Streamlit.",
        "Manipulation et transformation de données ; interrogation de bases SQL et SQL Server.",
        "Conteneurisation des environnements applicatifs avec Docker.",
        "Participation à la compréhension du besoin, à la conception, au développement, aux tests et à l’amélioration de la solution.",
        "Environnement de conseil auprès de grands acteurs bancaires, notamment Natixis.",
        "Renforcement de l’autonomie, de l’analyse et de la résolution de problèmes techniques."
      ], tags: ["Python", "Streamlit", "SQL Server", "Docker"]
    },
    {
      date: "2025", role: "Animateur BAFA", company: "Aroéven · Champigny-sur-Marne",
      summary: "Encadrement d’enfants de 3 à 6 ans en centre de loisirs municipal.",
      points: ["Organisation d’activités ludiques et sportives avec l’équipe d’animation.", "Adaptation des activités et responsabilité du bien-être et de la sécurité des enfants.", "Développement de l’écoute, de l’adaptabilité et du travail en équipe."], tags: ["Écoute", "Responsabilité", "Travail en équipe"]
    },
    {
      date: "2020", role: "Stage d’observation en comptabilité", company: "BEC · Pontault-Combault",
      summary: "Découverte du fonctionnement de Borji Expertise Comptable.",
      points: ["Initiation au fonctionnement d’une entreprise et d’un cabinet comptable.", "Respect des procédures, des délais et des consignes.", "Sensibilisation à la confidentialité des informations professionnelles."], tags: ["Organisation", "Confidentialité"]
    }
  ],
  education: [
    { date: "2026 - Aujourd’hui", title: "Pré-MSc", school: "Epitech", description: "Approfondissement des compétences en informatique, développement logiciel et conception de projets techniques, en préparation du MSc." },
    { date: "2024 - 2026", title: "Business & Technology", school: "Epitech Digital School", description: "Technologie, développement, data, marketing, stratégie et gestion de projet : comprendre les enjeux techniques, commerciaux et stratégiques." },
    { date: "2024", title: "Formation générale BAFA", school: "Aroéven Paris · Chennevières-sur-Marne", description: "Formation générale théorique du Brevet d’Aptitude aux Fonctions d’Animateur." },
    { date: "2023", title: "Baccalauréat général", school: "Lycée Samuel Champlain", description: "Chennevières-sur-Marne." }
  ],
  award: { date: "2025", title: "Prix national TF1", category: "Sécurité & Confidentialité", description: "Lauréat du prix national TF1 « Sécurité & Confidentialité »." },
  skills: [
    { title: "Développement", items: ["Python", "JavaScript", "Java", "HTML / CSS", "Streamlit", "React (notions)"] },
    { title: "Data & bases de données", items: ["SQL", "SQL Server", "Traitement et manipulation de données", "Analyse de données", "Visualisation de données", "Interprétation de résultats", "Bases en statistiques"] },
    { title: "Outils & environnements", items: ["Git / GitHub", "Docker", "Figma", "Framer", "Environnements de développement", "Gestion de versions", "Conteneurisation"] },
    { title: "Business & stratégie", items: ["Marketing et marketing digital", "Analyse de marché et analyse concurrentielle", "Analyse SWOT", "Besoins utilisateurs", "Segmentation et compréhension des cibles", "Positionnement d’une offre", "Proposition de valeur", "Expérience et parcours utilisateur", "Stratégie d’entreprise", "Gestion de projet", "Présentation et communication d’un projet", "Réflexion produit", "Enjeux économiques du numérique"] },
    { title: "Compétences transversales", items: ["Esprit analytique", "Autonomie", "Adaptabilité", "Résolution de problèmes", "Travail en équipe", "Curiosité", "Sens des responsabilités", "Organisation", "Communication", "Apprentissage rapide", "Traduction d’un besoin métier en problématique technique"] }
  ],
  languages: [{ name: "Anglais", level: "B2" }, { name: "Espagnol", level: "B1" }],
  interests: [
    { name: "Boxe", keyword: "La régularité.", description: "Une pratique régulière en club en Île-de-France, qui développe rigueur, persévérance et maîtrise de soi. Progresser sur le long terme et savoir se remettre en question." },
    { name: "Moto", keyword: "La précision.", description: "Une passion pour la pratique autant que pour la mécanique, l’ingénierie et les innovations technologiques appliquées à la mobilité." },
    { name: "Technologies & IA", keyword: "La curiosité.", description: "Une veille régulière sur l’intelligence artificielle, le développement et la data pour expérimenter de nouveaux outils et comprendre leurs effets sur les usages et les métiers." }
  ],
  projects: [
    { id: "i2m", name: "De la donnée à l’usage.", category: "Data", type: "Expérience professionnelle", description: "Une interface de traitement, d’analyse et d’exploitation de données développée chez I2M Advisory.", tags: ["Python", "Streamlit", "SQL Server", "Docker"], role: "Développeur logiciel Data, de janvier à juin 2026 : compréhension du besoin, conception, développement, tests et amélioration.", learning: "Mieux comprendre les problématiques métier liées à la donnée et transformer des données techniques en outils exploitables.", note: "Présentation fondée sur le CV. Aucun code, écran ni jeu de données confidentiel n’est publié.", url: "", image: "" }
  ]
};
/* Inventaire des 24 dépôts publics vérifiés le 25 septembre 2026.
   Charger ce fichier après data.js : il complète les projets issus du CV.
   Les champs role et learning restent vides lorsque les sources ne les précisent pas.
   Les technologies décrivent les projets présentés, pas les dépendances du portfolio. */
(function () {
  "use strict";

  var repositoryBase = "https://github.com/Abdallah94212/";

  var repositories = [
    {
      id: "f1", name: "Victory Vision Analytics", category: "Data", type: "Projet GitHub · F1",
      description: "Un tableau de bord historique et un simulateur de Grand Prix qui explorent les résultats de Formule 1 de 2018 à 2023, avec l’influence de la météo.",
      tags: ["Python", "Jupyter", "Streamlit", "Plotly", "scikit-learn"],
      role: "", learning: "", note: "Fonctionnalités et technologies décrites dans le README. Contribution personnelle et apprentissages à préciser.",
      url: repositoryBase + "F1", image: "", featured: true
    },
    {
      id: "scoolize", name: "Scoolize · Prepare & Predict", category: "Web", type: "Projet pédagogique",
      description: "Une démarche produit pour rendre les critères d’admission plus lisibles : recherche UX, parcours candidats et formations, maquettes, puis application web avec API et base de données.",
      tags: ["HTML / CSS / JS", "Node.js", "PostgreSQL", "UX", "Docker"],
      role: "", learning: "", note: "Le README distingue les maquettes de l’implémentation. Le constructeur de compétences pondérées reste une maquette. Contribution personnelle à préciser.",
      url: repositoryBase + "scoolise-", image: "", featured: true
    },
    {
      id: "i2m-website", name: "I2M Advisory · Site vitrine", category: "Web", type: "Projet GitHub",
      description: "Un site vitrine présentant un cabinet de conseil spécialisé dans la donnée pour l’industrie financière : expertises, références, articles, carrières et contact.",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      role: "", learning: "", note: "Ce dépôt de site web est distinct de l’expérience professionnelle Data décrite dans le CV. Le README signale du contenu à compléter avant publication.",
      url: repositoryBase + "i2m-advisory", image: "", featured: true
    },
    {
      id: "soccer-stat", name: "Soccer Stat", category: "Data", type: "Projet GitHub",
      description: "Un tableau de bord de statistiques de football : visualisations par poste, nation et ligue, classement des buteurs et analyse individuelle des joueurs.",
      tags: ["Python", "Streamlit", "pandas", "Matplotlib", "Seaborn"],
      role: "", learning: "", note: "Description tirée du fichier public dashboard.py. Aucun README ne précise le contexte, la contribution personnelle ou les apprentissages.",
      url: repositoryBase + "soccer_stat", image: "", featured: true
    },
    {
      id: "factsheet-app", name: "Factsheet App", category: "Data", type: "Dépôt à documenter",
      description: "Un dépôt Python contenant une application, un module de mapping et un module de requêtes. Son périmètre public reste à documenter.",
      tags: ["Python"], role: "", learning: "",
      note: "Aucun README. Le lien avec une mission professionnelle n’est pas établi. Une présentation détaillée et des captures nécessitent des éléments publics validés.",
      url: repositoryBase + "factsheet-app", image: "", archived: true
    },
    {
      id: "smart-city", name: "Smart City", category: "Web", type: "Application mobile · à documenter",
      description: "Une application Expo et React Native dont l’arborescence comprend un écran de carte, une liste de stations et un écran de détail.",
      tags: ["TypeScript", "JavaScript", "Expo", "React Native"], role: "", learning: "",
      note: "Le README est celui du modèle Expo. Le service de mobilité, le contexte et la contribution personnelle restent à préciser.",
      url: repositoryBase + "smart_city", image: "", archived: true
    },
    {
      id: "sneakers", name: "Sneakers", category: "Web", type: "Projet GitHub · à documenter",
      description: "Un projet organisé en deux parties : un frontend React avec Vite et un backend Strapi.",
      tags: ["JavaScript", "React", "Vite", "Strapi"], role: "", learning: "",
      note: "Les README internes sont ceux des modèles React/Vite et Strapi. Les fonctionnalités métier et la contribution personnelle ne sont pas documentées.",
      url: repositoryBase + "sneakers", image: "", archived: true
    },
    {
      id: "rest-api", name: "REST API", category: "Web", type: "Exercice backend",
      description: "Une API JavaScript utilisant Express et MySQL, avec des routes de lecture, de création, de modification et de suppression d’articles.",
      tags: ["JavaScript", "Express", "MySQL"], role: "", learning: "",
      note: "Les routes sont présentes dans index.js. Leur fonctionnement n’a pas été testé ; le contexte et les apprentissages ne sont pas documentés.",
      url: repositoryBase + "restAPI", image: "", archived: true
    },
    {
      id: "rush2", name: "Rush 2 · Catalogue de meubles", category: "Web", type: "Exercice d’intégration",
      description: "Une page de catalogue de meubles avec navigation, cartes produits, recherche et commandes de filtrage visibles dans le HTML.",
      tags: ["HTML", "CSS", "JavaScript"], role: "", learning: "",
      note: "Le dépôt comprend des images de produits. Ce sont des ressources du site, pas des captures d’écran. Aucun README ne décrit l’exercice.",
      url: repositoryBase + "rush2", image: "", archived: true
    },
    {
      id: "rush1", name: "Rush 1", category: "Apprentissage", type: "Exercice à documenter",
      description: "Un dépôt organisé en deux entrées nommées css et html.",
      tags: ["HTML / CSS · à confirmer"], role: "", learning: "",
      note: "Aucun langage principal affiché par GitHub et aucun README. Le sujet de l’exercice reste à préciser.",
      url: repositoryBase + "rush1", image: "", archived: true
    },
    {
      id: "bootcamp-web", name: "Bootcamp Web", category: "Apprentissage", type: "Exercices",
      description: "Un premier dossier de bootcamp regroupant six tâches, de task01 à task06.",
      tags: ["Shell"], role: "", learning: "", note: "Shell est le langage principal indiqué par GitHub. Aucun README ne décrit les objectifs des tâches.",
      url: repositoryBase + "bootcamp-web", image: "", archived: true
    },
    {
      id: "piscine-msc", name: "Piscine MSc", category: "Apprentissage", type: "Exercices Python",
      description: "Un ensemble de fichiers Python organisés par journée dans le dossier pre-msc, accompagnés de ressources.",
      tags: ["Python"], role: "", learning: "", note: "Aucun README. Les objectifs, le travail personnel et les apprentissages restent à préciser.",
      url: repositoryBase + "piscine_MSc", image: "", archived: true
    },
    {
      id: "day12", name: "Day 12", category: "Apprentissage", type: "Exercices",
      description: "Une série d’exercices répartis entre fichiers JavaScript et dossiers de variantes.",
      tags: ["CSS", "JavaScript"], role: "", learning: "", note: "CSS est le langage principal indiqué par GitHub. Aucun README ne décrit les consignes.",
      url: repositoryBase + "day12", image: "", archived: true
    },
    {
      id: "day11", name: "Day 11", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Une série de fichiers d’exercice JavaScript, de ex_00.js à ex_06.js.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "day11", image: "", archived: true
    },
    {
      id: "day9", name: "Day 9", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Des exercices organisés en dossiers, avec plusieurs variantes.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "day9", image: "", archived: true
    },
    {
      id: "day8", name: "Day 8", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Une série d’exercices JavaScript et de variantes de solutions.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "day8", image: "", archived: true
    },
    {
      id: "day7", name: "Day 7", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Sept fichiers d’exercice JavaScript, de ex_01.js à ex_07.js.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "day7", image: "", archived: true
    },
    {
      id: "day6", name: "Day 6", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Des fichiers d’exercice JavaScript numérotés de ex_01 à ex_04.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "day6", image: "", archived: true
    },
    {
      id: "day04", name: "Day 04", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Une série de fichiers d’exercice JavaScript et une variante nommée ex_01biss.js.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "day04", image: "", archived: true
    },
    {
      id: "day03", name: "Day 03", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Des fichiers d’exercice JavaScript numérotés.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "Day03", image: "", archived: true
    },
    {
      id: "day02", name: "Day 02", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Des fichiers d’exercice JavaScript numérotés, avec une variante de ex_05.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "Day02", image: "", archived: true
    },
    {
      id: "day01", name: "Day 01", category: "Apprentissage", type: "Exercices JavaScript",
      description: "Des exercices JavaScript numérotés, accompagnés d’un fichier texte.",
      tags: ["JavaScript"], role: "", learning: "", note: "Aucun README : le thème et les apprentissages restent à préciser.",
      url: repositoryBase + "day01", image: "", archived: true
    },
    {
      id: "jeu-video", name: "Jeu vidéo", category: "Apprentissage", type: "Dépôt vide",
      description: "Un dépôt public sans fichier disponible au moment de la vérification.",
      tags: [], role: "", learning: "", note: "Aucun projet, langage, README ou visuel ne peut être décrit à partir de ce dépôt vide.",
      url: repositoryBase + "jeu_video", image: "", archived: true
    },
    {
      id: "github-profile", name: "Profil GitHub", category: "Apprentissage", type: "Dépôt de profil vide",
      description: "Le dépôt de configuration du profil GitHub, actuellement vide.",
      tags: [], role: "", learning: "", note: "La description GitHub indique un dépôt de configuration du profil. Aucun fichier disponible.",
      url: repositoryBase + "Abdallah94212", image: "", archived: true
    }
  ];

  window.resumeData.projects = window.resumeData.projects.concat(repositories);
}());
/* Directions graphiques séparées du rendu. Ces compositions représentent les
   thèmes documentés des projets : elles ne prétendent pas être leurs interfaces. */
window.projectVisualData = {
  i2m: {
    kind: "flow", eyebrow: "I2M Advisory / Développement Data",
    title: "Rendre la donnée utile.", labels: ["Données", "Analyse", "Usage"],
    caption: "Schéma de principe · aucun écran client"
  },
  f1: {
    kind: "track", eyebrow: "Victory Vision Analytics",
    title: "F1", detail: "2018 — 2023",
    labels: ["Historique", "Météo", "Simulation"], caption: "Illustration du projet"
  },
  scoolize: {
    kind: "path", eyebrow: "Scoolize",
    title: "Prepare.\nPredict.", labels: ["Candidat", "Parcours", "Formation"],
    caption: "Illustration du parcours candidat"
  },
  "i2m-website": {
    kind: "type", eyebrow: "Conseil / Data / Finance",
    title: "I2M\nAdvisory", labels: ["Expertises", "Références", "Contact"],
    caption: "Composition typographique · site vitrine"
  },
  "soccer-stat": {
    kind: "pitch", eyebrow: "Soccer Stat",
    title: "Lire le jeu.", labels: ["Postes", "Nations", "Ligues"],
    caption: "Illustration du projet"
  }
};
/* Visuels construits avec des éléments natifs, sans bibliothèque ni ressource
   distante. Une capture locale, si fournie, remplace automatiquement le dessin. */
(function () {
  "use strict";

  function node(tag, className, text) {
    var result = document.createElement(tag);
    result.className = className;
    if (text) result.textContent = text;
    return result;
  }

  window.createProjectVisual = function (item) {
    var config = (window.projectVisualData || {})[item.id];
    var hasImage = typeof item.image === "string" && /^assets\/images\/[A-Za-z0-9/_-]+\.(?:avif|webp|png|jpe?g|gif|svg)$/i.test(item.image);
    if (!config && !hasImage) config = {
      kind: "archive", eyebrow: item.category || "Apprentissage", title: "{ }",
      labels: [item.tags[0] || "Dépôt public"], caption: "Repère graphique du dépôt"
    };
    var kind = hasImage ? "screenshot" : config.kind;
    var figure = node("figure", "project-visual visual-" + kind);
    var surface = node("div", "project-visual-surface");
    if (hasImage) {
      var chrome = node("div", "browser-chrome", item.name);
      chrome.setAttribute("aria-hidden", "true");
      surface.appendChild(chrome);
      var image = node("img", "project-image");
      image.src = item.image;
      image.alt = item.imageAlt || "Capture du projet " + item.name;
      image.width = Number.isInteger(item.imageWidth) && item.imageWidth > 0 ? item.imageWidth : 1600;
      image.height = Number.isInteger(item.imageHeight) && item.imageHeight > 0 ? item.imageHeight : 1000;
      image.loading = "lazy";
      image.decoding = "async";
      surface.appendChild(image);
    } else {
      /* Le dessin est décoratif : le titre et la description lisibles juste
         après apportent déjà toutes les informations nécessaires. */
      surface.setAttribute("aria-hidden", "true");
      surface.appendChild(node("span", "visual-eyebrow", config.eyebrow));
      var drawing = node("div", "visual-drawing");
      drawing.appendChild(node("span", "visual-shape"));
      drawing.appendChild(node("strong", "visual-title", config.title));
      if (config.detail) drawing.appendChild(node("span", "visual-detail", config.detail));
      surface.appendChild(drawing);
      var labels = node("div", "visual-labels");
      config.labels.forEach(function (label) { labels.appendChild(node("span", "", label)); });
      surface.appendChild(labels);
    }
    var reflection = node("div", "project-reflection");
    reflection.setAttribute("aria-hidden", "true");
    surface.appendChild(reflection);
    figure.appendChild(surface);
    figure.appendChild(node("figcaption", "project-visual-caption", hasImage ? "Capture du projet" : config.caption));
    return figure;
  };
}());
/* Un seul contenu, deux présentations : le portfolio et le CV imprimable.
   textContent garde les descriptions et les métadonnées GitHub comme du texte. */
(function () {
  "use strict";

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function list(items, className) {
    var node = element("ul", className);
    (items || []).forEach(function (item) {
      node.appendChild(element("li", "", item));
    });
    return node;
  }

  function webAddress(value) {
    if (!value) return "";
    try {
      var address = new URL(value);
      return address.protocol === "https:" || address.protocol === "http:" ? address.href : "";
    } catch (error) {
      return "";
    }
  }

  function externalLink(label, address, className) {
    var link = element("a", className, label);
    link.href = address;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", label + " (nouvel onglet)");
    return link;
  }

  function fill(id, callback) {
    var target = document.getElementById(id);
    if (!target) return;
    target.replaceChildren();
    callback(target);
  }

  function contactLinks(data, target) {
    var email = element("a", "contact-link contact-email", data.email);
    email.href = "mailto:" + data.email;
    target.appendChild(email);
    var phone = element("a", "contact-link", data.phone);
    phone.href = "tel:" + data.phoneLink;
    target.appendChild(phone);
    if (webAddress(data.github)) {
      target.appendChild(externalLink("GitHub", webAddress(data.github), "contact-link"));
    }
    if (webAddress(data.linkedin)) {
      target.appendChild(externalLink("LinkedIn", webAddress(data.linkedin), "contact-link"));
    }
  }

  function experienceArticle(item, index, expandable) {
    var article = element(expandable ? "details" : "article", "experience-item");
    if (expandable) {
      article.open = index === 0;
      article.classList.add("reveal");
    }
    var heading = element(expandable ? "summary" : "div", "experience-summary");
    heading.appendChild(element("span", "item-date", item.date));
    var identity = element(expandable ? "span" : "div", "item-identity");
    identity.appendChild(element(expandable ? "span" : "h3", "item-role", item.role));
    identity.appendChild(element(expandable ? "span" : "p", "item-company", item.company));
    heading.appendChild(identity);
    article.appendChild(heading);
    var body = element("div", "experience-body");
    body.appendChild(element("p", "experience-intro", item.summary));
    body.appendChild(list(item.points, "experience-points"));
    body.appendChild(list(item.tags, "tag-list"));
    article.appendChild(body);
    return article;
  }

  function educationArticle(item) {
    var article = element("article", "education-item");
    article.appendChild(element("p", "item-date", item.date));
    var body = element("div", "education-body");
    body.appendChild(element("h3", "", item.title));
    body.appendChild(element("p", "item-school", item.school));
    body.appendChild(element("p", "", item.description));
    article.appendChild(body);
    return article;
  }

  function projectArticle(item) {
    var article = element("article", "project-card");
    if (item.id === "i2m") article.classList.add("project-featured");
    if (item.featured) article.classList.add("project-selected");
    if (item.archived) article.classList.add("project-archived");
    else article.classList.add("reveal");
    article.dataset.category = item.category || "Apprentissage";
    if (item.id) article.dataset.projectId = item.id;
    if (window.createProjectVisual) article.appendChild(window.createProjectVisual(item));
    var copy = element("div", "project-copy");
    var top = element("div", "project-topline");
    top.appendChild(element("span", "project-category", item.category || "Apprentissage"));
    top.appendChild(element("span", "project-type", item.type));
    copy.appendChild(top);
    copy.appendChild(element("h3", "", item.name));
    copy.appendChild(element("p", "project-description", item.description));
    copy.appendChild(list(item.tags, "tag-list"));
    var details = element("details", "project-details");
    details.appendChild(element("summary", "", "Comprendre le projet"));
    var detailsBody = element("div", "project-details-body");
    [["Mon rôle", item.role], ["Ce que j’en retiens", item.learning]].forEach(function (entry) {
      if (!entry[1]) return;
      var paragraph = element("p");
      paragraph.appendChild(element("strong", "", entry[0] + " : "));
      paragraph.appendChild(document.createTextNode(entry[1]));
      detailsBody.appendChild(paragraph);
    });
    if (item.note) detailsBody.appendChild(element("p", "project-note", item.note));
    details.appendChild(detailsBody);
    copy.appendChild(details);
    if (webAddress(item.url)) {
      var link = externalLink("Voir le dépôt ↗", webAddress(item.url), "project-link");
      link.setAttribute("aria-label", "Voir le dépôt " + item.name + " (nouvel onglet)");
      copy.appendChild(link);
    }
    article.appendChild(copy);
    return article;
  }

  function cvSection(target, title) {
    var section = element("section", "cv-section");
    section.appendChild(element("h2", "", title));
    target.appendChild(section);
    return section;
  }

  function renderCV(data) {
    fill("cv-content", function (target) {
      var header = element("header", "cv-header");
      header.appendChild(element("p", "cv-eyebrow", "Curriculum vitæ"));
      header.appendChild(element("h1", "", data.name));
      header.appendChild(element("p", "cv-title", data.title));
      header.appendChild(element("p", "", data.fields));
      header.appendChild(element("p", "cv-location", data.location + " · " + data.licence));
      var links = element("div", "cv-contact");
      contactLinks(data, links);
      header.appendChild(links);
      target.appendChild(header);

      var profile = cvSection(target, "Profil");
      data.profile.forEach(function (paragraph) { profile.appendChild(element("p", "", paragraph)); });
      var experience = cvSection(target, "Expériences professionnelles");
      data.experience.forEach(function (item, index) { experience.appendChild(experienceArticle(item, index, false)); });
      var education = cvSection(target, "Formation");
      data.education.forEach(function (item) { education.appendChild(educationArticle(item)); });
      var skills = cvSection(target, "Compétences");
      data.skills.forEach(function (item) {
        var group = element("div", "cv-skill-group");
        group.appendChild(element("h3", "", item.title));
        group.appendChild(element("p", "", item.items.join(", ")));
        skills.appendChild(group);
      });
      if (data.award) {
        var award = cvSection(target, "Distinction");
        award.appendChild(element("h3", "", data.award.title + " · " + data.award.date));
        award.appendChild(element("p", "", data.award.description));
      }
      var languages = cvSection(target, "Langues");
      languages.appendChild(element("p", "", data.languages.map(function (item) {
        return item.name + " : " + item.level;
      }).join(" · ")));
      var interests = cvSection(target, "Centres d’intérêt");
      data.interests.forEach(function (item) {
        var paragraph = element("p");
        paragraph.appendChild(element("strong", "", item.name + " : "));
        paragraph.appendChild(document.createTextNode(item.description));
        interests.appendChild(paragraph);
      });
    });
    var printButton = document.getElementById("print-cv");
    if (printButton) {
      printButton.hidden = false;
      printButton.addEventListener("click", function () { window.print(); });
    }
  }

  function render() {
    var data = window.resumeData;
    if (!data) return;
    fill("profile-copy", function (target) {
      data.profile.forEach(function (paragraph) { target.appendChild(element("p", "", paragraph)); });
    });
    fill("experience-list", function (target) {
      data.experience.forEach(function (item, index) { target.appendChild(experienceArticle(item, index, true)); });
    });
    fill("education-list", function (target) {
      data.education.forEach(function (item) { target.appendChild(educationArticle(item)); });
    });
    fill("skill-list", function (target) {
      data.skills.forEach(function (item, index) {
        var group = element("details", "skill-group reveal");
        group.open = index < 2;
        var summary = element("summary");
        summary.appendChild(element("span", "skill-title", item.title));
        var count = element("span", "skill-count", item.items.length < 10 ? "0" + item.items.length : item.items.length);
        count.dataset.count = String(item.items.length);
        count.setAttribute("aria-hidden", "true");
        summary.appendChild(count);
        group.appendChild(summary);
        group.appendChild(list(item.items, "skill-items"));
        target.appendChild(group);
      });
    });
    fill("language-list", function (target) {
      data.languages.forEach(function (item) {
        var row = element("div", "language-item");
        row.appendChild(element("span", "", item.name));
        row.appendChild(element("span", "language-level", item.level));
        target.appendChild(row);
      });
    });
    fill("interest-list", function (target) {
      data.interests.forEach(function (item, index) {
        var article = element("article", "interest-card reveal");
        var number = element("span", "interest-number", "0" + (index + 1));
        number.setAttribute("aria-hidden", "true");
        article.appendChild(number);
        article.appendChild(element("h3", "", item.name));
        article.appendChild(element("p", "interest-keyword", item.keyword));
        article.appendChild(element("p", "", item.description));
        target.appendChild(article);
      });
    });
    var archive = document.getElementById("archive-list");
    if (archive) archive.replaceChildren();
    fill("project-list", function (target) {
      data.projects.forEach(function (item) {
        var destination = item.archived && archive ? archive : target;
        destination.appendChild(projectArticle(item));
      });
    });
    fill("contact-links", function (target) { contactLinks(data, target); });
    renderCV(data);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render, { once: true });
  else render();
}());
/* La préférence système s’applique jusqu’au choix explicite de l’utilisateur. */
(function () {
  "use strict";
  var storageKey = "resume-theme";
  var preference = null;
  var system = window.matchMedia("(prefers-color-scheme: dark)");
  try {
    var saved = window.localStorage.getItem(storageKey);
    if (saved === "dark" || saved === "light") preference = saved;
  } catch (error) { /* Le thème fonctionne aussi quand le stockage est bloqué. */ }

  function update() {
    var current = preference || (system.matches ? "dark" : "light");
    var dark = current === "dark";
    document.documentElement.dataset.theme = current;
    document.documentElement.style.colorScheme = current;
    var toggle = document.getElementById("theme-toggle");
    var label = document.getElementById("theme-label");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(dark));
      toggle.setAttribute("aria-label", "Activer le thème " + (dark ? "clair" : "sombre"));
      toggle.title = "Activer le thème " + (dark ? "clair" : "sombre");
    }
    if (label) label.textContent = dark ? "Mode clair" : "Mode sombre";
  }
  function init() {
    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.hidden = false;
      toggle.addEventListener("click", function () {
        preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        try { window.localStorage.setItem(storageKey, preference); } catch (error) { /* Préférence limitée à cette visite. */ }
        update();
      });
    }
    update();
  }
  function systemChanged() { if (!preference) update(); }
  if (system.addEventListener) system.addEventListener("change", systemChanged);
  else system.addListener(systemChanged);
  update();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
/* Le menu reste disponible sans JavaScript. Le repli mobile est progressif. */
(function () {
  "use strict";
  function init() {
    var toggle = document.getElementById("menu-toggle");
    var navigation = document.getElementById("primary-nav");
    if (!toggle || !navigation) return;
    var mobile = window.matchMedia("(max-width: 767px)");
    var expanded = false;
    var links = Array.from(navigation.querySelectorAll('a[href^="#"]'));

    function setOpen(open, returnFocus) {
      expanded = open && mobile.matches;
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.setAttribute("aria-label", expanded ? "Fermer le menu" : "Ouvrir le menu");
      navigation.hidden = mobile.matches && !expanded;
      navigation.classList.toggle("is-open", expanded);
      document.documentElement.classList.toggle("menu-open", expanded);
      if (returnFocus) toggle.focus();
      /* Dans le HTML, le bouton suit les liens. Donner le focus au premier
         lien permet donc de parcourir le menu directement avec Tab. */
      else if (expanded && links.length) links[0].focus({ preventScroll: true });
    }

    function syncViewport() {
      toggle.hidden = !mobile.matches;
      setOpen(false, false);
    }
    toggle.addEventListener("click", function () { setOpen(!expanded, false); });
    links.forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false, false); });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && expanded) setOpen(false, true);
    });
    document.addEventListener("click", function (event) {
      if (expanded && !navigation.contains(event.target) && !toggle.contains(event.target)) setOpen(false, false);
    });
    if (mobile.addEventListener) mobile.addEventListener("change", syncViewport);
    else mobile.addListener(syncViewport);
    syncViewport();

    if (!("IntersectionObserver" in window)) return;
    /* Le menu représente quatre grandes parties. Les sections intermédiaires
       conservent le dernier repère atteint, au lieu d’effacer le lien actif. */
    var sections = links.map(function (link) {
      return document.getElementById(link.getAttribute("href").slice(1));
    }).filter(Boolean);

    function updateCurrentSection() {
      var current = "";
      var readingLine = window.innerHeight - Math.round(window.innerHeight * 0.65);
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= readingLine) current = section.id;
      });
      links.forEach(function (link) {
        var active = link.getAttribute("href") === "#" + current;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }

    /* L’observateur se déclenche quand une partie traverse la zone de lecture.
       Pas d’écouteur scroll ni de calcul répété pendant tout le défilement. */
    var observer = null;
    function observeSections() {
      if (observer) observer.disconnect();
      /* Des pixels calculés à partir de la hauteur gardent la même zone de
         lecture sur un écran très large comme sur un téléphone vertical. */
      var topMargin = Math.round(window.innerHeight * 0.15);
      var bottomMargin = Math.round(window.innerHeight * 0.65);
      observer = new IntersectionObserver(updateCurrentSection, {
        rootMargin: "-" + topMargin + "px 0px -" + bottomMargin + "px 0px", threshold: 0
      });
      sections.forEach(function (section) { observer.observe(section); });
      updateCurrentSection();
    }
    window.addEventListener("resize", observeSections);
    window.addEventListener("pageshow", updateCurrentSection);
    observeSections();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
/* Les filtres portent également sur les dépôts rangés dans les archives. */
(function () {
  "use strict";
  function init() {
    var filters = document.getElementById("project-filters");
    var count = document.getElementById("project-count");
    if (!filters || !count) return;
    var cards = Array.from(document.querySelectorAll(".project-card"));
    var projectList = document.getElementById("project-list");
    var archive = document.getElementById("project-archive");
    var archiveList = document.getElementById("archive-list");
    var categories = ["Tous", "Data", "Web", "Apprentissage"];
    filters.replaceChildren();
    filters.setAttribute("aria-label", "Filtrer les projets par domaine");
    count.setAttribute("aria-live", "polite");
    count.setAttribute("aria-atomic", "true");

    function filter(category, interaction) {
      if (projectList) projectList.classList.toggle("is-filtered", category !== "Tous");
      var total = 0;
      var archived = 0;
      var visibleCards = [];
      var newlyVisible = [];
      cards.forEach(function (card) {
        var matches = category === "Tous" || card.dataset.category === category;
        if (matches && card.hidden) newlyVisible.push(card);
        card.hidden = !matches;
        if (matches) {
          total += 1;
          visibleCards.push(card);
          if (archiveList && archiveList.contains(card)) archived += 1;
        }
      });
      filters.querySelectorAll("button").forEach(function (button) {
        var active = button.dataset.category === category;
        button.setAttribute("aria-pressed", String(active));
        button.classList.toggle("is-active", active);
      });
      if (archive) {
        archive.hidden = archived === 0;
        if (category !== "Tous" && total === archived && archived > 0) archive.open = true;
      }
      var projectWord = total > 1 ? "projets" : "projet";
      if (total === 0) count.textContent = "Aucun projet dans cette catégorie.";
      else count.textContent = total + " " + projectWord + (category === "Tous" ? " au total" : " dans cette catégorie") +
        (archived ? ", dont " + archived + " dans « Tous les dépôts »." : ".");
      /* Le filtrage fonctionne seul. Les scripts de mouvement écoutent cet
         événement facultatif après que l’état HTML a été mis à jour. */
      if (interaction) document.dispatchEvent(new CustomEvent("portfolio:projects-filtered", {
        detail: { visibleCards: visibleCards, newlyVisible: newlyVisible, animate: interaction.detail > 0 }
      }));
    }

    categories.forEach(function (category) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "filter-button";
      button.textContent = category;
      button.dataset.category = category;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", function (event) { filter(category, event); });
      filters.appendChild(button);
    });
    filter("Tous");
    filters.hidden = false;
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
/* Aucun service d’envoi : le formulaire prépare un message à envoyer soi-même. */
(function () {
  "use strict";
  function init() {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("contact-status");
    var draftLink = document.getElementById("email-draft");
    var copyButton = document.getElementById("copy-message");
    if (!form || !status || !draftLink || !copyButton || !window.resumeData) return;
    var prepared = null;
    var fallback = null;
    copyButton.type = "button";

    function clearFallback() {
      if (fallback) fallback.remove();
      fallback = null;
    }
    form.addEventListener("input", function (event) {
      if (typeof event.target.setCustomValidity === "function") event.target.setCustomValidity("");
      if (!prepared) return;
      prepared = null;
      draftLink.hidden = true;
      draftLink.removeAttribute("href");
      copyButton.hidden = true;
      status.textContent = "";
      clearFallback();
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var fields = ["name", "email", "subject", "message"];
      var values = {};
      fields.forEach(function (name) {
        var input = form.elements.namedItem(name);
        if (!input) return;
        values[name] = input.value.trim();
        input.setCustomValidity(input.required && !values[name] ? "Veuillez renseigner ce champ." : "");
      });
      if (!form.reportValidity()) return;
      var body = "De : " + values.name + "\nAdresse de réponse : " + values.email + "\n\n" + values.message;
      prepared = "À : " + window.resumeData.email + "\nObjet : " + values.subject + "\n\n" + body;
      draftLink.href = "mailto:" + window.resumeData.email + "?subject=" + encodeURIComponent(values.subject) + "&body=" + encodeURIComponent(body);
      draftLink.textContent = "Ouvrir ma messagerie";
      draftLink.hidden = false;
      copyButton.hidden = false;
      clearFallback();
      status.textContent = "Votre message est prêt. Ouvrez votre messagerie pour l’envoyer.";
    });

    function showManualCopy() {
      clearFallback();
      fallback = document.createElement("div");
      fallback.className = "copy-fallback";
      var label = document.createElement("label");
      label.htmlFor = "message-to-copy";
      label.textContent = "Message à copier";
      var textarea = document.createElement("textarea");
      textarea.id = "message-to-copy";
      textarea.readOnly = true;
      textarea.rows = 8;
      textarea.value = prepared;
      fallback.appendChild(label);
      fallback.appendChild(textarea);
      form.appendChild(fallback);
      status.textContent = "Copiez le texte sélectionné, puis collez-le dans votre messagerie pour l’envoyer.";
      textarea.focus();
      textarea.select();
    }
    copyButton.addEventListener("click", async function () {
      if (!prepared) return;
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        showManualCopy();
        return;
      }
      try {
        await navigator.clipboard.writeText(prepared);
        clearFallback();
        status.textContent = "Le message a été copié. Collez-le dans votre messagerie pour l’envoyer.";
      } catch (error) { showManualCopy(); }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
/* Les éléments sont lisibles sans JS. L’observateur révèle chaque élément une
   seule fois ; les filtres peuvent ensuite faire apparaître leurs résultats. */
(function () {
  "use strict";
  function init() {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    var elements = Array.from(document.querySelectorAll(".reveal"));
    var observer = null;
    var filterAnimations = new Map();

    function duration(token, fallback) {
      var value = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
      var number = parseFloat(value);
      if (!Number.isFinite(number)) return fallback;
      return value.endsWith("ms") ? number : number * 1000;
    }

    function cancelFilter(element) {
      var animation = filterAnimations.get(element);
      if (!animation) return;
      animation.cancel();
      filterAnimations.delete(element);
    }

    function reveal(element, delay, immediately) {
      if (observer) observer.unobserve(element);
      element.style.setProperty("--reveal-delay", Math.min(200, Math.max(0, delay)) + "ms");
      if (immediately) element.classList.add("reveal-immediate");
      element.classList.remove("reveal-pending");
      element.classList.add("is-visible");
    }

    function revealAll() {
      if (observer) observer.disconnect();
      filterAnimations.forEach(function (animation, element) { cancelFilter(element); });
      elements.forEach(function (element) { reveal(element, 0, true); });
    }

    function setup() {
      if (reduced.matches || !("IntersectionObserver" in window)) {
        revealAll();
        return;
      }
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(function (entries) {
        var incoming = entries.filter(function (entry) {
          return entry.isIntersecting && !entry.target.hidden && !entry.target.classList.contains("is-visible");
        });
        incoming.sort(function (first, second) { return first.boundingClientRect.top - second.boundingClientRect.top; });
        var stagger = duration("--stagger", 70);
        incoming.forEach(function (entry, index) {
          /* Le décalage ne dépasse jamais 200 ms, même pour une longue liste. */
          reveal(entry.target, index * stagger, false);
        });
      }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
      elements.forEach(function (element) {
        if (element.classList.contains("is-visible")) return;
        var bounds = element.getBoundingClientRect();
        /* Une arrivée par ancre ou une restauration du scroll ne masque pas
           le contenu déjà affiché. Les éléments hidden restent observés. */
        if (!element.closest("[hidden]") && bounds.height && bounds.top < window.innerHeight) {
          reveal(element, 0, true);
          return;
        }
        element.classList.add("reveal-pending");
        observer.observe(element);
      });
    }

    document.addEventListener("portfolio:projects-filtered", function (event) {
      var detail = event.detail;
      if (!detail) return;
      var matches = new Set(detail.visibleCards);
      filterAnimations.forEach(function (animation, element) {
        if (!matches.has(element) || !detail.animate || reduced.matches) cancelFilter(element);
      });
      var incoming = new Set(detail.newlyVisible);
      var easing = getComputedStyle(document.documentElement).getPropertyValue("--ease").trim() || "cubic-bezier(.23, 1, .32, 1)";

      detail.visibleCards.forEach(function (element) {
        var pending = element.classList.contains("reveal-pending");
        /* Au clavier, le résultat est immédiatement présent. On ne décale
           jamais une interaction en attendant la fin d’une animation. */
        if (!detail.animate || reduced.matches) {
          reveal(element, 0, true);
          return;
        }
        var bounds = element.getBoundingClientRect();
        if (!bounds.height || bounds.top >= window.innerHeight || bounds.bottom <= 0) return;
        if (!pending && !incoming.has(element)) return;

        /* L’observation de scroll cède la place au filtre : une seule entrée
           de 180 ms, jamais deux effets simultanés sur la même carte. */
        reveal(element, 0, true);
        if (!element.animate) return;
        cancelFilter(element);
        var animation = element.animate([
          { opacity: 0, transform: "translateY(8px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], { duration: duration("--duration-filter", 180), easing: easing });
        filterAnimations.set(element, animation);
        function forget() {
          if (filterAnimations.get(element) === animation) filterAnimations.delete(element);
        }
        animation.onfinish = forget;
        animation.oncancel = forget;
      });
    });

    document.addEventListener("focusin", function (event) {
      var element = event.target.closest(".reveal, .project-card");
      /* On révèle aussi les éventuels parents pour ne jamais laisser un lien
         focalisé dans une section transparente ou encore en déplacement. */
      while (element) {
        cancelFilter(element);
        reveal(element, 0, true);
        element = element.parentElement ? element.parentElement.closest(".reveal") : null;
      }
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) filterAnimations.forEach(function (animation, element) { cancelFilter(element); });
    });
    window.addEventListener("beforeprint", revealAll);
    if (reduced.addEventListener) reduced.addEventListener("change", setup);
    else reduced.addListener(setup);
    setup();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
/* Une profondeur discrète accompagne le pointeur sur la carte de formation.
   La souris donne la cible ; la transition CSS assure la douceur du mouvement. */
(function () {
  "use strict";

  function init() {
    var stage = document.getElementById("hero-stage");
    var card = document.getElementById("school-card");
    var reflection = document.getElementById("school-reflection");
    if (!stage || !card) return;

    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var visible = true;
    var frame = 0;
    var pointer = null;

    function canMove() {
      return finePointer.matches && !reducedMotion.matches && visible && !document.hidden;
    }

    function reset() {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      pointer = null;
      card.style.removeProperty("transform");
      if (reflection) reflection.style.removeProperty("transform");
    }

    function draw() {
      frame = 0;
      if (!pointer || !canMove()) {
        reset();
        return;
      }

      /* On mesure le cadre immobile, pas la carte inclinée : cela évite que
         son propre mouvement modifie le calcul à l’image suivante. */
      var bounds = stage.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      var x = Math.max(-1, Math.min(1, (pointer.x - bounds.left) / bounds.width * 2 - 1));
      var y = Math.max(-1, Math.min(1, (pointer.y - bounds.top) / bounds.height * 2 - 1));

      /* Les amplitudes restent limitées à 4 degrés et 16 pixels.
         Seul transform change : aucune taille ni position de mise en page. */
      card.style.transform = "perspective(1000px) rotate(-4deg) rotateX(" + (-y * 4).toFixed(2) + "deg) rotateY(" + (x * 4).toFixed(2) + "deg)";
      if (reflection) reflection.style.transform = "translate3d(" + (x * 16).toFixed(2) + "px, " + (y * 16).toFixed(2) + "px, 0)";
    }

    stage.addEventListener("pointermove", function (event) {
      if (event.pointerType === "touch" || !canMove()) return;
      pointer = { x: event.clientX, y: event.clientY };
      /* Plusieurs événements peuvent arriver pendant une seule image.
         On ne programme qu’un rendu, sans boucle d’animation permanente. */
      if (!frame) frame = window.requestAnimationFrame(draw);
    }, { passive: true });
    stage.addEventListener("pointerleave", reset);
    stage.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("resize", reset);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) reset();
    });

    function watchPreference(query) {
      if (query.addEventListener) query.addEventListener("change", reset);
      else query.addListener(reset);
    }
    watchPreference(finePointer);
    watchPreference(reducedMotion);

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (!visible) reset();
      }, { threshold: 0 });
      observer.observe(stage);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
/* La profondeur appartient au visuel, jamais au texte de la carte.
   Les mouvements dépendent du pointeur et n’utilisent aucune boucle continue. */
(function () {
  "use strict";
  function init() {
    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var visuals = new Map();

    function reset(state) {
      if (state.frame) window.cancelAnimationFrame(state.frame);
      state.frame = 0;
      state.pointer = null;
      state.visual.classList.remove("is-tilting");
      state.surface.style.removeProperty("transform");
      if (state.reflection) state.reflection.style.removeProperty("transform");
    }
    function resetAll() { visuals.forEach(reset); }

    function canMove(state) {
      return finePointer.matches && !reducedMotion.matches && !document.hidden && state.visible && !state.card.hidden;
    }
    function draw(state) {
      state.frame = 0;
      if (!canMove(state) || !state.pointer) {
        reset(state);
        return;
      }
      /* Le cadre extérieur ne tourne pas : ses mesures restent stables. */
      var bounds = state.visual.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      var x = Math.max(-1, Math.min(1, (state.pointer.x - bounds.left) / bounds.width * 2 - 1));
      var y = Math.max(-1, Math.min(1, (state.pointer.y - bounds.top) / bounds.height * 2 - 1));
      state.visual.classList.add("is-tilting");
      state.surface.style.transform = "perspective(1000px) rotateX(" + (-y * 3).toFixed(2) + "deg) rotateY(" + (x * 3).toFixed(2) + "deg)";
      if (state.reflection) state.reflection.style.transform = "translate3d(" + (x * 12).toFixed(2) + "px, " + (y * 12).toFixed(2) + "px, 0)";
    }

    document.querySelectorAll(".project-card:not(.project-archived) .project-visual").forEach(function (visual) {
      var surface = visual.querySelector(".project-visual-surface");
      var card = visual.closest(".project-card");
      if (!surface || !card) return;
      var state = {
        visual: visual, surface: surface, card: card,
        reflection: visual.querySelector(".project-reflection"),
        visible: true, frame: 0, pointer: null
      };
      visuals.set(visual, state);
      visual.addEventListener("pointermove", function (event) {
        if (event.pointerType === "touch") {
          reset(state);
          return;
        }
        if (!canMove(state)) return;
        state.pointer = { x: event.clientX, y: event.clientY };
        /* Les événements d’une même image partagent un seul rendu. */
        if (!state.frame) state.frame = window.requestAnimationFrame(function () { draw(state); });
      }, { passive: true });
      visual.addEventListener("pointerdown", function (event) {
        if (event.pointerType === "touch") reset(state);
      }, { passive: true });
      visual.addEventListener("pointerleave", function () { reset(state); });
      visual.addEventListener("pointercancel", function () { reset(state); });
      card.addEventListener("focusin", function () { reset(state); });
    });

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var state = visuals.get(entry.target);
          state.visible = entry.isIntersecting;
          if (!state.visible) reset(state);
        });
      }, { threshold: 0 });
      visuals.forEach(function (state) { observer.observe(state.visual); });
    }

    function watchPreference(query) {
      if (query.addEventListener) query.addEventListener("change", resetAll);
      else query.addListener(resetAll);
    }
    watchPreference(finePointer);
    watchPreference(reducedMotion);
    document.addEventListener("portfolio:projects-filtered", resetAll);
    document.addEventListener("visibilitychange", function () { if (document.hidden) resetAll(); });
    window.addEventListener("blur", resetAll);
    window.addEventListener("resize", resetAll);
    window.addEventListener("beforeprint", resetAll);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
/* Ces nombres comptent les entrées réelles du CV, sans mesurer un niveau.
   Le renderer écrit la valeur finale : ce script ajoute seulement sa montée. */
(function () {
  "use strict";
  function init() {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var counters = new Map();
    var active = new Set();
    var observer = null;
    var frame = 0;

    var durationToken = getComputedStyle(document.documentElement).getPropertyValue("--duration-count").trim();
    var duration = parseFloat(durationToken);
    if (!Number.isFinite(duration) || duration <= 0) duration = 650;
    else if (!durationToken.endsWith("ms")) duration *= 1000;

    document.querySelectorAll(".skill-count[data-count]").forEach(function (element) {
      var target = Number(element.dataset.count);
      if (!Number.isInteger(target) || target < 0) return;
      var finalText = element.textContent.trim();
      /* Les chiffres ont une chasse constante ; la place du nombre final est
         réservée pendant la montée de 00 à sa valeur réelle. */
      element.style.fontVariantNumeric = "tabular-nums";
      element.style.minInlineSize = Math.max(2, finalText.length) + "ch";
      element.style.whiteSpace = "nowrap";
      element.style.textAlign = "right";
      counters.set(element, {
        element: element, target: target, finalText: finalText,
        digits: finalText.length, startedAt: 0, played: false
      });
    });
    if (!counters.size) return;

    function finish(state) {
      state.element.textContent = state.finalText;
      state.played = true;
      active.delete(state);
      if (observer) observer.unobserve(state.element);
      if (!active.size && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    }
    function finishActive() { active.forEach(finish); }
    function finishAll() {
      counters.forEach(finish);
      if (observer) observer.disconnect();
    }

    function draw(timestamp) {
      frame = 0;
      if (reducedMotion.matches || document.hidden) {
        finishActive();
        return;
      }
      active.forEach(function (state) {
        var progress = Math.min(1, (timestamp - state.startedAt) / duration);
        if (progress >= 1) {
          finish(state);
          return;
        }
        var text = String(Math.floor(state.target * progress)).padStart(state.digits, "0");
        /* Le calcul suit l’écran, mais le texte n’est réécrit qu’au changement
           de chiffre : quelques écritures pour chaque groupe de compétences. */
        if (state.element.textContent !== text) state.element.textContent = text;
      });
      /* Il n’existe qu’une boucle partagée, arrêtée dès le dernier compteur. */
      if (active.size) frame = window.requestAnimationFrame(draw);
    }

    function start(state) {
      if (state.played) return;
      if (reducedMotion.matches || document.hidden || state.target === 0) {
        finish(state);
        return;
      }
      state.played = true;
      state.startedAt = performance.now();
      active.add(state);
      if (!frame) frame = window.requestAnimationFrame(draw);
    }

    if ("IntersectionObserver" in window && !reducedMotion.matches) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var state = counters.get(entry.target);
          if (entry.isIntersecting) start(state);
          else if (active.has(state)) finish(state);
        });
      }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
      counters.forEach(function (state) { observer.observe(state.element); });
    }

    function preferencesChanged() { if (reducedMotion.matches) finishAll(); }
    if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", preferencesChanged);
    else reducedMotion.addListener(preferencesChanged);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) finishActive();
    });
    document.addEventListener("focusin", function (event) {
      var group = event.target.closest(".skill-group");
      if (!group) return;
      counters.forEach(function (state) {
        if (group.contains(state.element)) finish(state);
      });
    });
    window.addEventListener("beforeprint", finishAll);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
}());
