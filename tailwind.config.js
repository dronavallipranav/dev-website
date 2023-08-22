/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content:  ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        customGray: '#121212',
        lighterGray: '#1F1B24',
        titlePurple: '#BB86FC',
        titlePurpleDark: '#A675E2',
        containerGray: '#1F1A24',
        boxShadow: {
          'purple-lg': '0 10px 20px -5px rgba(187, 134, 252, 0.8), 0 6px 10px -2px rgba(187, 134, 252, 0.6)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

