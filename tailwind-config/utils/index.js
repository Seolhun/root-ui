const Color = require('color');
const concat = require('lodash/concat');
const range = require('lodash/range');

const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

function createIntentColor(color) {
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

const presetRanges = concat(range(0, 10, 0.5), range(10, 401));

module.exports = {
  alpha,
  lighten,
  darken,
  createIntentColor,
  presetRanges,
};
