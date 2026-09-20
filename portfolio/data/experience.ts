import experienceJson from "../content/experience.json";

export type Experience = {
  id: string;
  title: string;
  image?: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  type: "professional" | "research";
  summary?: string;
  responsibilities: string[];
  technologies?: string[];
  relatedProjectIds?: string[];
};

export const experiences = experienceJson.items as Experience[];
