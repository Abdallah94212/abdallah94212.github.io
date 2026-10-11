/* Préférences de l'utilisateur, lues sans aucune bibliothèque : le cœur du site
   peut s'en servir sans charger la couche de mouvement. */
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

export const prefersReducedMotion = () => reducedMotionQuery.matches;
export const hasFinePointer = () => finePointerQuery.matches;
