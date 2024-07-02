'use client';

import * as React from 'react';

export interface NavContextValues {}

export interface NavProviderProps {
  children: React.ReactNode;
}

export const NavContext = React.createContext(null as unknown as NavContextValues);

export function NavProvider({ children }: NavProviderProps) {
  const contextValue = React.useMemo<NavContextValues>(() => {
    return {};
  }, []);

  return <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>;
}

export function useNavContext() {
  return React.useContext(NavContext);
}
