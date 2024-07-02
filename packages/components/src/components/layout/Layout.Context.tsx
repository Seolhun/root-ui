'use client';

import * as React from 'react';

import { LayoutContextValues } from './Layout.types';

export interface LayoutProviderProps {
  children: React.ReactNode;
  /**
   * Whether the sidebar should be open by default.
   * @default true
   */
  initialSidebarOpen?: boolean;
}

export const LayoutContext = React.createContext(null as unknown as LayoutContextValues);

export function LayoutProvider({ children, initialSidebarOpen = true }: LayoutProviderProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(initialSidebarOpen);

  const contextValue = React.useMemo<LayoutContextValues>(() => {
    return {
      setSidebarOpen,
      sidebarOpen,
    };
  }, [sidebarOpen]);

  return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
}

export function useLayoutContext() {
  return React.useContext(LayoutContext);
}
