import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useDropdownContext } from './useDropdownContext';

const CLASSNAME = 'Root__Dropdown__Trigger';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const DropdownTrigger = React.forwardRef<ElementType, ElementProps>(
  ({ children, className, ...others }, ref) => {
    const contextValues = useDropdownContext();
    const { getReferenceProps, open } = contextValues;
    const mergedRef = useMergeRefs(contextValues?.refs.setReference, ref);

    return (
      <div
        role="combobox"
        aria-expanded={open}
        aria-haspopup="true"
        {...others}
        className={clsx(CLASSNAME, className)}
        data-state={open ? 'open' : 'closed'}
        ref={mergedRef}
        {...getReferenceProps(others)}
      >
        {children}
      </div>
    );
  },
);
