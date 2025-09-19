import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: "https://astro-resume-theme.netlify.app",
  integrations: [tailwind(), icon(), mdx(), sitemap()],
  adapter: vercel()
});