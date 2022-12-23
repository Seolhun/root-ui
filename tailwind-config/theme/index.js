const colors = require('tailwindcss/colors');
const merge = require('lodash/merge');

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

function createColors(colorMap, colorKey) {
  return Object.values(colorMap).reduce((acc, value, i) => {
    const key = colorKey + '-' + i;
    const values = {
      [key]: value,
    };
    if (i === 5) {
      Object.assign(values, {
        [colorKey]: value,
      });
    }
    return merge(acc, values);
  }, {});
}

const intentColors = merge(
  {
    white: colors.white,
    black: colors.black,
  },
  createColors(colors.gray, 'default'),
  createColors(colors.neutral, 'neutral'),
  createColors(colors.slate, 'light'),
  createColors(colors.zinc, 'dark'),
  createColors(colors.blue, 'primary'),
  createColors(colors.cyan, 'info'),
  createColors(colors.green, 'success'),
  createColors(colors.orange, 'warning'),
  createColors(colors.red, 'danger'),
);

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
