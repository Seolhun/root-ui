import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useTogglerContext } from './useTogglerContext';

const CLASSNAME = 'Root__Toggler__Trigger';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export const TogglerTrigger = React.forwardRef<ElementType, ElementProps>(({ className, children, ...others }, ref) => {
  const contextValues = useTogglerContext();
  const { getReferenceProps, open } = contextValues;
  const mergedRef = useMergeRefs(contextValues.refs.setReference, ref);

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
});
