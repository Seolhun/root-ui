import * as React from 'react';
import { Listbox } from '@headlessui/react';

import { Maybe } from '../../../../utils/fx';
import { DropdownOption } from './DropdownWidget.types';

interface ElementProps {
  children: React.ReactNode;

  disabled?: boolean;
}

export interface DropdownWidgetRootProps<Option extends DropdownOption> extends ElementProps {
  /**
   * Selected option
   */
  value: Maybe<Option>;

  /**
   * Change option handler
   */
  onChange: (option: Maybe<Option>) => void;
}

export function DropdownWidgetRoot<Option extends DropdownOption>({
  children,
  value,
  onChange,
  disabled,
}: DropdownWidgetRootProps<Option>) {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className="relative mt-1">{children}</div>
    </Listbox>
  );
}
