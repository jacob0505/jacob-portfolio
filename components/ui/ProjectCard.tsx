// components/ui/ProjectCard.tsx
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-sm font-medium text-accent hover:underline"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}