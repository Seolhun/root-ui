const colors = require('tailwindcss/colors');
const { createRootColors } = require('./utils');

const intentColors = {
  white: colors.white,
  black: colors.black,
  neutral: colors.neutral,
  light: colors.slate,
  dark: colors.zinc,
  primary: colors.blue,
  info: colors.cyan,
  success: colors.green,
  warning: colors.orange,
  danger: colors.red,
};

/**
 * @see createTailwindComponents.js
 */
const typographyComponents = {
  color: {
    title: createRootColors(intentColors.dark[900], intentColors.dark),
    description: createRootColors(intentColors.dark[700], intentColors.dark),
    content: createRootColors(intentColors.dark[800], intentColors.dark),
    link: createRootColors(intentColors.primary[600], intentColors.primary),
    blockquote: createRootColors(intentColors.dark[500], intentColors.dark),
  },
};

module.exports = {
  intentColors,
  typographyComponents,
};
