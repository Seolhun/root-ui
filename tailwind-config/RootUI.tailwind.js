const defaultTheme = require('tailwindcss/defaultTheme');

const { intentColors, themeColors } = require('./theme');
const { FontSize } = require('./presets/FontSize');
const { NegativeMargins } = require('./presets/Margin');
const { MinHeight } = require('./presets/MinHeight');
const { MinWidth } = require('./presets/MinWidth');
const { Animations } = require('./presets/Animations');

module.exports = {
  /**
   * @name Purge
   * @see https://tailwindcss.com/docs/content-configuration
   */
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/hooks/**/*.{ts,tsx,js,jsx}',
    './src/system/**/*.{ts,tsx,js,jsx}',
  ],
  /**
   * string literal을 같이 사용한 경우 tailwind가 class를 인식하지 못해서 purge 되는 현상이 발생합니다.
   */
  safelist: [
    {
      pattern: /(text)-(title|description|content|link|blockquote)/,
      // variants: [
      //   'hover',
      //   'focus',
      //   'focus-within',
      //   'placeholder',
      //   'active',
      //   'visited',
      //   'disabled',
      //   'checked',
      //   'required',
      //   'placeholder',
      // ],
    },
    {
      pattern: /(accent)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
    },
    {
      pattern: /(bg)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'focus-within', 'visited', 'disabled', 'checked', 'required'],
    },
    {
      pattern: /(border)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
      variants: ['hover', 'disabled'],
    },
    {
      pattern: /(caret)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
    },
    {
      pattern: /(fill)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
      variants: ['hover'],
    },
    {
      pattern: /(outline)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
      variants: ['focus', 'focus-within'],
    },
    {
      pattern: /(ring)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'focus-within'],
    },
    {
      pattern: /(ring-offset)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'focus-within'],
    },
    {
      pattern: /(text)-(light|dark|neutral|primary|info|success|warning|danger)-(300|400|500|600|700|800|900)/,
      variants: [
        'hover',
        'focus',
        'focus-within',
        'placeholder',
        'active',
        'visited',
        'disabled',
        'checked',
        'required',
        'placeholder',
      ],
    },
  ],
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
    // @see https://tailwindcss.com/docs/customizing-colors
    colors: {
      ...intentColors,
      ...themeColors.typography,
    },
    minWidth: MinWidth,
    minHeight: MinHeight,
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
    extend: {
      ...Animations,
      margin: NegativeMargins,
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
    },
  },
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
  // https://tailwindcss.com/docs/plugins#adding-base-styles
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio'), require('./plugins/typography')],
};
