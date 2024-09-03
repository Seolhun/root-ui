import { FloatingPortal, useDelayGroup } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useTooltipContext } from './useTooltipContext';

const CLASSNAME = 'Root__Tooltip__Content';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TooltipContentProps extends ElementProps {}

export const TooltipContent = React.forwardRef<ElementType, TooltipContentProps>(
  ({ className, children, ...others }, ref) => {
    const contextValues = useTooltipContext();
    const tooltipId = React.useId();
    const mergedRef = useMergeRefs(contextValues?.refs.setFloating || null, ref);

    useDelayGroup(contextValues.context, {
      id: tooltipId,
    });

    const { floatingStyles, getFloatingProps, root, zIndex } = contextValues;
    return (
      <FloatingPortal root={root}>
        {contextValues?.open && (
          <div
            {...contextValues?.getFloatingProps(others)}
            className={clsx(
              CLASSNAME,
              className,
              'max-w-150',
              'py-1 px-2',
              'rounded',
              'border border-cream-3 dark:border-space-3',
              'text-space-2 dark:text-cream-2',
              'bg-cream-1 dark:bg-space-1',
            )}
            style={{
              left: contextValues.x ?? 0,
              position: contextValues?.strategy,
              top: contextValues.y ?? 0,
              visibility: contextValues.x == null ? 'hidden' : 'visible',
              zIndex: zIndex ?? 1e7,
              ...floatingStyles,
              ...others.style,
            }}
            ref={mergedRef}
            {...getFloatingProps(others)}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  },
);
