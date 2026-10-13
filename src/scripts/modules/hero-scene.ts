/* Maquette de l'accueil (HeroScene.astro). L'animation est en CSS ; ce module
   décide quand elle joue : seulement quand la scène est à l'écran, en pause
   sinon. Une fois terminée, elle garde son état final et peut être rejouée.
   Au survol, un repère et son objet ressortent ensemble. */
import { hasFinePointer, prefersReducedMotion } from "../lib/preferences";

export function initHeroScene() {
  const scene = document.querySelector<HTMLElement>("[data-scene]");
  if (!scene) return;
  if (hasFinePointer()) initFocus(scene);

  if (prefersReducedMotion()) {
    scene.dataset.state = "done";
    return;
  }

  const replay = scene.querySelector<HTMLButtonElement>("[data-scene-replay]");
  let visible = false;

  const sync = () => {
    if (scene.dataset.state === "done") return;
    scene.dataset.state = visible ? "play" : "ready";
  };

  scene.addEventListener("animationend", (event) => {
    if (event.animationName !== "hs-clock") return;
    scene.dataset.state = "done";
    if (replay) replay.hidden = false;
  });

  replay?.addEventListener("click", () => {
    // Rejouée à la demande, l'animation reprend son rythme normal.
    scene.style.setProperty("--speed", "1");
    replay.hidden = true;
    scene.dataset.state = "ready";
    sync();
  });

  // La racine de la scène n'a pas de boîte (display: contents) : on observe la maquette.
  const canvas = scene.querySelector<HTMLElement>("[data-scene-canvas]");
  if (!canvas) return;
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
