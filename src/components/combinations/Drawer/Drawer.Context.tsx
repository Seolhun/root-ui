import * as React from 'react';

import { DrawerPlacement } from './Drawer.types';

export interface DrawerContextValues {
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

  /**
   * Set this to displayed placement
   * @default right
   */
  placement?: DrawerPlacement;

  /**
   * Floating Portal root element
   */
  root?: HTMLElement | null;
}

export const DrawerContext = React.createContext<DrawerContextValues>({
  show: false,

  onClose: () => null,
});
DrawerContext.displayName = 'DrawerContext';

export function useDrawerContext() {
  return React.useContext(DrawerContext);
}

export interface DrawerContextProviderProps extends DrawerContextValues {
  children: React.ReactNode;
}
