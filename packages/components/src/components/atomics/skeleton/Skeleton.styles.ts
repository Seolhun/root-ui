import { tv } from 'tailwind-variants';

export const skeleton = tv({
  slots: {
    loader: ['animate-pulse bg-neutral-3 dark:bg-neutral-3', 'min-h-4 min-w-4', 'rounded-lg'],
    root: '',
  },
});
