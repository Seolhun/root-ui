const { createComponentByIntent } = require('./createComponentByIntent');

module.exports = ({ theme }) => {
  return createComponentByIntent('solid', (intentColorKey) => {
    const light = {
      default: `${intentColorKey}`,
      text: `cream-1`,
      hover: `${intentColorKey}-6`,
      focus: `${intentColorKey}-6`,
    };
    const dark = {
      default: `${intentColorKey}_dark`,
      text: `cream-1`,
      hover: `${intentColorKey}_dark-6`,
      focus: `${intentColorKey}_dark-6`,
    };
    return {
      // Common
      '@apply border': {},

      // LightMode
      [`@apply text-${light.text} bg-${light.default} border-${light.default}`]: {},

      '&:hover': {
        [`@apply bg-${light.hover}`]: {},
      },
      '&:focus': {
        '@apply outline-none ring-2 ring-offset-1': {},
        [`@apply ring-${light.focus} ring-offset-cream ring-offset-cream`]: {},
      },

      '.dark &': {
        [`@apply text-${dark.text} bg-${dark.default} border-${dark.default}`]: {},

        '&:hover': {
          [`@apply bg-${dark.hover}`]: {},
        },
        '&:focus': {
          '@apply outline-none ring-2 ring-offset-1': {},
          [`@apply ring-${dark.focus} ring-offset-space ring-offset-space`]: {},
        },
      },
    };
  });
};
