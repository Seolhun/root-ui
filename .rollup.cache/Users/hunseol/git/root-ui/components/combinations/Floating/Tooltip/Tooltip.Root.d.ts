import * as React from 'react';
import { TooltipOptions } from './Tooltip.types';
import { RootScale } from '../../../../system';
export interface TooltipProps extends TooltipOptions {
    children: React.ReactNode;
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
}
export declare const TooltipRoot: ({ children, scale, ...options }: TooltipProps) => JSX.Element;
