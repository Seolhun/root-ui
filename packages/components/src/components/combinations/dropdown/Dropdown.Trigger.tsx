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
    const childrenRef = (children as any)?.ref;
    const mergedRef = useMergeRefs(contextValues?.refs.setReference, ref, childrenRef);

    return (
      <button
        {...contextValues?.getReferenceProps(others)}
        className={clsx(CLASSNAME, className)}
        data-state={contextValues?.open ? 'open' : 'closed'}
        ref={mergedRef}
      >
        {children}
      </button>
    );
  },
);
