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
  multiple,
  offset = 5,
  onChangeOption,
  // DropdownWidgetProps
  option,
  // FloatingProps
  placement,
  strategy,
  // ElementProps
  ...others
}: ElementProps & DropdownWidgetProps<Option, ActionOption>) {
  return (
    <Listbox disabled={disabled} multiple={multiple} onChange={onChangeOption} value={option}>
      <div {...others} className={clsx(className, 'relative')}>
        {children}
      </div>
    </Listbox>
  );
}
