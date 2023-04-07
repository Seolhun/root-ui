const reduce = require('lodash/reduce');

const { REM_STEP_SIZE } = require('./Variables');

const { presetRanges } = require('../utils');

const Padding = reduce(
  presetRanges,
  (acc, v) => {
    return {
      ...acc,
      [v]: `${v * REM_STEP_SIZE}rem`,
      [`-${v}`]: `-${v * REM_STEP_SIZE}rem`,
    };
  },
  {},
);

module.exports = {
  Padding,
};
