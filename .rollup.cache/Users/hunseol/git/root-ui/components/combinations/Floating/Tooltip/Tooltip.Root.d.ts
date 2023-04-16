import * as React from 'react';
import { RootUIGroupContextValues } from '~/system';
import { TooltipOptions } from './Tooltip.types';
export interface TooltipProps extends TooltipOptions, RootUIGroupContextValues {
    children: React.ReactNode;
}
export declare const TooltipRoot: ({ children, scale, ...options }: TooltipProps) => JSX.Element;
