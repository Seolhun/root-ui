import { tv, VariantProps } from 'tailwind-variants';

export type CalloutVariants = VariantProps<typeof callout>;

export const callout = tv({
  base: 'px-6 py-4 rounded border-l-4 shadow',
  variants: {
    intent: {
      accent: 'bg-accent-0 dark:bg-accent-1 border-accent',
      danger: 'bg-danger-0 dark:bg-danger-1 border-danger',
      faint: 'bg-faint-0 dark:bg-faint-1 border-faint',
      info: 'bg-info-0 dark:bg-info-1 border-info',
      neutral: 'bg-neutral-0 dark:bg-neutral-1 border-neutral',
      primary: 'bg-primary-0 dark:bg-primary-1 border-primary',
      secondary: 'bg-secondary-0 dark:bg-secondary-1 border-secondary',
      success: 'bg-success-0 dark:bg-success-1 border-success',
      warning: 'bg-warning-0 dark:bg-warning-1 border-warning',
    },
  },
});
