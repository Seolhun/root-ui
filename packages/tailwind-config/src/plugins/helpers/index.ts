import { PluginAPI } from 'tailwindcss/types/config';

import { Scale } from '../../presets';
import { SCALES } from '../utilities/scales';

export function createPaddingScale({ theme }: PluginAPI) {
  return function (key: string) {
    const scales: Scale = theme('scale');

    return Object.keys(scales).reduce((acc, value) => {
      const { x, y } = SCALES.PADDING[value];
      const scaleText = SCALES.TEXT[value];
      const className = `&.${key}-scale-${value}`;
      acc[className] = {
        fontSize: theme(`fontSize.${scaleText}`),
        padding: `${theme(`padding.${y}`)} ${theme(`padding.${x}`)}`,
      };
      return acc;
    }, {});
  };
}
