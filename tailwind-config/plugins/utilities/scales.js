const SCALES = {
  PADDING: {
    lg: { x: 10, y: 5 },
    md: { x: 8, y: 4 },
    sm: { x: 6, y: 3 },
    xl: { x: 12, y: 6 },
    xs: { x: 4, y: 2 },
  },
  SIZE: {
    lg: 14,
    md: 12,
    sm: 10,
    xl: 16,
    xs: 8,
  },
  TEXT: {
    lg: 'text-8',
    md: 'text-7',
    sm: 'text-6',
    xl: 'text-9',
    xs: 'text-5',
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

  const scalesByPadding = Object.entries(SCALES.PADDING).reduce((acc, [k, { x, y }]) => {
    return {
      ...acc,
      [`.scale-p-${k}`]: {
        [`@apply py-${y} px-${x}`]: {},
      },
      [`.scale-px-${k}`]: {
        [`@apply py-${x}`]: {},
      },
      [`.scale-py-${k}`]: {
        [`@apply py-${y}`]: {},
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
