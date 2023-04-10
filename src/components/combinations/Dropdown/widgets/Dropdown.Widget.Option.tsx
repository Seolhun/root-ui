import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import * as Classes from './Dropdown.Classes';
import { DropdownOption, DropdownOptionState, DropdownWidgetOptionClassName } from './Dropdown.Widget.types';

type ElementType = HTMLLIElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DropdownWidgetOptionProps<Option extends DropdownOption = DropdownOption>
  extends Omit<ElementProps, 'children' | 'className'> {
  className?: DropdownWidgetOptionClassName;

  children: (state: DropdownOptionState) => React.ReactNode;

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
          return clsx(
            className,
            Classes.BaseItem,
            {
              'bg-neutral-1 dark:bg-neutral2-1 text-space-1 dark:text-cream-1': active && !selected,
              'bg-primary dark:bg-primary2 text-cream-1 dark:text-cream-1': selected,
            },
            disabled ? 'bg-neutral dark:bg-neutral2 opacity-70 cursor-not-allowed' : 'cursor-pointer',
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
