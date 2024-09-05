import clsx from 'clsx';
import { tv, VariantProps } from 'tailwind-variants';

export type SolidTagVariants = VariantProps<typeof solidTag>;
export type OutlinedTagVariants = VariantProps<typeof outlinedTag>;
export type TagVariants = SolidTagVariants & OutlinedTagVariants;

const baseTag = tv({
  base: clsx(
    'tag',
    'border border-solid',
    'outline-none',
    'cursor-pointer disabled:cursor-not-allowed disabled:opacity-85',
  ),
  variants: {
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

export const solidTag = tv({
  base: clsx('text-cream-3', 'hover:bg-opacity-90', 'focus:ring-2 focus:ring-offset-2 focus:outline-none'),
  extend: baseTag,
  variants: {
    intent: {
      accent: clsx('bg-accent border-accent', 'hover:bg-accent-5 hover:border-accent-5', 'focus:ring-accent'),
      danger: clsx('bg-danger border-danger', 'hover:bg-danger-5 hover:border-danger-5', 'focus:ring-danger'),
      faint: clsx(
        'text-cream-3 dark:text-space-3',
        'bg-faint-6 border-faint-6 dark:bg-faint-1 dark:border-faint-1',
        'hover:bg-faint-8 hover:border-faint-8 dark:hover:bg-faint-3 dark:hover:border-faint-3',
        'focus:ring-faint',
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
    },
  },
});

// Outlined Tag with hover and focus styles
export const outlinedTag = tv({
  base: clsx(
    'bg-transparent',
    'hover:bg-opacity-10  hover:text-cream-3',
    'focus:ring-2 focus:ring-offset-2 focus:outline-none',
  ),
  extend: baseTag,
  variants: {
    intent: {
      accent: clsx('border-accent text-accent', 'hover:bg-accent', 'focus:ring-accent'),
      danger: clsx('border-danger text-danger', 'hover:bg-danger', 'focus:ring-danger'),
      faint: clsx('border-faint text-faint', 'hover:bg-faint', 'focus:ring-faint'),
      info: clsx('border-info text-info', 'hover:bg-info', 'focus:ring-info'),
      neutral: clsx('border-neutral text-neutral', 'hover:bg-neutral', 'focus:ring-neutral'),
      primary: clsx('border-primary text-primary', 'hover:bg-primary', 'focus:ring-primary'),
      secondary: clsx('border-secondary text-secondary', 'hover:bg-secondary', 'focus:ring-secondary'),
      success: clsx('border-success text-success', 'hover:bg-success', 'focus:ring-success'),
      warning: clsx('border-warning text-warning', 'hover:bg-warning', 'focus:ring-warning'),
    },
  },
});
