import * as React from 'react';

import { DrawerContext, DrawerContextValues } from './Drawer.Context';
import { DrawerFloating } from './Drawer.Floating';
import { DrawerPlacement } from './Drawer.types';

export interface DrawerProps extends DrawerContextValues {
  children?: React.ReactNode;

  /**
   * To close Drawer (Escape)
   */
  onClose: () => void;

  /**
   * To confirm Drawer (Enter)
   */
  onConfirm?: () => void;

  /**
   * Set this to displayed placement
   * @default right
   */
  placement?: DrawerPlacement;

  /**
   * To show Drawer
   */
  show: boolean;
}

export const DrawerRoot = ({
  children,
  onClose,
  onConfirm,
  placement = 'right',
  root,
  show,
  ...others
}: DrawerProps) => {
  const contextValue = React.useMemo(() => {
    return {
      onClose,
      onConfirm,
      placement,
      root,
      show,
    };
  }, [onClose, onConfirm, placement, root, show]);

  return (
    <DrawerContext.Provider value={contextValue}>
      <DrawerFloating {...others}>{children}</DrawerFloating>
    </DrawerContext.Provider>
  );
};
