const { createComponentByIntent } = require('./createComponentByIntent');

module.exports = ({ addComponents, theme }) => {
  return addComponents(
    createComponentByIntent('solid', (intentColorKey) => {
      const light = {
        default: `${intentColorKey}`,
        text: `cream-1`,
        hover: `${intentColorKey}-6`,
        focus: `${intentColorKey}-6`,
      };
      const dark = {
        default: `${intentColorKey}2`,
        text: `cream-1`,
        hover: `${intentColorKey}2-6`,
        focus: `${intentColorKey}2-6`,
      };
      return {
        // Common
        '@apply border': {},

        // LightMode
        [`@apply text-${light.text} bg-${light.default} border-${light.default}`]: {},

        '&:not(:disabled):hover': {
          [`@apply bg-${light.hover}`]: {},
        },
        '&:not(:disabled):focus': {
          '@apply outline-none ring-1 ring-offset-1': {},
          [`@apply ring-${light.focus} ring-offset-cream ring-offset-cream`]: {},
        },

        '.dark &': {
          [`@apply text-${dark.text} bg-${dark.default} border-${dark.default}`]: {},

          '&:not(:disabled):hover': {
            [`@apply bg-${dark.hover}`]: {},
          },
          '&:not(:disabled):focus': {
            '@apply outline-none ring-1 ring-offset-1': {},
            [`@apply ring-${dark.focus} ring-offset-space ring-offset-space`]: {},
          },
        },
      };
    }),
  );
};
