import { entries, map, pipe, toArray } from '@fxts/core';
import { RootIntentType } from '@seolhun/root-ui-tailwind';
import clsx from 'clsx';
import { tv, VariantProps } from 'tailwind-variants';

export const baseTag = tv({
  base: clsx(
    'tag',
    'border border-solid',
    'outline-none',
    'cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-85',
  ),
  variants: {
    intent: {
      accent: '',
      danger: '',
      faint: '',
      info: '',
      neutral: '',
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      cream: '',
      space: '',
    },
    scale: {
      lg: 'tag-scale-lg',
      md: 'tag-scale-md',
      sm: 'tag-scale-sm',
      xl: 'tag-scale-xl',
      xs: 'tag-scale-xs',
    },
    variant: {
      outlined: 'outlined',
      solid: 'solid',
    },
  },
});

const solid: Record<RootIntentType, string> = {
  accent: clsx('bg-accent border-accent', 'hover:bg-accent-5 hover:border-accent-5', 'focus:ring-accent'),
  danger: clsx('bg-danger border-danger', 'hover:bg-danger-5 hover:border-danger-5', 'focus:ring-danger'),
  faint: clsx(
    // Light
    'text-cream-3',
    'bg-faint-6 border-faint-6',
    'hover:bg-faint-7 hover:border-faint-7',
    'focus:ring-faint',
    // Dark
    'dark:text-space-3',
    'dark:bg-faint-4 dark:border-faint-4',
    'dark:hover:bg-faint-3 dark:hover:border-faint-3',
    'dark:focus:ring-faint',
  ),
  info: clsx('bg-info border-info', 'hover:bg-info-5 hover:border-info-5', 'focus:ring-info'),
  neutral: clsx('bg-neutral border-neutral', 'hover:bg-neutral-5 hover:border-neutral-5', 'focus:ring-neutral'),
  primary: clsx('bg-primary border-primary', 'hover:bg-primary-5 hover:border-primary-5', 'focus:ring-primary'),
  secondary: clsx(
    'bg-secondary border-secondary',
    'hover:bg-secondary-5 hover:border-secondary-5',
    'focus:ring-secondary',
  ),
  success: clsx('bg-success border-success', 'hover:bg-success-5 hover:border-success-5', 'focus:ring-success'),
  warning: clsx('bg-warning border-warning', 'hover:bg-warning-5 hover:border-warning-5', 'focus:ring-warning'),
  cream: clsx('bg-cream border-cream', 'hover:bg-cream-5 hover:border-cream-5', 'focus:ring-cream'),
  space: clsx('bg-space border-space', 'hover:bg-space-5 hover:border-space-5', 'focus:ring-space'),
};

const outlined: Record<RootIntentType, string> = {
  accent: clsx(
    'border-accent text-accent',
    'hover:bg-accent hover:border-accent-1 dark:hover:bg-accent dark:hover:border-accent-1',
    'focus:ring-accent',
  ),
  danger: clsx(
    'border-danger text-danger',
    'hover:bg-danger hover:border-danger-1 dark:hover:bg-danger dark:hover:border-danger-1',
    'focus:ring-danger',
  ),
  faint: clsx(
    // Light
    'border-faint-9 text-faint-9',
    'hover:text-cream-3 hover:bg-faint-6 hover:border-faint-1',
    'focus:ring-faint-1',
    // Dark
    'dark:border-faint-1 dark:text-faint-1',
    'dark:hover:text-space-3 dark:hover:bg-faint-1 dark:hover:border-faint-6',
    'dark:focus:ring-faint-1',
  ),
  info: clsx(
    'border-info text-info',
    'hover:bg-danger hover:border-danger-1 dark:hover:bg-danger dark:hover:border-danger-1',
    'focus:ring-info',
  ),
  neutral: clsx(
    'border-neutral text-neutral',
    'hover:bg-neutral hover:border-neutral-1 dark:hover:bg-neutral dark:hover:border-neutral-1',
    'focus:ring-neutral',
  ),
  primary: clsx(
    'border-primary text-primary',
    'hover:bg-primary hover:border-primary-1 dark:hover:bg-primary dark:hover:border-primary-1',
    'focus:ring-primary',
  ),
  secondary: clsx(
    'border-secondary text-secondary',
    'hover:bg-secondary hover:border-secondary-1 dark:hover:bg-secondary dark:hover:border-secondary-1',
    'focus:ring-secondary',
  ),
  success: clsx(
    'border-success text-success',
    'hover:bg-success hover:border-success-1 dark:hover:bg-success dark:hover:border-success-1',
    'focus:ring-success',
  ),
  warning: clsx(
    'border-warning text-warning',
    'hover:bg-warning hover:border-warning-1 dark:hover:bg-warning dark:hover:border-warning-1',
    'focus:ring-warning',
  ),
  cream: clsx(
    'border-cream text-cream',
    'hover:bg-cream hover:border-cream-1 dark:hover:bg-cream dark:hover:border-cream-1',
    'focus:ring-cream',
  ),
  space: clsx(
    'border-space text-space',
    'hover:bg-space hover:border-space-1 dark:hover:bg-space dark:hover:border-space-1',
    'focus:ring-space',
  ),
};

export const solidTag = tv({
  base: clsx('text-cream-3', 'hover:bg-opacity-90', 'focus:ring-2 focus:ring-offset-2 focus:outline-none'),
  compoundVariants: pipe(
    solid,
    entries,
    map(([intent, className]) => ({
      className,
      intent: intent as RootIntentType,
      variant: 'solid' as const,
    })),
    toArray,
  ),
  extend: baseTag,
});

export const outlinedTag = tv({
  base: clsx(
    'bg-cream-1 dark:bg-space-1',
    'hover:bg-opacity-10 hover:text-cream-3',
    'focus:ring-1 focus:ring-offset-1 focus:outline-none',
  ),
  compoundVariants: pipe(
    outlined,
    entries,
    map(([intent, className]) => ({
      className,
      intent: intent as RootIntentType,
      variant: 'outlined' as const,
    })),
    toArray,
  ),
  extend: baseTag,
});

export type SolidTagVariants = VariantProps<typeof solidTag>;
export type OutlinedTagVariants = VariantProps<typeof outlinedTag>;
export type TagVariants = SolidTagVariants | OutlinedTagVariants;
