import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://neonplus.github.io',
  base: '/fisica-teorica-i-2026',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/assets/'),
    }),
  ],
  markdown: {
    remarkPlugins: ['remark-math'],
    rehypePlugins: [
      ['rehype-katex', {
        output: 'html',
        strict: false,
        throwOnError: false,
      }],
    ],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  build: {
    assets: '_assets',
  },
  server: {
    port: 4321,
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});