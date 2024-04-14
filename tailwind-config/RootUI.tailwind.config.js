const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const { Animations } = require('./presets/Animations');
const { palette } = require('./presets/Colors');
const {
  spacingExtend,
  insetExtend,
  zIndexExtend,
  marginExtend,
  paddingExtend,
  heightExtend,
  minMaxHeightExtend,
  widthExtend,
  minMaxWidthExtend,
  fontSizeExtend,
} = require('./presets/extends');

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
    boxShadow: {
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      md: '0 2px 3px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    extend: {
      ...Animations,
      // @see https://tailwindcss.com/docs/customizing-colors
      colors: {
        ...colors,
        ...palette,
        inherit: 'inherit',
        transparent: 'transparent',
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
      },
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
      scale: {
        lg: 'lg',
        md: 'md',
        sm: 'sm',
        xl: 'xl',
        xs: 'xs',
      },
      fontSize: fontSizeExtend,
      margin: marginExtend,
      padding: paddingExtend,
      width: widthExtend,
      maxWidth: minMaxWidthExtend,
      minWidth: minMaxWidthExtend,
      height: heightExtend,
      minHeight: minMaxHeightExtend,
      maxHeight: minMaxHeightExtend,
      inset: insetExtend,
      spacing: spacingExtend,
      zIndex: zIndexExtend,
    },
    fontFamily: {
      roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 480px) { ... }
      md: '768px',
      sm: '480px',
      // => @media (min-width: 976px) { ... }
      xl: '1280px',
      // => @media (min-width: 1440px) { ... }
    },
    // @see https://tailwindcss.com/docs/customizing-colors
    variants: {
      extend: {
        backgroundColor: ['checked', 'disabled', 'hover', 'focus', 'active'],
        border: ['checked', 'disabled', 'hover', 'focus', 'active'],
        borderColor: ['checked', 'disabled', 'hover', 'focus', 'active'],
        cursor: ['disabled'],
        opacity: ['disabled'],
        /**
         * @see https://tailwindcss.com/docs/transition-property
         */
        transitionProperty: ['hover', 'focus'],
        translate: ['hover', 'focus', 'checked'],
        width: ['focus'],
      },
    },
  },
});
