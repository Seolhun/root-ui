import * as React from 'react';

import { TooltipOptions } from './Tooltip.types';
import { TooltipContext, useTooltip } from './useTooltipContext';

export interface TooltipProps extends TooltipOptions {
  children: React.ReactNode;
}

export const TooltipProvider = ({ children, ...options }: TooltipProps): JSX.Element => {
  const tooltipValues = useTooltip(options);

  return <TooltipContext.Provider value={tooltipValues}>{children}</TooltipContext.Provider>;
};
