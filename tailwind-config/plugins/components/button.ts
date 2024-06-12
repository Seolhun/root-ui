import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addComponents, theme }) {
  addComponents({
    '.btn': {
      '&:hover': {
        backgroundColor: theme('colors.gray.200'),
      },
      borderRadius: theme('borderRadius.md'),
      display: 'inline-block',
      fontWeight: theme('fontWeight.bold'),
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
    },
    '.btn-primary': {
      backgroundColor: theme('colors.blue.500'),
      color: theme('colors.white'),
    },
  });
});
