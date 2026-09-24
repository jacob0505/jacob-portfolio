// components/sections/Certifications.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-y border-border bg-surface/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.id ?? cert.name}
              className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              {/* 圖示 + 張數 */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>

                {cert.count && cert.count > 1 && (
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
                    ×{cert.count}
                  </span>
                )}
              </div>

              {/* 發證機構 + 證書名稱 */}
              {cert.issuer && (
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-accent">
                  {cert.issuer}
                </p>
              )}
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {cert.name}
              </h3>

              {/* 細項標籤(flex-1 讓下面的按鈕永遠貼底) */}
              <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                {cert.items?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* 下載按鈕 */}
              {cert.pdfUrl && (
                <div className="mt-5 border-t border-border pt-4">
                    <a
                    href={cert.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <path d="m7 10 5 5 5-5" />
                      <path d="M12 15V3" />
                    </svg>
                    Download Certificate
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}