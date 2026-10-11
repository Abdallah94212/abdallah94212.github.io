/* Sur les pages longues, l'en-tête s'efface pendant la lecture (défilement vers
   le bas) et revient dès qu'on remonte. Le sens du défilement vient de
   ScrollTrigger, déjà présent pour les animations. */
import { ScrollTrigger } from "../lib/motion";

export function initHeaderHide() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;
  const root = document.documentElement;

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate(self) {
      const hide = self.direction === 1 && self.scroll() > window.innerHeight * 0.6 && !root.classList.contains("menu-open");
      header.classList.toggle("is-hidden", hide);
    },
  });
  // Une navigation au clavier ne doit jamais viser un en-tête caché.
  header.addEventListener("focusin", () => header.classList.remove("is-hidden"));
}
