import type { L } from '../lib/i18n';

/** Headline figures from the advisor's CV. */
export const stats: { value: L; label: L }[] = [
  { value: { en: '30', fa: '۳۰' }, label: { en: 'years in ports and maritime administration', fa: 'سال تجربه در بنادر و دریانوردی' } },
  { value: { en: '8', fa: '۸' }, label: { en: 'years as Iran\'s Permanent Representative to the IMO in London', fa: 'سال نماینده دائم ایران در IMO، لندن' } },
  { value: { en: '210+', fa: '+۲۱۰' }, label: { en: 'IMO sessions and international meetings attended', fa: 'اجلاس و نشست بین‌المللی، عمدتاً در مقر IMO' } },
  { value: { en: '40+', fa: '+۴۰' }, label: { en: 'national and international committees, several as chair', fa: 'کمیته و کارگروه ملی و بین‌المللی، برخی در جایگاه رئیس' } },
];

export const bio: L<string[]> = {
  en: [
    'Ali Akbar Marzban has spent three decades inside Iran\'s ports and maritime administration, from the legal and contracts desk of Imam Khomeini Port to the executive board of the Ports and Maritime Organization (PMO).',
    'Trained in law at Shahid Beheshti University and in maritime affairs at the World Maritime University in Malmö, Sweden, he spent eight years in London as Iran\'s Permanent Representative to the International Maritime Organization (IMO) and to the IOPC Funds. During that time he took part in more than 210 IMO sessions, chaired the Credentials Committee of the IMO Assembly, served as vice-chair of the Consultative Meeting of Contracting Parties to the London Convention and Protocol, and chaired the club of permanent representatives and maritime attachés.',
    'Back in Tehran he advised the PMO\'s Managing Director, led the Directorate General for Seafarers\' Affairs and International Organizations for eight years, and served as Deputy for Maritime Affairs and member of the PMO Executive Board. The IMO Secretary-General appointed him IMO Maritime Ambassador in Iran in 2015.',
    'Today he brings that experience to governments, port authorities and maritime companies that need to turn international rules into decisions that work in practice, and to negotiate with confidence with foreign partners.',
  ],
  fa: [
    'علی‌اکبر مرزبان سه دهه در بنادر و دریانوردی ایران کار کرده است؛ از میز امور حقوقی و قراردادهای بندر امام خمینی تا هیئت عامل سازمان بنادر و دریانوردی.',
    'او دانش‌آموخته حقوق از دانشگاه شهید بهشتی و مدیریت امور دریایی از دانشگاه جهانی دریانوردی (WMU) در مالموی سوئد است. هشت سال در لندن نماینده دائم ایران در سازمان بین‌المللی دریانوردی (IMO) و صندوق بین‌المللی جبران خسارات آلودگی نفتی (IOPC Funds) بود؛ در این مدت در بیش از ۲۱۰ اجلاس IMO شرکت کرد، ریاست کمیته اعتبارنامه مجمع IMO را بر عهده داشت، نایب‌رئیس اجلاس مشورتی دول عضو کنوانسیون و پروتکل لندن بود و ریاست کلوپ نمایندگان و وابستگان دریایی IMO را عهده‌دار شد.',
    'پس از بازگشت، مشاور مدیرعامل سازمان بنادر و دریانوردی شد، هشت سال مدیرکل امور دریانوردان و سازمان‌های تخصصی و بین‌المللی بود و سپس به‌عنوان معاون امور دریایی و عضو هیئت عامل سازمان خدمت کرد. دبیرکل IMO در سال ۱۳۹۴ او را به‌عنوان سفیر حسن‌نیت دریایی IMO در ایران منصوب کرد.',
    'امروز این تجربه را در اختیار دولت‌ها، سازمان‌های بندری و شرکت‌های دریایی می‌گذارد تا مقررات بین‌المللی را به تصمیم‌های اجرایی و کارآمد تبدیل کنند و با اطمینان با طرف‌های خارجی مذاکره کنند.',
  ],
};

/** Career highlights shown on the home page as "selected experience". */
export const highlights: { icon: string; period: L; title: L; text: L; service: string }[] = [
  {
    icon: 'globe',
    period: { en: '2006–2014 · London', fa: '۱۳۸۵ تا ۱۳۹۳ · لندن' },
    title: { en: 'Iran\'s voice at the IMO', fa: 'نمایندگی ایران در IMO' },
    text: { en: 'Eight years as Permanent Representative to the IMO and the IOPC Funds; Chair of the IMO Assembly Credentials Committee.', fa: 'هشت سال نماینده دائم در IMO و صندوق IOPC؛ رئیس کمیته اعتبارنامه مجمع IMO.' },
    service: 'imo-regulation',
  },
  {
    icon: 'seafarer',
    period: { en: '2016–2024 · Tehran', fa: '۱۳۹۵ تا ۱۴۰۳ · تهران' },
    title: { en: 'Seafarers and international organisations', fa: 'امور دریانوردان و سازمان‌های بین‌المللی' },
    text: { en: 'Led the PMO directorate responsible for seafarer certification, STCW matters and relations with specialised international bodies.', fa: 'مدیریت اداره کل مسئول گواهینامه‌های دریانوردان، امور STCW و ارتباط با سازمان‌های تخصصی بین‌المللی.' },
    service: 'seafarers-stcw',
  },
  {
    icon: 'contract',
    period: { en: '1996–2002 · Imam Khomeini Port', fa: '۱۳۷۵ تا ۱۳۸۱ · بندر امام خمینی' },
    title: { en: 'Port contracts and tenders', fa: 'قراردادها و مناقصه‌های بندری' },
    text: { en: 'Head of Legal and Contracts: dozens of tenders and auctions, hundreds of contracts and the port\'s litigation.', fa: 'رئیس امور حقوقی و قراردادها: ده‌ها مناقصه و مزایده، صدها قرارداد و رسیدگی به دعاوی بندر.' },
    service: 'maritime-contracts',
  },
];
