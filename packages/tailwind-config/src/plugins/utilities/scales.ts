import plugin from 'tailwindcss/plugin';

import { RootScaleValues } from '../../configs';

export default plugin(
  function ({ matchUtilities, theme }) {
    const values = theme('scale');

    matchUtilities(
      {
        scale: (value) => {
          const v = RootScaleValues.SIZE[value];
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
          const v = RootScaleValues.TEXT[value];
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
          const { x, y } = RootScaleValues.PADDING[value];
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
          const { x } = RootScaleValues.PADDING[value];
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
          const { y } = RootScaleValues.PADDING[value];
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
    theme: {
      scale: {
        lg: 'lg',
        md: 'md',
        sm: 'sm',
        xl: 'xl',
        xs: 'xs',
      },
    },
  },
);
