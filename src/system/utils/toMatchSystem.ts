import { curry } from '@fxts/core';

import { RootInherit, RootScale, RootIntent } from '../RootTheme.types';

const toMatch = <Key extends string, R>(
  lookup: Partial<Record<Key | RootInherit, () => R>>,
  key: Key | RootInherit,
) => {
  const callback = lookup[key];
  if (callback) {
    return callback();
  }
  return null;
};

export const toIntentMatch = curry(
  (lookup: Partial<Record<RootIntent | RootInherit, () => string>>, key: RootIntent | RootInherit) => {
    const result = toMatch(lookup, key);
    if (result) {
      return result;
    }
    return '';
  },
);

export const toScaleMatch = curry(
  (lookup: Partial<Record<RootScale | RootInherit, () => string>>, key: RootScale | RootInherit) => {
    const result = toMatch(lookup, key);
    if (result) {
      return result;
    }
    return '';
  },
);
