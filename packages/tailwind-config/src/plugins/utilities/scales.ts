import plugin from 'tailwindcss/plugin';

export const SCALES = {
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
          return {
            height: theme(`height.${v}`),
            minHeight: theme(`minHeight.${v}`),
            minWidth: theme(`minWidth.${v}`),
            width: theme(`width.${v}`),
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
            fontSize: theme(`fontSize.${v}`),
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
            paddingBottom: theme(`padding.${y}`),
            paddingLeft: theme(`padding.${x}`),
            paddingRight: theme(`padding.${x}`),
            paddingTop: theme(`padding.${y}`),
          };
        },
      },
      { values },
    );
    matchUtilities(
      {
        'scale-px': (value) => {
          const { x } = SCALES.PADDING[value];
          return {
            paddingLeft: theme(`padding.${x}`),
            paddingRight: theme(`padding.${x}`),
          };
        },
      },
      { values },
    );
    matchUtilities(
      {
        'scale-py': (value) => {
          const { y } = SCALES.PADDING[value];
          return {
            paddingBottom: theme(`padding.${y}`),
            paddingTop: theme(`padding.${y}`),
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
