import { keys, pipe, toArray } from '@fxts/core';
import plugin from 'tailwindcss/plugin';

import { RootScaleValues } from '../../configs';
import { RootScaleMap } from '../../types';

export default plugin(function ({ addComponents, theme }) {
  const scales: RootScaleMap = theme('scale');

  const scaleKeys = pipe(scales, keys, toArray);
  const paddingScale = scaleKeys.reduce((acc, value) => {
    const { x, y } = RootScaleValues.PADDING[value];
    const scaleText = RootScaleValues.TEXT[value];
    const className = `&.btn-scale-${value}`;
    acc[className] = {
      fontSize: theme(`fontSize.${scaleText}`),
      padding: `${theme(`padding.${y}`)} ${theme(`padding.${x}`)}`,
    };
    return acc;
  }, {});

  addComponents({
    '.btn': {
      ...paddingScale,
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:focus': {
        outline: 'none',
      },
      borderRadius: theme('borderRadius.full'),
      fontWeight: theme('fontWeight.medium'),
      whiteSpace: 'nowrap',
    },
  });
});
