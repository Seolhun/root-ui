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
  transparent: 'transparent',
  inherit: 'inherit',
};

const typographyColors = {
  title: colors.zinc[900],
  description: colors.zinc[700],
  content: colors.zinc[800],
  link: intentColors.primary,
  blockquote: colors.zinc[700],
};

const themeColors = {
  /**
   * for Light UI
   */
  cream: 'rgb(246, 248, 250)', // Layout background
  'cream-1': 'rgb(255, 255, 255)', // UI background commonly
  'cream-2': 'rgb(216, 222, 228)', // UI border commonly
  'cream-3': 'rgb(208, 215, 222)', // UI border commonly
  /**
   * for Dark UI
   */
  space: 'rgb(1, 4, 9)', // Layout background
  'space-1': 'rgb(22, 27, 34)', // UI background commonly
  'space-2': 'rgb(33, 38, 45)', // UI border commonly
  'space-3': 'rgb(48, 54, 61)', // UI border commonly
};

const palette = {
  ...intentColors,
  ...typographyColors,
  ...themeColors,
};

module.exports = {
  intentColorMap,
  intentColorKeys,
  intentColors,
  typographyColors,
  themeColors,
  palette,
};
