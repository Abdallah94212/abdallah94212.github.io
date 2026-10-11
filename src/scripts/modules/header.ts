/* En-tête : un voile apparaît dès qu'on a quitté le haut de page, et le lien
   de la section en cours est signalé. Deux IntersectionObserver suffisent :
   aucun calcul pendant le défilement. */
export function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;

  // Repère de 1 px en haut de page : quand il sort de l'écran, la page a défilé.
  const sentinel = document.createElement("div");
  sentinel.setAttribute("aria-hidden", "true");
  sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:8px;pointer-events:none";
  document.body.prepend(sentinel);
  new IntersectionObserver(([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting)).observe(sentinel);

  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  const sections = links
    .map((link) => document.getElementById(link.dataset.navLink ?? ""))
    .filter((section): section is HTMLElement => Boolean(section));
  if (!sections.length) return;

  // Une section est « en cours » quand elle traverse une ligne à 45 % de la hauteur.
  const active = new Set<string>();
  const sync = () => {
    const current = sections.filter((section) => active.has(section.id)).pop()?.id ?? null;
    links.forEach((link) => {
      if (link.dataset.navLink === current) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? active.add(entry.target.id) : active.delete(entry.target.id)));
      sync();
    },
    { rootMargin: "-45% 0px -55% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}
