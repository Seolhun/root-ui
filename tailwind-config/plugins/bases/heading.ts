import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addBase, theme }) {
  addBase({
    h1: {
      fontSize: theme('fontSize.6xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.16'),
    },
    h2: {
      fontSize: theme('fontSize.5xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.15'),
    },
    h3: {
      fontSize: theme('fontSize.4xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.14'),
    },
    h4: {
      fontSize: theme('fontSize.3xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.13'),
    },
    h5: {
      fontSize: theme('fontSize.2xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.12'),
    },
    h6: {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.11'),
    },
  });
});
