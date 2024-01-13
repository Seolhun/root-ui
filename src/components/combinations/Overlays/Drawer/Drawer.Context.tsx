import * as React from 'react';

import { DrawerPlacement } from './Drawer.types';

export interface DrawerContextValues {
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

  /**
   * To show Drawer
   */
  show: boolean;
}

export const DrawerContext = React.createContext<DrawerContextValues>({
  onClose: () => null,

  show: false,
});
DrawerContext.displayName = 'DrawerContext';

export function useDrawerContext() {
  return React.useContext(DrawerContext);
}

export interface DrawerContextProviderProps extends DrawerContextValues {
  children: React.ReactNode;
}
