import { defineConfig } from "astro/config";

export default defineConfig({
  // Adresse publique (GitHub Pages) : URL canoniques, balises Open Graph
  // absolues, et lien du portfolio dans le CV.
  site: "https://abdallah94212.github.io",
  build: {
    // Petites feuilles intégrées au HTML, les autres en fichiers mis en cache
    // d'une page à l'autre (mesuré : intégrer tout n'accélère pas l'affichage).
    inlineStylesheets: "auto",
  },
  // Les pages projets sont préchargées au survol : la transition paraît instantanée.
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
  devToolbar: { enabled: false },
});
