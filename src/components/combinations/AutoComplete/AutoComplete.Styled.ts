import clsx from 'clsx';

export const InputWrapper = clsx('flex items-center', 'w-full', 'bg-cream dark:bg-space', 'outline-0');

export const OptionGroupWrapper = clsx('relative');

export const OptionGroup = clsx(
  'absolute',
  'z-10',
  'flex flex-1 flex-col',
  'w-full',
  // 'max-h-120',
  'bg-cream dark:bg-space',
  'rounded-md shadow-md',
  'overflow-y-auto',
);

export const BaseOption = clsx(
  'flex items-center flex-1',
  'w-full',
  'bg-cream dark:bg-space',
  'border border-light-1 dark:border-dark-3',
  'first:border-t-0 last:border-b-0',
);

export const EmptyOption = clsx(BaseOption, 'text-dark-4');

export const Option = clsx(
  BaseOption,
  'border border-light-2 dark:border-dark-8',
  'hover:bg-light-1 dark:hover:bg-dark-7',
  'cursor-pointer',
);
