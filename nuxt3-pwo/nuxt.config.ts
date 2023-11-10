export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss', 'nuxt-server-utils', '@sidebase/nuxt-auth'],
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
})
