import * as React from 'react';
import { RootIntent, RootScale } from '../../../system';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ProgressBarProps extends ElementProps {
    /**
     * Percentage
     * @default 0
     */
    progress?: number;
    /**
     * Badge
     */
    badge?: React.ReactNode;
    /**
     * Progressbar UI Type
     */
    simple?: boolean;
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
    /**
     * @default primary
     */
    intent?: RootIntent;
}
declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
export { ProgressBar };
export default ProgressBar;
