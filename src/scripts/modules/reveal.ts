/* Apparitions au défilement, déclarées dans le HTML par data-reveal :
   - title : les lignes d'un titre montent depuis leur masque ;
   - fade  : léger glissement vers le haut, par groupes ;
   - media : la capture se dévoile de bas en haut ;
   - rule  : un filet se trace de gauche à droite.
   Chaque élément n'apparaît qu'une fois. Sans JS ou en mouvement réduit,
   tout est simplement visible. */
import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "../lib/motion";

const START = "top 86%";

export function initReveals(scope: ParentNode = document) {
  if (prefersReducedMotion()) return;

  scope.querySelectorAll<HTMLElement>("[data-reveal='title']").forEach((title) => {
    // aria "none" : le découpage en lignes ne change rien pour les lecteurs
    // d'écran, et les liens contenus dans le titre restent accessibles.
    const split = SplitText.create(title, { type: "lines", mask: "lines", aria: "none" });
    gsap.from(split.lines, {
      yPercent: 108,
      duration: 1.2,
      stagger: 0.08,
      scrollTrigger: { trigger: title, start: START, once: true },
      // Une fois en place, le titre retrouve son texte d'origine (redimensionnement, lecteurs d'écran).
      onComplete: () => split.revert(),
    });
  });

  const fades = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll("[data-reveal='fade']"));
  gsap.set(fades, { opacity: 0, y: 28 });
  ScrollTrigger.batch(fades, {
    start: START,
    once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, stagger: 0.09, overwrite: true, clearProps: "transform" }),
  });

  scope.querySelectorAll<HTMLElement>("[data-reveal='media']").forEach((media) => {
    const frames = media.querySelectorAll<HTMLElement>(".shot__viewport");
    gsap.fromTo(
      frames,
      { clipPath: "inset(100% 0% 0% 0% round 10px)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        duration: 1.4,
        ease: "expo.inOut",
        stagger: 0.15,
        scrollTrigger: { trigger: media, start: "top 82%", once: true },
        clearProps: "clipPath",
      },
    );
  });

  scope.querySelectorAll<HTMLElement>("[data-reveal='rule']").forEach((rule) => {
    gsap.fromTo(rule, { "--rule": 0 }, { "--rule": 1, duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: rule, start: START, once: true } });
  });
}

/* Le manifeste se lit mot à mot : chaque mot passe du gris secondaire à
   l'encre quand on le dépasse. Le gris de départ reste lisible (contraste AA),
   et la variable --lit suit le thème clair ou sombre. */
export function initScrubText() {
  if (prefersReducedMotion()) return;
  document.querySelectorAll<HTMLElement>("[data-scrub-text]").forEach((text) => {
    const split = SplitText.create(text, { type: "words", tag: "span", wordsClass: "scrub-word", aria: "none" });
    gsap.fromTo(
      split.words,
      { "--lit": 0 },
      {
        "--lit": 1,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: { trigger: text, start: "top 78%", end: "bottom 52%", scrub: true },
      },
    );
  });
}
