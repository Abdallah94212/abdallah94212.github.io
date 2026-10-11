/* Les fiches projets s'empilent : chacune reste en place pendant que la
   suivante la recouvre, en reculant légèrement dans l'ombre. Les captures
   glissent un peu dans leur cadre pendant l'arrivée de la fiche.
   Sans JS, l'empilement repose sur position: sticky (voir ProjectPanel). */
import { DESKTOP_MOTION, MOTION_OK, ScrollTrigger, gsap } from "../lib/motion";
import { glideTo, scrollTarget, scrollToPosition, setWheelBrake } from "../lib/scroll";

/* Réglages de l'accroche entre deux fiches (en fraction de hauteur d'écran). */
const BRAKE_ZONE = 0.25; // la molette ralentit sur le dernier quart avant une fiche
const BRAKE_MIN = 0.6; // jusqu'à 60 % de sa vitesse, au moment où la fiche se pose
const FORWARD_INTENT = 0.25; // clavier, barre : au-delà d'un quart de chemin, on continue
const NUDGE = 0.03; // molette : en deçà de 3 %, le geste est jugé involontaire
const WHEEL_IDLE = 160; // ms sans événement de molette : le geste est terminé

export function initProjects() {
  const stack = document.querySelector<HTMLElement>("[data-project-stack]");
  if (!stack) return;
  const panels = gsap.utils.toArray<HTMLElement>(stack.querySelectorAll("[data-panel]"));
  const mm = gsap.matchMedia();

  mm.add(DESKTOP_MOTION, () => {
    stack.classList.add("is-enhanced");
    const last = panels[panels.length - 1];
    const cleanups: (() => void)[] = [];
    const pins: ScrollTrigger[] = [];

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
      pins.push(pin);

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

    cleanups.push(initSettle(() => [...pins.map((pin) => pin.start), pins[0].end]));

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

/* Chaque fiche a un point d'arrêt : la position où elle occupe tout l'écran.
   - À la molette ou au trackpad, dès que le geste s'arrête, on regarde où le
     défilement allait se poser : entre deux fiches, il est prolongé jusqu'à
     la suivante (ou ramené à la fiche courante si l'on a à peine bougé), sans
     marquer d'arrêt. Un geste ample traverse plusieurs fiches, comme avant.
   - En approchant d'un point d'arrêt, la molette freine un peu : la fiche
     finit de se poser au lieu d'être dépassée.
   - Clavier, barre de défilement : à l'arrêt, la page rejoint la fiche la plus
     proche.
   Tout geste de l'utilisateur reprend la main ; hors de la pile de fiches,
   le défilement reste entièrement libre. */
function initSettle(getStops: () => number[]) {
  let direction = 1;
  let lastY = window.scrollY;
  let wheelTimer = 0;
  let wheelDirection = 0;

  const segmentAt = (y: number) => {
    const stops = getStops();
    const index = stops.findIndex((stop, i) => i < stops.length - 1 && y > stop && y < stops[i + 1]);
    if (index < 0) return null;
    const from = stops[index];
    const to = stops[index + 1];
    return { from, to, progress: (y - from) / (to - from) };
  };

  const glide = (target: number, from: number, to: number) => {
    const y = window.scrollY;
    if (Math.abs(target - y) < 1) return;
    const distance = Math.abs(target - y) / (to - from);
    // Si le défilement est encore lancé vers la cible, on le prolonge ; sinon on démarre en douceur.
    const heading = scrollTarget() - y;
    const continues = Math.abs(heading) > 2 && Math.sign(heading) === Math.sign(target - y);
    glideTo(target, 0.45 + 0.5 * distance, continues ? "continue" : "turn");
  };

  // Molette et trackpad : décision dès la fin du geste, inertie comprise.
  const onWheel = (event: WheelEvent) => {
    if (Math.abs(event.deltaY) < 1) return;
    wheelDirection = Math.sign(event.deltaY);
    window.clearTimeout(wheelTimer);
    wheelTimer = window.setTimeout(() => {
      const segment = segmentAt(scrollTarget());
      if (!segment) return;
      const { from, to, progress } = segment;
      const target = wheelDirection > 0 ? (progress > NUDGE ? to : from) : progress < 1 - NUDGE ? from : to;
      glide(target, from, to);
    }, WHEEL_IDLE);
  };

  const onScroll = () => {
    const y = window.scrollY;
    if (y !== lastY) direction = y > lastY ? 1 : -1;
    lastY = y;
  };

  // Autres façons de défiler : à l'arrêt, la fiche la plus proche dans le sens du mouvement.
  const onScrollEnd = () => {
    const segment = segmentAt(window.scrollY);
    if (!segment) return;
    const { from, to, progress } = segment;
    if (progress < 0.005 || progress > 0.995) return;
    const forward = direction > 0 ? progress > FORWARD_INTENT : progress > 1 - FORWARD_INTENT;
    glide(forward ? to : from, from, to);
  };

  setWheelBrake((deltaY) => {
    if (!deltaY) return 1;
    const stops = getStops();
    const y = window.scrollY;
    const ahead = deltaY > 0 ? stops.find((stop) => stop > y + 1) : stops.findLast((stop) => stop < y - 1);
    if (ahead === undefined) return 1;
    const distance = Math.abs(ahead - y) / window.innerHeight;
    if (distance > BRAKE_ZONE) return 1;
    return BRAKE_MIN + (1 - BRAKE_MIN) * (distance / BRAKE_ZONE);
  });

  window.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  ScrollTrigger.addEventListener("scrollEnd", onScrollEnd);
  return () => {
    window.clearTimeout(wheelTimer);
    setWheelBrake(null);
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("scroll", onScroll);
    ScrollTrigger.removeEventListener("scrollEnd", onScrollEnd);
  };
}
