const SIZES = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14,
  xl: 16,
};

const sizes = ({ theme }) => {
  const sizes = Object.entries(SIZES).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [`.size-${k}`]: {
        [`@apply w-${v} h-${v} min-w-${v} min-h-${v}`]: {},
      },
    };
  }, {});

  const sizesByPadding = Object.entries(SIZES).reduce((acc, [k, v]) => {
    return {
      ...acc,
      '.size-p-xs': {
        '@apply py-1 px-2': {},
      },
      '.size-p-sm': {
        '@apply py-1.5 px-2.5': {},
      },
      '.size-p-md': {
        '@apply py-1.5 px-3': {},
      },
      '.size-p-lg': {
        '@apply py-2 px-3.5': {},
      },
      '.size-p-xl': {
        '@apply py-2 px-4': {},
      },
    };
  }, {});

  return {
    ...sizes,
    ...sizesByPadding,
  };
};

module.exports = {
  sizes,
};
