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
module.exports = ({ addBase, theme }) => {
  return addBase({
    h1: {
      fontSize: theme('fontSize.6xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.16'),
    },
    h2: {
      fontSize: theme('fontSize.5xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.15'),
    },
    h3: {
      fontSize: theme('fontSize.4xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.14'),
    },
    h4: {
      fontSize: theme('fontSize.3xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.13'),
    },
    h5: {
      fontSize: theme('fontSize.2xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.12'),
    },
    h6: {
      fontSize: theme('fontSize.xl'),
      fontWeight: theme('fontWeight.bold'),
      lineHeight: theme('leading.11'),
    },
  });
};
