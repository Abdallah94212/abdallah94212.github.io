/* Préfixe les liens internes avec le chemin de base (utile si le site est
   publié dans un sous-dossier, par exemple sur GitHub Pages). */
export function url(path = "/") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const projectUrl = (slug: string) => url(`/projets/${slug}/`);
