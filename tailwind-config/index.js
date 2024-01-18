module.exports = [
  require('@tailwindcss/aspect-ratio'),
  /**
   * theme is positioned first to allow other plugins to override
   */
  require('./RootUI.tailwind.config'),
  require('./plugins/line-clamp'),
  require('./plugins/scales'),
  require('./plugins/base'),
  require('./plugins/variants'),
  require('./plugins/components'),
];
