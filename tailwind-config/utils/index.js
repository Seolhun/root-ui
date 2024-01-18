const Color = require('color');
const concat = require('lodash/concat');
const range = require('lodash/range');

const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const presetRanges = concat(range(0, 10, 0.5), range(10, 401));

module.exports = {
  alpha,
  darken,
  lighten,
  presetRanges,
};
