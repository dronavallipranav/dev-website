/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content:  ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        customGray: '#0f0f0f',
        lighterGray: '#171717',
        titlePurple: '#f5f5f5',
        titlePurpleDark: '#d4d4d4',
        containerGray: '#1a1a1a',
        byz: "#262626",
        boxShadow: {
          'purple-lg': '0 10px 20px -5px rgba(0, 0, 0, 0.6), 0 6px 10px -2px rgba(0, 0, 0, 0.4)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

