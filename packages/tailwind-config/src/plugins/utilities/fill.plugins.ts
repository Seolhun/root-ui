import plugin from 'tailwindcss/plugin';

import { intentMap } from '../../constants';
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
      intents: intentMap,
    },
    variants: {
      intents: ['dark'],
    },
  },
);
