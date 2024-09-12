import { tv, VariantProps } from 'tailwind-variants';

export const input = tv({
  base: [
    'block w-full',
    'text-space-2 dark:text-cream-2',
    'bg-cream-1 dark:bg-space-1',
    'border border-cream-5 dark:border-space-5',
    'px-8',
    'rounded',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'caret-neutral',
  ],
  variants: {
    intent: {
      accent: 'outline-accent dark:outline-accent',
      danger: 'outline-danger dark:outline-danger',
      faint: 'outline-faint dark:outline-faint',
      info: 'outline-info dark:outline-info',
      neutral: 'outline-neutral dark:outline-neutral',
      primary: 'outline-primary dark:outline-primary',
      secondary: 'outline-secondary dark:outline-secondary',
      success: 'outline-success dark:outline-success',
      warning: 'outline-warning dark:outline-warning',
    },
    scale: {
      lg: 'scale-text-lg scale-py-lg',
      md: 'scale-text-md scale-py-md',
      sm: 'scale-text-sm scale-py-sm',
      xl: 'scale-text-xl scale-py-xl',
      xs: 'scale-text-xs scale-py-xs',
    },
  },
});

export type InputVariants = VariantProps<typeof input>;
