# International Maritime Advisory — aliakbarmarzban.ir

Bilingual (English-first, Persian RTL) website for an independent maritime advisory practice, built with [Astro](https://astro.build) as a fast static site and deployed to GitHub Pages.

## Structure

| Page | English | Persian |
|---|---|---|
| Home | `/` | `/fa/` |
| Advisory Services (6 core pages) | `/services/`, `/services/<slug>/` | `/fa/services/...` |
| Specialist Advisory | `/specialist-advisory/` | `/fa/specialist-advisory/` |
| Clients & Sectors (role-based journeys) | `/sectors/` | `/fa/sectors/` |
| About the Advisor | `/about/` | `/fa/about/` |
| Experience & Credentials | `/experience/` | `/fa/experience/` |
| Insights & Publications | `/insights/` | `/fa/insights/` |
| Training & Speaking | `/training/` | `/fa/training/` |
| Request an Advisory Discussion + confirmation | `/consultation/`, `/consultation/thank-you/` | `/fa/consultation/...` |
| Privacy Policy, Legal Notices | `/privacy/`, `/legal/` | `/fa/privacy/`, `/fa/legal/` |

Every page is rendered once per language from a shared view in `src/views/`. Text lives in:

- `src/data/services.ts` — the six core services and four specialist areas (both languages).
- `src/data/sectors.ts` — audience journeys and sectors.
- `src/data/credentials.json` — experience and credentials (each item has `verified`; unverified items show as placeholders).
- `src/content/insights/<en|fa>/*.md` — articles.

Service pages link to the form with `?service=<slug>`, and the form preselects that advisory area.

## Content rules

Placeholders with a dashed gold border mark content that still needs verification (biography, portrait, career evidence, case studies, retention period, legal details). The three insight articles are marked as samples. Don't publish career claims, titles or case studies until they're verified. Use "Former" for historical roles and don't imply a current IMO affiliation.

## Configuration

Set these as **repository variables** (Settings → Secrets and variables → Actions → Variables). The deploy workflow passes them to the build.

| Variable | Purpose |
|---|---|
| `PUBLIC_FORM_ENDPOINT` | Endpoint that receives the consultation form as JSON (e.g. a free [Formspree](https://formspree.io) form URL, or `https://api.web3forms.com/submit`). |
| `PUBLIC_FORM_ACCESS_KEY` | Web3Forms access key (only for Web3Forms). |
| `PUBLIC_CONTACT_EMAIL` | Public contact email. If no endpoint is set, the form opens a pre-filled email to this address. |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Optional cookieless analytics (Plausible). CTA clicks and form submissions are sent as events. |

Spam protection: honeypot field plus a minimum completion time. Formspree and Web3Forms add their own filtering.

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
