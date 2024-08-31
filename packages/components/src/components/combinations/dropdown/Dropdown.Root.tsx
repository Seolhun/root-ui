import clsx from 'clsx';
import * as React from 'react';

import { DropdownOptions } from './Dropdown.types';
import { DropdownContext, useDropdown } from './useDropdownContext';

const CLASSNAME = 'Root__Dropdown';

export interface DropdownProps<Value> extends DropdownOptions<Value> {
  children: React.ReactNode;
}

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const _DropdownRoot = <Value,>(
  { className, children, ...options }: ElementProps & DropdownProps<Value>,
  ref: React.ForwardedRef<ElementType>,
) => {
  const contextValues = useDropdown(options);

  return (
    <DropdownContext.Provider value={contextValues}>
      <div className={clsx(CLASSNAME, className)} ref={ref}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownRoot = React.forwardRef(_DropdownRoot) as <Value>(
  props: ElementProps & DropdownProps<Value> & React.RefAttributes<ElementType>,
) => JSX.Element;
