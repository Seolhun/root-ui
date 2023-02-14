import * as React from 'react';
import { RootScale, RootScaleProvider } from '../../../../system';

import { TooltipOptions } from './Tooltip.types';
import { TooltipContext, useTooltip } from './useTooltipContext';

export interface TooltipProps extends TooltipOptions {
  children: React.ReactNode;

  /**
   * Set this to change scale
   * @default md
   */
  scale?: RootScale;
}

export const TooltipProvider = ({ children, scale = 'md', ...options }: TooltipProps): JSX.Element => {
  const tooltipValues = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltipValues}>
      <RootScaleProvider scale={scale}>{children}</RootScaleProvider>
    </TooltipContext.Provider>
  );
};
