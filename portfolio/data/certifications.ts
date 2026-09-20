import certificationsJson from "../content/certifications.json";

export const certifications = certificationsJson.items as {
  id: string;
  title: string;
  instructor: string;
  issuer: string;
  period: string;
  description: string;
  image?: string;
  technologies: string[];
}[];
