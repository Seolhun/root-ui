import { RootScaleType } from '../@types';

export const RootScaleMap = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xl: 'xl',
  xs: 'xs',
};

export const RootScaleValues = {
  PADDING: {
    lg: { x: 10, y: 5 },
    md: { x: 8, y: 4 },
    sm: { x: 6, y: 3 },
    xl: { x: 12, y: 6 },
    xs: { x: 4, y: 2 },
  } satisfies Record<RootScaleType, { x: number; y: number }>,
  SIZE: {
    lg: 28,
    md: 24,
    sm: 20,
    xl: 32,
    xs: 16,
  } satisfies Record<RootScaleType, number>,
  TEXT: {
    lg: 'text-8',
    md: 'text-7',
    sm: 'text-6',
    xl: 'text-9',
    xs: 'text-5',
  } satisfies Record<RootScaleType, string>,
};
