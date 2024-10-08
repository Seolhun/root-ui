import { keys, pipe, toArray } from '@fxts/core';
import { intentMap, RootIntentType, RootScaleType } from '@seolhun/root-ui-tailwind';

import { RootPlacement } from '~/system';

export const storiesScaleOptions: RootScaleType[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const storiesIntentOptions: RootIntentType[] = pipe(intentMap, keys, toArray);

export const storiesPlacements: RootPlacement[] = [
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
  'top',
  'bottom',
  'right',
  'left',
];
