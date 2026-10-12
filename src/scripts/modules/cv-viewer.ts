/* Visionneuse du CV : vue d'ensemble (la feuille A4 entière) ou lecture
   agrandie. Un clic sur la feuille, hors liens, bascule de l'une à l'autre en
   gardant le point cliqué sous le pointeur ; Échap revient à l'ensemble. */
export function initCvViewer() {
  const viewer = document.querySelector<HTMLElement>("[data-cv-viewer]");
  const sheet = viewer?.querySelector<HTMLElement>("[data-cv-sheet]");
  const stage = viewer?.querySelector<HTMLElement>("[data-cv-stage]");
  const button = viewer?.querySelector<HTMLButtonElement>("[data-cv-zoom]");
  const label = button?.querySelector<HTMLElement>("[data-cv-zoom-label]");
  if (!viewer || !sheet || !stage || !button || !label) return;

  button.hidden = false;
  const zoomed = () => viewer.dataset.zoom === "on";

  function setZoom(on: boolean, pointer?: { x: number; y: number }) {
    const before = sheet!.getBoundingClientRect();
    // Sans pointeur (bouton, clavier), on garde le haut de la feuille en vue.
    const x = pointer?.x ?? before.left + before.width / 2;
    const y = pointer?.y ?? Math.max(before.top, 0);
    const fx = (x - before.left) / before.width;
    const fy = (y - before.top) / before.height;

    viewer!.dataset.zoom = on ? "on" : "off";
    button!.setAttribute("aria-pressed", String(on));
    label!.textContent = on ? "Vue d’ensemble" : "Agrandir";

    if (!on) {
      stage!.scrollLeft = 0;
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const after = sheet!.getBoundingClientRect();
    stage!.scrollLeft += after.left + fx * after.width - x;
    window.scrollBy({ top: after.top + fy * after.height - y, behavior: "instant" });
  }

  button.addEventListener("click", () => setZoom(!zoomed()));

  sheet.addEventListener("click", (event) => {
    if ((event.target as Element).closest("a, button")) return;
    if (String(window.getSelection() ?? "").length > 0) return;
    setZoom(!zoomed(), { x: event.clientX, y: event.clientY });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && zoomed()) setZoom(false);
  });

  // Les polices du document professionnel ne servent qu'à l'impression : on
  // les charge dès que la page est calme, pour qu'elles soient prêtes à temps.
  const loadPrintFonts = () => {
    for (const weight of ["400", "600", "800"]) document.fonts.load(`${weight} 1em "Mona Sans"`).catch(() => {});
    document.fonts.load(`500 1em "JetBrains Mono"`).catch(() => {});
  };
  if ("requestIdleCallback" in window) requestIdleCallback(loadPrintFonts, { timeout: 3000 });
  else setTimeout(loadPrintFonts, 1500);
}
