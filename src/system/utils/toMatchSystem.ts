import { curry } from '@fxts/core';

import { RootScale, RootIntent } from '../RootTheme.types';

const toMatch = <Key extends string, R>(lookup: Record<Key, () => R>, key: Key) => {
  const callback = lookup[key];
  return callback();
};

export const toIntentMatch = curry((lookup: Record<RootIntent, () => string>, key: RootIntent) => {
  return toMatch(lookup, key);
});

export const toScaleMatch = curry((lookup: Record<RootScale, () => string>, key: RootScale) => {
  return toMatch(lookup, key);
});
