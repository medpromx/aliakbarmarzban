import type { Lang } from './i18n';

export type InsightFrontmatter = {
  title: string;
  date: string;
  summary: string;
  service?: string;
  /** Sample articles are shown with a visible "sample" label until replaced. */
  sample?: boolean;
};

type MdModule = { frontmatter: InsightFrontmatter; Content: any };

// Insights are Markdown files in src/content/insights/<lang>/ (editable through the CMS in /admin).
const modules = import.meta.glob<MdModule>('../content/insights/*/*.md', { eager: true });

export type Insight = InsightFrontmatter & { slug: string; lang: Lang; Content: any };

export function getInsights(lang: Lang): Insight[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const [, l, file] = path.match(/insights\/(\w+)\/([^/]+)\.md$/)!;
      return { ...mod.frontmatter, slug: file, lang: l as Lang, Content: mod.Content };
    })
    .filter((i) => i.lang === lang)
    .sort((a, b) => b.date.localeCompare(a.date));
}
