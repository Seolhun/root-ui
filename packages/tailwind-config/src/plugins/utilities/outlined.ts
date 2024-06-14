import plugin from 'tailwindcss/plugin';

import { intentColorKeyObject } from '../../presets/Colors';
import { RootIntentMap } from '../../types';

const baseStyles = (theme) => ({
  borderStyle: 'solid',
  borderWidth: theme('borderWidth.DEFAULT'),
  outline: 'none',
});

export default plugin(
  function ({ matchUtilities, theme }) {
    const values: RootIntentMap = theme('intents');

    matchUtilities(
      {
        outlined: (intent) => {
          return {
            ...baseStyles(theme),
            '&:disabled': {
              opacity: '0.7',
            },
            '&:not(:disabled):focus': {
              outline: 'none',
              ring: theme(`ringWidth.DEFAULT`),
              ringColor: theme(`colors.${intent}`),
              ringOffsetColor: theme('colors.cream'),
              ringOffsetWidth: theme('ringOffsetWidth.DEFAULT'),
            },
            '&:not(:disabled):hover': {
              backgroundColor: theme(`colors.${intent}`),
              color: theme('colors.cream-1'),
            },
            backgroundColor: 'transparent',
            borderColor: theme(`colors.${intent}`),
            color: theme(`colors.${intent}`),
            outline: 'none',
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
