import plugin from 'tailwindcss/plugin';

import { intentColorKeyObject } from '../../presets/Colors';

const baseStyles = (theme) => ({
  borderStyle: 'solid',
  borderWidth: theme('borderWidth.DEFAULT'),
  outline: 'none',
});

export default plugin(
  function ({ matchUtilities, theme }) {
    const values = theme('intents');

    matchUtilities(
      {
        solid: (value) => {
          const text = 'cream-1';
          const main = `${value}`;
          const focus = `${value}-6`;
          const hover = `${value}-6`;
          return {
            ...baseStyles(theme),
            '&:disabled': {
              opacity: theme('opacity.40'),
            },
            '&:not(:disabled):focus': {
              outline: 'none',
              ringColor: theme(`colors.${focus}`),
              ringOffsetColor: theme('colors.cream'),
              ringOffsetWidth: theme('ringOffsetWidth.DEFAULT'),
              ringWidth: theme('ringWidth.DEFAULT'),
            },
            '&:not(:disabled):hover': {
              backgroundColor: theme(`colors.${hover}`),
            },
            backgroundColor: theme(`colors.${main}`),
            borderColor: theme(`colors.${main}`),
            color: theme(`colors.${text}`),
          };
        },
      },
      { type: 'color', values },
    );
  },
  {
    theme: {
      intents: intentColorKeyObject,
    },
    variants: {
      intents: ['dark'],
    },
  },
);
