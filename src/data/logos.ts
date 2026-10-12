/* Logos des langages et outils de la version artistique du CV.
   Simple Icons (licence CC0), sauf Java et SQL Server, absents de Simple
   Icons et repris de Devicon (licence MIT). Chaque logo est un tracé unique,
   coloré avec currentColor pour suivre la palette du CV. */
import {
  siCss,
  siDocker,
  siExpress,
  siFigma,
  siFramer,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJupyter,
  siNextdotjs,
  siNodedotjs,
  siPandas,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siScikitlearn,
  siStreamlit,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import javaSvg from "../assets/logos/java.svg?raw";
import sqlServerSvg from "../assets/logos/sqlserver.svg?raw";

export interface LogoShape {
  title: string;
  viewBox: string;
  path: string;
}

const simple = ({ title, path }: { title: string; path: string }): LogoShape => ({ title, viewBox: "0 0 24 24", path });

function devicon(title: string, svg: string): LogoShape {
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
  const path = svg.match(/\sd="([^"]+)"/)?.[1];
  if (!viewBox || !path) throw new Error(`Logo illisible : ${title}`);
  return { title, viewBox, path };
}

export const logos = {
  python: simple(siPython),
  javascript: simple(siJavascript),
  java: devicon("Java", javaSvg),
  html5: simple(siHtml5),
  css: simple(siCss),
  sqlserver: devicon("Microsoft SQL Server", sqlServerSvg),
  pandas: simple(siPandas),
  streamlit: simple(siStreamlit),
  jupyter: simple(siJupyter),
  react: simple(siReact),
  scikitlearn: simple(siScikitlearn),
  git: simple(siGit),
  github: simple(siGithub),
  docker: simple(siDocker),
  figma: simple(siFigma),
  framer: simple(siFramer),
  nodedotjs: simple(siNodedotjs),
  express: simple(siExpress),
  postgresql: simple(siPostgresql),
  prisma: simple(siPrisma),
  nextdotjs: simple(siNextdotjs),
  typescript: simple(siTypescript),
  tailwindcss: simple(siTailwindcss),
} satisfies Record<string, LogoShape>;

export type LogoName = keyof typeof logos;
