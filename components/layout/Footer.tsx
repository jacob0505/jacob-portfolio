// components/layout/Footer.tsx
import { SOCIAL_LINKS } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          © {year} Jacob Ling Chung Jie. All rights reserved.
        </p>

        <div className="flex gap-5">
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
    </footer>
  );
}