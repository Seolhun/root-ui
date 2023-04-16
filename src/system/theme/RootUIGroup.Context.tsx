import * as React from 'react';

import { RootScale, RootIntent } from './RootTheme.types';

export interface RootUIGroupContextValues {
  scale?: RootScale;
  defaultScale?: RootScale;

  intent?: RootIntent;
  defaultIntent?: RootIntent;
}

export const RootUIGroupContext = React.createContext<RootUIGroupContextValues>({});
RootUIGroupContext.displayName = 'RootUIGroupContext';

export interface RootUIGroupProviderProps extends RootUIGroupContextValues {
  children: React.ReactNode;
}

export function RootUIGroupProvider({
  children,
  intent,
  defaultIntent,
  scale,
  defaultScale,
}: RootUIGroupProviderProps) {
  const contextValues = React.useMemo(() => {
    return {
      intent,
      defaultIntent,
      scale,
      defaultScale,
    };
  }, [intent, defaultIntent, scale, defaultScale]);

  return <RootUIGroupContext.Provider value={contextValues}>{children}</RootUIGroupContext.Provider>;
}

export function useRootUIGroupContext() {
  return React.useContext(RootUIGroupContext);
}
