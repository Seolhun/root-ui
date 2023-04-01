import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { DropdownOption, DropdownOptionState, DropdownWidgetOptionClassName } from './Dropdown.Widget.types';

interface ElementProps {
  className?: DropdownWidgetOptionClassName;

  children: (state: DropdownOptionState) => React.ReactNode;
}

export interface DropdownWidgetOptionProps<Option extends DropdownOption = DropdownOption> extends ElementProps {
  value: Option;

  disabled?: boolean;
}

export const DropdownWidgetOption = React.forwardRef<HTMLLIElement, DropdownWidgetOptionProps>(
  ({ children, className, value, disabled }, ref) => {
    return (
      <Listbox.Option
        ref={ref}
        className={(state) => {
          const { active, selected, disabled } = state;
          const isNone = !active && !selected && !disabled;
          return clsx(
            typeof className === 'function' ? className(state) : className,
            'py-2 px-4',
            'bg-cream-1 dark:bg-space-1',
            'list-none select-none',
            {
              'text-space-1 dark:text-cream-1 hover:bg-light-2 dark:hover:bg-dark-7': isNone,
              'bg-light-1 dark:bg-dark-8 text-space-1 dark:text-cream-1': active && !selected,
              'bg-primary dark:bg-primary text-cream-1 dark:text-cream-1': selected,
            },
            disabled ? 'bg-light-2 dark:bg-dark-7 opacity-70 cursor-not-allowed' : 'cursor-pointer',
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
