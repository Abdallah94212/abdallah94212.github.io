/* Génère le CV à télécharger (public/CV-Abdallah-Borji.pdf) à partir de la
   page /cv/ du build, avec le rendu d'impression de Chrome.
   À relancer après chaque modification du CV : npm run cv:pdf
   Utilise Google Chrome s'il est installé, sinon le Chromium de Playwright
   (npx playwright install chromium). */
import { writeFile } from "node:fs/promises";
import { preview } from "astro";
import { chromium } from "playwright-core";

const FILE = "CV-Abdallah-Borji.pdf";

const server = await preview({ logLevel: "error", server: { port: 4399 } });
const browser = await chromium.launch({ channel: "chrome" }).catch(() => chromium.launch());

try {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${server.port}/cv/`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const pdf = await page.pdf({ preferCSSPageSize: true, tagged: true });

  // Garde-fou : le CV doit tenir sur une seule page A4.
  const pages = pdf.toString("latin1").match(/\/Type\s*\/Page(?!s)/g)?.length ?? 0;
  if (pages !== 1) throw new Error(`Le CV fait ${pages} pages : il doit tenir sur une seule.`);

  await writeFile(`public/${FILE}`, pdf);
  await writeFile(`dist/${FILE}`, pdf);
  console.log(`${FILE} : 1 page A4, ${Math.round(pdf.length / 1024)} Ko.`);
} finally {
  await browser.close();
  await server.stop();
}
