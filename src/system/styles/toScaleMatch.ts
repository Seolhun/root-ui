import { curry } from '@fxts/core';
import { RootScale } from './RootScale';

export const match = <Key extends string, R>(lookup: Record<Key, () => R>, key: Key) => {
  const callback = lookup[key];
  return callback();
};

export const toScaleMatch = curry((lookup: Record<RootScale, () => string>, key: RootScale) => {
  return match(lookup, key);
});
