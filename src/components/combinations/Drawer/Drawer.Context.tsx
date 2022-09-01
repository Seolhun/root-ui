import React from 'react';

import { DrawerOnHideCallback } from './Drawer.types';

export type DrawerContextValues = DrawerOnHideCallback;

const DrawerContext = React.createContext<DrawerContextValues>(() => null);

export function useDrawerContext() {
  return React.useContext(DrawerContext);
}

export interface DrawerContextProviderProps {
  children: React.ReactNode;

  onClose: DrawerOnHideCallback;
}

export function DrawerContextProvider({ children, onClose }: DrawerContextProviderProps) {
  const contextValue = React.useMemo(() => onClose, [onClose]);

  return <DrawerContext.Provider value={contextValue}>{children}</DrawerContext.Provider>;
}

export default DrawerContextProvider;
