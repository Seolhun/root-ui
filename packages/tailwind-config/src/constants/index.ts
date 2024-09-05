import { each, keys, pipe } from '@fxts/core';

import { intentColors } from '../presets';
import { RootIntentMap, RootIntentRange, RootIntentType, RootScaleMap, RootScaleType } from '../types';

export const intents: RootIntentType[] = [
  'primary',
  'secondary',
  'neutral',
  'faint',
  'accent',
  'info',
  'success',
  'warning',
  'danger',
];
export const scales: RootScaleType[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const intentMap = intents.reduce((acc, key) => {
  return {
    ...acc,
    [key]: key,
  };
}, {} as RootIntentMap);

export const allIntentsMap = (() => {
  const intentMap = {} as Record<RootIntentRange, RootIntentRange>;
  pipe(
    keys(intentColors),
    each((intent) => {
      intentMap[intent] = intent;
    }),
  );
  return intentMap;
})();

export const scaleMap = scales.reduce((acc, key) => {
  return {
    ...acc,
    [key]: key,
  };
}, {} as RootScaleMap);
