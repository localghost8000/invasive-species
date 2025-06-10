module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem', // Default padding for all screens
      },
      fontFamily: {
        heading: 'var(--font-heading-family)',
        serif: ['Devinne', 'serif'], // Add your serif font
        sans: ['Greed', 'sans-serif'], // Add your sans-serif font
      },
      colors: {
        'lime-bright': '#32FF32',
        'ram-dass-blue': '#2a0ad7',
      },
    },
  },
  plugins: [],
};
