import colors from 'tailwindcss/colors';

/**
 * @see https://uicolors.app/create
 */
export const themeColors = {
  accent: 'var(--accent-color)',
  'accent-0': 'var(--accent-0-color)',
  'accent-1': 'var(--accent-1-color)',
  'accent-2': 'var(--accent-2-color)',
  'accent-3': 'var(--accent-3-color)',
  'accent-4': 'var(--accent-4-color)',
  'accent-5': 'var(--accent-5-color)',
  'accent-6': 'var(--accent-6-color)',
  'accent-7': 'var(--accent-7-color)',
  'accent-8': 'var(--accent-8-color)',
  'accent-9': 'var(--accent-9-color)',
  'accent-10': 'var(--accent-10-color)',

  cream: 'var(--cream-color)',
  'cream-0': 'var(--cream-0-color)',
  'cream-1': 'var(--cream-1-color)',
  'cream-2': 'var(--cream-2-color)',
  'cream-3': 'var(--cream-3-color)',
  'cream-4': 'var(--cream-4-color)',
  'cream-5': 'var(--cream-5-color)',
  'cream-6': 'var(--cream-6-color)',
  'cream-7': 'var(--cream-7-color)',
  'cream-8': 'var(--cream-8-color)',
  'cream-9': 'var(--cream-9-color)',
  'cream-10': 'var(--cream-10-color)',

  danger: 'var(--danger-color)',
  'danger-0': 'var(--danger-0-color)',
  'danger-1': 'var(--danger-1-color)',
  'danger-2': 'var(--danger-2-color)',
  'danger-3': 'var(--danger-3-color)',
  'danger-4': 'var(--danger-4-color)',
  'danger-5': 'var(--danger-5-color)',
  'danger-6': 'var(--danger-6-color)',
  'danger-7': 'var(--danger-7-color)',
  'danger-8': 'var(--danger-8-color)',
  'danger-9': 'var(--danger-9-color)',
  'danger-10': 'var(--danger-10-color)',

  info: 'var(--info-color)',
  'info-0': 'var(--info-0-color)',
  'info-1': 'var(--info-1-color)',
  'info-2': 'var(--info-2-color)',
  'info-3': 'var(--info-3-color)',
  'info-4': 'var(--info-4-color)',
  'info-5': 'var(--info-5-color)',
  'info-6': 'var(--info-6-color)',
  'info-7': 'var(--info-7-color)',
  'info-8': 'var(--info-8-color)',
  'info-9': 'var(--info-9-color)',
  'info-10': 'var(--info-10-color)',

  neutral: 'var(--neutral-color)',
  'neutral-0': 'var(--neutral-0-color)',
  'neutral-1': 'var(--neutral-1-color)',
  'neutral-2': 'var(--neutral-2-color)',
  'neutral-3': 'var(--neutral-3-color)',
  'neutral-4': 'var(--neutral-4-color)',
  'neutral-5': 'var(--neutral-5-color)',
  'neutral-6': 'var(--neutral-6-color)',
  'neutral-7': 'var(--neutral-7-color)',
  'neutral-8': 'var(--neutral-8-color)',
  'neutral-9': 'var(--neutral-9-color)',
  'neutral-10': 'var(--neutral-10-color)',

  primary: 'var(--primary-color)',
  'primary-0': 'var(--primary-0-color)',
  'primary-1': 'var(--primary-1-color)',
  'primary-2': 'var(--primary-2-color)',
  'primary-3': 'var(--primary-3-color)',
  'primary-4': 'var(--primary-4-color)',
  'primary-5': 'var(--primary-5-color)',
  'primary-6': 'var(--primary-6-color)',
  'primary-7': 'var(--primary-7-color)',
  'primary-8': 'var(--primary-8-color)',
  'primary-9': 'var(--primary-9-color)',
  'primary-10': 'var(--primary-10-color)',

  space: 'var(--space-color)',
  'space-0': 'var(--space-0-color)',
  'space-1': 'var(--space-1-color)',
  'space-2': 'var(--space-2-color)',
  'space-3': 'var(--space-3-color)',
  'space-4': 'var(--space-4-color)',
  'space-5': 'var(--space-5-color)',
  'space-6': 'var(--space-6-color)',
  'space-7': 'var(--space-7-color)',
  'space-8': 'var(--space-8-color)',
  'space-9': 'var(--space-9-color)',
  'space-10': 'var(--space-10-color)',

  success: 'var(--success-color)',
  'success-0': 'var(--success-0-color)',
  'success-1': 'var(--success-1-color)',
  'success-2': 'var(--success-2-color)',
  'success-3': 'var(--success-3-color)',
  'success-4': 'var(--success-4-color)',
  'success-5': 'var(--success-5-color)',
  'success-6': 'var(--success-6-color)',
  'success-7': 'var(--success-7-color)',
  'success-8': 'var(--success-8-color)',
  'success-9': 'var(--success-9-color)',
  'success-10': 'var(--success-10-color)',

  warning: 'var(--warning-color)',
  'warning-0': 'var(--warning-0-color)',
  'warning-1': 'var(--warning-1-color)',
  'warning-2': 'var(--warning-2-color)',
  'warning-3': 'var(--warning-3-color)',
  'warning-4': 'var(--warning-4-color)',
  'warning-5': 'var(--warning-5-color)',
  'warning-6': 'var(--warning-6-color)',
  'warning-7': 'var(--warning-7-color)',
  'warning-8': 'var(--warning-8-color)',
  'warning-9': 'var(--warning-9-color)',
  'warning-10': 'var(--warning-10-color)',
};

/**
 * To generate intent colors by keys
 * intent is for light mode, intent2 is for dark mode.
 */
export const intentColorKeys = ['primary', 'info', 'success', 'accent', 'warning', 'danger', 'neutral'];
export const intentColorKeyObject = intentColorKeys.reduce((acc, key) => {
  return {
    ...acc,
    [key]: key,
  };
}, {});

/**
 * @see changeColorToIndex
 * It is for intent colors to create custom theme for UI library
 */
export const intentColors = {
  ...themeColors,
  black: colors.black,
  white: colors.white,
};

export const palette = {
  ...themeColors,
  ...intentColors,
};
