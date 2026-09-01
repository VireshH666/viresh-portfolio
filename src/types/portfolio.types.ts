export type SkillCategory =
  | "Machine Learning & Deep Learning"
  | "Programming"
  | "Data & Visualization"
  | "Computer Vision & Audio"
  | "Web & Backend"
  | "Tools & Databases"
  | "Computer Science Fundamentals";

export type ProjectStatus = "completed" | "in-progress" | "maintained" | "archived";

export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  aboutText: string;
  email: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface Project {
  id: string;
  title: string;
  projectNumber: string;
  subtitle?: string;
  shortDescription: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  category: string;
  goal?: string;
  solution?: string;
  architecture?: string;
  workflowSteps: string[];
  technicalDecisions?: string[];
  privacyNote?: string;
  results?: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  author: string;
  email: string;
}

export interface PortfolioData {
  personalProfile: PersonalProfile;
  socialLinks: SocialLinks;
  projects: Project[];
  skills: Skill[];
}
