import { curry } from '@fxts/core';

import { RootIntent, RootScale } from '../theme';

const toMatch = <Key extends string, R>(lookup: Partial<Record<Key, () => R>>, key: Key) => {
  const callback = lookup[key];
  if (callback) {
    return callback();
  }
  return null;
};

export const toIntentMatch = curry((lookup: Partial<Record<RootIntent, () => string>>, key: RootIntent) => {
  const result = toMatch(lookup, key);
  if (result) {
    return result;
  }
  return '';
});

export const toScaleMatch = curry((lookup: Partial<Record<RootScale, () => string>>, key: RootScale) => {
  const result = toMatch(lookup, key);
  if (result) {
    return result;
  }
  return '';
});
