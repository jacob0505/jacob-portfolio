// components/sections/Hero.tsx
import Image from "next/image";
import { SOCIAL_LINKS } from "@/data/socials";
/*move to //data socials.tsx
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/jacob0505",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jacob-ling-chung-jie-089634253",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:jacobjoan0505@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </svg>
    ),
  },
];*/

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 text-center md:flex-row md:text-left">
      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full ring-4 ring-accent/20 md:h-56 md:w-56">
        <Image
          src="/images/Jacob_photo.jpeg"
          alt="Jacob Ling Chung Jie"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 160px, 224px"
        />
      </div>

      <div>
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">
          Software Developer
        </p>
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          Jacob Ling Chung Jie
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Computer Science graduate who builds full-stack web applications.
          Currently gaining hands-on experience with Java-based banking
          systems. I also passionate about crafting clean and reliable software
          from front end to back end.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View My Work
          </a>
          <a
            href="/images/JacobLingResume.pdf"
            download
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-5 md:justify-start">
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