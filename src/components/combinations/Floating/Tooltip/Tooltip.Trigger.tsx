import * as React from 'react';
import { useMergeRefs } from '@floating-ui/react';

import { useTooltipContext } from './useTooltipContext';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const TooltipTrigger = React.forwardRef<ElementType, ElementProps>(({ children, ...props }, ref) => {
  const contextValues = useTooltipContext();
  const childrenRef = (children as any)?.ref;

  const mergedRef = useMergeRefs([contextValues?.refs.setReference, ref, childrenRef]);

  return (
    <div
      ref={mergedRef}
      data-state={contextValues?.open ? 'open' : 'closed'}
      {...contextValues?.getReferenceProps(props)}
    >
      {children}
    </div>
  );
});
