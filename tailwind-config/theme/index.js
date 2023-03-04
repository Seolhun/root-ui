const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const { palette } = require('../presets/Colors');
const { FontSize } = require('../presets/FontSize');
const { NegativeMargins } = require('../presets/Margin');
const { Height } = require('../presets/Height');
const { MinHeight } = require('../presets/MinHeight');
const { Width } = require('../presets/Width');
const { MinMaxWidth } = require('../presets/MinMaxWidth');
const { Animations } = require('../presets/Animations');

module.exports = plugin(function ({ addBase, theme }) {}, {
  /**
   * @see https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
   */
  darkMode: 'class',

  /**
   * @name Extends
   * @see https://tailwindcss.com/docs/theme
   */
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: FontSize,
    boxShadow: {
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 2px 3px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    screens: {
      sm: '480px',
      // => @media (min-width: 480px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 976px) { ... }
      xl: '1280px',
      // => @media (min-width: 1440px) { ... }
    },
    // @see https://tailwindcss.com/docs/customizing-colors
    variants: {
      extend: {
        backgroundColor: ['checked'],
        borderColor: ['checked'],
        cursor: ['disabled'],
        opacity: ['disabled'],
        outline: ['hover', 'active', 'focus'],
        width: ['focus'],
        /**
         * @see https://tailwindcss.com/docs/transition-property
         */
        transitionProperty: ['hover', 'focus'],
      },
    },
    extend: {
      ...Animations,
      minWidth: MinMaxWidth,
      maxWidth: MinMaxWidth,
      minHeight: MinHeight,
      width: Width,
      height: Height,
      margin: NegativeMargins,
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
      },
      transitionProperty: {
        background: 'background',
        width: 'width',
        height: 'height',
        spacing: 'margin, padding',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
      // @see https://tailwindcss.com/docs/customizing-colors
      colors: {
        ...colors,
        ...palette,
        transparent: 'transparent',
        inherit: 'inherit',
      },
    },
  },
});
