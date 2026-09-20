import leadershipJson from "../content/leadership.json";

export type LeadershipRole = {
  id: string;
  organization: string;
  image?: string;
  location: string;
  period: string;
  roles: {
    title: string;
    responsibilities: string[];
  }[];
};

export const leadership = leadershipJson.items as LeadershipRole[];
