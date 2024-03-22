/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'green-emerald': '#008000',
        'blue-electric': '#7DF9FF',
        'yellow-gold': '#FFD700',
        'soft-gray': '#D3D3D3',
        white: '#FFFFFF',
        black: '#000000',
        'background-dark': '#121212'
      }
    }
  },
  plugins: []
}
