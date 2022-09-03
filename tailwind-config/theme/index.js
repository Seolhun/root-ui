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
  neutral: colors.neutral[500],
  'neutral-lighter': colors.neutral[400],
  'neutral-lightest': colors.neutral[100],
  'neutral-darker': colors.neutral[600],
  'neutral-darkest': colors.neutral[900],
  light: colors.slate[500],
  'light-lighter': colors.slate[400],
  'light-lightest': colors.slate[100],
  'light-darker': colors.slate[600],
  'light-darkest': colors.slate[900],
  dark: colors.zinc[500],
  'dark-lighter': colors.zinc[400],
  'dark-lightest': colors.zinc[100],
  'dark-darker': colors.zinc[600],
  'dark-darkest': colors.zinc[900],
  primary: colors.blue[500],
  'primary-lighter': colors.blue[400],
  'primary-lightest': colors.blue[100],
  'primary-darker': colors.blue[600],
  'primary-darkest': colors.blue[900],
  info: colors.cyan[500],
  'info-lighter': colors.cyan[400],
  'info-lightest': colors.cyan[100],
  'info-darker': colors.cyan[600],
  'info-darkest': colors.cyan[900],
  success: colors.green[500],
  'success-lighter': colors.green[400],
  'success-lightest': colors.green[100],
  'success-darker': colors.green[600],
  'success-darkest': colors.green[900],
  warning: colors.orange[500],
  'warning-lighter': colors.orange[400],
  'warning-lightest': colors.orange[100],
  'warning-darker': colors.orange[600],
  'warning-darkest': colors.orange[900],
  danger: colors.red[500],
  'danger-lighter': colors.red[400],
  'danger-lightest': colors.red[100],
  'danger-darker': colors.red[600],
  'danger-darkest': colors.red[900],
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
  AppendixMap,
  PrefixMap,
  intentColors,
  themeColors,
};
