// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gusto.ballabotond.com',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
  ],
  server: {
    port: 4323,
    host: true,
  },
});
