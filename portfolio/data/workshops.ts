import workshopsJson from "../content/workshops.json";

export type Workshop = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: "Robotics" | "AI" | "Engineering" | "STEM";
  excerpt: string;
  content: string;
  image?: string;
  readTimeMinutes?: number;
  featured?: boolean;
  isPlaceholder?: boolean;
};

export const workshops = workshopsJson.items as Workshop[];
