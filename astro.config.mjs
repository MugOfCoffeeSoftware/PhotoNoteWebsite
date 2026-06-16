// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://photonote.app',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      // We handle the `/` redirect ourselves in src/pages/index.astro so we can
      // honor the visitor's browser language. Disabling this lets our page render.
      redirectToDefaultLocale: false,
    },
  },
});
