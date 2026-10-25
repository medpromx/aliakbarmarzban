import type { L, Lang } from '../lib/i18n';
import { atlasItems } from '../lib/atlas';
import fa from './training/courses.fa.json';
import en from './training/courses.en.json';
import programme from './training/programme.json';

/**
 * The executive education programme: 8 core courses (C) and 4 electives (E), 56 two-hour sessions.
 * Persian and English text live in src/data/training/courses.<fa|en>.json; other languages show English.
 */
export type Session = { number: number; title: string; detail: string; deliverable: string };
export type CourseDetail = {
  code: string;
  track: 'core' | 'executive';
  hours: number;
  count: number;
  refs: string[];
  title: string;
  audience: string;
  learning_outcome: string;
  capstone: string;
  sessions: Session[];
  hook: string;
  problem: string;
  method: string;
  editorial_questions: string[];
  measurable_outcomes: string[];
  hypothetical_case: string;
  scientific_note: string;
};
export type Course = { code: string; track: 'core' | 'executive'; hours: number; sessions: number; title: L; summary: L };

const faList = fa as CourseDetail[];
const enList = en as CourseDetail[];

export const courses: Course[] = enList.map((e) => {
  const f = faList.find((x) => x.code === e.code)!;
  return { code: e.code, track: e.track, hours: e.hours, sessions: e.count, title: { en: e.title, fa: f.title }, summary: { en: e.hook, fa: f.hook } };
});

export const programmeMeta = programme.meta;
export const references = programme.references as { key: string; url: string; name: L }[];

export function getCourse(code: string): Course | undefined {
  return courses.find((c) => c.code === code);
}

/** Full course text in the language the page shows: Persian on Persian pages, English elsewhere. */
export function courseDetails(lang: Lang): CourseDetail[] {
  return lang === 'fa' ? faList : enList;
}

export function coursePath(code: string): string {
  return `/training/courses/${code.toLowerCase()}/`;
}

/** Atlas images that illustrate a course. */
export function courseImages(code: string) {
  return atlasItems.filter((i) => i.courses.includes(code));
}
