/* Thème clair/sombre : la préférence système s'applique jusqu'au premier choix.
   Le changement se propage en cercle depuis le bouton (View Transitions API),
   avec un simple basculement si l'API manque ou si le mouvement est réduit. */
import { prefersReducedMotion } from "../lib/preferences";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

export function initTheme() {
  const root = document.documentElement;
  const button = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  const system = window.matchMedia("(prefers-color-scheme: dark)");

  const stored = (): Theme | null => {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  };
  const current = (): Theme => (root.dataset.theme as Theme | undefined) ?? (system.matches ? "dark" : "light");

  const syncLabel = () => {
    if (!button) return;
    button.setAttribute("aria-label", current() === "dark" ? "Passer au thème clair" : "Passer au thème sombre");
  };

  const apply = (theme: Theme, persist: boolean) => {
    root.dataset.theme = theme;
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        /* Stockage bloqué : le choix vaut pour cette visite. */
      }
    }
    syncLabel();
  };

  apply(stored() ?? current(), false);
  system.addEventListener("change", () => {
    if (!stored()) apply(system.matches ? "dark" : "light", false);
  });

  button?.addEventListener("click", async () => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    if (!document.startViewTransition || prefersReducedMotion()) {
      apply(next, true);
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.classList.add("theme-transition");
    const transition = document.startViewTransition(() => apply(next, true));
    try {
      await transition.ready;
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
      await transition.finished;
    } finally {
      root.classList.remove("theme-transition");
    }
  });
}
