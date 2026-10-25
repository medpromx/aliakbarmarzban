import type { L, Lang } from './i18n';

export type Category = { key: string; icon: string; title: L; text: L };

/** The ten subject areas, in the order a reader is guided through them. */
export const categories: Category[] = [
  { key: 'imo-regulation-compliance', icon: 'regulation', title: { en: 'IMO Regulation and Compliance', fa: 'مقررات IMO و انطباق' }, text: { en: 'How IMO rules are made, what makes them binding and how States prove they implement them.', fa: 'مقررات IMO چگونه وضع می‌شوند، چه چیزی آن‌ها را الزام‌آور می‌کند و دولت‌ها اجرای آن‌ها را چگونه اثبات می‌کنند.' } },
  { key: 'seafarers-human-element', icon: 'seafarer', title: { en: 'Seafarers and the Human Element', fa: 'دریانوردان و عامل انسانی' }, text: { en: 'STCW certification, training oversight, MLC 2006, fatigue and the people who make rules work.', fa: 'گواهینامه‌های STCW، نظارت بر آموزش، MLC 2006، خستگی و انسان‌هایی که مقررات را اجرا می‌کنند.' } },
  { key: 'port-governance-reform', icon: 'port', title: { en: 'Port Governance and Institutional Reform', fa: 'حکمرانی بندری و اصلاحات نهادی' }, text: { en: 'Port governance models, performance indicators, concession oversight and renegotiation.', fa: 'مدل‌های حکمرانی بندری، شاخص‌های عملکرد، نظارت بر امتیازها و مذاکره مجدد.' } },
  { key: 'contracts-risk', icon: 'contract', title: { en: 'Contracts and Risk Management', fa: 'قراردادها و مدیریت ریسک' }, text: { en: 'Tender design, scope of work, choice of legal instrument and risk allocation.', fa: 'طراحی مناقصه، دامنه کار، انتخاب ابزار حقوقی و تخصیص ریسک.' } },
  { key: 'negotiation-cooperation', icon: 'negotiation', title: { en: 'Negotiation and International Cooperation', fa: 'مذاکرات و همکاری‌های بین‌المللی' }, text: { en: 'Preparing delegations and turning memoranda of understanding into measurable cooperation.', fa: 'آماده‌سازی هیئت‌های مذاکره و تبدیل تفاهم‌نامه‌ها به همکاری قابل سنجش.' } },
  { key: 'maritime-digitalisation', icon: 'globe', title: { en: 'Maritime Digitalisation', fa: 'دیجیتالی‌سازی دریایی' }, text: { en: 'The maritime single window, data governance and cyber risk in ports.', fa: 'پنجره واحد دریایی، حکمرانی داده و ریسک سایبری در بنادر.' } },
  { key: 'decarbonisation-climate', icon: 'chart', title: { en: 'Decarbonisation and Climate Regulation', fa: 'کربن‌زدایی و مقررات اقلیمی' }, text: { en: 'The IMO strategy, the EU ETS and FuelEU Maritime, and deciding under regulatory uncertainty.', fa: 'راهبرد IMO، EU ETS و FuelEU Maritime و تصمیم‌گیری در شرایط عدم قطعیت مقرراتی.' } },
  { key: 'investment-ppp', icon: 'compass', title: { en: 'Investment and PPP', fa: 'سرمایه‌گذاری و PPP' }, text: { en: 'Public-private partnerships in ports, bankability and public value.', fa: 'مشارکت عمومی و خصوصی در بنادر، بانک‌پذیری و ارزش عمومی.' } },
  { key: 'independent-expert-disputes', icon: 'shield', title: { en: 'Independent Expertise and Dispute Prevention', fa: 'کارشناسی مستقل و پیشگیری از اختلاف' }, text: { en: 'Independent expert reports and preventing maritime disputes from escalating.', fa: 'گزارش کارشناسی مستقل و جلوگیری از تشدید اختلافات دریایی.' } },
  { key: 'training-competence', icon: 'training', title: { en: 'Training and Competence Development', fa: 'آموزش و توسعه شایستگی' }, text: { en: 'Quality assurance in executive training and learning that leads to real decisions.', fa: 'تضمین کیفیت آموزش مدیران و یادگیری‌ای که به تصمیم واقعی می‌رسد.' } },
];

export type EntryFrontmatter = {
  title: string;
  category: string;
  summary: string;
  course?: string;
  service?: string;
  /** Number of the atlas image used as the entry's reference figure. */
  atlas: string;
  order: number;
  readingMinutes: number;
  updated: string;
  sources: { title: string; url: string }[];
  checks: string[];
  faq?: { q: string; a: string }[];
};

type Heading = { depth: number; slug: string; text: string };
type MdModule = { frontmatter: EntryFrontmatter; compiledContent: () => string | Promise<string>; getHeadings: () => Heading[] };

// Entries are written in Persian and English: src/content/encyclopedia/<fa|en>/<slug>.md.
const modules = import.meta.glob<MdModule>('../content/encyclopedia/*/*.md', { eager: true });

export type Entry = EntryFrontmatter & {
  slug: string;
  /** Language of the text: Persian on Persian pages, English on every other page. */
  lang: 'en' | 'fa';
  html: () => string | Promise<string>;
  headings: () => Heading[];
};

const all: Entry[] = Object.entries(modules).map(([path, mod]) => {
  const [, l, file] = path.match(/encyclopedia\/(\w+)\/([^/]+)\.md$/)!;
  return { ...mod.frontmatter, slug: file, lang: l as 'en' | 'fa', html: mod.compiledContent, headings: mod.getHeadings };
});

export function contentLang(lang: Lang): 'en' | 'fa' {
  return lang === 'fa' ? 'fa' : 'en';
}

export function getEntries(lang: Lang): Entry[] {
  const cl = contentLang(lang);
  return all.filter((e) => e.lang === cl).sort((a, b) => a.order - b.order);
}

export function entriesIn(lang: Lang, category: string): Entry[] {
  return getEntries(lang).filter((e) => e.category === category);
}

export function getEntry(lang: Lang, slug: string): Entry | undefined {
  return getEntries(lang).find((e) => e.slug === slug);
}

export function getCategory(key: string): Category {
  const c = categories.find((x) => x.key === key);
  if (!c) throw new Error(`Unknown encyclopedia category ${key}`);
  return c;
}

export function entryPath(e: { category: string; slug: string }): string {
  return `/encyclopedia/${e.category}/${e.slug}/`;
}
export function categoryPath(key: string): string {
  return `/encyclopedia/${key}/`;
}
