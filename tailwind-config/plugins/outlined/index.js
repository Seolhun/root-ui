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
        outlined: (value) => {
          const main = `${value}`;
          return {
            ...baseStyles,
            '&:disabled': {
              [`@apply opacity-70`]: {},
            },
            '&:not(:disabled):focus': {
              '@apply outline-none ring-2 ring-offset-1': {},
              [`@apply ring-${main} ring-offset-cream`]: {},
            },

            '&:not(:disabled):hover': {
              [`@apply bg-${main} text-cream-1`]: {},
            },

            '@apply bg-transparent': {},

            [`@apply text-${main} border-${main}`]: {},
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
