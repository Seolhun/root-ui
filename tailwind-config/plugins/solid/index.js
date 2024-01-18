const plugin = require('tailwindcss/plugin');
const { intentColorKeyObject } = require('../../presets/Colors');

const baseStyles = {
  '@apply border outline-none': {},
};

module.exports = plugin(
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
            ...baseStyles,
            '&:disabled': {
              [`@apply opacity-40`]: {},
            },

            '&:not(:disabled):focus': {
              '@apply ring-2 ring-offset-1': {},
              [`@apply ring-${focus} ring-offset-cream ring-offset-cream`]: {},
            },

            '&:not(:disabled):hover': {
              [`@apply bg-${hover}`]: {},
            },

            [`@apply text-${text} bg-${main} border-${main}`]: {},
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
