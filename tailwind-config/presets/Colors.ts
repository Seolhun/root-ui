import { merge } from 'lodash-es';
import colors from 'tailwindcss/colors';

/**
 * @see https://uicolors.app/create
 */
export const themeColors = {
  accent: {
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
  cream: '#fafafa', // Layout background
  'cream-1': '#fff', // UI background commonly
  'cream-2': '#f5f5f5', // UI border commonly
  'cream-3': '#efefef', // UI border commonly
  'cream-4': '#dcdcdc', // UI border commonly
  'cream-5': '#c0c0c0', // New shade, slightly darker than cream-4
  'cream-6': '#a9a9a9', // New shade, slightly darker than cream-5
  'cream-7': '#8b8b8b', // New shade, slightly darker than cream-6

  danger: {
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
  info: {
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
  neutral: {
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
  primary: {
    '50': '#e5f0ff',
    '100': '#cfe3ff',
    '200': '#a9c9ff',
    '300': '#75a2ff',
    '400': '#3f69ff',
    '500': '#1433ff',
    '600': '#0019ff',
    '700': '#001aff',
    '800': '#0017e3',
    '900': '#000cb8',
    '950': '#000366',
  },

  // Space Theme (Dark)
  space: '#010409', // Layout background
  'space-1': '#000', // UI background commonly
  'space-2': '#1c1e21', // UI border commonly
  'space-3': '#1c1e21', // UI border commonly
  'space-4': '#27292b', // UI border commonly
  'space-5': '#3a3c3f', // New shade, slightly lighter than space-4
  'space-6': '#4d4f52', // New shade, slightly lighter than space-5
  'space-7': '#606265', // New shade, slightly lighter than space-6

  success: {
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
  warning: {
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
};

/**
 * To generate intent colors by keys
 * intent is for light mode, intent2 is for dark mode.
 */
export const intentColorKeys = ['primary', 'info', 'success', 'accent', 'warning', 'danger', 'neutral'];
export const intentColorKeyObject = intentColorKeys.reduce((acc, key) => {
  return {
    ...acc,
    [key]: key,
  };
}, {});
export const intentColorMap = {
  accent: themeColors.accent,
  danger: themeColors.danger,
  info: themeColors.info,
  neutral: themeColors.neutral,
  primary: themeColors.primary,
  success: themeColors.success,
  warning: themeColors.warning,
} as const;

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
function changeNumberToIndex(intentColorMap, intentKey) {
  const colors = Object.values(intentColorMap).reduce((acc, value, i) => {
    const key = intentKey + '-' + i;
    const values = {
      [key]: value,
    };
    if (i === 4) {
      Object.assign(values, {
        [intentKey]: value,
      });
    }
    return merge(acc, values);
  }, {});
  return colors as Record<string, string>;
}

/**
 * @see changeColorToIndex
 * It is for intent colors to create custom theme for UI library
 */
export const intentColors = {
  ...Object.entries(intentColorMap).reduce((acc, [key, values]) => {
    return {
      ...acc,
      ...changeNumberToIndex(values, key),
    };
  }, {}),
  black: colors.black,
  white: colors.white,
};

export const palette = {
  ...themeColors,
  ...intentColors,
};
