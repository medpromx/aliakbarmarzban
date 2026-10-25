import type { L } from '../../lib/i18n';

// Copy for the training pages, from the 2026 education programme package (v2.1).
type Item = { title: L; text: L };

export const values: Item[] = [
  { title: { en: 'The problem before the content', fa: 'مسئله پیش از محتوا' }, text: { en: 'We start from a management question and the real constraints of the organisation.', fa: 'شروع با پرسش مدیریتی و صورت‌بندی محدودیت‌های واقعی سازمان.' } },
  { title: { en: 'Verification before action', fa: 'اعتبارسنجی پیش از اقدام' }, text: { en: 'Checking the source, version, legal status, scope and owner of every requirement.', fa: 'بررسی مرجع، نسخه، وضعیت حقوقی، دامنه شمول و مسئول اجرای هر الزام.' } },
  { title: { en: 'Training that produces outputs', fa: 'آموزش همراه با خروجی' }, text: { en: 'Discussion becomes an executive brief, gap matrix, RACI, KPI dashboard, stakeholder map or roadmap.', fa: 'تبدیل بحث‌ها به خلاصه مدیریتی، ماتریس شکاف، RACI، داشبورد KPI، نقشه ذی‌نفعان یا نقشه راه.' } },
  { title: { en: 'Continuity after the classroom', fa: 'تداوم پس از کلاس' }, text: { en: 'Applied assessment, follow-up proposals and a knowledge base the organisation can use.', fa: 'ارزیابی کاربردی، پیشنهاد پیگیری و ایجاد مخزن دانشی قابل استفاده در سازمان.' } },
];

