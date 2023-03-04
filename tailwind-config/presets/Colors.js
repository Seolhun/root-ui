const colors = require('tailwindcss/colors');
const merge = require('lodash/merge');
const { darken, alpha } = require('../utils');

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

function createColor(color) {
  return {
    '50': alpha(color, 0.1),
    '100': alpha(color, 0.15),
    '200': alpha(color, 0.3),
    '300': alpha(color, 0.4),
    '400': color,
    '500': darken(color, 0.1),
    '600': darken(color, 0.2),
    '700': darken(color, 0.3),
    '800': darken(color, 0.4),
    '900': darken(color, 0.5),
  };
}

const intentColorMap = {
  // Light
  primary: createColor(intents.light.primary),
  info: createColor(intents.light.info),
  success: createColor(intents.light.success),
  accent: createColor(intents.light.accent),
  warning: createColor(intents.light.warning),
  danger: createColor(intents.light.danger),
  neutral: createColor(intents.light.neutral),
  light: createColor(intents.light.light),
  dark: createColor(intents.light.dark),
  // Dark
  primary2: createColor(intents.dark.primary),
  info2: createColor(intents.dark.info),
  success2: createColor(intents.dark.success),
  accent2: createColor(intents.dark.accent),
  warning2: createColor(intents.dark.warning),
  danger2: createColor(intents.dark.danger),
  neutral2: createColor(intents.dark.neutral),
  light2: createColor(intents.dark.light),
  dark2: createColor(intents.dark.dark),
};

const intentColorKeys = Object.keys(intentColorMap);

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
