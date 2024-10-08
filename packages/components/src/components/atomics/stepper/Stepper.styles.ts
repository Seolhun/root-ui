import clsx from 'clsx';
import { tv } from 'tailwind-variants';

export const stepper = tv({
  slots: {
    root: 'relative flex flex-col lg:flex-row gap-2 w-full',
    stepperItem: clsx('flex flex-0 gap-x-4 md:block', 'md:flex-1 md:shrink md:basis-0', 'group'),
    stepperItemBadge: clsx(
      'w-12 h-12',
      'flex justify-center items-center',
      'shrink-0',
      'font-medium',
      'bg-neutral-3 dark:bg-neutral-7',
      'text-cream-1',
      'rounded-full',
    ),
    stepperItemContent: clsx('text-sm', 'text-neutral-5 dark:text-neutral-5'),
    stepperItemEdge: clsx(
      'mt-2 lg:mt-0 lg:ms-2 ',
      'w-px lg:w-full',
      'h-full lg:h-px',
      'hidden lg:flex lg:flex-1',
      'bg-neutral-3 dark:bg-neutral-7',
      'group-last:hidden',
    ),
    stepperItemMeta: clsx('flex flex-col gap-4', 'grow md:grow-0 md:mt-3 pb-5'),
    stepperItemName: clsx('block', 'text-sm', 'font-medium', 'text-neutral-8 dark:text-cream-2'),
    stepperItemStep: clsx(
      'flex flex-col items-center',
      'md:w-full md:inline-flex md:flex-wrap md:flex-row',
      'text-xs align-middle',
    ),
  },
  variants: {
    active: {
      true: {
        stepperItemBadge: 'bg-primary text-cream-1 dark:bg-primary dark:text-cream-1',
      },
    },
  },
});