export type Format = { icon: string; title: L; meta: L; lead: L; text: L; audience: L; limit: L };
export const formats: Format[] = [
  {
    icon: 'people',
    title: { en: 'Executive workshops', fa: 'کارگاه‌های تخصصی مدیران دریایی' },
    meta: { en: '1–2 days · usually 8–20 participants', fa: '۱ تا ۲ روز · معمولاً ۸ تا ۲۰ نفر' },
    lead: { en: 'Practise real decisions in a safe learning environment.', fa: 'تمرین تصمیم‌های واقعی در فضای امن آموزشی.' },
    text: { en: 'Before the workshop we collect the problem and the data the organisation can share. Day one is spent framing the problem and identifying sources and risks; day two on designing a response and defending the plan. Typical outputs are a gap or risk matrix, implementation roles and a follow-up plan.', fa: 'پیش از کارگاه، مسئله و داده‌های قابل انتشار سازمان دریافت می‌شود. روز نخست به صورت‌بندی مسئله، تشخیص منبع و ریسک و روز دوم به طراحی پاسخ و دفاع از برنامه اختصاص می‌یابد. خروجی پیشنهادی شامل ماتریس شکاف یا ریسک، نقش‌های اجرایی و برنامه پیگیری است.' },
    audience: { en: 'Port and maritime administration managers, contract and compliance managers.', fa: 'مدیران بنادر، سازمان‌های دریایی، مدیران قراردادها و تطبیق مقررات.' },
    limit: { en: 'A one- or two-day workshop does not automatically complete all the hours of a 12-hour course.', fa: 'دوره ۱ یا ۲ روزه به معنی تکمیل خودکار تمام ساعات دوره‌های ۱۲ ساعته نیست.' },
  },
  {
    icon: 'doc',
    title: { en: 'Board and senior leadership briefings', fa: 'جلسه توجیهی مدیران ارشد و هیئت‌مدیره' },
    meta: { en: '2–3 hours · board, CEO and deputies', fa: '۲ تا ۳ ساعت · هیئت‌مدیره، مدیرعامل و معاونان' },
    lead: { en: 'From regulatory change to a decision option in a few hours.', fa: 'از تغییر مقررات تا گزینه تصمیم در چند ساعت.' },
    text: { en: 'Before the session we agree the decision questions, the scope (State, fleet or port) and the key instruments. A short presentation of the facts and legal status is followed by a decision-focused discussion. The output is a two-page decision brief with assumptions, risks, options and the next step.', fa: 'پیش از نشست، پرسش‌های تصمیم، محدوده کشور/ناوگان/بندر و اسناد اصلی تعیین می‌شود. ارائه کوتاه واقعیت و وضعیت حقوقی با گفت‌وگوی تصمیم‌محور دنبال می‌شود. خروجی یک یادداشت تصمیم دوصفحه‌ای با فرض‌ها، ریسک‌ها، گزینه‌ها و اقدام بعدی است.' },
    audience: { en: 'Boards, chief executives, finance directors and compliance managers.', fa: 'هیئت‌مدیره، مدیرعامل، مدیر مالی و مدیر تطبیق مقررات.' },
    limit: { en: 'A briefing does not replace a technical or legal assessment or a full skills course.', fa: 'نشست توجیهی جایگزین ارزیابی فنی، حقوقی یا دوره کامل مهارت‌افزایی نیست.' },
  },
  {
    icon: 'negotiation',
    title: { en: 'International maritime negotiation simulation', fa: 'شبیه‌سازی مذاکرات بین‌المللی دریایی' },
    meta: { en: '1 intensive day · negotiating delegations', fa: '۱ روز فشرده · هیئت‌های مذاکره‌کننده' },
    lead: { en: 'Rehearse the delegation, the text and the roles before the negotiation.', fa: 'آمادگی هیئت، متن و نقش‌ها را پیش از مذاکره تمرین کنید.' },
    text: { en: 'Teams prepare a briefing book, BATNA, stakeholder map, red lines and delegation roles, then redraft the proposed text over two rounds of negotiation and record the outcome. Feedback focuses on the quality of argument, chairing, impartiality and follow-up.', fa: 'تیم‌ها Briefing Book، BATNA، نقشه ذی‌نفعان، خطوط قرمز و مسئولیت‌های هیئت را آماده می‌کنند؛ سپس در دو دور مذاکره، متن پیشنهادی را بازنویسی و نتیجه را مستند می‌کنند. بازخورد بر کیفیت استدلال، مدیریت جلسه، بی‌طرفی و پیگیری متمرکز است.' },
    audience: { en: 'International cooperation managers, heads of delegation and policy managers.', fa: 'مدیران همکاری بین‌المللی، رؤسای هیئت و مدیران سیاست‌گذاری.' },
    limit: { en: 'The one-day intensive version is not equivalent to all six sessions of course C06.', fa: 'نسخه فشرده یک‌روزه، معادل تمامی شش جلسه دوره C06 نیست.' },
  },
  {
    icon: 'training',
    title: { en: 'Train-the-trainer and training quality assurance', fa: 'تربیت مدرس و تضمین کیفیت آموزشی دریایی' },
    meta: { en: 'Modular · training centres and universities', fa: 'ماژولار · مراکز آموزشی و دانشگاه‌ها' },
    lead: { en: 'Turn specialist knowledge into lasting teaching capacity.', fa: 'دانش تخصصی را به توان آموزش پایدار تبدیل کنید.' },
    text: { en: 'Participants prepare a training unit using backward design and aligned objectives and assessment. The reliability of sources and copyright are checked, and the programme ends with a 20-minute micro-teaching session and peer review.', fa: 'شرکت‌کنندگان با طراحی معکوس و هم‌راستایی اهداف و ارزیابی، یک واحد آموزشی تهیه می‌کنند؛ اعتبار منابع و حقوق نشر کنترل می‌شود؛ در پایان تدریس آزمایشی بیست‌دقیقه‌ای و بازبینی همتا صورت می‌گیرد.' },
    audience: { en: 'Lecturers, trainers, training managers and quality assurance staff.', fa: 'اساتید، مربیان، مدیران آموزش و تضمین کیفیت.' },
    limit: { en: 'This package is not an IMO approval or a teaching licence required under STCW.', fa: 'این بسته، تأییدیه IMO یا مجوز تدریس الزامی تحت STCW محسوب نمی‌شود.' },
  },
];

