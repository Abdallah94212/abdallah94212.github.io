/* Défilement de la page, indépendant de la bibliothèque utilisée : la couche
   de mouvement peut y brancher un défilement doux (Lenis) ; sinon, on utilise
   le défilement natif du navigateur. */

import { prefersReducedMotion } from "./preferences";

export interface SmoothScroller {
  scrollTo(target: HTMLElement | number, options?: { immediate?: boolean }): void;
  stop(): void;
  start(): void;
}

let smooth: SmoothScroller | null = null;

export function setSmoothScroller(scroller: SmoothScroller | null) {
  smooth = scroller;
}

export function scrollToElement(target: HTMLElement, immediate = false) {
  if (smooth) smooth.scrollTo(target, { immediate });
  else target.scrollIntoView({ behavior: immediate || prefersReducedMotion() ? "auto" : "smooth" });
}

export function scrollToPosition(y: number) {
  if (smooth) smooth.scrollTo(y, { immediate: true });
  else window.scrollTo(0, y);
}

export function lockScroll() {
  smooth?.stop();
  document.documentElement.style.overflow = "hidden";
}

export function unlockScroll() {
  smooth?.start();
  document.documentElement.style.overflow = "";
}

/* Les liens d'ancre de la page courante défilent en douceur, mettent à jour
   l'URL et déplacent le focus sur la section atteinte (clavier, lecteurs d'écran). */
export function initAnchors() {
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const link = (event.target as Element).closest<HTMLAnchorElement>("a[href*='#']");
    if (!link || link.origin !== location.origin || link.pathname !== location.pathname || !link.hash) return;
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!target) return;
    event.preventDefault();
    scrollToElement(target);
    history.pushState(null, "", link.hash);
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
}

/* À l'arrivée sur /#section, la page est mesurée avant que les sections
   épinglées n'ajoutent leur hauteur : on refait le saut une fois tout prêt. */
export function restoreHashPosition() {
  if (!location.hash) return;
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target) scrollToElement(target, true);
}
