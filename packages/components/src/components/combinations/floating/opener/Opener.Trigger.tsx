import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useOpenerContext } from './useOpenerContext';

const CLASSNAME = 'Root__Opener__Trigger';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export const OpenerTrigger = React.forwardRef<ElementType, ElementProps>(({ children, className, ...others }, ref) => {
  const contextValues = useOpenerContext();
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
