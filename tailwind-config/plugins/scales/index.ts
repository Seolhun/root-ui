import plugin from 'tailwindcss/plugin';

const SCALES = {
  PADDING: {
    lg: { x: 10, y: 5 },
    md: { x: 8, y: 4 },
    sm: { x: 6, y: 3 },
    xl: { x: 12, y: 6 },
    xs: { x: 4, y: 2 },
  },
  SIZE: {
    lg: 28,
    md: 24,
    sm: 20,
    xl: 32,
    xs: 16,
  },
  TEXT: {
    lg: 'text-8',
    md: 'text-7',
    sm: 'text-6',
    xl: 'text-9',
    xs: 'text-5',
  },
};

export default plugin(
  function ({ matchUtilities, theme }) {
    const values = theme('scale');

    matchUtilities(
      {
        scale: (value) => {
          const v = SCALES.SIZE[value];
          console.debug('values', {
            key: value,
            value: v,
          });
          return {
            [`@apply w-${v} h-${v} min-w-${v} min-h-${v}`]: {},
          };
        },
      },
      { values },
    );
    matchUtilities(
      {
        'scale-text': (value) => {
          const v = SCALES.TEXT[value];
          return {
            [`@apply ${v}`]: {},
          };
        },
      },
      { values },
    );
    matchUtilities(
      {
        'scale-p': (value) => {
          const { x, y } = SCALES.PADDING[value];
          return {
            [`@apply py-${y} px-${x}`]: {},
          };
        },
      },
      { values },
    );
    matchUtilities(
      {
        'scale-px': (value) => {
          const { x, y } = SCALES.PADDING[value];
          return {
            [`@apply px-${x}`]: {},
          };
        },
      },
      { values },
    );
    matchUtilities(
      {
        'scale-py': (value) => {
          const { x, y } = SCALES.PADDING[value];
          return {
            [`@apply py-${y}`]: {},
          };
        },
      },
      { values },
    );
  },
  {
    variants: {
      scale: ['responsive'],
    },
  },
);
