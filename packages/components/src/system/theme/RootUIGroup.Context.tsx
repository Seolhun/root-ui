import * as React from 'react';

import { RootIntent, RootScale } from './RootTheme.types';

/**
 * @deprecated Use className only
 */
export interface RootUIGroupContextValues {
  defaultIntent?: RootIntent;
  defaultScale?: RootScale;

  intent?: RootIntent;
  scale?: RootScale;
}

export const RootUIGroupContext = React.createContext<RootUIGroupContextValues>({});
RootUIGroupContext.displayName = 'RootUIGroupContext';

/**
 * @deprecated Use className only
 */
export interface RootUIGroupProviderProps extends RootUIGroupContextValues {
  children: React.ReactNode;
}

/**
 * @deprecated Use className only
 */
export function RootUIGroupProvider({
  children,
  defaultIntent,
  defaultScale,
  intent,
  scale,
}: RootUIGroupProviderProps) {
  const contextValues = React.useMemo(() => {
    return {
      defaultIntent,
      defaultScale,
      intent,
      scale,
    };
  }, [intent, defaultIntent, scale, defaultScale]);

  return <RootUIGroupContext.Provider value={contextValues}>{children}</RootUIGroupContext.Provider>;
}

export function useRootUIGroupContext() {
  return React.useContext(RootUIGroupContext);
}
