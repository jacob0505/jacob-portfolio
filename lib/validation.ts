// lib/validation.ts
export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 2000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  const name = input.name.trim();
  const email = input.email.trim();
  const subject = input.subject.trim();
  const message = input.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name)
    errors.name = `Name must be ${LIMITS.name} characters or fewer.`;

  if (!email) errors.email = "Please enter your email.";
  else if (email.length > LIMITS.email || !EMAIL_REGEX.test(email))
    errors.email = "Please enter a valid email address.";

  if (!subject) errors.subject = "Please enter a subject.";
  else if (subject.length > LIMITS.subject)
    errors.subject = `Subject must be ${LIMITS.subject} characters or fewer.`;

  if (!message) errors.message = "Please enter a message.";
  else if (message.length > LIMITS.message)
    errors.message = `Message must be ${LIMITS.message} characters or fewer.`;

  return errors;
}