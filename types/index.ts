// types/index.ts

export interface Certification {
  id?: string;
  name: string;
  issuer?: string;
  count?: number;    // 顯示成 ×2
  items?: string[];  // 細項,顯示時用 · 隔開
  pdfUrl?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  links?: ProjectLink[];
  imageUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  cgpa?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}
