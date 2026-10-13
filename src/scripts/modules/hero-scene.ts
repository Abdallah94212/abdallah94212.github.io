/* Maquette de l'accueil (HeroScene.astro). L'animation est en CSS : une
   entrée, puis le parcours du point en boucle, synchronisé avec la légende.
   Ce module décide quand elle joue : seulement quand la maquette est à
   l'écran, et jamais pendant qu'on la survole (avec sa légende), pour lire
   une étape tranquillement. Au survol, l'étape et son objet ressortent. */
import { hasFinePointer, prefersReducedMotion } from "../lib/preferences";

export function initHeroScene() {
  const scene = document.querySelector<HTMLElement>("[data-scene]");
  // La racine n'a pas de boîte (display: contents) : on observe la maquette.
  const canvas = scene?.querySelector<HTMLElement>("[data-scene-canvas]");
  if (!scene || !canvas) return;
  if (hasFinePointer()) initFocus(scene);
  if (prefersReducedMotion()) return;

  let visible = false;
  let hovered = false;
  const sync = () => {
    scene.dataset.state = visible && !hovered ? "play" : "ready";
  };

  if (hasFinePointer()) {
    scene.querySelectorAll<HTMLElement>("[data-scene-canvas], .legend").forEach((area) => {
      area.addEventListener("pointerenter", () => {
        hovered = true;
        sync();
      });
      area.addEventListener("pointerleave", () => {
        hovered = false;
        sync();
      });
    });
  }

  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      sync();
    },
    { threshold: 0.35 },
  ).observe(canvas);
}

function initFocus(scene: HTMLElement) {
  scene.querySelectorAll<HTMLElement | SVGElement>("[data-key]").forEach((element) => {
    element.addEventListener("pointerenter", () => {
      scene.dataset.focus = element.dataset.key;
    });
    element.addEventListener("pointerleave", () => {
      delete scene.dataset.focus;
    });
  });
}
