import type { Lang } from './i18n';

export type ArticleFrontmatter = {
  title: string;
  date: string;
  summary: string;
  service?: string;
  /** Sample articles are shown with a visible "sample" label until replaced. */
  sample?: boolean;
  /** Pin to the top of the magazine. */
  featured?: boolean;
};

type MdModule = { frontmatter: ArticleFrontmatter; Content: any; compiledContent: () => string | Promise<string> };

// Magazine articles are Markdown files in src/content/magazine/<lang>/ (editable through the CMS in /admin).
const modules = import.meta.glob<MdModule>('../content/magazine/*/*.md', { eager: true });

export type Article = ArticleFrontmatter & {
  slug: string;
  /** Language the text is written in; differs from the page language when the English text is shown as a fallback. */
  lang: Lang;
  Content: any;
  html: () => string | Promise<string>;
};

const all: Article[] = Object.entries(modules).map(([path, mod]) => {
  const [, l, file] = path.match(/magazine\/(\w+)\/([^/]+)\.md$/)!;
  return { ...mod.frontmatter, slug: file, lang: l as Lang, Content: mod.Content, html: mod.compiledContent };
});

/** Articles for a page language. An article not yet translated is shown in English. */
export function getArticles(lang: Lang): Article[] {
  const own = all.filter((a) => a.lang === lang);
  const fallback = lang === 'en' ? [] : all.filter((a) => a.lang === 'en' && !own.some((o) => o.slug === a.slug));
  return [...own, ...fallback].sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || b.date.localeCompare(a.date));
}
