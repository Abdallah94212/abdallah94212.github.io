/* Défilement doux avec Lenis, synchronisé avec ScrollTrigger pour que les
   animations liées au scroll suivent exactement la même position.
   Désactivé si l'utilisateur préfère réduire les animations. */
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/motion";
import { setSmoothScroller, wheelBrake } from "../lib/scroll";

export function initSmoothScroll() {
  if (prefersReducedMotion()) return;

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    // Un cran de molette ou de trackpad parcourt un peu moins de distance :
    // les animations liées au défilement ont le temps de se dérouler.
    wheelMultiplier: 0.9,
    virtualScroll: (data) => {
      if (data.event.type === "wheel") data.deltaY *= wheelBrake(data.deltaY);
      return true;
    },
    autoRaf: false,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  setSmoothScroller({
    scrollTo: (target, { immediate = false, duration = 1.4, easing } = {}) =>
      lenis.scrollTo(target, { immediate, duration, easing, force: true }),
    target: () => lenis.targetScroll,
    stop: () => lenis.stop(),
    start: () => lenis.start(),
  });
}
