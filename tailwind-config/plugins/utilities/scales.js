const SCALES = {
  SIZE: {
    xs: 8,
    sm: 10,
    md: 12,
    lg: 14,
    xl: 16,
  },
  PADDING: {
    xs: { y: 4, x: 4 },
    sm: { y: 4.5, x: 6 },
    md: { y: 5, x: 8 },
    lg: { y: 6, x: 10 },
    xl: { y: 6.5, x: 12 },
  },
  TEXT: {
    xs: 'text-4',
    sm: 'text-5',
    md: 'text-6',
    lg: 'text-7',
    xl: 'text-8',
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
