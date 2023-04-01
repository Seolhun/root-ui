import { Listbox } from '@headlessui/react';
import * as React from 'react';

import { DropdownOption } from './Dropdown.Widget.types';

import { Maybe } from '../../../../utils/fx';

interface ElementProps {
  children: React.ReactNode;

  disabled?: boolean;
}

export interface DropdownWidgetRootProps<Option extends DropdownOption, ActionOption = Option> extends ElementProps {
  /**
   * Selected option
   */
  value: Maybe<ActionOption>;

  /**
   * Change option handler
   */
  onChange: (option: Maybe<ActionOption>) => void;

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
