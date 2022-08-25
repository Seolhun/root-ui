import React from 'react';

interface ForcePortalRootProps {
  children: React.ReactNode;
  force: boolean;
}

const ForcePortalRootContext = React.createContext(false);

export function ForcePortalRoot(props: ForcePortalRootProps) {
  return <ForcePortalRootContext.Provider value={props.force}>{props.children}</ForcePortalRootContext.Provider>;
}

export function useForcePortalRoot() {
  return React.useContext(ForcePortalRootContext);
}
