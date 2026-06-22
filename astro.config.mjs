import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jonathanguzmaninspt.github.io',
  base: '/FisicaTeorica_I',
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
        output: 'htmlAndMathml',
        strict: false,
        throwOnError: false,
        trust: true,
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