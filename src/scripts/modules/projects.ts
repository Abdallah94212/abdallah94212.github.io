/* Les fiches projets s'empilent : chacune reste en place pendant que la
   suivante la recouvre, en reculant légèrement dans l'ombre. Les captures
   glissent un peu dans leur cadre pendant l'arrivée de la fiche.
   Sans JS, l'empilement repose sur position: sticky (voir ProjectPanel). */
import { DESKTOP_MOTION, MOTION_OK, ScrollTrigger, gsap } from "../lib/motion";
import { scrollToPosition } from "../lib/scroll";

export function initProjects() {
  const stack = document.querySelector<HTMLElement>("[data-project-stack]");
  if (!stack) return;
  const panels = gsap.utils.toArray<HTMLElement>(stack.querySelectorAll("[data-panel]"));
  const mm = gsap.matchMedia();

  mm.add(DESKTOP_MOTION, () => {
    stack.classList.add("is-enhanced");
    const last = panels[panels.length - 1];
    const cleanups: (() => void)[] = [];

    panels.forEach((panel, index) => {
      const next = panels[index + 1];
      if (!next) return;
      const pin = ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        endTrigger: last,
        end: "top top",
        pin: true,
        pinSpacing: false,
      });

      // Une fiche épinglée peut être recouverte par les suivantes : quand le
      // focus clavier y entre, on revient là où elle est au premier plan.
      const onFocus = () => {
        const covered = ScrollTrigger.positionInViewport(next, "top") < 0.999;
        if (covered) scrollToPosition(pin.start);
      };
      panel.addEventListener("focusin", onFocus);
      cleanups.push(() => panel.removeEventListener("focusin", onFocus));
      const recede = { trigger: next, start: "top bottom", end: "top top", scrub: true };
      gsap.to(panel.querySelector("[data-panel-inner]"), { scale: 0.92, yPercent: -3, ease: "none", scrollTrigger: recede });
      gsap.to(panel.querySelector("[data-panel-shade]"), { opacity: 0.6, ease: "none", scrollTrigger: { ...recede } });
    });

    return () => {
      stack.classList.remove("is-enhanced");
      cleanups.forEach((cleanup) => cleanup());
    };
  });

  mm.add(MOTION_OK, () => {
    panels.forEach((panel) => {
      const arrival = { trigger: panel, start: "top bottom", end: "top top", scrub: true };
      const cover = panel.querySelector("img[data-parallax]");
      const secondary = panel.querySelector(".panel__secondary");
      if (cover) gsap.fromTo(cover, { yPercent: -5 }, { yPercent: 3, ease: "none", scrollTrigger: arrival });
      if (secondary) gsap.fromTo(secondary, { y: 90 }, { y: 0, ease: "none", scrollTrigger: { ...arrival } });
    });
  });
}
