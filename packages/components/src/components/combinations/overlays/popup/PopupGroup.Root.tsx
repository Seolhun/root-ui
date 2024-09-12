import * as React from 'react';

import { PopupContext, PopupContextValues, popupReducer } from './PopupContext';

export interface PopupGroupRootProps {
  children: React.ReactNode;
}

export const PopupGroupRoot = ({ children }: PopupGroupRootProps) => {
  const [popups, dispatch] = React.useReducer(popupReducer, []);

  const contextValues = React.useMemo<PopupContextValues>(() => {
    return [popups, dispatch];
  }, [popups]);

  return <PopupContext.Provider value={contextValues}>{children}</PopupContext.Provider>;
};
