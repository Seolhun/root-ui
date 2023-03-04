const { createComponentByIntent } = require('./createComponentByIntent');

const outlined = ({ theme }) => {
  return createComponentByIntent('outlined', (intentColorKey) => {
    const light = {
      default: `${intentColorKey}`,
      text: `${intentColorKey}`,
      border: `${intentColorKey}`,
      focus: `${intentColorKey}-6`,
    };
    const dark = {
      default: `${intentColorKey}`,
      text: `${intentColorKey}`,
      border: `${intentColorKey}`,
      focus: `${intentColorKey}-4`,
    };

    const defaultStyles = {
      '@apply border': {},
    };
    return {
      light: {
        ...defaultStyles,
        [`@apply text-${light.text} bg-cream border-${light.border}`]: {},

        '&:hover': {
          [`@apply text-cream bg-${light.default}`]: {},
        },
        '&:focus': {
          '@apply outline-none ring-2 ring-offset-1': {},
          [`@apply ring-${light.focus} ring-offset-cream ring-offset-cream`]: {},
        },
      },
      dark: {
        ...defaultStyles,
        [`@apply text-${dark.text} bg-space border-${dark.border}`]: {},

        '&:hover': {
          [`@apply text-space bg-${dark.default}`]: {},
        },
        '&:focus': {
          '@apply outline-none ring-2 ring-offset-1': {},
          [`@apply ring-${dark.focus} ring-offset-space ring-offset-space`]: {},
        },
      },
    };
  });
};

module.exports = {
  outlined,
};
