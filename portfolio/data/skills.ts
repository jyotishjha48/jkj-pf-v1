import skillsJson from "../content/skills.json";

export type Skill = {
  id: string;
  name: string;
  image?: string;
  category: "Programming" | "Software" | "Microcontrollers" | "Languages";
  detail?: string;
  evidenceProjectIds: string[];
  evidenceExperienceIds: string[];
};

export const skills = skillsJson.items as Skill[];
