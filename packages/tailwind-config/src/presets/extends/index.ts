import { pipe, range, reduce } from '@fxts/core';

import { presetRanges } from '../../utils';
import { REM_STEP_SIZE } from '../Variables';

export const spacingExtend = ((start, end) => {
  const seed: Record<string, string> = {};
  const result = pipe(range(start, end), (ranges) => {
    return reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: `${cur * REM_STEP_SIZE}rem`,
      }),
      seed,
      ranges,
    );
  });
  return result;
})(0, 200);

export const insetExtend = ((start, end) => {
  const seed: Record<string, string> = {};
  const result = pipe(range(start, end), (ranges) => {
    return reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: `${cur * REM_STEP_SIZE}rem`,
      }),
      seed,
      ranges,
    );
  });
  return result;
})(0, 200);

export const zIndexExtend = ((start, end) => {
  const seed: Record<string, string> = {};
  const result = pipe(range(start, end), (ranges) => {
    return reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: cur,
      }),
      seed,
      ranges,
    );
  });
  return result;
})(0, 200);

export const heightExtend = (() => {
  const seed: Record<string, string> = {
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
  };
  const result = reduce(
    (acc, v) => {
      return {
        ...acc,
        [v]: `${v * REM_STEP_SIZE}rem`,
      };
    },
    seed,
    presetRanges,
  );
  return result;
})();

export const minMaxHeightExtend = (() => {
  const seed: Record<string, string> = {
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
  };
  const result = reduce(
    (acc, v) => {
      return {
        ...acc,
        [v]: `${v * REM_STEP_SIZE}rem`,
      };
    },
    seed,
    presetRanges,
  );
  return result;
})();

export const widthExtend = (() => {
  const seed: Record<string, string> = {
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
  };
  const result = reduce(
    (acc, v) => {
      return {
        ...acc,
        [v]: `${v * REM_STEP_SIZE}rem`,
      };
    },
    seed,
    presetRanges,
  );
  return result;
})();

export const minMaxWidthExtend = (() => {
  const seed: Record<string, string> = {
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
  };
  const result = reduce(
    (acc, v) => {
      return {
        ...acc,
        [v]: `${v * REM_STEP_SIZE}rem`,
      };
    },
    seed,
    presetRanges,
  );
  return result;
})();

export const fontSizeExtend = (() => {
  const seed: Record<string, string> = {
    lg: '1.125rem',
    md: '1rem',
    sm: '0.8rem',
    xl: '1.25rem',
    xs: '0.75rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
    base: '1rem',
  };
  const result = reduce(
    (acc, v) => {
      return {
        ...acc,
        [v]: `${v * REM_STEP_SIZE}rem`,
      };
    },
    seed,
    presetRanges,
  );
  return result;
})();
