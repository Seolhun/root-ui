const { createComponentByIntent } = require('./createComponentByIntent');

const solids = ({ theme }) => {
  return createComponentByIntent('solid', (intentColorKey) => {
    const light = {
      default: intentColorKey,
      text: `${intentColorKey}-1`,
      hover: `${intentColorKey}-6`,
      focus: `${intentColorKey}-6`,
    };
    const dark = {
      default: intentColorKey,
      text: `${intentColorKey}-1`,
      hover: `${intentColorKey}-6`,
      focus: `${intentColorKey}-6`,
    };

    const defaultStyles = {
      '@apply border': {},
    };
    return {
      light: {
        ...defaultStyles,
        [`@apply text-${light.text} bg-${light.default} border-${light.default}`]: {},

        '&:hover': {
          [`@apply bg-${light.hover}`]: {},
        },
        '&:focus': {
          '@apply outline-none ring-2 ring-offset-2': {},
          [`@apply ring-${light.focus} ring-offset-cream ring-offset-cream`]: {},
        },
      },
      dark: {
        ...defaultStyles,
        [`@apply text-${dark.text} bg-${dark.default} border-${dark.default}`]: {},

        '&:hover': {
          [`@apply bg-${dark.hover}`]: {},
        },
        '&:focus': {
          '@apply outline-none ring-2 ring-offset-2': {},
          [`@apply ring-${dark.focus} ring-offset-space ring-offset-space`]: {},
        },
      },
    };
  });
};

module.exports = {
  solids,
};
