import { site } from '../data/site';
import { href, t, type Lang, makeTr } from './i18n';

// Structured data built from the advisor's CV.
export function personLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#advisor`,
    name: t(site.advisorName, lang),
    url: new URL(href(lang, '/about/'), site.url).href,
    image: new URL(site.portrait, site.url).href,
    jobTitle: makeTr(lang)('مشاور امور دریایی و بندری', 'Maritime and port affairs advisor'),
    description: t(site.title, lang),
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'World Maritime University' },
      { '@type': 'CollegeOrUniversity', name: 'Shahid Beheshti University' },
      { '@type': 'CollegeOrUniversity', name: 'Islamic Azad University, Central Tehran Branch' },
    ],
    telephone: `+${site.whatsapp}`,
    knowsLanguage: ['fa', 'en'],
    knowsAbout: ['IMO regulation', 'Port governance', 'Maritime contracts', 'STCW', 'International maritime cooperation'],
    worksFor: { '@id': `${site.url}/#organization` },
    ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
  };
}

export function organizationLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${site.url}/#organization`,
    name: t(site.brand, lang),
    url: new URL(href(lang, '/'), site.url).href,
    description: t(site.description, lang),
    founder: { '@id': `${site.url}/#advisor` },
    areaServed: 'Worldwide',
    knowsLanguage: ['en', 'fa', 'ar', 'es', 'fr', 'de', 'ru', 'tr', 'zh'],
  };
}

export function profilePageLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: new URL(href(lang, '/about/'), site.url).href,
    inLanguage: lang,
    mainEntity: personLd(lang),
  };
}

export function articleLd(lang: Lang, a: { title: string; summary: string; date: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.summary,
    datePublished: a.date,
    inLanguage: lang,
    url: new URL(href(lang, `/insights/${a.slug}/`), site.url).href,
    author: { '@id': `${site.url}/#advisor`, '@type': 'Person', name: t(site.advisorName, lang) },
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function serviceLd(lang: Lang, s: { slug: string; title: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.description,
    url: new URL(href(lang, `/services/${s.slug}/`), site.url).href,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: 'Worldwide',
  };
}
