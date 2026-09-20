import educationJson from "../content/education.json";

export const education = educationJson.items as {
  id: string;
  institution: string;
  image?: string;
  location: string;
  degree: string;
  graduationDate: string;
  gpa: string;
}[];
