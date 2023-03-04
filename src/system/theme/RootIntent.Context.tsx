import * as React from 'react';

import { RootIntent } from './RootTheme.types';

export interface RootIntentContextValues {
  intent: RootIntent;
}

export const RootIntentContext = React.createContext<RootIntentContextValues>(
  null as unknown as RootIntentContextValues,
);
RootIntentContext.displayName = 'RootIntentContext';

export interface RootIntentProviderProps extends RootIntentContextValues {
  children: React.ReactNode;
}

export function RootIntentProvider({ children, intent }: RootIntentProviderProps) {
  const contextValues = React.useMemo(() => {
    return {
      intent,
    };
  }, [intent]);

  return <RootIntentContext.Provider value={contextValues}>{children}</RootIntentContext.Provider>;
}

export function useRootIntentContext() {
  return React.useContext(RootIntentContext);
}
