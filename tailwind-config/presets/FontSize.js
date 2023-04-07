const reduce = require('lodash/reduce');

const { REM_STEP_SIZE } = require('./Variables');

const { presetRanges } = require('../utils');

const FontSize = reduce(
  presetRanges,
  (acc, v) => {
    return {
      ...acc,
      [v]: `${v * REM_STEP_SIZE}rem`,
    };
  },
  {},
);

module.exports = {
  FontSize,
};
