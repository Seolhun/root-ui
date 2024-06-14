import plugin from 'tailwindcss/plugin';

import { intentColorKeyObject } from '../../presets/Colors';
import { RootIntentMap } from '../../types';

export default plugin(
  function ({ matchUtilities, theme }) {
    const values: RootIntentMap = theme('intents');

    matchUtilities(
      {
        fill: (intent) => {
          return {
            color: theme(`colors.${intent}-2`),
            fill: theme(`colors.${intent}`),
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
