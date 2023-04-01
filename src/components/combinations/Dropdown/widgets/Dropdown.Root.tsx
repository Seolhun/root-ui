import { Listbox } from '@headlessui/react';
import * as React from 'react';

import { DropdownOption } from './Dropdown.types';

import { Maybe } from '../../../../utils/fx';

interface ElementProps {
  children: React.ReactNode;

  disabled?: boolean;
}

export interface DropdownRootProps<Option extends DropdownOption> extends ElementProps {
  /**
   * Selected option
   */
  value: Maybe<Option>;

  /**
   * Change option handler
   */
  onChange: (option: Maybe<Option>) => void;
}

export function DropdownRoot<Option extends DropdownOption>({
  children,
  value,
  onChange,
  disabled,
}: DropdownRootProps<Option>) {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className="relative mt-1">{children}</div>
    </Listbox>
  );
}
