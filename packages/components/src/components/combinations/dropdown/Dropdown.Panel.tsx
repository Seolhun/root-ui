import { FloatingPortal } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useMergeRefs } from '~/hooks';
import { ElementRef } from '~/types';

import { useDropdownContext } from './useDropdownContext';

const CLASSNAME = 'Root__Dropdown__Panel';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DropdownPanelProps {
  /**
   * Portal target element
   */
  root?: ElementRef<HTMLElement>;
}

export const DropdownPanel = React.forwardRef<ElementType, ElementProps & DropdownPanelProps>(
  ({ className, children, root, ...others }, ref) => {
    const contextValues = useDropdownContext();
    const mergedRef = useMergeRefs(contextValues?.refs.setFloating || null, ref);

    const { zIndex } = contextValues;
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
