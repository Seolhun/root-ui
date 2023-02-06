import * as React from 'react';

import { FloatingAreaContext } from './useFloatingAreaContext';

export interface FloatingAreaProps {
  children: React.ReactNode;
}

export const FloatingAreaProvider = ({ children }: FloatingAreaProps): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <FloatingAreaContext.Provider value={ref}>
      {children}
      <div id="alli-floating-area" ref={ref} />
    </FloatingAreaContext.Provider>
  );
};
