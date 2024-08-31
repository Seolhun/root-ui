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
  { className, children, ...others }: ElementProps & DropdownOptionProps<Value>,
  ref: React.ForwardedRef<ElementType>,
) => {
  const { onChangeOption, setOpen } = useDropdownContext();

  const handleOption = React.useCallback(() => {
    onChangeOption(others.option);
    setOpen(false);
  }, [onChangeOption, others.option, setOpen]);

  return (
    <button {...others} className={clsx(CLASSNAME, className)} onClick={handleOption} ref={ref}>
      {children}
    </button>
  );
};

export const DropdownOption = React.forwardRef(DropdownOptionComponent) as <Value>(
  props: ElementProps & DropdownOptionProps<Value> & React.RefAttributes<ElementType>,
) => JSX.Element;
