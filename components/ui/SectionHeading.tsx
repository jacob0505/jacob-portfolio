// components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <span className="inline-block rounded bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 bg-accent" />
    </div>
  );
}