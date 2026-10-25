import { appendFileSync } from 'node:fs';
import ar from '../i18n/ar.json';
import de from '../i18n/de.json';
import es from '../i18n/es.json';
import fr from '../i18n/fr.json';
import ru from '../i18n/ru.json';
import tr from '../i18n/tr.json';
import zh from '../i18n/zh.json';

export type Lang = 'en' | 'fa' | 'ar' | 'es' | 'fr' | 'de' | 'ru' | 'tr' | 'zh';
/**
 * Content is authored in English and Persian. The other languages are looked up from
 * src/i18n/<lang>.json, keyed by the English text.
 */
export type L<T = string> = { en: T; fa: T };

export const langs: Lang[] = ['en', 'fa', 'ar', 'es', 'fr', 'de', 'ru', 'tr', 'zh'];

export const langMeta: Record<Lang, { name: string; dir: 'ltr' | 'rtl'; locale: string; og: string }> = {
  en: { name: 'English', dir: 'ltr', locale: 'en-GB', og: 'en_GB' },
  fa: { name: 'فارسی', dir: 'rtl', locale: 'fa-IR', og: 'fa_IR' },
  ar: { name: 'العربية', dir: 'rtl', locale: 'ar-u-nu-latn', og: 'ar_AR' },
  es: { name: 'Español', dir: 'ltr', locale: 'es-ES', og: 'es_ES' },
  fr: { name: 'Français', dir: 'ltr', locale: 'fr-FR', og: 'fr_FR' },
  de: { name: 'Deutsch', dir: 'ltr', locale: 'de-DE', og: 'de_DE' },
  ru: { name: 'Русский', dir: 'ltr', locale: 'ru-RU', og: 'ru_RU' },
  tr: { name: 'Türkçe', dir: 'ltr', locale: 'tr-TR', og: 'tr_TR' },
  zh: { name: '中文', dir: 'ltr', locale: 'zh-CN', og: 'zh_CN' },
};

const catalogs: Partial<Record<Lang, Record<string, string>>> = { ar, de, es, fr, ru, tr, zh };

/** Translate an English string into a catalog language, falling back to English. */
function lookup(en: string, lang: Lang): string {
  const hit = catalogs[lang]?.[en];
  if (hit === undefined && process.env.I18N_COLLECT) {
    appendFileSync(process.env.I18N_COLLECT, JSON.stringify(en) + '\n');
  }
  return hit ?? en;
}

function translateValue<T>(en: T, lang: Lang): T {
  if (typeof en === 'string') return lookup(en, lang) as T;
  if (Array.isArray(en)) return en.map((v) => translateValue(v, lang)) as T;
  if (en && typeof en === 'object') {
    return Object.fromEntries(Object.entries(en).map(([k, v]) => [k, translateValue(v, lang)])) as T;
  }
  return en;
}

export function t<T>(value: L<T>, lang: Lang): T {
  if (lang === 'en' || lang === 'fa') return value[lang];
  return translateValue(value.en, lang);
}

/** For inline copy in views: tr(persian, english). */
export function makeTr(lang: Lang) {
  return (fa: string, en: string) => (lang === 'fa' ? fa : lang === 'en' ? en : lookup(en, lang));
}

/** Build a site path for the given language. `path` is the English path, e.g. "/services/". */
export function href(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? clean : `/${lang}${clean}`;
}

/** Strip the language prefix from a pathname so it can be re-localised. */
export function basePath(pathname: string): string {
  return pathname.replace(/^\/(fa|ar|es|fr|de|ru|tr|zh)(?=\/|$)/, '') || '/';
}

export function dir(lang: Lang): 'ltr' | 'rtl' {
  return langMeta[lang].dir;
}

const faDigits = '۰۱۲۳۴۵۶۷۸۹';
export function num(n: number | string, lang: Lang): string {
  const s = String(n);
  return lang === 'fa' ? s.replace(/\d/g, (d) => faDigits[Number(d)]) : s;
}

export function formatDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(langMeta[lang].locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
}

/** Languages served under a /<lang>/ prefix. */
export const otherLangs = langs.filter((l) => l !== 'en');
