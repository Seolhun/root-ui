import * as React from 'react';

import { DrawerPlacement } from './Drawer.types';

export interface DrawerContextValues {
  /**
   * Set this to displayed placement
   * @default right
   */
  placement?: DrawerPlacement;
}

export const DrawerContext = React.createContext(null as unknown as DrawerContextValues);
DrawerContext.displayName = 'DrawerContext';

export function useDrawerContext() {
  return React.useContext(DrawerContext);
}

export interface DrawerContextProviderProps extends DrawerContextValues {
  children: React.ReactNode;
}
