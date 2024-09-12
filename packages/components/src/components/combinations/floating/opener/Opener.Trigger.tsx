import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useOpenerContext } from './useOpenerContext';

const CLASSNAME = 'Root__Opener__Trigger';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const OpenerTrigger = React.forwardRef<ElementType, ElementProps>(({ children, className, ...others }, ref) => {
  const contextValues = useOpenerContext();
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
