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
  ({ className, children, onClick, ...others }, ref) => {
    const { setSidebarOpen } = useLayoutContext();

    const toggle = React.useCallback(() => {
      setSidebarOpen((prev) => !prev);
    }, [setSidebarOpen]);

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
