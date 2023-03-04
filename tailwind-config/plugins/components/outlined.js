const { createComponentByIntent } = require('./createComponentByIntent');

module.exports = ({ addComponents, theme }) => {
  return addComponents(
    createComponentByIntent('outlined', (intentColorKey) => {
      const light = {
        default: `${intentColorKey}`,
        text: `${intentColorKey}`,
        border: `${intentColorKey}`,
        focus: `${intentColorKey}-6`,
      };
      const dark = {
        default: `${intentColorKey}2`,
        text: `${intentColorKey}2`,
        border: `${intentColorKey}2`,
        focus: `${intentColorKey}2-4`,
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
        '&:not(:disabled):focus': {
          '@apply outline-none ring-1 ring-offset-1': {},
          [`@apply ring-${light.focus} ring-offset-cream`]: {},
        },

        // DarkMode
        '.dark &': {
          '@apply bg-space text-space': {},
          [`@apply text-${dark.text} border-${dark.border}`]: {},

          '&:not(:disabled):hover': {
            [`@apply bg-${dark.default} text-cream-1`]: {},
          },
          '&:not(:disabled):focus': {
            '@apply outline-none ring-1 ring-offset-1': {},
            [`@apply ring-${dark.focus} ring-offset-space`]: {},
          },
        },
      };
    }),
  );
};
