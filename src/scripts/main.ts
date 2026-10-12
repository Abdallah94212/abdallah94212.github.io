/* Cœur du site, chargé sur toutes les pages : quelques Ko, aucune bibliothèque.
   Chaque module ne s'active que si son élément existe sur la page. Le mouvement
   (GSAP, Lenis) est un second point d'entrée, inclus seulement par les pages
   qui en ont besoin (voir MotionScript.astro). */
import { initAnchors } from "./lib/scroll";
import { initTheme } from "./modules/theme";
import { initMenu } from "./modules/menu";
import { initHeader } from "./modules/header";
import { initReel } from "./modules/reel";
import { initSkills } from "./modules/skills";
import { initContact } from "./modules/contact";
import { initPrint } from "./modules/print";
import { initCvViewer } from "./modules/cv-viewer";

initTheme();
initAnchors();
initMenu();
initHeader();
initReel();
initSkills();
initContact();
initPrint();
initCvViewer();
