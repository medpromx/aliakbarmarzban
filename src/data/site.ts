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
    en: 'Maritime advisory by Ali Akbar Marzban, former Permanent Representative of Iran to the IMO and former Deputy for Maritime Affairs of the Ports and Maritime Organization: IMO regulation, port governance, maritime contracts, seafarers and international cooperation.',
    fa: 'مشاوره دریایی علی‌اکبر مرزبان، نماینده دائم پیشین ایران در IMO و معاون پیشین امور دریایی سازمان بنادر و دریانوردی: مقررات IMO، حکمرانی بندری، قراردادهای دریایی، امور دریانوردان و همکاری‌های بین‌المللی.',
  } as L,
  title: {
    en: 'Former Deputy for Maritime Affairs, Ports and Maritime Organization of Iran · Former Permanent Representative of Iran to the IMO',
    fa: 'معاون پیشین امور دریایی سازمان بنادر و دریانوردی · نماینده دائم پیشین ایران در سازمان بین‌المللی دریانوردی (IMO)',
  } as L,
  // WhatsApp is the primary contact channel. Number in international format, digits only.
  whatsapp: '989129332824',
  whatsappDisplay: '+98 912 933 2824',
  photo: '/images/ali-akbar-marzban.webp',
  portrait: '/images/ali-akbar-marzban-portrait.webp',
  ogImage: '/images/og-ali-akbar-marzban.jpg',
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
  primaryCta: { en: 'Discuss an Advisory Mandate', fa: 'گفت‌وگو درباره مأموریت مشاوره‌ای' },
  secondaryCta: { en: 'Explore Advisory Services', fa: 'مشاهده خدمات مشاوره' },
  requestConsultation: { en: 'Request a Consultation', fa: 'درخواست مشاوره' },
  learnMore: { en: 'View service', fa: 'مشاهده خدمت' },
  readMore: { en: 'Read article', fa: 'مطالعه مقاله' },
  allInsights: { en: 'All insights', fa: 'همه تحلیل‌ها' },
  home: { en: 'Home', fa: 'خانه' },
  services: { en: 'Advisory Services', fa: 'خدمات مشاوره' },
  insights: { en: 'Insights', fa: 'تحلیل‌ها' },
  privacy: { en: 'Privacy Policy', fa: 'حریم خصوصی' },
  legal: { en: 'Legal Notices', fa: 'اطلاعیه‌های حقوقی' },
  specialist: { en: 'Specialist Advisory', fa: 'مشاوره تخصصی تکمیلی' },
  contact: { en: 'Contact & Consultation', fa: 'تماس و درخواست مشاوره' },
  whatsapp: { en: 'Message on WhatsApp', fa: 'گفت‌وگو در واتس‌اپ' },
  whatsappShort: { en: 'WhatsApp', fa: 'واتس‌اپ' },
};

export function whatsappLink(text = ''): string {
  return `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}
