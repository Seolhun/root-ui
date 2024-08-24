import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import { RootScales } from './configs';
import {
  Animations,
  fontSizeExtend,
  heightExtend,
  insetExtend,
  minMaxHeightExtend,
  minMaxWidthExtend,
  palette,
  spacingExtend,
  widthExtend,
  zIndexExtend,
} from './presets';

// addUtilities(), for registering new static utility styles
// matchUtilities(), for registering new dynamic utility styles
// addComponents(), for registering new static component styles
// matchComponents(), for registering new dynamic component styles
// addBase(), for registering new base styles
// addVariant(), for registering custom static variants
// matchVariant(), for registering custom dynamic variants
// theme(), for looking up values in the user’s theme configuration
// config(), for looking up values in the user’s Tailwind configuration
// corePlugins(), for checking if a core plugin is enabled
// e(), for manually escaping strings meant to be used in class names
export default plugin(function () {}, {
  /**
   * @see https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
   */
  darkMode: 'class',

  /**
   * @name Extends
   * @see https://tailwindcss.com/docs/theme
   */
  theme: {
    extend: {
      ...Animations,
      // @see https://tailwindcss.com/docs/customizing-colors
      colors: {
        ...colors,
        ...palette,
        inherit: 'inherit',
        transparent: 'transparent',
      },
      fontSize: fontSizeExtend,
      height: heightExtend,
      inset: insetExtend,
      maxHeight: minMaxHeightExtend,
      maxWidth: minMaxWidthExtend,
      minHeight: minMaxHeightExtend,
      minWidth: minMaxWidthExtend,
      spacing: spacingExtend,
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      transitionProperty: {
        background: 'background',
        height: 'height',
        spacing: 'margin, padding',
        width: 'width',
      },
      width: widthExtend,
      zIndex: zIndexExtend,
    },
    fontFamily: {
      roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
    },
    scale: RootScales,
    screens: {
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xl: '1280px',
      xs: '375px',
    },
  },
});
