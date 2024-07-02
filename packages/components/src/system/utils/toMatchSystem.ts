import { curry } from '@fxts/core';
import { RootIntentType, RootScaleType } from '@seolhun/root-ui-tailwind';

const toMatch = <Key extends string, R>(lookup: Partial<Record<Key, () => R>>, key: Key) => {
  const callback = lookup[key];
  if (callback) {
    return callback();
  }
  return null;
};

export const toIntentMatch = curry((lookup: Partial<Record<RootIntentType, () => string>>, key: RootIntentType) => {
  const result = toMatch(lookup, key);
  if (result) {
    return result;
  }
  return '';
});

export const toScaleMatch = curry((lookup: Partial<Record<RootScaleType, () => string>>, key: RootScaleType) => {
  const result = toMatch(lookup, key);
  if (result) {
    return result;
  }
  return '';
});
