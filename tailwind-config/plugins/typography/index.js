const plugin = require('tailwindcss/plugin');

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
module.exports = plugin(function ({ addBase, theme, e }) {
  addBase({
    h1: {
      fontSize: theme('fontSize.3xl'),
    },
    h2: {
      fontSize: theme('fontSize.2xl'),
    },
    h3: {
      fontSize: theme('fontSize.1xl'),
    },
    h4: {
      fontSize: theme('fontSize.lg'),
    },
    h5: {
      fontSize: theme('fontSize.base'),
    },
    h6: {
      fontSize: theme('fontSize.sm'),
    },
    p: {
      fontSize: theme('fontSize.base'),
    },
  });
});
