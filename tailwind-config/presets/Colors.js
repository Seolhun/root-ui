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

const intentColorKeys = Object.keys(intentColorMap);

/**
 * 400 -> primary
 * 50  -> primary-
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
function createIntentColorMap(intentColorMap, intentKey) {
  return Object.values(intentColorMap).reduce((acc, value, i) => {
    const key = intentKey + '-' + i;
    const values = {
      [key]: value,
    };
    if (i === 5) {
      Object.assign(values, {
        [intentKey]: value,
      });
    }
    return merge(acc, values);
  }, {});
}

/**
 * @see createIntentColorMap
 * It is for intent colors to create custom theme for UI library
 */
const intentColors = {
  ...Object.entries(intentColorMap).reduce((acc, [key, values]) => {
    return {
      ...acc,
      ...createIntentColorMap(values, key),
    };
  }, {}),
  white: colors.white,
  black: colors.black,
  /**
   * for Layout background
   */
  cream: '#fffffe',
  /**
   * for UI background
   */
  'cream-1': '#FCFCFC',
  /**
   * for Dark Layout background
   */
  space: '#18181b',
  /**
   * for Dark UI background
   */
  'space-1': '#19181B',
  transparent: 'transparent',
  inherit: 'inherit',
};

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
  intentColorMap,
  intentColorKeys,
  intentColors,
  themeColors,
};
