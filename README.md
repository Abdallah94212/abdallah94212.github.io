# Portfolio d’Abdallah Borji

Portfolio et CV en ligne d’Abdallah Borji, étudiant en Pré-MSc à Epitech : développement logiciel, data et web.

Le site est construit avec **Astro** : chaque page est générée en HTML statique au moment du build, puis enrichie par un peu de JavaScript pour le mouvement. Sans JavaScript, tout le contenu reste lisible, et l’entrée en scène de l’accueil (en CSS) se joue quand même.

## Lancer le projet

Prérequis : Node.js 22.12 ou plus récent.

```bash
npm install        # une seule fois
npm run dev        # serveur de développement : http://localhost:4321
npm run build      # génère le site final dans dist/
npm run preview    # sert dist/ pour vérifier le build
npm run check      # vérification TypeScript et Astro
npm run validate   # validation HTML des pages générées (après un build)
npm run cv:pdf     # build, puis génère le CV en PDF (public/CV-Abdallah-Borji.pdf)
```

Le site est publié sur GitHub Pages, à l’adresse https://abdallah94212.github.io/ : chaque push sur `main` le reconstruit et le met en ligne (`.github/workflows/deploy.yml`, environ deux minutes). Pour changer d’adresse, modifier `site` dans `astro.config.mjs` (URL canoniques, aperçu des liens partagés, lien du portfolio dans le CV), puis régénérer le PDF du CV.

## Ce que contient le site

| Page | Rôle |
| --- | --- |
| `/` | Accueil : présentation, projets, parcours, compétences, centres d’intérêt et contact. |
| `/projets/<slug>/` | Une étude de cas par projet, générée à partir des données. |
| `/cv/` | Le CV sur une page A4 : composition artistique à l’écran, document professionnel à l’impression et en PDF. |
| `/404` | Page introuvable. |

## Technologies, et pourquoi elles sont là

