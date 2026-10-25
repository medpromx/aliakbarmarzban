import type { L } from '../lib/i18n';

export type Service = {
  slug: string;
  icon: string;
  priority: 'core' | 'specialist';
  title: L;
  short: L;
  /** Hero headline: the client's main problem framed as an outcome. */
  headline: L;
  value: L;
  challenges: L<string[]>;
  howWeHelp: L<string[]>;
  deliverables: L<string[]>;
  whoWeWorkWith: L<string[]>;
  engagement: L<{ title: string; text: string }[]>;
  /** Relevant experience from the advisor's career, shown on the service page. */
  experience: L<string[]>;
  cta: L;
  insightTags: string[];
};

const stagesEn = (s1: string, s2: string, s3: string, s4: string) => [
  { title: 'Discover', text: s1 },
  { title: 'Assess', text: s2 },
  { title: 'Advise', text: s3 },
  { title: 'Implement', text: s4 },
];
const stagesFa = (s1: string, s2: string, s3: string, s4: string) => [
  { title: 'شناخت', text: s1 },
  { title: 'ارزیابی', text: s2 },
  { title: 'مشاوره', text: s3 },
  { title: 'اجرا', text: s4 },
];

export const services: Service[] = [
  {
    slug: 'imo-regulation',
    icon: 'regulation',
    priority: 'core',
    title: {
      en: 'International Maritime Regulation & IMO Affairs',
      fa: 'مقررات بین‌المللی دریایی و امور IMO',
    },
    short: {
      en: 'Turning IMO conventions and amendments into national policy, institutional readiness and an implementation roadmap.',
      fa: 'تبدیل کنوانسیون‌ها و اصلاحیه‌های IMO به سیاست ملی، آمادگی نهادی و نقشه راه اجرایی.',
    },
    headline: {
      en: 'Implement international maritime obligations with confidence',
      fa: 'اجرای مطمئن تعهدات بین‌المللی دریایی',
    },
    value: {
      en: 'Advisory for maritime administrations and industry on ratification, transposition and implementation of IMO instruments — from gap assessment to an actionable roadmap.',
      fa: 'مشاوره به سازمان‌های دریایی و صنعت در الحاق، انطباق قوانین داخلی و اجرای اسناد IMO؛ از ارزیابی شکاف تا نقشه راه قابل اجرا.',
    },
    challenges: {
      en: [
        'New conventions and amendments arrive faster than national legislation and procedures can absorb them.',
        'Uncertainty about which obligations apply, from when, and to which part of the administration.',
        'Audit findings (e.g. IMSAS) or port State control trends that point to systemic gaps.',
        'Limited internal capacity to prepare positions and submissions for IMO committees.',
      ],
      fa: [
        'سرعت ورود کنوانسیون‌ها و اصلاحیه‌های جدید از توان قوانین و رویه‌های داخلی برای جذب آنها بیشتر است.',
        'ابهام درباره اینکه کدام تعهدات، از چه زمانی و برای کدام بخش از سازمان اعمال می‌شود.',
        'یافته‌های ممیزی (مانند IMSAS) یا روند بازرسی‌های کنترل دولت بندر که نشانه شکاف‌های ساختاری است.',
        'ظرفیت محدود داخلی برای تهیه مواضع و اسناد پیشنهادی به کمیته‌های IMO.',
      ],
    },
    howWeHelp: {
      en: [
        'Regulatory gap assessment against the applicable IMO instruments and the III Code.',
        'Advice on ratification, accession and transposition into national legislation.',
        'Implementation planning that assigns responsibilities across the administration.',
        'Preparation support for IMO committee sessions, positions and submissions.',
      ],
      fa: [
        'ارزیابی شکاف مقرراتی در برابر اسناد IMO مرتبط و کد III.',
        'مشاوره درباره تصویب، الحاق و انتقال تعهدات به قوانین داخلی.',
        'برنامه‌ریزی اجرا با تعیین مسئولیت‌ها در بخش‌های مختلف سازمان.',
        'پشتیبانی در آماده‌سازی برای نشست‌های کمیته‌های IMO، مواضع و اسناد پیشنهادی.',
      ],
    },
    deliverables: {
      en: [
        'Regulatory gap assessment report',
        'Prioritised implementation roadmap',
        'Responsibility matrix and KPIs',
        'Briefing notes and position papers',
      ],
      fa: [
        'گزارش ارزیابی شکاف مقرراتی',
        'نقشه راه اجرایی اولویت‌بندی‌شده',
        'ماتریس مسئولیت‌ها و شاخص‌های عملکرد',
        'یادداشت‌های توجیهی و اسناد موضع',
      ],
    },
    whoWeWorkWith: {
      en: ['Maritime administrations', 'Government ministries', 'Shipowner regulatory teams', 'Classification and recognised organisations'],
      fa: ['سازمان‌های دریایی', 'وزارتخانه‌ها و دستگاه‌های دولتی', 'تیم‌های مقرراتی کشتیرانی‌ها', 'مؤسسات رده‌بندی و سازمان‌های شناخته‌شده'],
    },
    engagement: {
      en: stagesEn(
        'A confidential discussion of the instruments, deadlines and institutional context.',
        'Structured review of legislation, procedures and capacity against obligations.',
        'Prioritised recommendations with owners, timelines and dependencies.',
        'Optional support during implementation, reporting and audit preparation.',
      ),
      fa: stagesFa(
        'گفت‌وگوی محرمانه درباره اسناد، مهلت‌ها و بستر نهادی.',
        'بررسی ساختاریافته قوانین، رویه‌ها و ظرفیت‌ها در برابر تعهدات.',
        'توصیه‌های اولویت‌بندی‌شده با مسئول، زمان‌بندی و وابستگی‌ها.',
        'پشتیبانی اختیاری در دوره اجرا، گزارش‌دهی و آمادگی برای ممیزی.',
      ),
    },
    cta: { en: 'Request a Regulatory Gap Assessment', fa: 'درخواست ارزیابی شکاف مقرراتی' },
    experience: {
      en: [
        'Eight years as Permanent Representative of Iran to the IMO in London, with more than 210 IMO sessions attended.',
        'Chair of the Credentials Committee of the IMO Assembly and Vice-Chair of the Consultative Meeting of Contracting Parties to the London Convention and Protocol.',
        'Representative of Iran to the IOPC Funds on oil pollution compensation.',
        'Author of a book on the IMO and its role in shipping and international maritime law.',
      ],
      fa: [
        'هشت سال نماینده دائم ایران در IMO، لندن، با حضور در بیش از ۲۱۰ اجلاس.',
        'رئیس کمیته اعتبارنامه مجمع IMO و نایب‌رئیس اجلاس مشورتی دول عضو کنوانسیون و پروتکل لندن.',
        'نماینده ایران نزد صندوق IOPC در حوزه جبران خسارت آلودگی نفتی.',
        'نویسنده کتاب «سازمان بین‌المللی دریانوردی و نقش آن در توسعه صنعت کشتیرانی و حقوق بین‌الملل دریایی».',
      ],
    },
    insightTags: ['imo-regulation'],
  },
  {
    slug: 'port-governance',
    icon: 'port',
    priority: 'core',
    title: { en: 'Port Governance & Institutional Reform', fa: 'حکمرانی بندری و اصلاحات نهادی' },
    short: {
      en: 'Clarifying roles, decision rights and performance frameworks for port authorities, landlord models and concessions.',
      fa: 'شفاف‌سازی نقش‌ها، اختیارات تصمیم‌گیری و چارچوب‌های عملکرد برای سازمان‌های بنادر، مدل‌های مالک‌محور و امتیازها.',
    },
    headline: {
      en: 'Build port institutions that perform',
      fa: 'نهادهای بندری کارآمد بسازید',
    },
    value: {
      en: 'Independent review and reform design for port governance: structure, regulation of operators, concession oversight and performance management.',
      fa: 'بازبینی مستقل و طراحی اصلاحات در حکمرانی بندری: ساختار، تنظیم‌گری بهره‌برداران، نظارت بر امتیازها و مدیریت عملکرد.',
    },
    challenges: {
      en: [
        'Overlapping mandates between port authority, ministry, customs and operators.',
        'Concession or terminal agreements that are difficult to monitor or enforce.',
        'Port performance that lags regional competitors without a clear diagnosis.',
        'Reform pressure from government, lenders or development partners.',
      ],
      fa: [
        'هم‌پوشانی مأموریت‌ها میان سازمان بنادر، وزارتخانه، گمرک و بهره‌برداران.',
        'قراردادهای امتیاز یا ترمینال که پایش و اجرای آنها دشوار است.',
        'عقب‌ماندن عملکرد بندر از رقبای منطقه‌ای بدون تشخیص روشن علت.',
        'فشار برای اصلاحات از سوی دولت، تأمین‌کنندگان مالی یا شرکای توسعه.',
      ],
    },
    howWeHelp: {
      en: [
        'Governance diagnostic of mandates, decision rights and accountability.',
        'Assessment of port management models (service, tool, landlord, private).',
        'Design of concession oversight and operator performance regimes.',
        'Reform roadmaps aligned with national policy and stakeholder realities.',
      ],
      fa: [
        'ارزیابی حکمرانی شامل مأموریت‌ها، اختیارات تصمیم‌گیری و پاسخ‌گویی.',
        'ارزیابی مدل‌های مدیریت بندر (خدماتی، ابزاری، مالک‌محور، خصوصی).',
        'طراحی سازوکار نظارت بر امتیازها و نظام عملکرد بهره‌برداران.',
        'نقشه راه اصلاحات همسو با سیاست ملی و واقعیت‌های ذی‌نفعان.',
      ],
    },
    deliverables: {
      en: [
        'Port governance assessment report',
        'Reform options and decision framework',
        'KPI framework for authority and operators',
        'Phased implementation roadmap',
      ],
      fa: [
        'گزارش ارزیابی حکمرانی بندری',
        'گزینه‌های اصلاحی و چارچوب تصمیم‌گیری',
        'چارچوب شاخص‌های عملکرد برای سازمان و بهره‌برداران',
        'نقشه راه اجرایی مرحله‌بندی‌شده',
      ],
    },
    whoWeWorkWith: {
      en: ['Port authorities', 'State-owned port companies', 'Ministries of transport', 'Terminal operators', 'Development agencies'],
      fa: ['سازمان‌های بنادر', 'شرکت‌های دولتی بندری', 'وزارتخانه‌های راه و حمل‌ونقل', 'بهره‌برداران ترمینال', 'نهادهای توسعه‌ای'],
    },
    engagement: {
      en: stagesEn(
        'Understand the reform objective, the decision-makers and the constraints.',
        'Interviews, document review and benchmarking against comparable ports.',
        'Reform options, trade-offs and a recommended governance model.',
        'Roadmap, KPIs and optional support through the transition.',
      ),
      fa: stagesFa(
        'شناخت هدف اصلاحات، تصمیم‌گیرندگان و محدودیت‌ها.',
        'مصاحبه، بررسی اسناد و مقایسه با بنادر مشابه.',
        'گزینه‌های اصلاحی، مزایا و معایب و مدل حکمرانی پیشنهادی.',
        'نقشه راه، شاخص‌ها و پشتیبانی اختیاری در دوره گذار.',
      ),
    },
    cta: { en: 'Discuss a Port Governance Review', fa: 'گفت‌وگو درباره بازبینی حکمرانی بندری' },
    experience: {
      en: [
        'Head of Abadan Ports and Maritime Administration.',
        'Advisor to the Managing Director, then Deputy for Maritime Affairs and member of the Executive Board of the Ports and Maritime Organization.',
        'Directly involved in law-making at national and organisational level and in national maritime development programmes.',
        'Member of more than 40 committees and working groups, several as chair.',
      ],
      fa: [
        'رئیس اداره بنادر و دریانوردی آبادان.',
        'مشاور مدیرعامل و سپس معاون امور دریایی و عضو هیئت عامل سازمان بنادر و دریانوردی.',
        'مشارکت مستقیم در قانون‌گذاری در سطح ملی و سازمانی و برنامه‌های توسعه دریایی کشور.',
        'عضویت در بیش از ۴۰ کمیته و کارگروه تخصصی، برخی در جایگاه رئیس.',
      ],
    },
    insightTags: ['port-governance'],
  },
  {
    slug: 'maritime-contracts',
    icon: 'contract',
    priority: 'core',
    title: { en: 'Maritime Contracts & Procurement', fa: 'قراردادها و تدارکات دریایی' },
    short: {
      en: 'Strategic review of tenders, concessions and service contracts to reduce risk before commitments are made.',
      fa: 'بازبینی راهبردی مناقصه‌ها، امتیازها و قراردادهای خدمات برای کاهش ریسک پیش از تعهد.',
    },
    headline: {
      en: 'Reduce contract and procurement risk before you commit',
      fa: 'ریسک قرارداد و تدارکات را پیش از تعهد کاهش دهید',
    },
    value: {
      en: 'Legal and commercial advice on procurement strategy, tender design and contract structure, from someone who has run port tenders and drafted hundreds of maritime contracts.',
      fa: 'مشاوره حقوقی و تجاری در راهبرد تدارکات، طراحی مناقصه و ساختار قرارداد؛ از کسی که خود مناقصه‌های بندری را برگزار کرده و صدها قرارداد دریایی را تنظیم کرده است.',
    },
    challenges: {
      en: [
        'Tender documents that do not reflect operational or regulatory realities.',
        'Concession and service agreements with weak performance and risk-allocation terms.',
        'Disagreements over scope, obligations or performance during contract delivery.',
        'Limited benchmarks for evaluating bids in specialised maritime services.',
      ],
      fa: [
        'اسناد مناقصه‌ای که واقعیت‌های عملیاتی یا مقرراتی را منعکس نمی‌کند.',
        'قراردادهای امتیاز و خدمات با شروط ضعیف در عملکرد و تخصیص ریسک.',
        'اختلاف درباره دامنه کار، تعهدات یا عملکرد در دوره اجرای قرارداد.',
        'نبود معیارهای مقایسه‌ای کافی برای ارزیابی پیشنهادها در خدمات تخصصی دریایی.',
      ],
    },
    howWeHelp: {
      en: [
        'Procurement strategy and tender design for maritime services and concessions.',
        'Commercial and regulatory review of draft contracts and risk allocation.',
        'Bid evaluation criteria and evaluation support.',
        'Contract performance review and preparation for renegotiation.',
      ],
      fa: [
        'راهبرد تدارکات و طراحی مناقصه برای خدمات دریایی و امتیازها.',
        'بازبینی تجاری و مقرراتی پیش‌نویس قراردادها و تخصیص ریسک.',
        'معیارهای ارزیابی پیشنهادها و پشتیبانی در فرایند ارزیابی.',
        'بازبینی عملکرد قرارداد و آماده‌سازی برای مذاکره مجدد.',
      ],
    },
    deliverables: {
      en: [
        'Contract and procurement risk review',
        'Tender design recommendations',
        'Bid evaluation framework',
        'Negotiation and renegotiation brief',
      ],
      fa: [
        'گزارش بازبینی ریسک قرارداد و تدارکات',
        'توصیه‌های طراحی مناقصه',
        'چارچوب ارزیابی پیشنهادها',
        'گزارش توجیهی مذاکره و مذاکره مجدد',
      ],
    },
    whoWeWorkWith: {
      en: ['Legal directors', 'Procurement executives', 'Port authorities', 'Shipowners and ship managers', 'Law firms'],
      fa: ['مدیران حقوقی', 'مدیران تدارکات', 'سازمان‌های بنادر', 'مالکان و مدیران کشتی', 'مؤسسات حقوقی'],
    },
    engagement: {
      en: stagesEn(
        'Confidential discussion of the transaction, timeline and key concerns.',
        'Review of the documents you choose to share through a secure channel.',
        'Written risk findings and recommended positions.',
        'Support during evaluation, negotiation or contract management.',
      ),
      fa: stagesFa(
        'گفت‌وگوی محرمانه درباره معامله، زمان‌بندی و دغدغه‌های اصلی.',
        'بررسی اسنادی که از طریق کانال امن به اشتراک می‌گذارید.',
        'یافته‌های مکتوب درباره ریسک‌ها و مواضع پیشنهادی.',
        'پشتیبانی در ارزیابی، مذاکره یا مدیریت قرارداد.',
      ),
    },
    cta: { en: 'Discuss a Contract Advisory', fa: 'گفت‌وگو درباره مشاوره قرارداد' },
    experience: {
      en: [
        'Six years as legal expert and Head of Legal Affairs and Contracts at Imam Khomeini Port: dozens of tenders and auctions and hundreds of contracts.',
        'Author of a research book on tendering, auctions and contracting in the Ports and Maritime Organization.',
        'Legal training in law, criminal law and public international law.',
        'Accompanied delegations negotiating port investment and shipping agreements with foreign partners.',
      ],
      fa: [
        'شش سال کارشناس حقوقی و رئیس امور حقوقی و قراردادهای بندر امام خمینی: ده‌ها مناقصه و مزایده و صدها قرارداد.',
        'نویسنده کتاب پژوهشی «روند برگزاری مناقصه، مزایده و انجام معامله در سازمان بنادر و دریانوردی».',
        'تحصیلات حقوقی در حقوق، حقوق جزا و حقوق بین‌الملل عمومی.',
        'همراهی هیئت‌های مذاکره با طرف‌های خارجی برای سرمایه‌گذاری بندری و قراردادهای کشتیرانی.',
      ],
    },
    insightTags: ['maritime-contracts'],
  },
  {
    slug: 'seafarers-stcw',
    icon: 'seafarer',
    priority: 'core',
    title: { en: 'Seafarers, STCW & Human Element', fa: 'دریانوردان، STCW و عامل انسانی' },
    short: {
      en: 'Strengthening STCW compliance, certification systems, training oversight and seafarer administration.',
      fa: 'تقویت انطباق با STCW، نظام صدور گواهینامه، نظارت بر آموزش و امور دریانوردان.',
    },
    headline: {
      en: 'Credible seafarer certification and training systems',
      fa: 'نظام معتبر صدور گواهینامه و آموزش دریانوردان',
    },
    value: {
      en: 'Advisory on STCW implementation, quality standards for training and certification, and the human element in maritime safety.',
      fa: 'مشاوره درباره اجرای STCW، استانداردهای کیفیت در آموزش و صدور گواهینامه و عامل انسانی در ایمنی دریایی.',
    },
    challenges: {
      en: [
        'Preparing for STCW independent evaluation or responding to its findings.',
        'Inconsistent oversight of maritime training institutions and assessments.',
        'Recognition of certificates and endorsements with other flag States.',
        'Upcoming changes from the STCW comprehensive review.',
      ],
      fa: [
        'آمادگی برای ارزیابی مستقل STCW یا پاسخ به یافته‌های آن.',
        'نظارت ناهماهنگ بر مؤسسات آموزش دریایی و آزمون‌ها.',
        'شناسایی متقابل گواهینامه‌ها و پشت‌نویسی‌ها با سایر دولت‌های پرچم.',
        'تغییرات پیش‌رو در بازنگری جامع STCW.',
      ],
    },
    howWeHelp: {
      en: [
        'STCW compliance review of legislation, procedures and quality standards.',
        'Design of oversight for training institutions, simulators and examinations.',
        'Advice on certificate recognition and bilateral arrangements.',
        'Human-element programmes linking training, fatigue and safety culture.',
      ],
      fa: [
        'بازبینی انطباق قوانین، رویه‌ها و استانداردهای کیفیت با STCW.',
        'طراحی نظام نظارت بر مؤسسات آموزشی، شبیه‌سازها و آزمون‌ها.',
        'مشاوره درباره شناسایی گواهینامه‌ها و توافق‌های دوجانبه.',
        'برنامه‌های عامل انسانی با پیوند آموزش، خستگی و فرهنگ ایمنی.',
      ],
    },
    deliverables: {
      en: [
        'STCW compliance review report',
        'Quality standards system improvements',
        'Training oversight framework',
        'Action plan for evaluation readiness',
      ],
      fa: [
        'گزارش بازبینی انطباق با STCW',
        'بهبود نظام استانداردهای کیفیت',
        'چارچوب نظارت بر آموزش',
        'برنامه اقدام برای آمادگی ارزیابی',
      ],
    },
    whoWeWorkWith: {
      en: ['Maritime administrations', 'Maritime academies and training institutions', 'Crewing and ship management companies'],
      fa: ['سازمان‌های دریایی', 'دانشگاه‌ها و مؤسسات آموزش دریایی', 'شرکت‌های تأمین خدمه و مدیریت کشتی'],
    },
    engagement: {
      en: stagesEn(
        'Clarify the evaluation timeline, scope and current certification system.',
        'Review of procedures, records and institutional oversight.',
        'Corrective and improvement actions, prioritised by risk.',
        'Workshops and follow-up support for responsible staff.',
      ),
      fa: stagesFa(
        'روشن‌کردن زمان‌بندی ارزیابی، دامنه و نظام فعلی صدور گواهینامه.',
        'بررسی رویه‌ها، سوابق و نظارت نهادی.',
        'اقدامات اصلاحی و بهبود، اولویت‌بندی‌شده بر اساس ریسک.',
        'کارگاه و پشتیبانی پیگیری برای کارکنان مسئول.',
      ),
    },
    cta: { en: 'Request an STCW Compliance Review', fa: 'درخواست بازبینی انطباق STCW' },
    experience: {
      en: [
        'Eight years as Director General for Seafarers\' Affairs and Specialised & International Organizations at the PMO.',
        'Oversight of seafarer certification and training matters and relations with IMO and other specialised bodies.',
        'Organiser of World Maritime Day and Day of the Seafarer events.',
        'Planned and managed specialised maritime and port training courses.',
      ],
      fa: [
        'هشت سال مدیرکل امور دریانوردان، سازمان‌های تخصصی و بین‌المللی در سازمان بنادر و دریانوردی.',
        'راهبری امور گواهینامه و آموزش دریانوردان و ارتباط با IMO و سایر نهادهای تخصصی.',
        'برگزارکننده مراسم روز جهانی دریانوردی و روز جهانی دریانورد.',
        'برنامه‌ریزی و اجرای دوره‌های تخصصی آموزشی دریایی و بندری.',
      ],
    },
    insightTags: ['seafarers-stcw'],
  },
  {
    slug: 'international-negotiation',
    icon: 'negotiation',
    priority: 'core',
    title: { en: 'International Negotiation & Cooperation', fa: 'مذاکرات و همکاری‌های بین‌المللی' },
    short: {
      en: 'Preparing delegations and institutions for bilateral, regional and multilateral maritime negotiations.',
      fa: 'آماده‌سازی هیئت‌ها و نهادها برای مذاکرات دریایی دوجانبه، منطقه‌ای و چندجانبه.',
    },
    headline: {
      en: 'Negotiate maritime cooperation from a position of preparation',
      fa: 'با آمادگی کامل وارد مذاکرات همکاری دریایی شوید',
    },
    value: {
      en: 'Strategic preparation for maritime agreements, MoUs, regional cooperation and engagement with international organisations.',
      fa: 'آماده‌سازی راهبردی برای موافقت‌نامه‌های دریایی، تفاهم‌نامه‌ها، همکاری‌های منطقه‌ای و تعامل با سازمان‌های بین‌المللی.',
    },
    challenges: {
      en: [
        'Agreements and MoUs that are signed but never operationalised.',
        'Delegations that lack a consolidated position across agencies.',
        'Complex regional cooperation frameworks with competing priorities.',
        'Limited institutional memory of past negotiations and commitments.',
      ],
      fa: [
        'موافقت‌نامه‌ها و تفاهم‌نامه‌هایی که امضا می‌شوند اما هرگز اجرایی نمی‌شوند.',
        'هیئت‌هایی که موضع یکپارچه میان دستگاه‌ها ندارند.',
        'چارچوب‌های پیچیده همکاری منطقه‌ای با اولویت‌های رقیب.',
        'حافظه نهادی محدود از مذاکرات و تعهدات گذشته.',
      ],
    },
    howWeHelp: {
      en: [
        'Negotiation strategy, objectives and fallback positions.',
        'Inter-agency coordination for a consolidated national position.',
        'Drafting and review of cooperation instruments and MoUs.',
        'Operationalisation plans that turn agreements into joint activities.',
      ],
      fa: [
        'راهبرد مذاکره، اهداف و مواضع جایگزین.',
        'هماهنگی بین‌دستگاهی برای موضع ملی یکپارچه.',
        'تهیه و بازبینی اسناد همکاری و تفاهم‌نامه‌ها.',
        'برنامه‌های عملیاتی برای تبدیل توافق‌ها به فعالیت‌های مشترک.',
      ],
    },
    deliverables: {
      en: [
        'Negotiation brief and position paper',
        'Stakeholder and interest map',
        'Draft cooperation instrument review',
        'Implementation and follow-up plan',
      ],
      fa: [
        'گزارش توجیهی مذاکره و سند موضع',
        'نقشه ذی‌نفعان و منافع',
        'بازبینی پیش‌نویس سند همکاری',
        'برنامه اجرا و پیگیری',
      ],
    },
    whoWeWorkWith: {
      en: ['Government ministries', 'Maritime administrations', 'Port authorities', 'Regional organisations'],
      fa: ['وزارتخانه‌ها', 'سازمان‌های دریایی', 'سازمان‌های بنادر', 'سازمان‌های منطقه‌ای'],
    },
    engagement: {
      en: stagesEn(
        'Understand the negotiation, counterparts and timeline.',
        'Analysis of interests, precedents and the institutional mandate.',
        'Strategy, positions and briefing of the delegation.',
        'Support before, during and after the negotiation round.',
      ),
      fa: stagesFa(
        'شناخت مذاکره، طرف‌های مقابل و زمان‌بندی.',
        'تحلیل منافع، سوابق و مأموریت نهادی.',
        'راهبرد، مواضع و توجیه هیئت مذاکره‌کننده.',
        'پشتیبانی پیش، حین و پس از دور مذاکره.',
      ),
    },
    cta: { en: 'Discuss a Negotiation Strategy', fa: 'گفت‌وگو درباره راهبرد مذاکره' },
    experience: {
      en: [
        'Eight years of multilateral diplomacy at the IMO, representing Iran in committees, the Assembly and the IOPC Funds.',
        'Chair of the club of IMO permanent representatives and maritime attachés.',
        'Delegate and speaker in more than 20 countries across Europe, Asia, Africa and the Americas.',
        'Negotiations with foreign counterparts leading to memoranda of understanding and contracts.',
      ],
      fa: [
        'هشت سال دیپلماسی چندجانبه در IMO و نمایندگی ایران در کمیته‌ها، مجمع و صندوق IOPC.',
        'رئیس کلوپ نمایندگان و وابستگان دریایی IMO.',
        'حضور به‌عنوان نماینده و سخنران در بیش از ۲۰ کشور در اروپا، آسیا، آفریقا و آمریکا.',
        'مذاکره با طرف‌های خارجی و دستیابی به تفاهم‌نامه‌های همکاری و قرارداد.',
      ],
    },
    insightTags: ['international-negotiation'],
  },
  {
    slug: 'executive-training',
    icon: 'training',
    priority: 'core',
    title: { en: 'Executive Training & Capacity Building', fa: 'آموزش مدیران و ظرفیت‌سازی' },
    short: {
      en: 'Tailored executive workshops on maritime regulation, port governance and international affairs.',
      fa: 'کارگاه‌های اختصاصی مدیران در حوزه مقررات دریایی، حکمرانی بندری و امور بین‌الملل.',
    },
    headline: {
      en: 'Build lasting institutional capability',
      fa: 'توانمندی نهادی پایدار ایجاد کنید',
    },
    value: {
      en: 'Practical, case-based executive programmes that equip senior teams to lead regulatory, governance and international work.',
      fa: 'برنامه‌های کاربردی و مبتنی بر مورد برای مدیران ارشد تا کارهای مقرراتی، حکمرانی و بین‌المللی را رهبری کنند.',
    },
    challenges: {
      en: [
        'Senior staff who must apply international instruments without dedicated training.',
        'Generic courses that do not address the organisation\'s actual decisions.',
        'Knowledge concentrated in a few individuals.',
        'New leadership teams that need a rapid, structured briefing.',
      ],
      fa: [
        'کارکنان ارشدی که باید اسناد بین‌المللی را بدون آموزش تخصصی به کار گیرند.',
        'دوره‌های عمومی که به تصمیم‌های واقعی سازمان نمی‌پردازند.',
        'تمرکز دانش در چند فرد محدود.',
        'تیم‌های مدیریتی جدید که به توجیه سریع و ساختاریافته نیاز دارند.',
      ],
    },
    howWeHelp: {
      en: [
        'Training needs analysis linked to organisational objectives.',
        'Executive workshops and briefings, in English or Persian.',
        'Case-based exercises and negotiation simulations.',
        'Train-the-trainer support for internal academies.',
      ],
      fa: [
        'نیازسنجی آموزشی مرتبط با اهداف سازمان.',
        'کارگاه‌ها و جلسات توجیهی مدیران به زبان انگلیسی یا فارسی.',
        'تمرین‌های مبتنی بر مورد و شبیه‌سازی مذاکره.',
        'پشتیبانی تربیت مربی برای مراکز آموزشی داخلی.',
      ],
    },
    deliverables: {
      en: [
        'Training needs analysis',
        'Workshop programme and materials',
        'Participant evaluation summary',
        'Recommendations for continued capacity building',
      ],
      fa: [
        'گزارش نیازسنجی آموزشی',
        'برنامه و محتوای کارگاه',
        'خلاصه ارزیابی شرکت‌کنندگان',
        'توصیه‌ها برای ادامه ظرفیت‌سازی',
      ],
    },
    whoWeWorkWith: {
      en: ['Maritime administrations', 'Port authorities', 'Maritime academies', 'Shipping companies'],
      fa: ['سازمان‌های دریایی', 'سازمان‌های بنادر', 'دانشگاه‌های دریایی', 'شرکت‌های کشتیرانی'],
    },
    engagement: {
      en: stagesEn(
        'Agree learning objectives, audience and format.',
        'Needs analysis and programme design.',
        'Delivery of workshops, simulations and briefings.',
        'Evaluation and recommendations for next steps.',
      ),
      fa: stagesFa(
        'توافق بر اهداف یادگیری، مخاطبان و قالب.',
        'نیازسنجی و طراحی برنامه.',
        'اجرای کارگاه‌ها، شبیه‌سازی‌ها و جلسات توجیهی.',
        'ارزیابی و توصیه برای گام‌های بعدی.',
      ),
    },
    cta: { en: 'Request an Executive Workshop', fa: 'درخواست کارگاه آموزشی مدیران' },
    experience: {
      en: [
        'University lecturer in law and trainer on specialised legal and maritime courses in Tehran and the ports.',
        'Organised more than 20 national and international maritime events, conferences and exhibitions.',
        'IMO Maritime Ambassador in Iran, promoting maritime careers and awareness.',
        'Experienced chair of committees and working groups, coaching teams towards clear decisions.',
      ],
      fa: [
        'مدرس دانشگاه در رشته حقوق و دوره‌های تخصصی حقوقی و دریایی در تهران و بنادر.',
        'برگزاری بیش از ۲۰ رویداد، همایش و نمایشگاه ملی و بین‌المللی دریایی.',
        'سفیر حسن‌نیت دریایی IMO در ایران برای معرفی مشاغل و فرهنگ دریایی.',
        'تجربه ریاست کمیته‌ها و کارگروه‌ها و هدایت تیم‌ها به تصمیم‌های روشن.',
      ],
    },
    insightTags: ['executive-training'],
  },
];

