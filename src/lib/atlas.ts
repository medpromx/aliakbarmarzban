import data from '../data/atlas.json';
import type { L } from './i18n';

export type AtlasItem = {
  n: string;
  file: string;
  /** Slug of the encyclopedia entry that explains this image. */
  entry: string;
  courses: string[];
  title: L;
  intro: L;
  caption: L;
  points: L<string[]>;
  alt: L;
};
export type AtlasChapter = { n: number; items: string[]; title: L; intro: L; closing: L };

export const atlasItems = data.items as AtlasItem[];
export const atlasChapters = data.chapters as AtlasChapter[];
/** Date of the last review of the text written around the images. */
export const atlasReviewed = data.reviewed;

export const atlasPath = '/maritime-visual-atlas/';
export const encyclopediaPath = '/encyclopedia/';
export const magazineArticleSlug = 'maritime-governance-visual-narrative';

export function getAtlasItem(n: string): AtlasItem {
  const item = atlasItems.find((i) => i.n === n);
  if (!item) throw new Error(`Unknown atlas image ${n}`);
  return item;
}

export function chapterOf(n: string): AtlasChapter {
  return atlasChapters.find((c) => c.items.includes(n))!;
}

/** WebP renditions generated from the PNG originals in atlas-originals/. */
export function atlasSrc(n: string, size: 'sm' | 'md' | 'full' = 'md'): string {
  return `/images/atlas/${n}${size === 'full' ? '' : `-${size}`}.webp`;
}
export function atlasSrcset(n: string): string {
  return `${atlasSrc(n, 'sm')} 600w, ${atlasSrc(n, 'md')} 1200w, ${atlasSrc(n, 'full')} 2048w`;
}
