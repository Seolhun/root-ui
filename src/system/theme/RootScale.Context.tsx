import * as React from 'react';

import { RootScale } from './RootTheme.types';

export interface RootScaleContextValues {
  scale: RootScale;
}

export const RootScaleContext = React.createContext<RootScaleContextValues>(null as unknown as RootScaleContextValues);
RootScaleContext.displayName = 'RootScaleContext';

export interface StackProviderProps extends RootScaleContextValues {
  children: React.ReactNode;
}

export function RootScaleProvider({ children, scale }: StackProviderProps) {
  const contextValues = React.useMemo(() => {
    return {
      scale,
    };
  }, [scale]);

  return <RootScaleContext.Provider value={contextValues}>{children}</RootScaleContext.Provider>;
}

export function useRootScaleContext() {
  return React.useContext(RootScaleContext);
}