export type SpecialistArea = { slug: string; title: L; text: L };

export const specialistAreas: SpecialistArea[] = [
  {
    slug: 'port-investment-ppp',
    title: { en: 'Port Investment & PPP', fa: 'سرمایه‌گذاری و مشارکت عمومی‑خصوصی بندری' },
    text: {
      en: 'Strategic input on port PPP structures, concession frameworks and investor due diligence from a governance and regulatory perspective.',
      fa: 'ارائه دیدگاه راهبردی درباره ساختارهای مشارکت عمومی‑خصوصی، چارچوب امتیازها و بررسی‌های سرمایه‌گذاران از منظر حکمرانی و مقررات.',
    },
  },
  {
    slug: 'decarbonisation',
    title: { en: 'Maritime Decarbonisation', fa: 'کربن‌زدایی دریایی' },
    text: {
      en: 'Policy and regulatory readiness for IMO greenhouse gas measures, ports\' role in the energy transition and national action plans.',
      fa: 'آمادگی سیاستی و مقرراتی برای اقدامات IMO در کاهش گازهای گلخانه‌ای، نقش بنادر در گذار انرژی و برنامه‌های اقدام ملی.',
    },
  },
  {
    slug: 'digitalisation',
    title: { en: 'Maritime Digitalisation', fa: 'دیجیتالی‌سازی دریایی' },
    text: {
      en: 'Governance of maritime single windows, FAL Convention electronic data exchange and port community systems.',
      fa: 'حکمرانی پنجره واحد دریایی، تبادل الکترونیکی داده بر اساس کنوانسیون FAL و سامانه‌های جامعه بندری.',
    },
  },
  {
    slug: 'dispute-advisory',
    title: { en: 'Independent Dispute Advisory', fa: 'مشاوره مستقل در اختلافات' },
    text: {
      en: 'Independent maritime-sector perspective on regulatory and contractual disputes, supporting your legal team\'s strategy.',
      fa: 'دیدگاه مستقل از درون بخش دریایی درباره اختلافات مقرراتی و قراردادی، در پشتیبانی از راهبرد تیم حقوقی شما.',
    },
  },
];

export const advisoryAreas = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  ...specialistAreas.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'other', label: { en: 'Other / not sure yet', fa: 'سایر / هنوز مطمئن نیستم' } as L },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
