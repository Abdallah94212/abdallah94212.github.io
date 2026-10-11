/* Point d'entrée unique de GSAP : les plugins sont enregistrés une seule fois
   avec les préférences de mouvement réexportées pour les modules animés. */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.defaults({ ease: "expo.out", duration: 1 });

export { prefersReducedMotion, hasFinePointer } from "./preferences";

/** Conditions reprises par gsap.matchMedia() dans chaque module. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const DESKTOP_MOTION = "(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";

/** Attend les polices (pour découper les lignes au bon endroit), sans jamais bloquer. */
export function fontsReady(timeout = 1200): Promise<unknown> {
  return Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, timeout))]);
}

export { gsap, ScrollTrigger, SplitText };
