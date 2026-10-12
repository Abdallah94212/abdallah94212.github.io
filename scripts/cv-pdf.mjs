/* Génère le CV à télécharger (public/CV-Abdallah-Borji.pdf) à partir de la
   page /cv/ du build, avec le rendu d'impression de Chrome : c'est le
   document professionnel (CvSheet), pas la composition artistique.
   À relancer après chaque modification du CV : npm run cv:pdf
   Utilise Google Chrome s'il est installé, sinon le Chromium de Playwright
   (npx playwright install chromium). */
import { writeFile } from "node:fs/promises";
import { preview } from "astro";
import { chromium } from "playwright-core";

const FILE = "CV-Abdallah-Borji.pdf";

const server = await preview({ logLevel: "error", server: { port: 4399 } });
let browser;

try {
  browser = await chromium.launch({ channel: "chrome" }).catch(() => chromium.launch());
  const page = await browser.newPage();
  await page.goto(`http://localhost:${server.port}/cv/`, { waitUntil: "networkidle" });

  // En média « print », seule la version professionnelle est affichée : on
  // attend que ses polices soient chargées avant d'imprimer.
  await page.emulateMedia({ media: "print" });
  await page.evaluate(async () => {
    await Promise.all(["400", "600", "800"].map((weight) => document.fonts.load(`${weight} 1em "Mona Sans"`)));
    await document.fonts.load(`500 1em "JetBrains Mono"`);
    await document.fonts.ready;
  });
  if (!(await page.locator(".cv-print .cv").isVisible())) throw new Error("La version imprimable du CV n'est pas affichée.");
  const pdf = await page.pdf({ preferCSSPageSize: true, tagged: true });

  // Garde-fou : le CV doit tenir sur une seule page A4.
  const pages = pdf.toString("latin1").match(/\/Type\s*\/Page(?!s)/g)?.length ?? 0;
  if (pages !== 1) throw new Error(`Le CV fait ${pages} pages : il doit tenir sur une seule.`);

  await writeFile(`public/${FILE}`, pdf);
  await writeFile(`dist/${FILE}`, pdf);
  console.log(`${FILE} : 1 page A4, ${Math.round(pdf.length / 1024)} Ko.`);
} finally {
  // Libère toujours le port du serveur, même si le navigateur n'a pas démarré.
  try {
    await browser?.close();
  } finally {
    await server.stop();
  }
}
