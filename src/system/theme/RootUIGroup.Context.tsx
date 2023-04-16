import * as React from 'react';

import { RootScale, RootIntent, RootIntentInherit } from './RootTheme.types';
import { RootScaleNone } from './RootTheme.types';

export interface RootUIGroupContextValues {
  scale?: RootScale | RootScaleNone;

  intent?: RootIntent | RootIntentInherit;
}

export const RootUIGroupContext = React.createContext<RootUIGroupContextValues>({});
RootUIGroupContext.displayName = 'RootUIGroupContext';

export interface RootUIGroupProviderProps extends RootUIGroupContextValues {
  children: React.ReactNode;
}

export function RootUIGroupProvider({ children, scale, intent }: RootUIGroupProviderProps) {
  const contextValues = React.useMemo(() => {
    return {
      scale,
      intent,
    };
  }, [scale, intent]);

  return <RootUIGroupContext.Provider value={contextValues}>{children}</RootUIGroupContext.Provider>;
}

export function useRootUIGroupContext() {
  return React.useContext(RootUIGroupContext);
}