export const topics: { text: L; codes: string[] }[] = [
  { text: { en: 'Implementing IMO instruments, national implementation and the III Code', fa: 'اجرای اسناد IMO، الزامات پیاده‌سازی ملی و کد III' }, codes: ['C02'] },
  { text: { en: 'Port governance models and concession oversight', fa: 'مدل‌های حکمرانی بندر و نظارت بر امتیازها' }, codes: ['C03', 'E02'] },
  { text: { en: 'Maritime contracts, RFPs, tenders and procurement risk', fa: 'قراردادهای دریایی، RFP، مناقصات و ریسک تدارکات' }, codes: ['C04'] },
  { text: { en: 'STCW, the quality of seafarer training and the human element', fa: 'STCW، کیفیت آموزش دریانوردان و عامل انسانی' }, codes: ['C05'] },
  { text: { en: 'Preparing delegations for international negotiation', fa: 'آماده‌سازی هیئت برای مذاکره بین‌المللی' }, codes: ['C06', 'C07'] },
  { text: { en: 'Maritime decarbonisation policy and regulation for leaders', fa: 'سیاست‌ها و مقررات کربن‌زدایی دریایی برای مدیران' }, codes: ['C08'] },
];

export const paths: { title: L; codes: string[]; text: L }[] = [
  { title: { en: 'Regulation and State administration', fa: 'مسیر حاکمیتی و مقرراتی' }, codes: ['C01', 'C02', 'C08', 'E01'], text: { en: 'For policymakers, regulators and managers in maritime administrations.', fa: 'برای سیاست‌گذاران، تنظیم‌گران و مدیران سازمان‌های دریایی.' } },
  { title: { en: 'Ports, contracts and investment', fa: 'مسیر بندر، قرارداد و سرمایه‌گذاری' }, codes: ['C03', 'C04', 'E02'], text: { en: 'For port and terminal managers, procurement and investment development.', fa: 'برای مدیران بندر و ترمینال، تدارکات و توسعه سرمایه‌گذاری.' } },
  { title: { en: 'International relations and negotiation', fa: 'مسیر روابط و مذاکرات بین‌المللی' }, codes: ['C06', 'C07'], text: { en: 'For cooperation managers, delegation members and international relations units.', fa: 'برای مدیران همکاری، اعضای هیئت و واحدهای روابط بین‌الملل.' } },
  { title: { en: 'Training and seafarers', fa: 'مسیر آموزش و دریانوردان' }, codes: ['C05', 'E04'], text: { en: 'For training centres, seafarer administration and quality assurance managers.', fa: 'برای مراکز آموزش، مدیران امور دریانوردان و تضمین کیفیت.' } },
];

export const faq: { q: L; a: L }[] = [
  { q: { en: 'Can a single course be commissioned on its own?', fa: 'آیا می‌توان یک دوره را مستقل سفارش داد؟' }, a: { en: 'Yes. Each course stands on its own, but its scope and prerequisites are set after a needs analysis.', fa: 'بله. هر دوره از نظر آموزشی مستقل است، اما دامنه محتوا و پیش‌نیازها بر اساس نیازسنجی تنظیم می‌شود.' } },
  { q: { en: 'Can a course be delivered as a one-day workshop?', fa: 'آیا می‌توان دوره را در یک کارگاه یک‌روزه اجرا کرد؟' }, a: { en: 'Selected topics can be condensed. An intensive workshop is not necessarily equivalent to all the hours of the full course.', fa: 'موضوعات منتخب قابل فشرده‌سازی هستند؛ یک کارگاه فشرده لزوماً معادل تمام ساعات دوره کامل نیست.' } },
  { q: { en: 'Is training offered in Persian and English?', fa: 'آیا آموزش به فارسی و انگلیسی ارائه می‌شود؟' }, a: { en: 'Yes, in Persian or English, in person or online, depending on the agreement and the participants.', fa: 'بله؛ بسته به توافق و سطح آمادگی شرکت‌کنندگان، به فارسی یا انگلیسی و حضوری یا آنلاین.' } },
  { q: { en: 'What do we receive at the end?', fa: 'در پایان چه چیزی دریافت می‌کنیم؟' }, a: { en: 'Besides the content, a problem-based output such as a gap or risk matrix and an assessment summary. The deliverables are set in the proposal.', fa: 'علاوه بر محتوا، خروجی مسئله‌محور مانند ماتریس شکاف یا ریسک و خلاصه ارزیابی؛ دامنه تحویل در پیشنهاد خدمات تعیین می‌شود.' } },
  { q: { en: 'Is an IMO certificate issued?', fa: 'آیا گواهی IMO داده می‌شود؟' }, a: { en: 'No. This is an independent executive education programme. It does not claim IMO approval or replace official STCW competence courses.', fa: 'خیر. برنامه آموزش مدیریتی مستقل است و ادعای تأیید IMO یا جایگزینی دوره‌های رسمی صلاحیت STCW ندارد.' } },
  { q: { en: "Are our organisation's confidential data used in exercises?", fa: 'آیا داده‌های محرمانه سازمان در تمرین استفاده می‌شود؟' }, a: { en: 'Only with an agreement on confidentiality and limits of use. Otherwise a fictional training scenario is used.', fa: 'فقط با توافق درباره محرمانگی و حدود استفاده؛ در غیر این صورت سناریوی آموزشی فرضی به‌کار می‌رود.' } },
];

