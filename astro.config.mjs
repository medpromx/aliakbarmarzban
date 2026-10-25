import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is served from the custom domain in public/CNAME.
export default defineConfig({
  site: 'https://aliakbarmarzban.ir',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you/') && !page.includes('/insights/') })],
});
