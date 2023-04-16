import * as React from 'react';

import { RootUIGroupContextValues } from './RootUIGroup.Context';

export interface RootUIContextValues extends RootUIGroupContextValues {}

export const RootUIContext = React.createContext<RootUIContextValues>({});
RootUIContext.displayName = 'RootUIContext';

export interface RootUIProviderProps extends RootUIContextValues {
  children: React.ReactNode;
}

export function RootUIProvider({ children, scale, intent }: RootUIProviderProps) {
  const contextValues = React.useMemo(() => {
    return {
      scale,
      intent,
    };
  }, [scale, intent]);

  return <RootUIContext.Provider value={contextValues}>{children}</RootUIContext.Provider>;
}

export function useRootUIContext() {
  return React.useContext(RootUIContext);
}
