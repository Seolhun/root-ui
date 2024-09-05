import { tv } from 'tailwind-variants';

export const skeleton = tv({
  slots: {
    loader: ['animate-pulse bg-neutral-2 dark:bg-neutral-2', 'min-h-4 min-w-4'],
    root: '',
  },
});
