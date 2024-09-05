import clsx from 'clsx';
import * as React from 'react';

import { DropdownValue } from './Dropdown.types';
import { useDropdownContext } from './useDropdownContext';

const CLASSNAME = 'Root__Dropdown__Option';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface DropdownOptionProps<Value> {
  option: DropdownValue<Value>;
}

const DropdownOptionComponent = <Value,>(
  { children, className, ...others }: ElementProps & DropdownOptionProps<Value>,
  ref: React.ForwardedRef<ElementType>,
) => {
  const { onChangeOpen, onChangeOption } = useDropdownContext();

  const handleOption = React.useCallback(() => {
    onChangeOption(others.option);
    onChangeOpen(false);
  }, [onChangeOption, others.option, onChangeOpen]);

  return (
    <button {...others} className={clsx(CLASSNAME, className)} onClick={handleOption} ref={ref}>
      {children}
    </button>
  );
};

export const DropdownOption = React.forwardRef(DropdownOptionComponent) as <Value>(
  props: ElementProps & DropdownOptionProps<Value> & { ref?: React.ForwardedRef<ElementType> },
) => JSX.Element;
