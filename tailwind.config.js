/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

