import type { L } from '../lib/i18n';

export type Journey = {
  id: string;
  audience: L;
  need: L;
  /** Path steps; each step may link to a page. */
  steps: { label: L; path?: string }[];
  service: string;
  cta: L;
};

export const journeys: Journey[] = [
  {
    id: 'port',
    audience: { en: 'Port authority executive', fa: 'مدیر سازمان بنادر' },
    need: {
      en: 'Reform of management structure, port performance or operating concessions.',
      fa: 'اصلاح ساختار مدیریتی، عملکرد بندر یا امتیاز بهره‌برداری.',
    },
    steps: [
      { label: { en: 'Port Governance', fa: 'حکمرانی بندری' }, path: '/services/port-governance/' },
      { label: { en: 'Typical engagement', fa: 'شیوه همکاری' }, path: '/services/port-governance/#engagement' },
      { label: { en: 'Experience', fa: 'سوابق' }, path: '/experience/' },
    ],
    service: 'port-governance',
    cta: { en: 'Discuss a Port Governance Review', fa: 'گفت‌وگو درباره بازبینی حکمرانی بندری' },
  },
  {
    id: 'government',
    audience: { en: 'Maritime administration or government', fa: 'مدیر سازمان دریایی یا دولت' },
    need: {
      en: 'Implementing IMO requirements, international regulation and policy development.',
      fa: 'اجرای الزامات IMO، مقررات بین‌المللی و توسعه سیاست‌ها.',
    },
    steps: [
      { label: { en: 'IMO Advisory', fa: 'مشاوره IMO' }, path: '/services/imo-regulation/' },
      { label: { en: 'Implementation roadmap', fa: 'نقشه راه اجرا' }, path: '/services/imo-regulation/#deliverables' },
      { label: { en: 'Credentials', fa: 'اعتبارنامه‌ها' }, path: '/experience/' },
    ],
    service: 'imo-regulation',
    cta: { en: 'Request a Regulatory Gap Assessment', fa: 'درخواست ارزیابی شکاف مقرراتی' },
  },
  {
    id: 'legal',
    audience: { en: 'Legal or contracts director', fa: 'مدیر حقوقی یا قراردادها' },
    need: {
      en: 'Contract risk, tenders, procurement and concessions.',
      fa: 'ریسک قرارداد، مناقصه، تدارکات و امتیاز بهره‌برداری.',
    },
    steps: [
      { label: { en: 'Contracts service', fa: 'خدمت قراردادها' }, path: '/services/maritime-contracts/' },
      { label: { en: 'Challenges & deliverables', fa: 'چالش‌ها و خروجی‌ها' }, path: '/services/maritime-contracts/#challenges' },
      { label: { en: 'Relevant experience', fa: 'تجربه مرتبط' }, path: '/experience/' },
    ],
    service: 'maritime-contracts',
    cta: { en: 'Discuss a Contract Advisory', fa: 'گفت‌وگو درباره مشاوره قرارداد' },
  },
  {
    id: 'training',
    audience: { en: 'Training & seafarer affairs director', fa: 'مدیر آموزش و امور دریانوردان' },
    need: {
      en: 'STCW compliance, certification and specialised training.',
      fa: 'تطبیق STCW، گواهینامه‌ها و آموزش‌های تخصصی.',
    },
    steps: [
      { label: { en: 'STCW service', fa: 'خدمت STCW' }, path: '/services/seafarers-stcw/' },
      { label: { en: 'Training & capacity building', fa: 'آموزش و ظرفیت‌سازی' }, path: '/services/executive-training/' },
      { label: { en: 'Workshop format', fa: 'قالب کارگاه' }, path: '/training/#formats' },
    ],
    service: 'executive-training',
    cta: { en: 'Request an Executive Workshop', fa: 'درخواست کارگاه آموزشی مدیران' },
  },
  {
    id: 'shipowner',
    audience: { en: 'Shipowner regulatory team', fa: 'تیم مقرراتی شرکت کشتیرانی' },
    need: {
      en: 'Anticipating new IMO requirements and their impact on fleet, crew and operations.',
      fa: 'پیش‌بینی الزامات جدید IMO و اثر آنها بر ناوگان، خدمه و عملیات.',
    },
    steps: [
      { label: { en: 'Magazine', fa: 'مجله' }, path: '/magazine/' },
      { label: { en: 'IMO Advisory', fa: 'مشاوره IMO' }, path: '/services/imo-regulation/' },
      { label: { en: 'Specialist Advisory', fa: 'مشاوره تخصصی' }, path: '/specialist-advisory/' },
    ],
    service: 'imo-regulation',
    cta: { en: 'Request a Regulatory Briefing', fa: 'درخواست جلسه توجیهی مقرراتی' },
  },
];

export const sectors: { title: L; text: L; services: string[] }[] = [
  {
    title: { en: 'Government ministries & maritime administrations', fa: 'وزارتخانه‌ها و سازمان‌های دریایی' },
    text: {
      en: 'Flag, port and coastal State responsibilities, IMO engagement and national maritime policy.',
      fa: 'مسئولیت‌های دولت پرچم، دولت بندر و دولت ساحلی، تعامل با IMO و سیاست ملی دریایی.',
    },
    services: ['imo-regulation', 'international-negotiation', 'seafarers-stcw'],
  },
  {
    title: { en: 'Port authorities & state-owned port companies', fa: 'سازمان‌های بنادر و شرکت‌های دولتی بندری' },
    text: {
      en: 'Governance, concessions, performance management and institutional reform.',
      fa: 'حکمرانی، امتیازها، مدیریت عملکرد و اصلاحات نهادی.',
    },
    services: ['port-governance', 'maritime-contracts', 'executive-training'],
  },
  {
    title: { en: 'Shipowners, ship managers & terminal operators', fa: 'مالکان و مدیران کشتی و بهره‌برداران ترمینال' },
    text: {
      en: 'Regulatory foresight, contract risk and engagement with administrations.',
      fa: 'آینده‌نگری مقرراتی، ریسک قرارداد و تعامل با نهادهای حاکمیتی.',
    },
    services: ['imo-regulation', 'maritime-contracts'],
  },
  {
    title: { en: 'Legal directors & procurement executives', fa: 'مدیران حقوقی و مدیران تدارکات' },
    text: {
      en: 'An industry perspective on tenders, concessions and contractual risk.',
      fa: 'دیدگاه صنعتی درباره مناقصه‌ها، امتیازها و ریسک‌های قراردادی.',
    },
    services: ['maritime-contracts'],
  },
  {
    title: { en: 'Maritime academies & training institutions', fa: 'دانشگاه‌ها و مؤسسات آموزش دریایی' },
    text: {
      en: 'STCW quality standards, programme design and faculty development.',
      fa: 'استانداردهای کیفیت STCW، طراحی برنامه و توانمندسازی مدرسان.',
    },
    services: ['seafarers-stcw', 'executive-training'],
  },
  {
    title: { en: 'Investors, law firms & development agencies', fa: 'سرمایه‌گذاران، مؤسسات حقوقی و نهادهای توسعه‌ای' },
    text: {
      en: 'Sector insight for due diligence, programme design and project preparation.',
      fa: 'دیدگاه تخصصی بخش دریایی برای بررسی‌های لازم، طراحی برنامه و آماده‌سازی پروژه.',
    },
    services: ['port-governance', 'maritime-contracts'],
  },
];
