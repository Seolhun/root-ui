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
  // https://tailwindcss.com/docs/plugins#adding-base-styles
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    /**
     * theme is positioned first to allow other plugins to override
     */
    require('./tailwind-config/theme'),
    require('./tailwind-config/plugins/base'),
    require('./tailwind-config/plugins/components'),
    require('./tailwind-config/plugins/utilities'),
  ],
};
