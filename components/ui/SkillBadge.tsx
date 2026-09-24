// components/ui/SkillBadge.tsx
export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent">
      {label}
    </span>
  );
}