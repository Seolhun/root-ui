import { FloatingPortal, useDelayGroup } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useId, useMergeRefs } from '~/hooks';

import { useDropdownContext } from './useDropdownContext';

const CLASSNAME = 'Root__Dropdown__Panel';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DropdownPanelProps {}

export const DropdownPanel = React.forwardRef<ElementType, ElementProps & DropdownPanelProps>(
  ({ className, children, ...others }, ref) => {
    const contextValues = useDropdownContext();
    const tooltipId = useId();
    const mergedRef = useMergeRefs(contextValues?.refs.setFloating || null, ref);

    useDelayGroup(contextValues.context, {
      id: tooltipId,
    });

    const { floatingStyles, getFloatingProps, root, zIndex } = contextValues;
    return (
      <FloatingPortal root={root}>
        {contextValues?.open && (
          <div
            style={{
              left: contextValues.x ?? 0,
              position: contextValues?.strategy,
              top: contextValues.y ?? 0,
              visibility: contextValues.x == null ? 'hidden' : 'visible',
              zIndex: zIndex ?? 1e7,
              ...floatingStyles,
              ...others.style,
            }}
            className={clsx(CLASSNAME, className)}
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
