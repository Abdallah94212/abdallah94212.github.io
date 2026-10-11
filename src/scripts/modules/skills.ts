/* Compétences reliées aux preuves : survoler, focaliser ou sélectionner une
   compétence éclaire les projets où elle a servi. La sélection (clic, tap,
   Entrée) reste active pour pouvoir lire la liste sur mobile. */
export function initSkills() {
  const root = document.querySelector<HTMLElement>("[data-skills]");
  if (!root) return;
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-skill]"));
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-evidence]"));
  const status = root.querySelector<HTMLElement>("[data-proof-status]");
  const defaultStatus = status?.textContent ?? "";
  let selected: HTMLButtonElement | null = null;

  const nameOf = (button: HTMLButtonElement) => button.firstChild?.textContent?.trim() ?? "";

  const highlight = (button: HTMLButtonElement | null) => {
    const ids = button?.dataset.usedIn?.split(" ") ?? [];
    root.classList.toggle("has-focus", Boolean(button));
    buttons.forEach((item) => item.classList.toggle("is-lit", item === button));
    items.forEach((item) => item.classList.toggle("is-lit", ids.includes(item.dataset.evidence ?? "")));
    if (status) status.textContent = button ? `${nameOf(button)}, mis en pratique dans` : defaultStatus;
  };

  buttons.forEach((button) => {
    button.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") highlight(button);
    });
    button.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") highlight(selected);
    });
    button.addEventListener("focus", () => highlight(button));
    button.addEventListener("blur", () => highlight(selected));
    button.addEventListener("click", () => {
      selected = selected === button ? null : button;
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === selected)));
      highlight(selected ?? null);
    });
  });
}
