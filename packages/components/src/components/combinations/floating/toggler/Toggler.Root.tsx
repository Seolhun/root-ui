import { FloatingDelayGroup } from '@floating-ui/react';
import * as React from 'react';

import { TogglerDelay, TogglerOptions } from './Toggler.types';
import { TogglerContext, useToggler } from './useTogglerContext';

export interface TogglerProps extends TogglerOptions {
  children: React.ReactNode;
  /**
   * Open/Close delay
   */
  delay?: TogglerDelay;
}

const DEFAULT_DELAY: TogglerDelay = {
  close: 100,
  open: 300,
};

export const TogglerRoot = ({ children, delay, ...options }: TogglerProps) => {
  const tooltipValues = useToggler(options);

  return (
    <TogglerContext.Provider value={tooltipValues}>
      <FloatingDelayGroup delay={delay || DEFAULT_DELAY}>{children}</FloatingDelayGroup>
    </TogglerContext.Provider>
  );
};
