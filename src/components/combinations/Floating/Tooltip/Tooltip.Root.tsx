import * as React from 'react';

import { TooltipOptions } from './Tooltip.types';
import { TooltipContext, useTooltip } from './useTooltipContext';

import { RootScale, RootUIProvider } from '../../../../system';

export interface TooltipProps extends TooltipOptions {
  children: React.ReactNode;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const TooltipRoot = ({ children, scale = 'md', ...options }: TooltipProps): JSX.Element => {
  const tooltipValues = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltipValues}>
      <RootUIProvider scale={scale}>{children}</RootUIProvider>
    </TooltipContext.Provider>
  );
};
