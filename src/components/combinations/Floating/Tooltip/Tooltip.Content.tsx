import * as React from 'react';
import { FloatingPortal, useDelayGroup, useDelayGroupContext, useMergeRefs } from '@floating-ui/react';

import { useTooltipContext } from './useTooltipContext';
import clsx from 'clsx';

type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TooltipContentProps extends ElementProps {
  root?: HTMLElement | null;
}

export const TooltipContent = React.forwardRef<ElementType, TooltipContentProps>(
  ({ root, children, className, ...others }, ref) => {
    const contextValues = useTooltipContext();
    const { setCurrentId } = useDelayGroupContext();
    const tooltipId = React.useId();

    const mergedRef = useMergeRefs([contextValues?.refs.setFloating || null, ref]);

    useDelayGroup(contextValues.context, {
      id: tooltipId,
    });

    React.useLayoutEffect(() => {
      if (contextValues.open) {
        setCurrentId(tooltipId);
      }
    }, [contextValues.open, tooltipId, setCurrentId]);

    return (
      <FloatingPortal root={root}>
        {contextValues?.open && (
          <div
            {...contextValues?.getFloatingProps(others)}
            ref={mergedRef}
            className={clsx(
              className,
              'max-w-100',
              'py-1 px-2',
              'shadow-sm rounded-sm',
              'bg-cream dark:bg-space text-space dark:text-cream',
            )}
            style={{
              ...others.style,
              position: contextValues?.strategy,
              top: contextValues?.y ?? 0,
              left: contextValues?.x ?? 0,
              visibility: contextValues?.x == null ? 'hidden' : 'visible',
              zIndex: 1e7,
            }}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  },
);
