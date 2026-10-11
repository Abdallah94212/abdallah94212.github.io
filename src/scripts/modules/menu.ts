/* Menu plein écran sur mobile : focus piégé dans le menu, fermeture avec
   Échap, défilement de la page bloqué tant qu'il est ouvert. Les transitions
   d'ouverture et de fermeture sont en CSS (voir SiteHeader.astro). */
import { lockScroll, unlockScroll } from "../lib/scroll";

export function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-menu]");
  const label = document.querySelector<HTMLElement>("[data-menu-label]");
  if (!toggle || !menu) return;

  const root = document.documentElement;
  const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>("[data-menu-link]"));
  const focusables = () => [toggle, ...Array.from(menu.querySelectorAll<HTMLElement>("a, button"))];
  let open = false;

  const setOpen = (next: boolean, { restoreFocus = true } = {}) => {
    if (next === open) return;
    open = next;
    toggle.setAttribute("aria-expanded", String(open));
    if (label) label.textContent = open ? "Fermer" : "Menu";
    root.classList.toggle("menu-open", open);

    if (open) {
      menu.hidden = false;
      lockScroll();
      // Une image plus tard, pour que la transition parte de l'état fermé.
      requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add("is-open")));
      links[0]?.focus({ preventScroll: true });
    } else {
      unlockScroll();
      menu.classList.remove("is-open");
      const hide = () => {
        if (!open) menu.hidden = true;
      };
      menu.addEventListener("transitionend", hide, { once: true });
      // Repli si aucune transition ne se déclenche (mouvement réduit).
      window.setTimeout(hide, 700);
      if (restoreFocus) toggle.focus({ preventScroll: true });
    }
  };

  toggle.addEventListener("click", () => setOpen(!open));
  links.forEach((link) => link.addEventListener("click", () => setOpen(false, { restoreFocus: false })));

  document.addEventListener("keydown", (event) => {
    if (!open) return;
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }
    if (event.key !== "Tab") return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Le menu n'existe que sur petit écran : on le referme si la fenêtre s'élargit.
  window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false, { restoreFocus: false });
  });
}
