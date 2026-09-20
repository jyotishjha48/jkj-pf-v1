import introToMotionPlanning from "../content/blog-posts/intro-to-motion-planning.json";
import learningPytorch from "../content/blog-posts/pytorch.json";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "Robotics" | "AI" | "Engineering" | "Research" | "Learning";
  excerpt: string;
  content: string;
  image?: string;
  author?: string;
  readTimeMinutes?: number;
  featured?: boolean;
  isPlaceholder?: boolean;
};

export const blogPosts = [
  introToMotionPlanning,
  learningPytorch,
] as BlogPost[];
