const SCALES = {
  SIZE: {
    xs: 8,
    sm: 10,
    md: 12,
    lg: 14,
    xl: 16,
  },
  PADDING: {
    xs: 'py-2 px-4',
    sm: 'py-3 px-6',
    md: 'py-4 px-8',
    lg: 'py-5 px-10',
    xl: 'py-6 px-12',
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

  const scalesByPadding = Object.entries(SCALES.PADDING).reduce((acc, [k, v]) => {
    return {
      ...acc,
      [`.scale-p-${k}`]: {
        [`@apply ${v}`]: {},
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
