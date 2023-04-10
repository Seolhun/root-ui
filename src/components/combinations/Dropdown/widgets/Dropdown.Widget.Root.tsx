import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import { DropdownOption, DropdownWidgetProps } from './Dropdown.Widget.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export function DropdownWidgetRoot<Option extends DropdownOption, ActionOption = Option>({
  children,
  className,
  disabled,
  // DropdownWidgetProps
  option,
  onChangeOption,
  multiple,
  // FloatingProps
  placement,
  strategy,
  offset = 5,
  // ElementProps
  ...others
}: ElementProps & DropdownWidgetProps<Option, ActionOption>) {
  return (
    <Listbox value={option} onChange={onChangeOption} disabled={disabled} multiple={multiple}>
      <div {...others} className={clsx(className, 'relative')}>
        {children}
      </div>
    </Listbox>
  );
}
