export type Lang = 'en' | 'fa';
export type L<T = string> = { en: T; fa: T };

export const langs: Lang[] = ['en', 'fa'];

export function t<T>(value: L<T>, lang: Lang): T {
  return value[lang];
}

/** Build a site path for the given language. `path` is the English path, e.g. "/services/". */
export function href(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'fa' ? `/fa${clean === '/' ? '/' : clean}` : clean;
}

/** Strip the language prefix from a pathname so it can be re-localised. */
export function basePath(pathname: string): string {
  return pathname.replace(/^\/fa(?=\/|$)/, '') || '/';
}

export function dir(lang: Lang): 'ltr' | 'rtl' {
  return lang === 'fa' ? 'rtl' : 'ltr';
}

const faDigits = '۰۱۲۳۴۵۶۷۸۹';
export function num(n: number | string, lang: Lang): string {
  const s = String(n);
  return lang === 'fa' ? s.replace(/\d/g, (d) => faDigits[Number(d)]) : s;
}

export function formatDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
}
