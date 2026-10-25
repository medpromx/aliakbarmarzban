import type { L } from '../lib/i18n';

export type Book = { year: number; title: L; kind: L; text: L; topics: L[]; courses: string[]; category: string };

// From the advisor's CV. Publisher details, ISBN and cover images can be added when supplied.
export const books: Book[] = [
  {
    year: 2013,
    title: { en: 'The International Maritime Organization and its Role in the Development of the Shipping Industry and International Maritime Law', fa: 'سازمان بین‌المللی دریانوردی و نقش آن در توسعه صنعت کشتیرانی و حقوق بین‌الملل دریایی' },
    kind: { en: 'Book, published in the United Kingdom', fa: 'کتاب، منتشرشده در انگلستان' },
    text: {
      en: 'A study of how the International Maritime Organization works and how its conventions, codes and resolutions have shaped the shipping industry and the development of international maritime law.',
      fa: 'پژوهشی درباره سازوکار سازمان بین‌المللی دریانوردی و نقش کنوانسیون‌ها، کدها و قطعنامه‌های آن در شکل‌گیری صنعت کشتیرانی و توسعه حقوق بین‌الملل دریایی.',
    },
    topics: [
      { en: 'The structure and working methods of IMO', fa: 'ساختار و روش کار IMO' },
      { en: 'IMO conventions and their legal effect', fa: 'کنوانسیون‌های IMO و اثر حقوقی آن‌ها' },
      { en: 'IMO and the development of the shipping industry', fa: 'IMO و توسعه صنعت کشتیرانی' },
    ],
    courses: ['C01', 'C02'],
    category: 'imo-regulation-compliance',
  },
  {
    year: 2002,
    title: { en: 'Tendering, Auctions and Contracting in the Ports and Maritime Organization', fa: 'روند برگزاری مناقصه، مزایده و انجام معامله در سازمان بنادر و دریانوردی' },
    kind: { en: 'Research book, Ports and Maritime Organization', fa: 'کتاب پژوهشی، سازمان بنادر و دریانوردی' },
    text: {
      en: 'A practical study of the procedures for tenders, auctions and contracting in the Ports and Maritime Organization, written from the experience of heading its legal affairs and contracts.',
      fa: 'پژوهشی کاربردی درباره روند برگزاری مناقصه، مزایده و انجام معامله در سازمان بنادر و دریانوردی، برگرفته از تجربه مدیریت امور حقوقی و قراردادها.',
    },
    topics: [
      { en: 'Tender and auction procedures', fa: 'روند مناقصه و مزایده' },
      { en: 'Contracting in the public port sector', fa: 'انجام معامله در بخش دولتی بندری' },
      { en: 'Legal and contractual risk', fa: 'ریسک‌های حقوقی و قراردادی' },
    ],
    courses: ['C04', 'E02'],
    category: 'contracts-risk',
  },
];
