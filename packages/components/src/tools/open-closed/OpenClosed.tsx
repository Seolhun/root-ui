import * as React from 'react';

export const OpenClosedContext = React.createContext<null | OpenClosedState>(null);
OpenClosedContext.displayName = 'OpenClosedContext';

export enum OpenClosedState {
  Open,
  Closed,
}

export function useOpenClosed() {
  return React.useContext(OpenClosedContext);
}

export interface OpenClosedProviderProps {
  children: React.ReactNode;
  value: OpenClosedState;
}

export function OpenClosedProvider({ children, value }: OpenClosedProviderProps): React.ReactElement {
  return <OpenClosedContext.Provider value={value}>{children}</OpenClosedContext.Provider>;
}
