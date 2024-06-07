const reduce = require('lodash/reduce');
const range = require('lodash/range');
const { presetRanges } = require('../../utils');
const { REM_STEP_SIZE } = require('../Variables');

const spacingExtend = ((start, end) => {
  return range(start, end).reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: `${cur * REM_STEP_SIZE}rem`,
    }),
    {},
  );
})(0, 100);

const insetExtend = ((start, end) => {
  return range(start, end).reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: `${cur * REM_STEP_SIZE}rem`,
    }),
    {},
  );
})(0, 100);

const zIndexExtend = ((start, end) => {
  return range(start, end).reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: cur,
    }),
    {},
  );
})(0, 100);

const marginExtend = reduce(
  presetRanges,
  (acc, v) => {
    return {
      ...acc,
      [`-${v}`]: `-${v * REM_STEP_SIZE}rem`,
      [v]: `${v * REM_STEP_SIZE}rem`,
    };
  },
  {},
);

const paddingExtend = reduce(
  presetRanges,
  (acc, v) => {
    return {
      ...acc,
      [`-${v}`]: `-${v * REM_STEP_SIZE}rem`,
      [v]: `${v * REM_STEP_SIZE}rem`,
    };
  },
  {},
);

const heightExtend = reduce(
  presetRanges,
  (acc, v) => {
    return {
      ...acc,
      [v]: `${v * REM_STEP_SIZE}rem`,
    };
  },
  {
    '1/2': '50%',
    '1/3': '33.333333%',
    '1/4': '25%',
    '1/5': '20%',
    '1/6': '16.666667%',
    '1/12': '8.333333%',
    '2/3': '66.666667%',
    '2/4': '50%',
    '2/5': '40%',
    '2/6': '33.333333%',
    '2/12': '16.666667%',
    '3/4': '75%',
    '3/5': '60%',
    '3/6': '50%',
    '3/12': '25%',
    '4/5': '80%',
    '4/6': '66.666667%',
    '4/12': '33.333333%',
    '5/6': '83.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    auto: 'auto',
    fit: 'fit-content',
    full: '100%',
    max: 'max-content',
    min: 'min-content',
    screen: '100vh',
  },
);

const minMaxHeightExtend = reduce(
  presetRanges,
  (acc, v) => {
    return {
      ...acc,
      [v]: `${v * REM_STEP_SIZE}rem`,
    };
  },
  {
    '1/2': '50%',
    '1/3': '33.333333%',
    '1/4': '25%',
    '1/5': '20%',
    '1/6': '16.666667%',
    '1/12': '8.333333%',
    '2/3': '66.666667%',
    '2/4': '50%',
    '2/5': '40%',
    '2/6': '33.333333%',
    '2/12': '16.666667%',
    '3/4': '75%',
    '3/5': '60%',
    '3/6': '50%',
    '3/12': '25%',
    '4/5': '80%',
    '4/6': '66.666667%',
    '4/12': '33.333333%',
    '5/6': '83.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    auto: 'auto',
    fit: 'fit-content',
    full: '100%',
    max: 'max-content',
    min: 'min-content',
    screen: '100vh',
  },
);

const widthExtend = reduce(
  presetRanges,
  (acc, v) => {
    return {
      ...acc,
      [v]: `${v * REM_STEP_SIZE}rem`,
    };
  },
  {
    '1/2': '50%',
    '1/3': '33.333333%',
    '1/4': '25%',
    '1/5': '20%',
    '1/6': '16.666667%',
    '1/12': '8.333333%',
    '2/3': '66.666667%',
    '2/4': '50%',
    '2/5': '40%',
    '2/6': '33.333333%',
    '2/12': '16.666667%',
    '3/4': '75%',
    '3/5': '60%',
    '3/6': '50%',
    '3/12': '25%',
    '4/5': '80%',
    '4/6': '66.666667%',
    '4/12': '33.333333%',
    '5/6': '83.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    auto: 'auto',
    fit: 'fit-content',
    full: '100%',
    max: 'max-content',
    min: 'min-content',
    screen: '100vw',
  },
);

const minMaxWidthExtend = reduce(
  presetRanges,
  (acc, v) => {
    return {
      ...acc,
      [v]: `${v * REM_STEP_SIZE}rem`,
    };
  },
  {
    '1/2': '50%',
    '1/3': '33.333333%',
    '1/4': '25%',
    '1/5': '20%',
    '1/6': '16.666667%',
    '1/12': '8.333333%',
    '2/3': '66.666667%',
    '2/4': '50%',
    '2/5': '40%',
    '2/6': '33.333333%',
    '2/12': '16.666667%',
    '3/4': '75%',
    '3/5': '60%',
    '3/6': '50%',
    '3/12': '25%',
    '4/5': '80%',
    '4/6': '66.666667%',
    '4/12': '33.333333%',
    '5/6': '83.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '8xl': '96rem',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    fit: 'fit-content',
    full: '100%',
    max: 'max-content',
    min: 'min-content',
    screen: '100vw',
  },
);

const fontSizeExtend = reduce(
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
  fontSizeExtend,
  heightExtend,
  insetExtend,
  marginExtend,
  minMaxHeightExtend,
  minMaxWidthExtend,
  paddingExtend,
  spacingExtend,
  widthExtend,
  zIndexExtend,
};
