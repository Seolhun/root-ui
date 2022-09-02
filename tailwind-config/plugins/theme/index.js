const plugin = require('tailwindcss/plugin');
const merge = require('lodash/merge');

const { createTailwindComponents } = require('../createTailwindComponents');
const { typographyComponents } = require('./presets');

/**
 * @see https://tailwindcss.com/docs/plugins
 * addUtilities(), for registering new static utility styles
 * matchUtilities(), for registering new dynamic utility styles
 * addComponents(), for registering new static component styles
 * matchComponents(), for registering new dynamic component styles
 * addBase(), for registering new base styles
 * addVariant(), for registering custom variants
 * matchVariant(), for registering custom dynamic variants
 * theme(), for looking up values in the user’s theme configuration
 * config(), for looking up values in the user’s Tailwind configuration
 * corePlugins(), for checking if a core plugin is enabled
 * e(), for manually escaping strings meant to be used in class names
 */
module.exports = plugin(function ({ addComponents, addVariant }) {
  const themeComponents = merge({}, createTailwindComponents('text', typographyComponents.color));
  addComponents(themeComponents);
});
