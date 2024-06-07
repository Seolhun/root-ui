import * as React from 'react';

import { RootUIGroupContextValues, RootUIGroupProvider } from '../../../../system';
import { TooltipOptions } from './Tooltip.types';
import { TooltipContext, useTooltip } from './useTooltipContext';

export interface TooltipProps extends TooltipOptions, RootUIGroupContextValues {
  children: React.ReactNode;
}

export const TooltipRoot = ({ children, scale = 'md', ...options }: TooltipProps) => {
  const tooltipValues = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltipValues}>
      <RootUIGroupProvider scale={scale}>{children}</RootUIGroupProvider>
    </TooltipContext.Provider>
  );
};