| Outil | Rôle | Pourquoi ce choix |
| --- | --- | --- |
| [Astro](https://astro.build) | Pages, composants, optimisation des images | Le contenu est rendu en HTML au build : bon référencement, page lisible sans JS, aucun framework envoyé au navigateur. Les captures sont converties en AVIF et WebP, en plusieurs tailles. |
| [GSAP](https://gsap.com) + ScrollTrigger + SplitText | Animations liées au défilement | Épingler les fiches projets et la frise, découper les titres en lignes : ce sont des cas où le CSS seul devient fragile. |
| [Lenis](https://lenis.darkroom.engineering) | Défilement doux | Synchronise la molette avec les animations au scroll pour éviter les saccades. Désactivé si le système demande moins de mouvement. |
| Mona Sans (variable) | Typographie | Une seule famille avec axes de graisse et de largeur : la largeur sert aux grands titres, la graisse réagit au pointeur sur le nom. Polices auto-hébergées, aucune requête externe. |
| Maquette isométrique de l’accueil | Le parcours en une image animée | Une vraie projection 3D (dimétrique 2:1) calculée au build et rendue en SVG, animée en CSS : nette à toutes les tailles, aux couleurs du thème clair ou sombre, quelques Ko, aucune bibliothèque. Une vidéo pré-rendue ne suivrait ni le thème ni la largeur de l’écran ; une scène Three.js coûterait plus de 150 Ko pour un résultat moins net. |
| Phosphor Icons | Icônes | Insérées en SVG au build : pas de JavaScript, pas de requête. |
| [Simple Icons](https://simpleicons.org) (CC0) et deux logos de [Devicon](https://devicon.dev) (MIT) | Logos des langages et outils du CV | Un seul tracé par logo, coloré par la palette du CV, inséré au build. Java et SQL Server, absents de Simple Icons, sont copiés dans `src/assets/logos/`. |
| VT323, Silkscreen | Typographie pixel du CV | Police de terminal pour le nom et les titres, police bitmap pour les petites étiquettes. Auto-hébergées, chargées seulement sur `/cv/`. |
| [qrcode](https://github.com/soldair/node-qrcode) (build uniquement) | QR code vers le portfolio, dans le CV | Calculé au build et dessiné case par case en SVG : aucune image, aucun script envoyé. |
| View Transitions API | Passage d’une fiche projet à son étude de cas | Natif dans le navigateur : la capture et le titre se transforment d’une page à l’autre. Les navigateurs sans support changent simplement de page. |
| [Playwright](https://playwright.dev) (développement uniquement) | Génère le PDF du CV | Le PDF sort du même rendu d’impression que la page : une seule source, et un garde-fou qui refuse un CV de plus d’une page. Rien n’est envoyé au navigateur des visiteurs. |

Volontairement absents : React (aucun état complexe à gérer), Three.js ou WebGL (la maquette de l’accueil n’a besoin que d’une projection fixe, que le SVG rend mieux), Tailwind (les styles sont scopés par composant et partagent des variables CSS).

## Arborescence

```text
src/
├── data/
│   ├── profile.ts        Identité, parcours, compétences, langues, centres d’intérêt
│   ├── projects.ts       Projets, études de cas, captures et autres dépôts
│   ├── cv.ts             Textes du CV (une page A4), versions courtes et logos
│   └── logos.ts          Logos des langages et outils (Simple Icons, Devicon)
├── assets/projects/      Captures des projets (sources PNG, optimisées au build)
├── assets/brands/        Logo d’Epitech, gravé sur le socle de la maquette
├── layouts/
│   └── BaseLayout.astro  <head>, SEO, thème, en-tête, pied de page, script principal
├── components/           Une section ou un élément réutilisable par fichier
│   ├── Hero.astro        Accueil : nom, accroche, maquette
│   ├── HeroScene.astro   La maquette isométrique et sa légende
│   ├── About.astro       Manifeste et repères
│   ├── Projects.astro    Fiches projets empilées et autres dépôts
│   ├── ProjectPanel.astro
│   ├── Journey.astro     Parcours (frise horizontale sur grand écran)
│   ├── Skills.astro      Compétences reliées aux projets
│   ├── Interests.astro
│   ├── Contact.astro     Copie de l’adresse et formulaire
│   ├── Shot.astro        Capture d’écran encadrée (ordinateur ou téléphone)
│   ├── CvPoster.astro    CV artistique : l’affiche A4 affichée à l’écran
│   ├── CvSheet.astro     CV professionnel : la page imprimée et le PDF
│   ├── CvEntry.astro     Une ligne du CV professionnel : poste, formation, projet
│   ├── Logo.astro        Un logo de langage ou d’outil
│   ├── MotionScript.astro  Ajoute la couche de mouvement à une page
│   ├── Icon.astro, SiteHeader.astro, SiteFooter.astro
├── pages/                index, cv, 404 et projets/[slug]
├── scripts/
│   ├── main.ts           Cœur, sur toutes les pages : thème, menu, ancres, contact (≈ 4 Ko)
│   ├── motion.ts         Couche de mouvement, sur l’accueil et les études de cas (GSAP, Lenis)
│   ├── lib/              Préférences, défilement, configuration de GSAP
│   └── modules/          Un comportement par fichier (hero, hero-scene, reveal, projects…)
└── styles/global.css     Variables (couleurs, typographie, espacements), base, boutons
scripts/cv-pdf.mjs        Génère le PDF du CV avec Chrome et vérifie qu’il tient sur une page
```

## Modifier le contenu

- **Textes, parcours, compétences** : `src/data/profile.ts`. Chaque compétence liste où elle a été pratiquée (`usedIn`) ; c’est ce qui alimente l’interaction de la section Compétences.
- **Ajouter un projet** :
  1. placer les captures dans `src/assets/projects/<slug>/` (PNG ou JPG, idéalement 2880 px de large) ;
  2. les importer en haut de `src/data/projects.ts`, puis ajouter une entrée dans `projects` (titre, pitch, technologies, teinte, captures, blocs de l’étude de cas) ;
  3. la fiche d’accueil et la page `/projets/<slug>/` sont générées automatiquement.
- **Maquette de l’accueil** : ses libellés sont dans `heroScene` (`src/data/profile.ts`) ; la géométrie et le minutage sont en tête de `HeroScene.astro`.
- **Couleurs et typographie** : variables en tête de `src/styles/global.css` (thème clair et thème sombre).
- **CV** : textes dans `src/data/cv.ts` (le titre et le dépôt des projets viennent de `projects.ts`). Les champs `brief` et `logos` ne servent qu’à la version artistique. Après chaque modification, lancer `npm run cv:pdf` pour régénérer le PDF à télécharger ; le script s’arrête en erreur si le CV dépasse une page.

## Le CV

Deux présentations du même contenu, sur la même page `/cv/` : le média décide laquelle s’affiche.

- **À l’écran, une affiche A4** (`CvPoster.astro`) : fiche profil d’ordinateur des années 2000, aplat bleu électrique, fenêtres à barre de titre, typographie pixel, logos des outils en icônes de bureau. Toute la composition est dessinée en millimètres de feuille (`--u = 100cqi / 210`) : elle garde exactement ses proportions, du téléphone au grand écran. Les graphiques sont calculés à partir des données : le radar compte les projets où chaque outil a servi (`profile.ts`), la frise suit `cvEducation`, le QR code pointe vers le portfolio.
- **La visionneuse** : sur ordinateur, la feuille tient entière dans la fenêtre. « Agrandir », ou un clic sur la feuille, passe en lecture en gardant le point cliqué sous le pointeur ; Échap revient à l’ensemble. Sur téléphone, la lecture élargit la feuille, qui se parcourt dans les deux sens.
- **À l’impression et en PDF, un document professionnel** (`CvSheet.astro`) : une colonne de lecture, rubriques standard. Il est masqué à l’écran ; l’affiche est masquée à l’impression. `@page { size: A4; margin: 0 }`, marges intégrées à la feuille : le navigateur n’ajoute ni URL ni date.
- **Logiciels de recrutement (ATS)** : vrai texte dans le PDF (polices statiques Mona Sans et JetBrains Mono, intégrées en TrueType et non en Type 3 comme les polices variables), intitulés de rubriques standard, ordre de lecture identique à l’ordre visuel, dates sur la ligne de l’intitulé, liens écrits en clair, aucune information dans une image. Le point bleu du nom est dessiné en CSS : il ne s’ajoute pas au nom extrait. Le PDF est balisé (structure, langue `fr`).
- **PDF à télécharger** : `npm run cv:pdf` lance le build, sert le site, l’imprime avec Google Chrome (ou le Chromium de Playwright) en média `print` et écrit `public/CV-Abdallah-Borji.pdf`.

## Le mouvement, et pourquoi

Chaque animation a une raison d’être ; toutes s’effacent si le système demande moins de mouvement (`prefers-reduced-motion`).

| Moment | Ce qu’il raconte |
| --- | --- |
| Entrée de l’accueil | Le nom monte lettre par lettre, puis le point bleu se pose : c’est la signature, reprise dans « ab. » et « Écrivez-moi. ». En CSS pur (lettres découpées au build) : elle démarre au premier affichage. Version accélérée lors d’une visite suivante. |
| Graisse du nom qui suit la souris | Le nom « fait la mise au point » là où se trouve le pointeur. Uniquement à la souris. |
| Maquette de l’accueil | Le parcours en quelques secondes, sans rien lire. Un socle gravé Epitech porte la chaîne de travail : une base de données, un éditeur, une interface. Le point bleu du nom sort du socle, saute d’étape en étape (la base s’interroge, le code se parcourt, le graphique monte), puis rejoint la prochaine étape, l’alternance 2027, encore en pointillés. Le parcours tourne en boucle, synchronisé avec la légende à côté du nom : chaque étape s’allume à l’arrivée du point, et l’accolade I2M Advisory se trace sur les trois étapes pratiquées en entreprise. La boucle ne joue que si la maquette est à l’écran et s’arrête au survol, le temps de lire une étape, qui ressort alors avec son objet. En quittant l’accueil, la maquette se décompose : le socle descend, les objets montent. |
| Manifeste mot à mot | Le texte s’éclaire au rythme de la lecture. |
| Fiches projets empilées | Chaque projet occupe l’écran puis recule dans l’ombre quand le suivant arrive : un projet à la fois. |
| Transition vers l’étude de cas | La capture et le titre de la fiche deviennent ceux de la page projet : on ne perd pas le fil. |
| Frise du parcours | Le défilement vertical fait avancer le temps de gauche à droite ; chaque étape s’allume quand elle est atteinte. |
| Compétences → preuves | Survoler une compétence éclaire les projets où elle a servi. |
| Changement de thème | Le nouveau thème se propage en cercle depuis le bouton. |
| Progression de lecture | Sur les études de cas, un trait en haut de l’écran suit la lecture (CSS piloté par le défilement). |
| En-tête | Il s’efface pendant la lecture et revient dès qu’on remonte. |

## Accessibilité, performance, référencement

- HTML sémantique, titres hiérarchisés, lien d’évitement, focus visible, menu mobile utilisable au clavier (Échap, focus piégé).
- Contenu présent dans le HTML généré : lisible sans JavaScript et par les moteurs de recherche ; données structurées `Person` sur l’accueil.
- Images en AVIF/WebP avec `srcset`, chargement différé hors écran, police principale préchargée.
- JavaScript en deux temps : un cœur de 4 Ko partout, et la couche de mouvement (54 Ko) seulement là où elle sert, évaluée juste après le premier affichage. Le CV et la 404 n’en chargent pas.
- Lighthouse (build de production) : 100 en accessibilité, bonnes pratiques et SEO ; performance 100 sur ordinateur, 96 sur mobile.
- Le formulaire ne collecte rien : il prépare un e-mail dans la messagerie du visiteur.

## Logo d’Epitech

Le logo gravé sur le socle de la maquette appartient à Epitech. Il est repris tel quel (tracé du site officiel, en une seule couleur) pour indiquer la formation suivie, sans autre usage.

## Captures des projets

Les captures ont été réalisées en lançant chaque dépôt en local (dashboards Streamlit de F1 et Soccer Stat, prototype de Scoolize, site Next.js d’I2M). Elles ne sont pas retouchées. Sur le site I2M, les références clients en attente de validation juridique sont laissées hors cadre.
