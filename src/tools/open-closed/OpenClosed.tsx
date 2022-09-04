import React from 'react';

export const OpenClosedContext = React.createContext<OpenClosedState | null>(null);
OpenClosedContext.displayName = 'OpenClosedContext';

export enum OpenClosedState {
  Open,
  Closed,
}

export function useOpenClosed() {
  return React.useContext(OpenClosedContext);
}

export interface OpenClosedProviderProps {
  value: OpenClosedState;
  children: React.ReactNode;
}

export function OpenClosedProvider({ value, children }: OpenClosedProviderProps): React.ReactElement {
  return <OpenClosedContext.Provider value={value}>{children}</OpenClosedContext.Provider>;
}
