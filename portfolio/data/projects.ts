import projectsJson from "../content/projects.json";

export type ProjectStatus = "Completed" | "Ongoing" | "Research";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  objective: string;
  period: string;
  technologies: string[];
  status: ProjectStatus;
  image?: string;
  problem?: string;
  environment?: string;
  perception?: string;
  decision?: string;
  planning?: string;
  control?: string;
  implementation?: string;
  results?: string;
  limitations?: string;
  futureWork?: string;
};

export const projects = projectsJson.items as Project[];
