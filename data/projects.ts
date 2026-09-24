// data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "mandarin-learning-platform",
        title: "Mandarin Language Learning Web-Based System",
        description:
        "An AI-assisted Mandarin learning platform with gamified lessons, quizzes and progress tracking. Led the full-stack architecture and integrated OCR and speech recognition to improve pronunciation feedback and language acquisition.",
        techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Tailwind CSS",
        "Tesseract OCR",
        "Whisper AI",
        ],
        featured: true,
    },
      {
    id: "banking-system",
    title: "Banking System",
    description:
      "A full-stack banking application supporting account creation, deposits, withdrawals, transfers and transaction history lookup. Built a Spring Boot REST API backend with PostgreSQL and a Next.js frontend. Then it is deployed with Docker on Render and Vercel.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    links: [
      { label: "Live Demo", url: "https://banking-frontend-amber.vercel.app/" },
      { label: "Frontend GitHub", url: "https://github.com/jacob0505/banking-frontend" },
      { label: "Backend GitHub", url: "https://github.com/jacob0505/banking-system" },
    ],
    featured: true,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio showcasing my projects, skills and experience. Built with a reusable component architecture, typed data models and a light/dark theme toggle.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    
    featured: true,
  },
];