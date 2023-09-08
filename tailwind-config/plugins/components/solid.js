const { intentColorKeys } = require('../../presets/Colors');

module.exports = ({ addComponents, theme }) => {
  const className = 'solid';
  const commonStyles = {
    '@apply border outline-none': {},
  };

  // Light mode
  const lightStyles = {};
  intentColorKeys.forEach((key) => {
    const intent = {
      focus: `${key}-6`,
      hover: `${key}-6`,
      main: `${key}`,
      text: `cream-1`,
    };

    lightStyles[`.${className}-${key}`] = {
      ...commonStyles,
      '&:disabled': {
        [`@apply opacity-40`]: {},
      },

      '&:not(:disabled):focus': {
        '@apply ring-2 ring-offset-1': {},
        [`@apply ring-${intent.focus} ring-offset-cream ring-offset-cream`]: {},
      },

      '&:not(:disabled):hover': {
        [`@apply bg-${intent.hover}`]: {},
      },

      [`@apply text-${intent.text} bg-${intent.main} border-${intent.main}`]: {},
    };
  });
  addComponents(lightStyles);

  // Dark mode
  const darkStyles = {};
  intentColorKeys.forEach((key) => {
    const intent = {
      focus: `${key}2-6`,
      hover: `${key}2-6`,
      main: `${key}2`,
      text: `cream-1`,
    };

    darkStyles[`.dark .${className}-${key}`] = {
      ...commonStyles,
      '&:disabled': {
        [`@apply opacity-40`]: {},
      },

      '&:not(:disabled):focus': {
        '@apply ring-2 ring-offset-1': {},
        [`@apply ring-${intent.focus} ring-offset-space ring-offset-space`]: {},
      },

      '&:not(:disabled):hover': {
        [`@apply bg-${intent.hover}`]: {},
      },

      [`@apply text-${intent.text} bg-${intent.main} border-${intent.main}`]: {},
    };
  });
  addComponents(darkStyles);
};
