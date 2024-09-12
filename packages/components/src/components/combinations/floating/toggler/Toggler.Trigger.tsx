import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useTogglerContext } from './useTogglerContext';

const CLASSNAME = 'Root__Toggler__Trigger';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const TogglerTrigger = React.forwardRef<ElementType, ElementProps>(({ children, className, ...others }, ref) => {
  const contextValues = useTogglerContext();
  const { getReferenceProps, open } = contextValues;
  const mergedRef = useMergeRefs(contextValues.refs.setReference, ref);

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
});
