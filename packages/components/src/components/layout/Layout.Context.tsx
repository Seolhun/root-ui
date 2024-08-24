'use client';

import * as React from 'react';

import { LayoutContextValues, LayoutSidebarStatus } from './Layout.types';

export interface LayoutProviderProps {
  children: React.ReactNode;
  /**
   * Sidebar size pixels in 'expanded' status.
   * @default 132
   */
  initialSidebarSize?: number;
  /**
   * Whether the sidebar should be open by default.
   * @default 'expanded'
   */
  initialSidebarStatus?: LayoutSidebarStatus;
}

export const LayoutContext = React.createContext(null as unknown as LayoutContextValues);

export function LayoutProvider({
  children,
  initialSidebarSize = 132,
  initialSidebarStatus = 'expanded',
}: LayoutProviderProps) {
  const [sidebarStatus, setSidebarStatus] = React.useState<LayoutSidebarStatus>(initialSidebarStatus);
  const [sidebarSize, setSidebarSize] = React.useState<number>(initialSidebarSize);

  const contextValue = React.useMemo<LayoutContextValues>(() => {
    return {
      setSidebarSize,
      setSidebarStatus,
      sidebarSize,
      sidebarStatus,
    };
  }, [sidebarSize, sidebarStatus]);

  return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
}

export function useLayoutContext() {
  return React.useContext(LayoutContext);
}
