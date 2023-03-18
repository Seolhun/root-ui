import * as React from 'react';

import { DrawerContext, DrawerContextValues } from './Drawer.Context';
import { DrawerFloating } from './Drawer.Floating';
import { DrawerPlacement } from './Drawer.types';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerProps extends DrawerContextValues {
  /**
   * Set this to displayed placement
   * @default right
   */
  placement?: DrawerPlacement;

  /**
   * To show Drawer
   */
  show: boolean;

  /**
   * To close Drawer (Escape)
   */
  onClose: () => void;

  /**
   * To confirm Drawer (Enter)
   */
  onConfirm?: () => void;
}

export const DrawerRoot = React.forwardRef<ElementType, ElementProps & DrawerProps>(
  ({ children, show, onClose, onConfirm, placement = 'right', root, ...others }, ref) => {
    const contextValue = React.useMemo(() => {
      return {
        show,
        onClose,
        onConfirm,
        placement,
        root,
      };
    }, [onClose, onConfirm, placement, root, show]);

    return (
      <DrawerContext.Provider value={contextValue}>
        <DrawerFloating {...others} ref={ref}>
          {children}
        </DrawerFloating>
      </DrawerContext.Provider>
    );
  },
);
