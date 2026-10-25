import type { L } from '../lib/i18n';

export const methodology: { title: L; text: L }[] = [
  {
    title: { en: 'Discover', fa: 'شناخت' },
    text: { en: 'A confidential conversation to understand the mandate, the decision-makers and the constraints.', fa: 'گفت‌وگویی محرمانه برای شناخت مأموریت، تصمیم‌گیرندگان و محدودیت‌ها.' },
  },
  {
    title: { en: 'Assess', fa: 'ارزیابی' },
    text: { en: 'Structured review of obligations, institutions, contracts or capabilities against a clear benchmark.', fa: 'بررسی ساختاریافته تعهدات، نهادها، قراردادها یا توانمندی‌ها در برابر معیاری روشن.' },
  },
  {
    title: { en: 'Advise', fa: 'مشاوره' },
    text: { en: 'Prioritised, decision-ready recommendations with owners, timelines and trade-offs.', fa: 'توصیه‌های اولویت‌بندی‌شده و آماده تصمیم‌گیری با مسئول، زمان‌بندی و مزایا و معایب.' },
  },
  {
    title: { en: 'Implement', fa: 'اجرا' },
    text: { en: 'Roadmaps, KPIs and hands-on support while recommendations become practice.', fa: 'نقشه راه، شاخص‌های عملکرد و پشتیبانی عملی تا توصیه‌ها به رویه تبدیل شوند.' },
  },
];

export const differentiators: { icon: string; title: L; text: L }[] = [
  {
    icon: 'compass',
    title: { en: 'Seen from the inside', fa: 'شناخت از درون' },
    text: { en: 'Thirty years inside port and maritime administration, from the contracts desk to the executive board.', fa: 'سی سال کار در بنادر و دریانوردی؛ از میز قراردادها تا هیئت عامل سازمان.' },
  },
  {
    icon: 'globe',
    title: { en: 'International perspective', fa: 'دیدگاه بین‌المللی' },
    text: { en: 'Eight years at the IMO in London: knowing how international rules are negotiated, not only what they say.', fa: 'هشت سال حضور در IMO، لندن: شناخت اینکه مقررات بین‌المللی چگونه مذاکره می‌شوند، نه فقط اینکه چه می‌گویند.' },
  },
  {
    icon: 'chart',
    title: { en: 'Implementation-focused', fa: 'متمرکز بر اجرا' },
    text: { en: 'Advice you can act on: roadmaps, frameworks and clear next steps, not only reports.', fa: 'توصیه‌هایی که می‌توان اجرا کرد: نقشه راه، چارچوب و گام‌های روشن؛ نه فقط گزارش.' },
  },
  {
    icon: 'shield',
    title: { en: 'Confidential', fa: 'محرمانه' },
    text: { en: 'Discreet handling of sensitive institutional and commercial matters.', fa: 'رسیدگی محتاطانه به موضوعات حساس نهادی و تجاری.' },
  },
];
