import React from 'react';

import { DrawerOnHideCallback } from './Drawer.types';

export type DrawerContextValues = DrawerOnHideCallback;

const DrawerContext = React.createContext<DrawerContextValues>(() => null);

export function useDrawerContext() {
  return React.useContext(DrawerContext);
}

export interface DrawerContextProviderProps {
  children: React.ReactNode;

  onHide: DrawerOnHideCallback;
}

export function DrawerContextProvider({ children, onHide }: DrawerContextProviderProps) {
  const contextValue = React.useMemo(() => onHide, [onHide]);

  return <DrawerContext.Provider value={contextValue}>{children}</DrawerContext.Provider>;
}

export default DrawerContextProvider;
