import * as React from 'react';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';

import { DropdownOption as DropdownOptionType, DropdownOptionState } from './Dropdown.types';

interface ElementProps {
  className?: string | ((state: DropdownOptionState) => string);

  children: (state: DropdownOptionState) => React.ReactNode;
}

export interface DropdownOptionProps<Option extends DropdownOptionType = DropdownOptionType> extends ElementProps {
  value: Option;

  disabled?: boolean;
}

export const DropdownOption = React.forwardRef<HTMLLIElement, DropdownOptionProps>(
  ({ children, className, value, disabled }, ref) => {
    return (
      <Listbox.Option
        ref={ref}
        className={(state) => {
          const { active, selected, disabled } = state;
          return clsx(
            typeof className === 'function' ? className(state) : className,
            'py-2 px-4',
            'bg-cream-1 dark:bg-space-1',
            'hover:bg-light-2 dark:hover:bg-dark-7',
            'focus:bg-light-2 dark:focus:bg-dark-7',
            'list-none select-none',
            'cursor-default',
            {
              'text-space-1 dark:text-cream-1': !active && !selected && !disabled,
              'bg-light-1 dark:bg-dark-8 text-space-1 dark:text-cream-1': active && !selected,
              'bg-primary dark:bg-primary text-cream-1 dark:text-cream-1': selected,
              'bg-light-2 dark:bg-dark-7 opacity-70': disabled,
            },
          );
        }}
        value={value}
        disabled={disabled}
      >
        {(state: DropdownOptionState) => <>{children(state)}</>}
      </Listbox.Option>
    );
  },
);
