/* Couche de mouvement : défilement doux et animations liées au scroll.
   Elle attend les polices pour découper les lignes au bon endroit. */
import { ScrollTrigger, fontsReady } from "./lib/motion";
import { restoreHashPosition } from "./lib/scroll";
import { initSmoothScroll } from "./modules/smooth-scroll";
import { initHeaderHide } from "./modules/header-hide";
import { initHero } from "./modules/hero";
import { initReveals, initScrubText } from "./modules/reveal";
import { initProjects } from "./modules/projects";
import { initJourney } from "./modules/journey";

initSmoothScroll();

fontsReady().then(() => {
  initHero();
  initProjects();
  initJourney();
  initReveals();
  initScrubText();
  initHeaderHide();
  ScrollTrigger.refresh();
  restoreHashPosition();
});
