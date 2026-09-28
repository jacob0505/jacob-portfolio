// components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS } from "@/data/socials";
import { validateContact, LIMITS, type ContactErrors } from "@/lib/validation";

type Status = "idle" | "sending" | "success" | "error";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "", website: "" };

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validateContact(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

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

        {/* ---------- 新增:聯絡表單 ---------- */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-8 max-w-xl space-y-5 text-left"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={LIMITS.name}
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                className={inputClass}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={LIMITS.email}
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              maxLength={LIMITS.subject}
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              aria-invalid={!!errors.subject}
              className={inputClass}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={LIMITS.message}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              aria-invalid={!!errors.message}
              className={`${inputClass} resize-y`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* 蜜罐欄位:真人看不到,機器人才會填 */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p
              role="status"
              className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400"
            >
              Thanks! Your message has been sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
            >
              Sorry, something went wrong. Please try again later, or email me
              directly.
            </p>
          )}
        </form>
        {/* ---------- 表單結束 ---------- */}

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm text-muted">Or reach me directly</p>
          <a
            href="mailto:jacobjoan0505@gmail.com"
            className="mt-4 inline-block rounded-lg border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background"
          >
            jacobjoan0505@gmail.com
          </a>
        </div>

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