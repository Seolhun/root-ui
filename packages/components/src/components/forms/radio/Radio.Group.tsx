import { RadioGroup as HeadlessRadioGroup, RadioGroupProps as HeadlessRadioGroupProps } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__RadioGroup';
type ElementType = HTMLInputElement;

export interface RadioGroupProps extends HeadlessRadioGroupProps<'div'> {}

export const RadioGroup = React.forwardRef<ElementType, RadioGroupProps>(({ className, children, ...others }, ref) => {
  return (
    <HeadlessRadioGroup {...others} as="div" className={clsx(CLASSNAME, className)} ref={ref}>
      {children}
    </HeadlessRadioGroup>
  );
});
