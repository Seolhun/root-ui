import React from 'react';

interface ForcePortalRootProps {
  children: React.ReactNode;
  force: boolean;
}

const ForcePortalRootContext = React.createContext(false);

export function ForcePortalRoot({ children, force }: ForcePortalRootProps) {
  return <ForcePortalRootContext.Provider value={force}>{children}</ForcePortalRootContext.Provider>;
}

export function useForcePortalRoot() {
  return React.useContext(ForcePortalRootContext);
}
