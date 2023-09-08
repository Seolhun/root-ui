import * as React from 'react';

import { RootUIGroupContextValues } from './RootUIGroup.Context';

export interface RootUIContextValues extends RootUIGroupContextValues {}

export const RootUIContext = React.createContext<RootUIContextValues>({});
RootUIContext.displayName = 'RootUIContext';

export interface RootUIProviderProps extends RootUIContextValues {
  children: React.ReactNode;
}

export function RootUIProvider({ children, defaultIntent, defaultScale, intent, scale }: RootUIProviderProps) {
  const contextValues = React.useMemo(() => {
    return {
      defaultIntent,
      defaultScale,
      intent,
      scale,
    };
  }, [intent, defaultIntent, scale, defaultScale]);

  return <RootUIContext.Provider value={contextValues}>{children}</RootUIContext.Provider>;
}

export function useRootUIContext() {
  return React.useContext(RootUIContext);
}
