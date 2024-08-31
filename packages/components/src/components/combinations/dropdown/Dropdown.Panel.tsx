import { FloatingPortal } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';

import { useDropdownContext } from './useDropdownContext';

const CLASSNAME = 'Root__Dropdown__Panel';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DropdownPanelProps extends ElementProps {}

export const DropdownPanel = React.forwardRef<ElementType, DropdownPanelProps>(
  ({ className, children, ...others }, ref) => {
    const contextValues = useDropdownContext();
    const mergedRef = useMergeRefs(contextValues?.refs.setFloating || null, ref);

    const { root, zIndex } = contextValues;
    return (
      <FloatingPortal root={root}>
        {contextValues?.open && (
          <div
            {...contextValues?.getFloatingProps(others)}
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
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  },
);
