// components/sections/Experience.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Career" title="Experience" />

      <div className="space-y-8">
        {experience.map((job) => (
          <div
            key={job.id}
            className="relative border-l-2 border-border pl-8"
          >
            <span className="absolute -left -[9px] top-1 h-4 w-4 rounded-full border-4 border-background bg-accent" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                {job.role}
              </h3>
              <span className="text-sm text-muted">
                {job.startDate} – {job.endDate}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-accent">
              {job.company}
            </p>

            <ul className="mt-4 space-y-2">
              {job.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}