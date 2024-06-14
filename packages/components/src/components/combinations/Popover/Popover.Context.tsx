import * as React from 'react';

export interface PopoverContextValues {
  /**
   * Floating Portal root element
   */
  root?: HTMLElement | null;
}

export const PopoverContext = React.createContext<PopoverContextValues>({});
PopoverContext.displayName = 'PopoverContext';

export function usePopoverContext() {
  return React.useContext(PopoverContext);
}
