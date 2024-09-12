import clsx from 'clsx';
import * as React from 'react';

import { input, InputVariants } from './Input.styles';

const CLASSNAME = 'Root__Input';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;

export type InputProps = ElementProps & InputVariants;

export const Input = React.forwardRef<ElementType, InputProps>(
  ({ className, intent = 'primary', scale = 'md', ...others }, ref) => {
    return (
      <input {...others} className={clsx(CLASSNAME, className, input({ intent, scale }))} id={others.name} ref={ref} />
    );
  },
);
