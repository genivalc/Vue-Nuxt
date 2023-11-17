export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss', 'nuxt-server-utils', '@sidebase/nuxt-auth'],
  modules: [
    '@vite-pwa/nuxt',
    // '@nuxtjs/tailwindcss',
    // '@nuxtjs/color-mode',
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    '@nuxt/ui',
    // '@nuxt/http',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  pwa: {
    manifest: {
      name: 'Nuxt3 PWA testing GEnival',
      short_name: 'Nuxt3 PWA testing GEnival',
      description: 'testing nuxt3 PWA',
      icons: [
        {
          src: 'icons/icon_64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'icons/icon_144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/icon_192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icon_512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globDirectory: 'C:/dev/Vue-Nuxt/nuxt3-pwo/.nuxt/dev-sw-dist',
      globPatterns: ['**/*.{js,css,html}'],
      globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js'],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
})
