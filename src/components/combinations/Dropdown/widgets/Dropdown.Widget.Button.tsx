import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { DropdownWidgetButtonClassName } from './Dropdown.Widget.types';

interface ElementProps {
  className?: DropdownWidgetButtonClassName;

  children: React.ReactNode;
}

export interface DropdownWidgetButtonProps extends ElementProps {}

export const DropdownWidgetButton = React.forwardRef<HTMLButtonElement, DropdownWidgetButtonProps>(
  ({ className, children }: DropdownWidgetButtonProps, ref) => {
    return (
      <Listbox.Button
        ref={ref}
        className={(state) => {
          const { disabled } = state;
          return clsx(
            typeof className === 'function' ? className(state) : className,
            'relative',
            'flex flex-1 items-center',
            'w-full min-h-20',
            'py-2 px-4',
            'bg-cream-1 dark:bg-space-1',
            'text-space-1 dark:text-cream-1',
            'border border-light-2 dark:border-space-2',
            'shadow-md rounded',
            'cursor-pointer',
            {
              'bg-light-2 dark:bg-dark-7 opacity-70 cursor-not-allowed': disabled,
            },
          );
        }}
      >
        {children}
      </Listbox.Button>
    );
  },
);