export const challenges: L[] = [
  { en: 'An urgent need to identify national or organisational duties arising from international instruments.', fa: 'نیاز فوری به تشخیص تکالیف ملی یا سازمانی ناشی از اسناد بین‌المللی.' },
  { en: 'Fragmented processes and no map of responsibility between units.', fa: 'فرایندهای پراکنده و فقدان نقشه مسئولیت میان واحدها.' },
  { en: "General courses that do not address the organisation's problem or the evidence for decisions.", fa: 'دوره‌های عمومی که به مسئله سازمان و شواهد تصمیم‌گیری نمی‌پردازند.' },
  { en: 'Regulatory and negotiating experience concentrated in a few people, with weak succession.', fa: 'تمرکز تجربه مقرراتی و مذاکره در چند فرد محدود و آسیب‌پذیری جانشین‌پروری.' },
  { en: 'New managers who must understand the risk map and priorities quickly.', fa: 'مدیران جدید که باید در کوتاه‌ترین زمان نقشه ریسک و اولویت‌ها را بفهمند.' },
];

export const steps: Item[] = [
  { title: { en: 'Diagnostic conversation', fa: 'گفت‌وگوی تشخیصی' }, text: { en: 'The management problem, confidentiality, timing and the decision expected are defined.', fa: 'مسئله مدیریتی، سطح محرمانگی، زمان و تصمیم مورد انتظار مشخص می‌شود.' } },
  { title: { en: 'Training needs analysis', fa: 'نیازسنجی آموزشی' }, text: { en: 'Audience, prior knowledge, skill gaps, national requirements and constraints are reviewed.', fa: 'مخاطب، دانش پیشین، شکاف مهارت، الزامات ملی و محدودیت‌های اجرایی بررسی می‌شود.' } },
  { title: { en: 'Tailored design', fa: 'طراحی اختصاصی' }, text: { en: 'Behavioural objectives, session sequence, reference instruments, scenario, outputs and assessment criteria are agreed.', fa: 'اهداف رفتاری، توالی جلسات، اسناد مرجع، سناریو، خروجی و معیار ارزیابی توافق می‌شود.' } },
  { title: { en: 'Interactive delivery', fa: 'اجرای تعاملی' }, text: { en: 'Short input, case-based practice, simulation, group work and feedback.', fa: 'آموزش کوتاه، تمرین مبتنی بر مورد، شبیه‌سازی، کار گروهی و بازخورد اجرا می‌شود.' } },
  { title: { en: 'Evaluating effectiveness', fa: 'ارزیابی اثربخشی' }, text: { en: 'A short test, applied worksheets, a decision project and participant feedback.', fa: 'آزمون کوتاه، کاربرگ کاربردی، پروژه تصمیم‌سازی و بازخورد شرکت‌کنندگان سنجیده می‌شود.' } },
  { title: { en: 'Sustaining capacity', fa: 'تداوم ظرفیت' }, text: { en: 'A 30/90-day action proposal, next priorities and, if needed, a train-the-trainer path.', fa: 'پیشنهاد اقدام ۳۰/۹۰ روزه، اولویت‌های بعدی و در صورت نیاز مسیر تربیت مربی تنظیم می‌شود.' } },
];

