// components/sections/About.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Profile" title="About Me" />

      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-4 text-muted md:col-span-2">
          <p>
            I&apos;m a Computer Science graduate from University Malaysia
            Sabah, specializing in Network Engineering. I&apos;m currently
            interning as a Java Developer at Microlink Systems, where I
            maintain and enhance banking applications on a Core Banking
            Platform — writing Oracle SQL queries, developing batch
            programs, and debugging production systems.
          </p>
          <p>
            What draws me to software development is turning an idea into
            something people can actually use. My final-year project is an
            AI-assisted Mandarin learning platform built with Laravel and
            MySQL, where I led the full-stack architecture — from gamified
            lessons and quizzes to integrating OCR and speech recognition
            for pronunciation feedback.
          </p>
          <p>
            I care about writing code that holds up: clean structure,
            thorough testing, and documentation that makes sense to the
            next person. I&apos;m graduating in 2026 and looking to grow as
            a Software, Web, or Full-Stack Developer.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Education
          </p>
          <h3 className="mt-3 text-lg font-semibold text-foreground">
            {education.degree}
          </h3>
          <p className="mt-1 text-sm text-muted">{education.school}</p>
          <p className="mt-1 text-sm text-muted">
            {education.startDate} – {education.endDate}
          </p>
          {education.cgpa && (
            <p className="mt-3 text-sm text-foreground">
              CGPA:{" "}
              <span className="font-semibold text-accent">
                {education.cgpa}
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}