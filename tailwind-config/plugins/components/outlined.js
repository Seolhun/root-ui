const { createComponentByIntent } = require('./createComponentByIntent');

module.exports = ({ addComponents, theme }) => {
  return addComponents({
    ...createComponentByIntent('outlined', (intentColorKey) => {
      const light = {
        default: `${intentColorKey}`,
        text: `${intentColorKey}`,
        border: `${intentColorKey}`,
      };
      const dark = {
        default: `${intentColorKey}2`,
        text: `${intentColorKey}2`,
        border: `${intentColorKey}2`,
      };
      return {
        // Common
        '@apply border': {},

        // LightMode
        '@apply bg-cream text-cream': {},
        [`@apply text-${light.text} border-${light.border}`]: {},

        '&:not(:disabled):hover': {
          [`@apply bg-${light.default} text-cream-1`]: {},
        },

        // DarkMode
        '.dark &': {
          '@apply bg-space text-space': {},
          [`@apply text-${dark.text} border-${dark.border}`]: {},

          '&:not(:disabled):hover': {
            [`@apply bg-${dark.default} text-cream-1`]: {},
          },
        },
      };
    }),
    ...createComponentByIntent('outlined-focus', (intentColorKey) => {
      const light = {
        default: `${intentColorKey}-6`,
      };
      const dark = {
        default: `${intentColorKey}2-4`,
      };
      return {
        '&:not(:disabled):focus': {
          '@apply outline-none ring-2 ring-offset-1': {},
          [`@apply ring-${light.default} ring-offset-cream`]: {},
        },

        // DarkMode
        '.dark &': {
          '&:not(:disabled):focus': {
            '@apply outline-none ring-2 ring-offset-1': {},
            [`@apply ring-${dark.default} ring-offset-space`]: {},
          },
        },
      };
    }),
  });
};
