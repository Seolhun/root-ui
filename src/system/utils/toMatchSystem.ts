import { curry } from '@fxts/core';

import { RootIntentInherit, RootScale, RootIntent, RootScaleNone } from '../theme';

const toMatch = <Key extends string, R>(lookup: Partial<Record<Key, () => R>>, key: Key) => {
  const callback = lookup[key];
  if (callback) {
    return callback();
  }
  return null;
};

export const toIntentMatch = curry(
  (lookup: Partial<Record<RootIntent | RootIntentInherit, () => string>>, key: RootIntent | RootIntentInherit) => {
    const result = toMatch(lookup, key);
    if (result) {
      return result;
    }
    return '';
  },
);

export const toScaleMatch = curry(
  (lookup: Partial<Record<RootScale | RootScaleNone, () => string>>, key: RootScale | RootScaleNone) => {
    const result = toMatch(lookup, key);
    if (result) {
      return result;
    }
    return '';
  },
);
