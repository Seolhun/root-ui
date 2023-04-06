import { Listbox } from '@headlessui/react';
import * as React from 'react';

import { Optional } from '~/utils/fx';

import { DropdownOption } from './Dropdown.Widget.types';

interface ElementProps {
  children: React.ReactNode;

  disabled?: boolean;
}

export interface DropdownWidgetRootProps<Option extends DropdownOption, ActionOption = Option> extends ElementProps {
  /**
   * Selected option
   */
  value: Optional<ActionOption>;

  /**
   * Change option handler
   */
  onChange: (option: Optional<ActionOption>) => void;

  /**
   * Could be multi select
   */
  multiple?: boolean;
}

export function DropdownWidgetRoot<Option extends DropdownOption, ActionOption = Option>({
  children,
  value,
  onChange,
  disabled,
  multiple,
}: DropdownWidgetRootProps<Option, ActionOption>) {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled} multiple={multiple}>
      <div className="relative mt-1">{children}</div>
    </Listbox>
  );
}
