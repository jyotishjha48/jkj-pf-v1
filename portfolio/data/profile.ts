import profileJson from "../content/profile.json";

export const profile = profileJson as {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  title: string;
  subtitle: string;
  missionStatement: string;
  researchInterests: string[];
};
