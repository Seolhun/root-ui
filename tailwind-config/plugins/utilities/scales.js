const SCALES = {
  SIZE: {
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
  TEXT: {
    xs: 'text-2.5',
    sm: 'text-2.5',
    md: 'text-3',
    lg: 'text-3',
    xl: 'text-4',
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
