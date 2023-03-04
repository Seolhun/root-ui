const { createComponentByIntent } = require('./createComponentByIntent');

module.exports = ({ theme }) => {
  return createComponentByIntent('outlined', (intentColorKey) => {
    const light = {
      default: `${intentColorKey}`,
      text: `${intentColorKey}`,
      border: `${intentColorKey}`,
      focus: `${intentColorKey}-6`,
    };
    const dark = {
      default: `${intentColorKey}_dark`,
      text: `${intentColorKey}_dark`,
      border: `${intentColorKey}_dark`,
      focus: `${intentColorKey}_dark-4`,
    };
    return {
      // Common
      '@apply border': {},

      // LightMode
      '@apply bg-cream text-cream': {},
      [`@apply text-${light.text} border-${light.border}`]: {},

      '&:hover': {
        [`@apply bg-${light.default}`]: {},
      },
      '&:focus': {
        '@apply outline-none ring-2 ring-offset-1': {},
        [`@apply ring-${light.focus} ring-offset-cream ring-offset-cream`]: {},
      },

      // DarkMode
      '.dark &': {
        '@apply bg-space text-space': {},
        [`@apply text-${dark.text} border-${dark.border}`]: {},

        '&:hover': {
          [`@apply bg-${dark.default}`]: {},
        },
        '&:focus': {
          '@apply outline-none ring-2 ring-offset-1': {},
          [`@apply ring-${dark.focus} ring-offset-space ring-offset-space`]: {},
        },
      },
    };
  });
};
