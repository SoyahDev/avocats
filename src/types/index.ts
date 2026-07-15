import type { LucideIcon } from "lucide-react";

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  /** Longer lede shown on the dedicated /expertises/[id] page. */
  intro?: string;
  /** Illustrative kinds of missions (not named matters — see SKIPPED-TASKS.md). */
  services?: string[];
  /** id of the referring associé (links to the team card). */
  referentId?: string;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** Human-readable date for display. */
  dateLabel: string;
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  bio: string;
  education: string[];
  languages: string[];
  experience: string;
  email: string;
  linkedin: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}
