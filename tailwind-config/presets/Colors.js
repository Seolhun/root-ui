const merge = require('lodash/merge');
const colors = require('tailwindcss/colors');

const { alpha, createIntentColor } = require('../utils');

const intents = {
  dark: {
    accent: '#F68FBE',
    danger: '#F86B63',
    dark: '#343741',
    info: '#06b6d4',
    light: '#69707D',
    neutral: '#98A2B3',
    primary: '#36A2EF',
    success: '#7DDED8',
    warning: '#F3D371',
  },
  light: {
    accent: '#F04E98',
    danger: '#BD271E',
    dark: '#69707D',
    info: '#22d3ee',
    light: '#D3DAE6',
    neutral: '#98A2B3',
    primary: '#0077CC',
    success: '#00BFB3',
    warning: '#FEC514',
  },
};

/**
 * To generate intent colors by keys
 * intent is for light mode, intent2 is for dark mode.
 */
const intentColorKeys = ['primary', 'info', 'success', 'accent', 'warning', 'danger', 'neutral', 'light', 'dark'];
const intentColorMap = {
  accent: createIntentColor(intents.light.accent),
  accent2: createIntentColor(intents.dark.accent),
  danger: createIntentColor(intents.light.danger),
  danger2: createIntentColor(intents.dark.danger),
  dark: createIntentColor(intents.light.dark),
  dark2: createIntentColor(intents.dark.dark),
  info: createIntentColor(intents.light.info),
  info2: createIntentColor(intents.dark.info),
  light: createIntentColor(intents.light.light),
  light2: createIntentColor(intents.dark.light),
  neutral: createIntentColor(intents.light.neutral),
  neutral2: createIntentColor(intents.dark.neutral),
  // Light
  primary: createIntentColor(intents.light.primary),
  // Dark
  primary2: createIntentColor(intents.dark.primary),
  success: createIntentColor(intents.light.success),
  success2: createIntentColor(intents.dark.success),
  warning: createIntentColor(intents.light.warning),
  warning2: createIntentColor(intents.dark.warning),
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
  black: colors.black,
  inherit: 'inherit',
  transparent: 'transparent',
  white: colors.white,
};

const typographyColors = {
  'typography-accent': '#C4407C',
  'typography-danger': '#BD271E',
  'typography-description': '#69707D',
  'typography-disabled': '#ABB4C4',
  'typography-focus-background': alpha('#0077CC', 0.9),
  'typography-highlight': alpha('#FEC514', 0.9),
  'typography-link': '#0071C2',
  // State
  'typography-page-background': '#FAFBFD',
  'typography-primary': '#0071C2',
  'typography-success': '#007E77',
  'typography-text': '#343741',
  'typography-title': '#1A1C21',
  'typography-warning': '#8A6A0A',
};

const themeColors = {
  /**
   * for Light UI
   */
  cream: 'rgb(250, 250, 250)', // Layout background
  'cream-1': 'rgb(255, 255, 255)', // UI background commonly
  'cream-2': 'rgb(245, 245, 245)', // UI border commonly
  'cream-3': 'rgb(230, 230, 230)', // UI border commonly
  /**
   * for Dark UI
   */
  space: 'rgb(1, 4, 9)', // Layout background
  'space-1': 'rgb(33, 38, 45)', // UI background commonly
  'space-2': 'rgb(41, 46, 50)', // UI border commonly
  'space-3': 'rgb(49, 54, 65)', // UI border commonly
};

const palette = {
  ...intentColors,
  ...typographyColors,
  ...themeColors,
};

module.exports = {
  intentColorKeys,
  intentColorMap,
  intentColors,
  intents,
  palette,
  themeColors,
  typographyColors,
};
