// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://valentine-resume.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind()
  ]
});
