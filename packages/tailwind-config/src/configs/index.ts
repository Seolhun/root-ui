import { RootIntentMap, RootScaleMap, RootScaleType } from '../types';

/**
 * Scales
 */
export const RootScales = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xl: 'xl',
  xs: 'xs',
} satisfies RootScaleMap;

export const RootScaleValues = {
  PADDING: {
    lg: { x: 10, y: 5 },
    md: { x: 8, y: 4 },
    sm: { x: 6, y: 3 },
    xl: { x: 12, y: 6 },
    xs: { x: 4, y: 2 },
  } satisfies Record<RootScaleType, { x: number; y: number }>,
  SIZE: {
    lg: 24,
    md: 20,
    sm: 16,
    xl: 28,
    xs: 12,
  } satisfies Record<RootScaleType, number>,
  TEXT: {
    lg: 'lg',
    md: 'md',
    sm: 'sm',
    xl: 'xl',
    xs: 'xs',
  } satisfies Record<RootScaleType, string>,
};

/**
 * Intents
 */
export const RootIntents = {
  accent: 'accent',
  danger: 'danger',
  info: 'info',
  neutral: 'neutral',
  primary: 'primary',
  success: 'success',
  warning: 'warning',
} satisfies RootIntentMap;
