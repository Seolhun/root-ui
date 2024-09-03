import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useTooltipContext } from './useTooltipContext';

type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export const TooltipTrigger = React.forwardRef<ElementType, ElementProps>(({ className, children, ...props }, ref) => {
  const contextValues = useTooltipContext();
  const childrenRef = (children as any)?.ref;

  const mergedRef = useMergeRefs(contextValues?.refs.setReference, ref, childrenRef);

  return (
    <button
      {...props}
      className={clsx(className, 'inline-block')}
      data-state={contextValues?.open ? 'open' : 'closed'}
      ref={mergedRef}
      type="button"
      {...contextValues?.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});
