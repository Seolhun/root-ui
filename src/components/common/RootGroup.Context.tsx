import * as React from 'react';

import { RootIntent, RootScale } from '~/system';

export interface RootGroupContextValues {
  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;

  /**
   * @default primary
   */
  intent?: RootIntent;
}

const DEFAULT_VALUES: Required<RootGroupContextValues> = {
  scale: 'md',
  intent: 'primary',
};

const RootGroupContext = React.createContext<Required<RootGroupContextValues>>(DEFAULT_VALUES);

export interface RootGroupProviderProps {
  children: React.ReactNode;

  value?: RootGroupContextValues;
}

export function RootGroupProvider({ children, value = DEFAULT_VALUES }: RootGroupProviderProps) {
  const contextValue = React.useMemo(() => {
    return {
      ...DEFAULT_VALUES,
      ...value,
    };
  }, [value]);

  return <RootGroupContext.Provider value={contextValue}>{children}</RootGroupContext.Provider>;
}

export function useRootGroupContext() {
  return React.useContext(RootGroupContext);
}
