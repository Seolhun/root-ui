const colors = require('tailwindcss/colors');

/**
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference
 */
const AppendixMap = {
  hover: '&:hover',
  focus: '&:focus',
  'focus-within': '&:focus-within',
  'focus-visible': '&:focus-visible',
  active: '&:active',
  visited: '&:visited',
  disabled: '&:disabled',
  checked: '&:checked',
  required: '&:required',
  placeholder: '&::placeholder',
};

const PrefixMap = {
  accent: 'accent',
  bg: 'bg',
  border: 'border',
  caret: 'caret',
  fill: 'fill',
  outline: 'outline',
  ring: 'ring',
  'ring-offset': 'ring-offset',
  text: 'text',
};

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

const themeColors = {
  typography: {
    title: intentColors.dark[900],
    description: intentColors.dark[700],
    content: intentColors.dark[800],
    link: intentColors.primary[600],
    blockquote: intentColors.dark[500],
  },
};

module.exports = {
  AppendixMap,
  PrefixMap,
  intentColors,
  themeColors,
};
