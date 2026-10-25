# International Maritime Advisory — aliakbarmarzban.ir

Multilingual website (English, Persian, Arabic, Spanish, French, German and Chinese; Persian and Arabic are RTL) for an independent maritime advisory practice, built with [Astro](https://astro.build) as a fast static site and deployed to GitHub Pages.

## Structure

| Page | English | Other languages (`fa`, `ar`, `es`, `fr`, `de`, `zh`) |
|---|---|---|
| Home | `/` | `/<lang>/` |
| Advisory Services (6 core pages) | `/services/`, `/services/<slug>/` | `/<lang>/services/...` |
| Specialist Advisory | `/specialist-advisory/` | `/<lang>/specialist-advisory/` |
| Clients & Sectors (role-based journeys) | `/sectors/` | `/<lang>/sectors/` |
| About the Advisor | `/about/` | `/<lang>/about/` |
| Experience & Credentials | `/experience/` | `/<lang>/experience/` |
| Insights & Publications | `/insights/` | `/<lang>/insights/` |
| Training & Speaking | `/training/` | `/<lang>/training/` |
| Request an Advisory Discussion + confirmation | `/consultation/`, `/consultation/thank-you/` | `/<lang>/consultation/...` |
| Privacy Policy, Legal Notices | `/privacy/`, `/legal/` | `/<lang>/privacy/`, `/<lang>/legal/` |

Every page is rendered once per language from a shared view in `src/views/`. English and Persian text is written side by side in the data files and views; Arabic, Spanish, French, German and Chinese come from `src/i18n/<lang>.json`, keyed by the English text (anything missing falls back to English). Run `I18N_COLLECT=missing.txt npm run build` to list untranslated strings. Text lives in:

- `src/data/services.ts` — the six core services and four specialist areas (both languages).
- `src/data/sectors.ts` — audience journeys and sectors.
- `src/data/credentials.json` — career, international roles, education and books.
- `src/data/profile.ts` — biography, headline figures and career highlights.
- `src/content/insights/<lang>/*.md` — articles.

Service pages link to the form with `?service=<slug>`, and the form preselects that advisory area.

## Contact

WhatsApp is the contact channel (`site.whatsapp` in `src/data/site.ts`). The consultation form validates the request and opens it as a ready-to-send WhatsApp message, then shows the confirmation page; a floating WhatsApp button appears on every page.

Optional: set the repository variable `PUBLIC_PLAUSIBLE_DOMAIN` to enable cookieless analytics (CTA clicks and form submissions are sent as events).

## CMS

`/admin/` hosts [Sveltia CMS](https://github.com/sveltia/sveltia-cms) for editing insights and credentials. Sign in with a GitHub personal access token that has write access to this repository. Saving commits to `main`, which redeploys the site.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. One-time setup: in **Settings → Pages**, set **Source** to **GitHub Actions**. The custom domain comes from `public/CNAME` (`aliakbarmarzban.ir`). Its DNS must point to GitHub Pages.
