/* Maquette de l'accueil (HeroScene.astro). L'animation est en CSS : une
   entrée, puis le parcours du point en boucle, synchronisé avec la légende.
   Ce module décide quand elle joue : seulement quand la maquette ou sa
   légende est à l'écran, et jamais pendant qu'on la survole (ou qu'un doigt
   appuie dessus), pour lire une étape tranquillement. Au survol, l'étape et
   son objet ressortent. */
import { hasFinePointer, prefersReducedMotion } from "../lib/preferences";

export function initHeroScene() {
  const scene = document.querySelector<HTMLElement>("[data-scene]");
  // La racine n'a pas de boîte (display: contents) : on observe la maquette et sa légende.
  const canvas = scene?.querySelector<HTMLElement>("[data-scene-canvas]");
  const legend = scene?.querySelector<HTMLElement>(".legend");
  if (!scene || !canvas || !legend) return;
  if (hasFinePointer()) initFocus(scene);
  if (prefersReducedMotion()) return;

  let visible = false;
  let hovered = false;
  const sync = () => {
    scene.dataset.state = visible && !hovered ? "play" : "ready";
  };
  const hold = (value: boolean) => {
    hovered = value;
    sync();
  };

  for (const area of [canvas, legend]) {
    if (hasFinePointer()) {
      area.addEventListener("pointerenter", () => hold(true));
      area.addEventListener("pointerleave", () => hold(false));
    }
    // Au doigt (ou au stylet), l'animation se fige tant qu'on appuie. Si le
    // navigateur prend la main pour défiler, il envoie pointercancel : elle reprend.
    area.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse") hold(true);
    });
    for (const type of ["pointerup", "pointercancel", "pointerleave"] as const) {
      area.addEventListener(type, (event) => {
        if (event.pointerType !== "mouse") hold(false);
      });
    }
  }

  /* On peut arriver directement sur la légende (ancre, retour en arrière,
     téléphone à l'horizontale) sans voir assez la maquette : l'animation
     joue dès que l'une des deux est visible. */
  const onScreen = new Set<Element>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      visible = onScreen.size > 0;
      sync();
    },
    { threshold: 0.35 },
  );
  observer.observe(canvas);
  observer.observe(legend);

  /* Les sous-titres de la légende n'existent que sous 900 px : quand la
     fenêtre franchit ce seuil (rotation d'une tablette), les pistes qui
     apparaissent repartent de zéro. Une fois prêtes, on les recale toutes
     sur celle du point. */
  const tracks = () => document.getAnimations().filter((animation): animation is CSSAnimation => animation instanceof CSSAnimation && animation.animationName.startsWith("hs-"));
  window.matchMedia("(max-width: 900px)").addEventListener("change", () => {
    void Promise.allSettled(tracks().map((track) => track.ready)).then(() => {
      const current = tracks();
      const clock = current.find((track) => track.animationName === "hs-dot-x")?.currentTime;
      if (clock == null) return;
      for (const track of current) track.currentTime = clock;
    });
  });
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
