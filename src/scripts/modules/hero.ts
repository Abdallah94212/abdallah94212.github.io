/* Accueil : l'entrée en scène est en CSS (Hero.astro). Ce module ajoute la
   graisse qui suit le pointeur sur le nom, et la sortie progressive au
   défilement. */
import { gsap, hasFinePointer, prefersReducedMotion } from "../lib/motion";

export function initHero() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;
  const chars = Array.from(hero.querySelectorAll<HTMLElement>(".hero__char:not(.hero__dot)"));
  // Les lettres du reflet (prénom) suivent la même graisse que les vraies.
  const shine = Array.from(hero.querySelectorAll<HTMLElement>(".hero__shine-char"));
  initNameFocus(hero, chars, shine);
  initScrollOut(hero);
}

/* La graisse de chaque lettre dépend de sa distance au pointeur : le nom
   « fait la mise au point » là où se trouve la souris. La boucle ne tourne
   que pendant le mouvement, puis s'arrête une fois les lettres revenues. */
function initNameFocus(hero: HTMLElement, chars: HTMLElement[], shine: HTMLElement[]) {
  if (!hasFinePointer() || prefersReducedMotion() || !chars.length) return;

  const BASE = 780;
  const NEAR = 900;
  const FAR = 600;
  const weights = chars.map(() => BASE);
  let centers: { x: number; y: number }[] = [];
  let pointer: { x: number; y: number } | null = null;
  let running = false;
  let radius = 300;

  const measure = () => {
    centers = chars.map((char) => {
      const rect = char.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
    radius = (chars[0]?.getBoundingClientRect().height ?? 200) * 1.6;
  };

  const tick = () => {
    let settled = true;
    chars.forEach((char, index) => {
      let target = BASE;
      if (pointer && centers[index]) {
        const distance = Math.hypot(pointer.x - centers[index].x, (pointer.y - centers[index].y) * 1.3);
        const influence = Math.max(0, 1 - distance / radius);
        target = FAR + (NEAR - FAR) * influence * influence * (3 - 2 * influence);
      }
      const next = weights[index] + (target - weights[index]) * 0.14;
      if (Math.abs(next - target) > 0.5) settled = false;
      weights[index] = next;
      char.style.fontWeight = next.toFixed(1);
      if (shine[index]) shine[index].style.fontWeight = char.style.fontWeight;
    });
    if (settled && !pointer) stop();
  };

  const start = () => {
    if (running) return;
    running = true;
    gsap.ticker.add(tick);
  };
  const stop = () => {
    running = false;
    gsap.ticker.remove(tick);
    [...chars, ...shine].forEach((char) => char.style.removeProperty("font-weight"));
  };

  const area = hero.querySelector<HTMLElement>("[data-hero-name]")?.parentElement ?? hero;
  area.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") measure();
  });
  area.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    if (!centers.length) measure();
    pointer = { x: event.clientX, y: event.clientY };
    start();
  });
  area.addEventListener("pointerleave", () => {
    pointer = null;
    centers = [];
  });
}

/* En quittant l'accueil, les deux lignes du nom s'écartent légèrement et le
   texte s'efface : la section suivante prend le relais sans coupure. */
function initScrollOut(hero: HTMLElement) {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
    gsap
      .timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } })
      .to(hero.querySelector(".hero__line--first"), { xPercent: -7, ease: "none" }, 0)
      .to(hero.querySelector(".hero__line--last"), { xPercent: 7, ease: "none" }, 0)
      .to(hero.querySelector(".hero__copy"), { yPercent: -40, opacity: 0, ease: "none" }, 0)
      .to(hero.querySelector(".reel"), { yPercent: -12, ease: "none" }, 0);
  });
}
