const SIZES = {
  SCALE: {
    xs: 8,
    sm: 10,
    md: 12,
    lg: 14,
    xl: 16,
  },
  PADDING: {
    xs: 'py-1 px-2',
    sm: 'py-1.5 px-2.5',
    md: 'py-1.5 px-3',
    lg: 'py-2 px-3.5',
    xl: 'py-2 px-4',
  },
};

const sizes = ({ theme }) => {
  const sizes = Object.entries(SIZES.SCALE).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [`.size-${k}`]: {
        [`@apply w-${v} h-${v} min-w-${v} min-h-${v}`]: {},
      },
    };
  }, {});

  const sizesByPadding = Object.entries(SIZES.PADDING).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [`.size-p-${k}`]: {
        [`@apply ${v}`]: {},
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
