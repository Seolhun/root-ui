const SCALES = {
  SIZE: {
    xs: 8,
    sm: 10,
    md: 12,
    lg: 14,
    xl: 16,
  },
  PADDING: {
    xs: { y: 2, x: 4 },
    sm: { y: 3, x: 6 },
    md: { y: 4, x: 8 },
    lg: { y: 5, x: 10 },
    xl: { y: 6, x: 12 },
  },
  TEXT: {
    xs: 'text-5',
    sm: 'text-6',
    md: 'text-7',
    lg: 'text-8',
    xl: 'text-9',
  },
};

const scales = ({ theme }) => {
  const scales = Object.entries(SCALES.SIZE).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [`.scale-${k}`]: {
        [`@apply w-${v} h-${v} min-w-${v} min-h-${v}`]: {},
      },
    };
  }, {});

  const scalesByPadding = Object.entries(SCALES.PADDING).reduce((acc, [k, { y, x }]) => {
    return {
      ...acc,
      [`.scale-p-${k}`]: {
        [`@apply py-${y} px-${x}`]: {},
      },
      [`.scale-py-${k}`]: {
        [`@apply py-${y}`]: {},
      },
      [`.scale-px-${k}`]: {
        [`@apply py-${x}`]: {},
      },
    };
  }, {});

  const textScales = Object.entries(SCALES.TEXT).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [`.scale-text-${k}`]: {
        [`@apply ${v}`]: {},
      },
    };
  }, {});

  return {
    ...scales,
    ...scalesByPadding,
    ...textScales,
  };
};

module.exports = {
  scales,
};
