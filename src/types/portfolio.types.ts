export type SkillCategory =
  | "Machine Learning"
  | "Computer Vision & Audio"
  | "Development"
  | "Data & Tools"
  | "Databases"
  | "Fundamentals"
  | "Languages"
  | "Machine Learning & Deep Learning"
  | "Data Analysis & Visualization"
  | "AI & Signal Processing"
  | "Web & Frameworks"
  | "Databases & Tools"
  | "Core Concepts"
  | "Frontend"
  | "Backend"
  | "Database"
  | "AI/ML"
  | "DevOps"
  | "Tools"
  | "Other";

export type ProjectStatus = "completed" | "in-progress" | "maintained" | "archived";

export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  location: string;
  email: string;
  phone?: string;
  profileImage?: string;
  resumeUrl?: string;
  availability?: "available" | "open-to-offers" | "unavailable" | string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
  website?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  status: ProjectStatus;
  role?: string;
  technologies: string[];
  category: string;
  image?: string;
  screenshots?: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem?: string;
  goal?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  technicalDecisions?: string[];
  challenges?: string[];
  results?: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  links?: ProjectLink[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string;
  score?: string;
  description?: string;
  achievements?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  date: string;
  description: string;
  url?: string;
  type: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string;
  description?: string;
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
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
  certifications: Certification[];
  hobbies?: string[];
}
