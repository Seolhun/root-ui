import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Required';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export function Required({ className }: ElementProps) {
  return <sup className={clsx(CLASSNAME, className, 'text-danger dark:text-danger2', 'text-6')}>*</sup>;
}
