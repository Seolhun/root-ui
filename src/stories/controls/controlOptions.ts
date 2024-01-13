import { RootIntent, RootPlacement, RootScale } from '~/system';

export const storiesScaleOptions: RootScale[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const storiesIntentOptions: RootIntent[] = [
  'primary',
  'info',
  'success',
  'accent',
  'warning',
  'danger',
  'neutral',
  'light',
  'dark',
  'none',
];

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
