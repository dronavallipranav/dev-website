const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(production && {
      '@fullhuman/postcss-purgecss': {
        content: ['./src/**/*.astro', './src/**/*.html'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    }),
  },
};
