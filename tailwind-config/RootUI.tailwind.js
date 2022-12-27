module.exports = {
  /**
   * @name Purge
   * @see https://tailwindcss.com/docs/content-configuration
   */
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/hooks/**/*.{ts,tsx,js,jsx}',
    './src/system/**/*.{ts,tsx,js,jsx}',
    './src/stories/**/*.{ts,tsx,js,jsx}',
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
  ],
  // https://tailwindcss.com/docs/plugins#adding-base-styles
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('./plugins/typography'),
    require('./plugins/theme'),
  ],
};
