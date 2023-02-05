const colors = require('tailwindcss/colors');
const merge = require('lodash/merge');

const intentColorMap = {
  default: colors.gray,
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
 * 400 -> primary
 * 50  -> primary-0
 * 100 -> primary-1
 * 200 -> primary-2
 * 300 -> primary-3
 * 400 -> primary-4
 * 500 -> primary-5
 * 600 -> primary-6
 * 700 -> primary-7
 * 800 -> primary-8
 * 900 -> primary-9
 */
function createIntentColorMap(colorMap, colorKey) {
  return Object.values(colorMap).reduce((acc, value, i) => {
    const key = colorKey + '-' + i;
    const values = {
      [key]: value,
    };
    if (i === 5) {
      Object.assign(values, {
        [colorKey]: value,
      });
    }
    return merge(acc, values);
  }, {});
}

const intentColors = merge({
  ...Object.entries(intentColorMap).reduce((acc, [key, values]) => {
    return {
      ...acc,
      ...createIntentColorMap(values, key),
    };
  }, {}),
  white: colors.white,
  black: colors.black,
});

const themeColors = {
  typography: {
    title: colors.zinc[900],
    description: colors.zinc[700],
    content: colors.zinc[800],
    link: intentColors.primary,
    blockquote: colors.zinc[700],
  },
};

module.exports = {
  intentColors,
  themeColors,
};
