import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useOpenerContext } from './useOpenerContext';

const CLASSNAME = 'Root__Opener__Trigger';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export const OpenerTrigger = React.forwardRef<ElementType, ElementProps>(({ className, children, ...props }, ref) => {
  const contextValues = useOpenerContext();
  const childrenRef = (children as any)?.ref;

  const mergedRef = useMergeRefs(contextValues?.refs.setReference, ref, childrenRef);

  return (
    <button
      {...props}
      className={clsx(CLASSNAME, className)}
      data-state={contextValues?.open ? 'open' : 'closed'}
      ref={mergedRef}
      type="button"
      {...contextValues?.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});
