import * as React from 'react';

import { RootUIGroupContextValues } from './RootUIGroup.Context';

export interface RootUIContextValues extends RootUIGroupContextValues {}

export const RootUIContext = React.createContext<RootUIContextValues>({});
RootUIContext.displayName = 'RootUIContext';

export interface RootUIProviderProps extends RootUIContextValues {
  children: React.ReactNode;
}

export function RootUIProvider({ children, intent, defaultIntent, scale, defaultScale }: RootUIProviderProps) {
  const contextValues = React.useMemo(() => {
    return {
      intent,
      defaultIntent,
      scale,
      defaultScale,
    };
  }, [intent, defaultIntent, scale, defaultScale]);

  return <RootUIContext.Provider value={contextValues}>{children}</RootUIContext.Provider>;
}

export function useRootUIContext() {
  return React.useContext(RootUIContext);
}
