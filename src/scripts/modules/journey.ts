/* Parcours : sur grand écran, la frise est épinglée et le défilement vertical
   la fait avancer horizontalement, du plus ancien au plus récent. Chaque étape
   s'allume quand elle est atteinte, comme le trait qui se remplit.
   Ailleurs, la frise reste verticale. */
import { DESKTOP_MOTION, ScrollTrigger, gsap } from "../lib/motion";

export function initJourney() {
  const section = document.querySelector<HTMLElement>("[data-journey]");
  const pin = section?.querySelector<HTMLElement>("[data-journey-pin]");
  const track = section?.querySelector<HTMLElement>("[data-journey-track]");
  const progress = section?.querySelector<HTMLElement>("[data-journey-progress]");
  if (!section || !pin || !track) return;

  const mm = gsap.matchMedia();
  mm.add(DESKTOP_MOTION, () => {
    section.classList.add("is-horizontal");
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

    const scroll = gsap.timeline({
      scrollTrigger: {
        trigger: pin,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });
    scroll.to(track, { x: () => -distance(), ease: "none" }, 0);
    if (progress) scroll.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);

    const moving = scroll.getTweensOf(track)[0];
    track.querySelectorAll<HTMLElement>("[data-journey-item]").forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        containerAnimation: moving,
        start: "left 72%",
        // Une étape atteinte reste allumée : la frise se remplit au fil du défilement.
        end: () => `+=${distance() + window.innerWidth}`,
        toggleClass: "is-reached",
      });
    });

    return () => section.classList.remove("is-horizontal");
  });
}