export const deliverables: L[] = [
  { en: 'A training needs report and competence gap matrix', fa: 'گزارش نیازسنجی آموزشی و ماتریس شکاف شایستگی' },
  { en: 'A course profile and approved syllabus', fa: 'شناسنامه دوره و سیلابس تأییدشده' },
  { en: 'Slides, worksheets and scenarios suited to the agreed time and format', fa: 'اسلاید، کاربرگ و سناریو متناسب با زمان و قالب توافق‌شده' },
  { en: 'A summary of results and participant assessment, respecting confidentiality', fa: 'خلاصه دستاوردها و ارزیابی شرکت‌کنندگان با رعایت محرمانگی' },
  { en: 'A decision matrix or thematic roadmap within the scope of the exercise', fa: 'ماتریس تصمیم یا نقشه راه موضوعی در محدوده تمرین' },
  { en: 'A proposal for continuing capacity building and periodic review', fa: 'پیشنهاد برنامه تداوم ظرفیت‌سازی و بازبینی دوره‌ای' },
];

export const requestInfo: L = {
  en: 'Organisation; your role and contact details; main topic; expected result; number and level of participants; preferred format and language; approximate timing; city or online; confidentiality constraints; a non-confidential description of the problem, if available.',
  fa: 'نام سازمان؛ سمت و راه ارتباط؛ موضوع اصلی؛ نتیجه مورد انتظار؛ تعداد و سطح فراگیران؛ قالب و زبان موردنظر؛ زمان تقریبی؛ شهر/آنلاین؛ محدودیت محرمانگی؛ فایل غیرمحرمانه شرح مسئله در صورت وجود.',
};

export const boundaries: L = {
  en: 'The service covers training and institutional and management analysis. Legal advice or formal expert opinion, issuing STCW professional certificates and engineering approval are not included unless separately agreed by someone with the relevant competence.',
  fa: 'خدمات شامل آموزش و تحلیل نهادی و مدیریتی است. مشاوره حقوقی یا رأی کارشناسی رسمی، صدور گواهی حرفه‌ای STCW و تأیید فنی مهندسی، بدون توافق و صلاحیت تخصصی مربوط، در این خدمت قرار نمی‌گیرد.',
};

export const speakingTopics: L[] = [
  { en: 'The global regulatory system and maritime governance', fa: 'نظام مقررات جهانی و حکمرانی دریایی' },
  { en: 'From IMO to national implementation', fa: 'از IMO تا اجرای ملی' },
  { en: 'Changing models of port governance', fa: 'تحول مدل‌های حکمرانی بندری' },
  { en: 'Preparing for international negotiations', fa: 'آماده‌سازی مذاکرات بین‌المللی' },
  { en: 'STCW and human capital', fa: 'STCW و سرمایه انسانی' },
  { en: 'Digitalisation and the single window', fa: 'دیجیتالی‌سازی و پنجره واحد' },
  { en: 'The energy transition and climate risk in maritime transport', fa: 'گذار انرژی و ریسک اقلیمی حمل‌ونقل دریایی' },
];

export const speakingFormats: Item[] = [
  { title: { en: 'Keynote', fa: 'سخنرانی کلیدی' }, text: { en: '20 to 45 minutes', fa: '۲۰ تا ۴۵ دقیقه' } },
  { title: { en: 'Panel or round table', fa: 'پنل یا میزگرد' }, text: { en: '45 to 90 minutes', fa: '۴۵ تا ۹۰ دقیقه' } },
  { title: { en: 'Tailored interactive session', fa: 'نشست تعاملی سفارشی' }, text: { en: 'Agreed with the event organisers', fa: 'زمان با دبیرخانه رویداد توافق می‌شود' } },
];

export const speakingAgree: L = {
  en: 'Before an invitation is confirmed we agree the topic, final title, venue and date, language, audience profile, confidentiality requirements and whether slides or video may be published.',
  fa: 'پیش از تأیید دعوت، موضوع، عنوان نهایی، محل و تاریخ، زبان، مشخصات مخاطبان، الزامات محرمانگی و امکان انتشار اسلاید یا فیلم توافق می‌شود.',
};
