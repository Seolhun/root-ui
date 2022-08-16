import React from 'react';
import classnames from 'classnames';

import { FormLabel } from '..';

const CLASSNAME = 'Root__Checkbox';
type Element = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface CheckboxProps extends ExtensionProps {
  htmlFor?: string;
}

const Checkbox = React.forwardRef<Element, CheckboxProps>(({ className, children, htmlFor, ...rests }, ref) => {
  const htmlForAndID = htmlFor ?? rests.name;
  return (
    <FormLabel className="inline-flex items-center cursor-pointer" htmlFor={htmlForAndID}>
      <input
        {...rests}
        ref={ref}
        type="checkbox"
        id={htmlForAndID}
        className={classnames(
          CLASSNAME,
          className,
          'inline-block',
          'p-3 mr-1',
          'shadow-sm',
          'border border-gray-400',
          'focus:ring-gray-800 rounded-md',
        )}
      />
      <span className="ml-2">{children}</span>
    </FormLabel>
  );
});

export { Checkbox };
export default Checkbox;
