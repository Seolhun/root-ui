import clsx from 'clsx';

export const InputWrapper = clsx(
  'flex items-center',
  'w-full',
  'bg-cream-1 dark:bg-space-1',
  'text-space-2 dark:text-cream-2',
  'outline-0',
);

export const OptionGroupWrapper = clsx('relative');

export const OptionGroup = clsx(
  'absolute',
  'flex flex-1 flex-col',
  'w-full',
  'bg-cream-1 dark:bg-space-1',
  'rounded shadow-md',
  'overflow-y-auto',
  'z-10',
);

export const BaseOption = clsx('flex items-center flex-1', 'w-full', 'first:border-t-0 last:border-b-0');

export const EmptyOption = clsx(BaseOption, 'text-dark-4');

export const Option = clsx(BaseOption, 'hover:bg-cream-2 dark:hover:bg-space-2', 'cursor-pointer');
