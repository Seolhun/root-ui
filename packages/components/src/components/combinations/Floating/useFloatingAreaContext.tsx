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

export interface FloatingAreaProps {
  children: React.ReactNode;
}

export const FloatingAreaProvider = ({ children }: FloatingAreaProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <FloatingAreaContext.Provider value={ref}>
      {children}
      <div id="alli-floating-area" ref={ref} />
    </FloatingAreaContext.Provider>
  );
};
