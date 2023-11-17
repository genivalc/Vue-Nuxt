// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './components/**/*.{js,vue,ts}',
//     './layouts/**/*.vue',
//     './pages/**/*.vue',
//     './plugins/**/*.{js,ts}',
//     './app.vue',
//     './error.vue',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    'docs/content/**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
