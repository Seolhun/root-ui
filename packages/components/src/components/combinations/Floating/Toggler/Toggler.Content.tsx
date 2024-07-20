import { FloatingPortal, useDelayGroup, useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useTogglerContext } from './useTogglerContext';

const CLASSNAME = 'Root__Toggler__Content';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TogglerContentProps extends ElementProps {}

export const TogglerContent = React.forwardRef<ElementType, TogglerContentProps>(
  ({ className, children, ...others }, ref) => {
    const contextValues = useTogglerContext();
    const tooltipId = React.useId();

    const mergedRef = useMergeRefs([contextValues?.refs.setFloating || null, ref]);

    useDelayGroup(contextValues.context, {
      id: tooltipId,
    });

    const { root, zIndex } = contextValues;
    return (
      <FloatingPortal root={root}>
        {contextValues?.open && (
          <div
            style={{
              ...others.style,
              left: contextValues?.x ?? 0,
              position: contextValues?.strategy,
              top: contextValues?.y ?? 0,
              visibility: contextValues?.x == null ? 'hidden' : 'visible',
              zIndex: zIndex ?? 1e7,
            }}
            className={clsx(CLASSNAME, className)}
            ref={mergedRef}
            {...contextValues?.getFloatingProps(others)}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  },
);
