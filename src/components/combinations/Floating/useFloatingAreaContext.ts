import * as React from 'react';

export type FloatingAreaContextValues<E extends HTMLElement = HTMLElement> = React.RefObject<E>;

type ContextType = FloatingAreaContextValues;
export const FloatingAreaContext = React.createContext<ContextType>(null as unknown as ContextType);

export const useFloatingAreaContext = (): ContextType => {
  const context = React.useContext(FloatingAreaContext);

  if (context == null) {
    throw new Error('FloatingArea components must be wrapped in <FloatingArea />');
  }
  return context;
};
