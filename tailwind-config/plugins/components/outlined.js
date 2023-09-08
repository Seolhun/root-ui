const { intentColorKeys } = require('../../presets/Colors');

module.exports = ({ addComponents, theme }) => {
  const className = 'outlined';
  const commonStyles = {
    '@apply border outline-none': {},
  };

  // Light mode
  const lightStyles = {};
  intentColorKeys.forEach((key) => {
    const intent = {
      main: `${key}`,
    };

    lightStyles[`.${className}-${key}`] = {
      ...commonStyles,
      '&:disabled': {
        [`@apply opacity-70`]: {},
      },
      '&:not(:disabled):focus': {
        '@apply outline-none ring-2 ring-offset-1': {},
        [`@apply ring-${intent.main} ring-offset-cream`]: {},
      },

      '&:not(:disabled):hover': {
        [`@apply bg-${intent.main} text-cream-1`]: {},
      },

      '@apply bg-transparent': {},

      [`@apply text-${intent.main} border-${intent.main}`]: {},
    };
  });
  addComponents(lightStyles);

  // Dark mode
  const darkStyles = {};
  intentColorKeys.forEach((key) => {
    const intent = {
      main: `${key}2`,
    };

    darkStyles[`.dark .${className}-${key}`] = {
      ...commonStyles,
      '&:disabled': {
        [`@apply opacity-70`]: {},
      },
      '&:not(:disabled):focus': {
        '@apply outline-none ring-2 ring-offset-1': {},
        [`@apply ring-${intent.main} ring-offset-space`]: {},
      },

      '&:not(:disabled):hover': {
        [`@apply bg-${intent.main} text-cream-1`]: {},
      },

      '@apply bg-transparent text-cream': {},

      [`@apply text-${intent.main} border-${intent.main}`]: {},
    };
  });
  addComponents(darkStyles);
};
