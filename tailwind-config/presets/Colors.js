const colors = require('tailwindcss/colors');
const merge = require('lodash/merge');
const { createIntentColor } = require('../utils');

const intents = {
  light: {
    primary: '#0077CC',
    info: '#22d3ee',
    success: '#00BFB3',
    accent: '#F04E98',
    warning: '#FEC514',
    danger: '#BD271E',
    neutral: '#98A2B3',
    light: '#F5F7FA',
    dark: '#D3DAE6',
  },
  dark: {
    primary: '#36A2EF',
    info: '#06b6d4',
    success: '#7DDED8',
    accent: '#F68FBE',
    warning: '#F3D371',
    danger: '#F86B63',
    neutral: '#98A2B3',
    light: '#69707D',
    dark: '#343741',
  },
};

/**
 * To generate intent colors by keys
 * intent is for light mode, intent2 is for dark mode.
 */
const intentColorKeys = ['primary', 'info', 'success', 'accent', 'warning', 'danger', 'neutral', 'light', 'dark'];
const intentColorMap = {
  // Light
  primary: createIntentColor(intents.light.primary),
  info: createIntentColor(intents.light.info),
  success: createIntentColor(intents.light.success),
  accent: createIntentColor(intents.light.accent),
  warning: createIntentColor(intents.light.warning),
  danger: createIntentColor(intents.light.danger),
  neutral: createIntentColor(intents.light.neutral),
  light: createIntentColor(intents.light.light),
  dark: createIntentColor(intents.light.dark),
  // Dark
  primary2: createIntentColor(intents.dark.primary),
  info2: createIntentColor(intents.dark.info),
  success2: createIntentColor(intents.dark.success),
  accent2: createIntentColor(intents.dark.accent),
  warning2: createIntentColor(intents.dark.warning),
  danger2: createIntentColor(intents.dark.danger),
  neutral2: createIntentColor(intents.dark.neutral),
  light2: createIntentColor(intents.dark.light),
  dark2: createIntentColor(intents.dark.dark),
};

/**
 * 400 -> intent
 * 50  -> intent-0
 * 100 -> intent-1
 * 200 -> intent-2
 * 300 -> intent-3
 * 400 -> intent-4
 * 500 -> intent-5
 * 600 -> intent-6
 * 700 -> intent-7
 * 800 -> intent-8
 * 900 -> intent-9
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

/**
 * @deprecated It couldn't be supported dark theme
 */
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
