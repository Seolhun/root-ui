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
    lg: { x: 14, y: 7 },
    md: { x: 12, y: 6 },
    sm: { x: 10, y: 5 },
    xl: { x: 16, y: 8 },
    xs: { x: 8, y: 4 },
  } satisfies Record<RootScaleType, { x: number; y: number }>,
  SIZE: {
    lg: 20,
    md: 16,
    sm: 12,
    xl: 24,
    xs: 8,
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
