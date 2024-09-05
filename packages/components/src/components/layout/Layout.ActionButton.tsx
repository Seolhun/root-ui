import clsx from 'clsx';
import * as React from 'react';

import { useLayoutContext } from './Layout.Context';

const CLASSNAME = 'Root__Layout__ActionButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface LayoutActions {
  toggleSidebar: () => void;
}

export interface LayoutActionButtonProps extends Omit<ElementProps, 'children'> {
  children?: ((action: LayoutActions) => React.ReactNode) | React.ReactNode;
}

export const LayoutActionButton = React.forwardRef<ElementType, LayoutActionButtonProps>(
  ({ children, className, onClick, ...others }, ref) => {
    const { setSidebarStatus } = useLayoutContext();

    const toggle = React.useCallback(() => {
      setSidebarStatus((prev) => {
        switch (prev) {
          case 'expanded': {
            return 'collapsed';
          }
          case 'collapsed': {
            return 'hidden';
          }
          default: {
            return 'expanded';
          }
        }
      });
    }, [setSidebarStatus]);

    const actions = React.useMemo<LayoutActions>(() => {
      return {
        toggleSidebar: toggle,
      };
    }, [toggle]);

    return (
      <button {...others} className={clsx(CLASSNAME, className)} ref={ref}>
        {typeof children === 'function' ? children(actions) : children}
      </button>
    );
  },
);
