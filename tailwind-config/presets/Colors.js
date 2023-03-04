const colors = require('tailwindcss/colors');
const merge = require('lodash/merge');
const { lighten, darken } = require('../utils');

const primary = '#0077CC';
const info = '#22d3ee';
const success = '#00BFB3';
const accent = '#F04E98';
const warning = '#FEC514';
const danger = '#BD271E';

const intentColorMap = {
  primary: {
    '50': lighten(primary, 0.2),
    '100': lighten(primary, 0.15),
    '200': lighten(primary, 0.1),
    '300': lighten(primary, 0.05),
    '400': primary,
    '500': darken(primary, 0.05),
    '600': darken(primary, 0.1),
    '700': darken(primary, 0.15),
    '800': darken(primary, 0.2),
    '900': darken(primary, 0.25),
  },
  info: {
    '50': lighten(info, 0.2),
    '100': lighten(info, 0.15),
    '200': lighten(info, 0.1),
    '300': lighten(info, 0.05),
    '400': info,
    '500': darken(info, 0.05),
    '600': darken(info, 0.1),
    '700': darken(info, 0.15),
    '800': darken(info, 0.2),
    '900': darken(info, 0.25),
  },
  success: {
    '50': lighten(success, 0.2),
    '100': lighten(success, 0.15),
    '200': lighten(success, 0.1),
    '300': lighten(success, 0.05),
    '400': success,
    '500': darken(success, 0.05),
    '600': darken(success, 0.1),
    '700': darken(success, 0.15),
    '800': darken(success, 0.2),
    '900': darken(success, 0.25),
  },
  accent: {
    '50': lighten(accent, 0.2),
    '100': lighten(accent, 0.15),
    '200': lighten(accent, 0.1),
    '300': lighten(accent, 0.05),
    '400': accent,
    '500': darken(accent, 0.05),
    '600': darken(accent, 0.1),
    '700': darken(accent, 0.15),
    '800': darken(accent, 0.2),
    '900': darken(accent, 0.25),
  },
  warning: {
    '50': lighten(warning, 0.2),
    '100': lighten(warning, 0.15),
    '200': lighten(warning, 0.1),
    '300': lighten(warning, 0.05),
    '400': warning,
    '500': darken(warning, 0.05),
    '600': darken(warning, 0.1),
    '700': darken(warning, 0.15),
    '800': darken(warning, 0.2),
    '900': darken(warning, 0.25),
  },
  danger: {
    '50': lighten(danger, 0.2),
    '100': lighten(danger, 0.15),
    '200': lighten(danger, 0.1),
    '300': lighten(danger, 0.05),
    '400': danger,
    '500': darken(danger, 0.05),
    '600': darken(danger, 0.1),
    '700': darken(danger, 0.15),
    '800': darken(danger, 0.2),
    '900': darken(danger, 0.25),
  },
  default: colors.gray,
  neutral: colors.neutral,
  light: colors.slate,
  dark: colors.zinc,
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
