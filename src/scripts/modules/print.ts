/* Bouton « Imprimer » du CV : il n'est affiché que si JavaScript est là. */
export function initPrint() {
  document.querySelectorAll<HTMLButtonElement>("[data-print]").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", () => window.print());
  });
}
