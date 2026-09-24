// components/sections/Contact.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS } from "@/data/socials";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Contact" title="Get In Touch" />

      <div className="rounded-xl border border-border bg-surface p-10 text-center">
        <p className="mx-auto max-w-xl text-muted">
          I&apos;m a fresh graduate actively looking for Software, Web, or
          Full-Stack Developer opportunities. Whether you have a role in
          mind, a question, or just want to connect — my inbox is always
          open.
        </p>

        <a
          href="mailto:jacobjoan0505@gmail.com"
          className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Say Hello — jacobjoan0505@gmail.com
        </a>

        <div className="mt-8 flex justify-center gap-6 border-t border-border pt-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-muted transition-colors hover:text-accent"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}