import type { L } from '../lib/i18n';

export const site = {
  url: 'https://aliakbarmarzban.ir',
  advisorName: { en: 'Ali Akbar Marzban', fa: 'علی‌اکبر مرزبان' } as L,
  brand: { en: 'International Maritime Advisory', fa: 'مشاوره بین‌المللی دریایی' } as L,
  pillars: {
    en: 'Regulation · Port Governance · International Affairs',
    fa: 'مقررات · حکمرانی بندری · امور بین‌الملل',
  } as L,
  positioning: {
    en: 'From Maritime Policy to Practical Implementation',
    fa: 'از سیاست دریایی تا اجرای عملی',
  } as L,
  description: {
    en: 'Independent strategic advisory for maritime administrations, port authorities and industry leaders: IMO regulation, port governance, maritime contracts, STCW and international cooperation.',
    fa: 'مشاوره راهبردی مستقل برای سازمان‌های دریایی، سازمان‌های بنادر و مدیران صنعت: مقررات IMO، حکمرانی بندری، قراردادهای دریایی، STCW و همکاری‌های بین‌المللی.',
  } as L,
  // Public contact details are configured through environment variables (see .env.example).
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || '',
  linkedin: '', // TODO: add the advisor's LinkedIn profile URL once approved.
};

export type NavItem = { label: L; path: string };

export const nav: NavItem[] = [
  { label: { en: 'Advisory Services', fa: 'خدمات مشاوره' }, path: '/services/' },
  { label: { en: 'Clients & Sectors', fa: 'مشتریان و بخش‌ها' }, path: '/sectors/' },
  { label: { en: 'Experience', fa: 'سوابق و اعتبار' }, path: '/experience/' },
  { label: { en: 'Insights', fa: 'تحلیل‌ها' }, path: '/insights/' },
  { label: { en: 'Training & Speaking', fa: 'آموزش و سخنرانی' }, path: '/training/' },
  { label: { en: 'About', fa: 'درباره مشاور' }, path: '/about/' },
];

export const ui = {
  skip: { en: 'Skip to main content', fa: 'رفتن به محتوای اصلی' },
  menu: { en: 'Menu', fa: 'منو' },
  close: { en: 'Close', fa: 'بستن' },
  switchLang: { en: 'فارسی', fa: 'English' },
  switchLangLabel: { en: 'Read this page in Persian', fa: 'Read this page in English' },
  primaryCta: { en: 'Discuss an Advisory Mandate', fa: 'گفت‌وگو درباره مأموریت مشاوره‌ای' },
  secondaryCta: { en: 'Explore Advisory Services', fa: 'مشاهده خدمات مشاوره' },
  requestConsultation: { en: 'Request a Consultation', fa: 'درخواست مشاوره' },
  learnMore: { en: 'View service', fa: 'مشاهده خدمت' },
  readMore: { en: 'Read article', fa: 'مطالعه مقاله' },
  allInsights: { en: 'All insights', fa: 'همه تحلیل‌ها' },
  home: { en: 'Home', fa: 'خانه' },
  services: { en: 'Advisory Services', fa: 'خدمات مشاوره' },
  insights: { en: 'Insights', fa: 'تحلیل‌ها' },
  placeholder: { en: 'Content pending verification', fa: 'محتوا در انتظار تأیید' },
  footerNote: {
    en: 'Independent strategic advisory. Not legal representation, technical engineering, brokerage or official institutional authority.',
    fa: 'مشاوره راهبردی مستقل. این خدمات جایگزین وکالت حقوقی، خدمات فنی مهندسی، کارگزاری یا اختیارات رسمی نهادی نیست.',
  },
  privacy: { en: 'Privacy Policy', fa: 'حریم خصوصی' },
  legal: { en: 'Legal Notices', fa: 'اطلاعیه‌های حقوقی' },
  specialist: { en: 'Specialist Advisory', fa: 'مشاوره تخصصی تکمیلی' },
  contact: { en: 'Contact & Consultation', fa: 'تماس و درخواست مشاوره' },
};
