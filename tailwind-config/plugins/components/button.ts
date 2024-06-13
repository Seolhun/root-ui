import plugin from 'tailwindcss/plugin';

import { createPaddingScale } from '../helpers';

export default plugin(function (pluginApis) {
  const { addComponents, theme } = pluginApis;
  const btnPaddingScale = createPaddingScale(pluginApis)('btn');

  addComponents({
    '.btn': {
      ...btnPaddingScale,
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:focus': {
        outline: 'none',
      },
      borderRadius: theme('borderRadius.md'),
      fontWeight: theme('fontWeight.medium'),
    },
  });
});
