import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useDropdownContext } from './useDropdownContext';

const CLASSNAME = 'Root__Dropdown__Trigger';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export const DropdownTrigger = React.forwardRef<ElementType, ElementProps>(
  ({ className, children, ...others }, ref) => {
    const contextValues = useDropdownContext();
    const { getReferenceProps, open } = contextValues;
    const mergedRef = useMergeRefs(contextValues?.refs.setReference, ref);

    return (
      <button
        {...others}
        className={clsx(CLASSNAME, className)}
        data-state={open ? 'open' : 'closed'}
        ref={mergedRef}
        type="button"
        {...getReferenceProps(others)}
      >
        {children}
      </button>
    );
  },
);
