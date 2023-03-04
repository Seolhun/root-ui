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
      main: `${key}`,
      text: `cream-1`,
      hover: `${key}-6`,
      focus: `${key}-6`,
    };

    lightStyles[`.${className}-${key}`] = {
      ...commonStyles,
      [`@apply text-${intent.text} bg-${intent.main} border-${intent.main}`]: {},

      '&:not(:disabled):hover': {
        [`@apply bg-${intent.hover}`]: {},
      },

      '&:not(:disabled):focus': {
        '@apply ring-2 ring-offset-1': {},
        [`@apply ring-${intent.focus} ring-offset-cream ring-offset-cream`]: {},
      },
    };
  });
  addComponents(lightStyles);

  // Dark mode
  const darkStyles = {};
  intentColorKeys.forEach((key) => {
    const intent = {
      main: `${key}2`,
      text: `cream-1`,
      hover: `${key}2-6`,
      focus: `${key}2-6`,
    };

    darkStyles[`.dark .${className}-${key}`] = {
      ...commonStyles,
      [`@apply text-${intent.text} bg-${intent.main} border-${intent.main}`]: {},

      '&:not(:disabled):hover': {
        [`@apply bg-${intent.hover}`]: {},
      },

      '&:not(:disabled):focus': {
        '@apply ring-2 ring-offset-1': {},
        [`@apply ring-${intent.focus} ring-offset-space ring-offset-space`]: {},
      },
    };
  });
  addComponents(darkStyles);
};
