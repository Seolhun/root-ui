import { FloatingPortal, useDelayGroup, useDelayGroupContext, useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { toScaleMatch, useRootUIContext } from '~/system';

import { useTooltipContext } from './useTooltipContext';

type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TooltipContentProps extends ElementProps {}

export const TooltipContent = React.forwardRef<ElementType, TooltipContentProps>(
  ({ children, className, ...others }, ref) => {
    const contextValues = useTooltipContext();
    const { setCurrentId } = useDelayGroupContext();
    const tooltipId = React.useId();
    const { scale } = useRootUIContext();

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
      <FloatingPortal root={contextValues.root}>
        {contextValues?.open && (
          <div
            {...contextValues?.getFloatingProps(others)}
            ref={mergedRef}
            className={clsx(
              className,
              'max-w-150',
              'py-1 px-2',
              'rounded',
              'border border-cream-3 dark:border-space-3',
              'bg-cream-1 text-space-1',
              'dark:bg-space-1 dark:text-cream-1',
              toScaleMatch({
                xs: () => 'scale-text-xs scale-p-xs',
                sm: () => 'scale-text-sm scale-p-sm',
                md: () => 'scale-text-md scale-p-md',
                lg: () => 'scale-text-lg scale-p-lg',
                xl: () => 'scale-text-xl scale-p-xl',
              })(scale),
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
