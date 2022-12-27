import React from 'react';
import clsx from 'clsx';

import { HTMLSelectOptionProps } from './HTMLSelect.types';

const CLASSNAME = 'Root__HTMLSelect';
type ElementType = HTMLSelectElement;
type ElementProps = React.SelectHTMLAttributes<ElementType>;

export interface HTMLSelectProps extends ElementProps {
  options: HTMLSelectOptionProps[];
}

const HTMLSelect = React.forwardRef<ElementType, HTMLSelectProps>(({ className, options, ...rests }, ref) => {
  return (
    <select
      {...rests}
      ref={ref}
      id={rests.name}
      className={clsx(
        CLASSNAME,
        className,
        'shadow-sm border border-gray-400 focus:ring-gray-800 p-3 block w-full sm:text-sm rounded-md',
      )}
    >
      {options.map((option, i) => (
        <option key={i} {...option} />
      ))}
    </select>
  );
});

export { HTMLSelect };
export default HTMLSelect;
