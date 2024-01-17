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
    accent: '#f76fb1',
    danger: '#ff5959',
    info: '#2ccfe4',
    neutral: '#98A2B3',
    primary: '#0077CC',
    success: '#6ee437',
    warning: '#fe8f39',
  },
};

/**
 * To generate intent colors by keys
 * intent is for light mode, intent2 is for dark mode.
 */
const intentColorKeys = ['primary', 'info', 'success', 'accent', 'warning', 'danger', 'neutral'];
const intentColorMap = {
  accent: createIntentColor(intents.light.accent),
  accent2: createIntentColor(intents.dark.accent),
  danger: createIntentColor(intents.light.danger),
  danger2: createIntentColor(intents.dark.danger),
  info: createIntentColor(intents.light.info),
  info2: createIntentColor(intents.dark.info),
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

/**
 * @see https://uicolors.app/create
 */
const themeColors = {
  'brilliant-rose': {
    '50': '#fdf2f8',
    '100': '#fce7f2',
    '200': '#fccee6',
    '300': '#fba6d1',
    '400': '#f76fb1',
    '500': '#f04e98',
    '600': '#df2370',
    '700': '#c11556',
    '800': '#a01447',
    '900': '#85163f',
    '950': '#510621',
  },
  /**
   * for Light UI
   */
  cream: 'rgb(250, 250, 250)', // Layout background
  'cream-1': 'rgb(255, 255, 255)', // UI background commonly
  'cream-2': 'rgb(245, 245, 245)', // UI border commonly
  'cream-3': 'rgb(230, 230, 230)', // UI border commonly

  jaffa: {
    '50': '#fff7ed',
    '100': '#ffecd4',
    '200': '#ffd6a9',
    '300': '#ffb872',
    '400': '#fe8f39',
    '500': '#fd6f12',
    '600': '#ed5409',
    '700': '#c53d09',
    '800': '#9c3110',
    '900': '#7e2a10',
    '950': '#441206',
  },
  malachite: {
    '50': '#f0fee7',
    '100': '#defbcc',
    '200': '#bdf89e',
    '300': '#94f066',
    '400': '#6ee437',
    '500': '#50d219',
    '600': '#38a10f',
    '700': '#2c7b10',
    '800': '#276113',
    '900': '#235215',
    '950': '#0d2e05',
  },
  portage: {
    '50': '#eef0ff',
    '100': '#e0e4ff',
    '200': '#c6cdff',
    '300': '#a4abfd',
    '400': '#8f8ffa',
    '500': '#6b61f3',
    '600': '#5c44e7',
    '700': '#5036cc',
    '800': '#412fa4',
    '900': '#382d82',
    '950': '#231a4c',
  },
  scooter: {
    '50': '#edfdfe',
    '100': '#d1f9fc',
    '200': '#a9f1f8',
    '300': '#6ee5f2',
    '400': '#2ccfe4',
    '500': '#12c7e2',
    '600': '#108eaa',
    '700': '#14728a',
    '800': '#1a5d70',
    '900': '#1a4d5f',
    '950': '#0b3341',
  },
  seashell: {
    '50': '#f8f8f8',
    '100': '#f0f0f0',
    '200': '#dcdcdc',
    '300': '#bdbdbd',
    '400': '#989898',
    '500': '#7c7c7c',
    '600': '#656565',
    '700': '#525252',
    '800': '#464646',
    '900': '#3d3d3d',
    '950': '#292929',
  },

  /**
   * for Dark UI
   */
  space: 'rgb(1, 4, 9)', // Layout background
  'space-1': 'rgb(33, 38, 45)', // UI background commonly
  'space-2': 'rgb(41, 46, 50)', // UI border commonly
  'space-3': 'rgb(49, 54, 65)', // UI border commonly

  thunderbird: {
    '50': '#fff0f0',
    '100': '#ffdddd',
    '200': '#ffc1c1',
    '300': '#ff9595',
    '400': '#ff5959',
    '500': '#ff2626',
    '600': '#fc0606',
    '700': '#e00000',
    '800': '#af0505',
    '900': '#900c0c',
    '950': '#500000',
  },
};

const palette = {
  ...intentColors,
  ...themeColors,
};

module.exports = {
  intentColorKeys,
  intentColorMap,
  intentColors,
  intents,
  palette,
  themeColors,
};
