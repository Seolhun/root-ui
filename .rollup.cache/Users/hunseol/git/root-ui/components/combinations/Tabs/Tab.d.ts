import * as React from 'react';
import { RootIntent, RootScale } from '../../../system';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;
export interface TabProps extends ElementProps {
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
export declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLLIElement>>;
export {};
