/* Fenêtre de projets de l'accueil : une capture par projet, qui change
   toutes les 3,6 s. Le rythme est porté par la barre de progression CSS :
   sa fin déclenche la capture suivante, et la mettre en pause suffit à tout
   arrêter (survol, focus, bouton, fenêtre hors écran). */
import { prefersReducedMotion } from "../lib/preferences";

const DURATION = 3600;

export function initReel() {
  const reel = document.querySelector<HTMLElement>("[data-reel]");
  if (!reel) return;
  const slides = Array.from(reel.querySelectorAll<HTMLImageElement>("img[data-reel-slide]"));
  const segments = Array.from(reel.querySelectorAll<HTMLElement>(".reel__segment"));
  const link = reel.querySelector<HTMLAnchorElement>("[data-reel-link]");
  const title = reel.querySelector<HTMLElement>("[data-reel-title]");
  const toggle = reel.querySelector<HTMLButtonElement>("[data-reel-toggle]");
  if (slides.length < 2 || !link || !title || !toggle || prefersReducedMotion()) return;

  let index = 0;
  let pausedByUser = false;
  let hovered = false;
  let offscreen = false;
  reel.style.setProperty("--reel-duration", `${DURATION}ms`);
  toggle.hidden = false;

  const show = (next: number) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    segments.forEach((segment, i) => {
      segment.classList.remove("is-active");
      segment.classList.toggle("is-done", i < index);
    });
    // Relance l'animation CSS du segment actif.
    void segments[index].offsetWidth;
    segments[index].classList.add("is-active");
    title.textContent = slides[index].dataset.title ?? "";
    link.href = slides[index].dataset.href ?? link.href;
  };

  const syncPause = () => {
    reel.classList.toggle("is-paused", pausedByUser || hovered || offscreen);
    toggle.setAttribute("aria-label", pausedByUser ? "Reprendre le défilement des projets" : "Mettre en pause le défilement des projets");
  };

  segments.forEach((segment) => {
    segment.addEventListener("animationend", () => {
      if (segment.classList.contains("is-active")) show(index + 1);
    });
  });

  toggle.addEventListener("click", () => {
    pausedByUser = !pausedByUser;
    syncPause();
  });
  link.addEventListener("pointerenter", () => {
    hovered = true;
    syncPause();
  });
  link.addEventListener("pointerleave", () => {
    hovered = false;
    syncPause();
  });
  link.addEventListener("focus", () => {
    hovered = true;
    syncPause();
  });
  link.addEventListener("blur", () => {
    hovered = false;
    syncPause();
  });

  new IntersectionObserver(([entry]) => {
    offscreen = !entry.isIntersecting;
    syncPause();
  }).observe(reel);

  show(0);
  syncPause();
}
