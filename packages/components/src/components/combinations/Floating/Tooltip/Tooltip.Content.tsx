import { FloatingPortal, useDelayGroup, useDelayGroupContext, useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useIsoMorphicEffect } from '~/hooks';

import { useTooltipContext } from './useTooltipContext';

type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TooltipContentProps extends ElementProps {}

export const TooltipContent = React.forwardRef<ElementType, TooltipContentProps>(
  ({ className, children, ...others }, ref) => {
    const contextValues = useTooltipContext();
    const { setCurrentId } = useDelayGroupContext();
    const tooltipId = React.useId();

    const mergedRef = useMergeRefs([contextValues?.refs.setFloating || null, ref]);

    useDelayGroup(contextValues.context, {
      id: tooltipId,
    });

    useIsoMorphicEffect(() => {
      if (contextValues.open) {
        setCurrentId(tooltipId);
      }
    }, [contextValues.open, tooltipId, setCurrentId]);

    return (
      <FloatingPortal root={contextValues.root}>
        {contextValues?.open && (
          <div
            {...contextValues?.getFloatingProps(others)}
            className={clsx(
              className,
              'max-w-150',
              'py-1 px-2',
              'rounded',
              'border border-cream-3 dark:border-space-3',
              'text-space-2 dark:text-cream-2',
              'bg-cream-1 dark:bg-space-1',
            )}
            style={{
              ...others.style,
              left: contextValues?.x ?? 0,
              position: contextValues?.strategy,
              top: contextValues?.y ?? 0,
              visibility: contextValues?.x == null ? 'hidden' : 'visible',
              zIndex: 1e7,
            }}
            ref={mergedRef}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  },
);
