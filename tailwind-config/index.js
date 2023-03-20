module.exports = [
  require('@tailwindcss/line-clamp'),
  require('@tailwindcss/aspect-ratio'),
  /**
   * theme is positioned first to allow other plugins to override
   */
  require('./theme'),
  require('./plugins/base'),
  require('./plugins/variants'),
  require('./plugins/components'),
  require('./plugins/utilities'),
];
