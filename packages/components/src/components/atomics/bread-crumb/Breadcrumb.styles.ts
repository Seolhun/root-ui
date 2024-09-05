import { tv } from 'tailwind-variants';

export const breadcrumb = tv({
  slots: {
    divider: ['text-sm text-neutral'],
    item: [
      'flex items-center',
      'text-sm text-neutral hover:text-primary',
      'focus:outline-none focus:text-primary-6 dark:text-neutral-5 dark:hover:text-primary-5 dark:focus:text-primary-5',
      'cursor-pointer disabled:cursor-auto',
    ],
    root: ['flex items-center space-x-4 whitespace-nowrap'],
  },
});
