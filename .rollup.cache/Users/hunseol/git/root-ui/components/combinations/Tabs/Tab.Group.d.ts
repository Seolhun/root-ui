import * as React from 'react';
import { RootIntent, RootScale } from '../../../system';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface TabGroupProps extends ElementProps {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
    /**
     * @default primary
     */
    intent?: RootIntent;
    /**
     * Tab default index
     */
    defaultIndex?: number;
    /**
     * Tab onChange
     */
    onChangeTab?: (index: number) => void;
    /**
     * Selected tab index
     */
    selectedIndex?: number;
    /**
     * Tab direction
     */
    vertical?: boolean;
    /**
     * Is tab manual?
     */
    manual?: boolean;
}
export declare const TabGroup: React.ForwardRefExoticComponent<TabGroupProps & React.RefAttributes<HTMLDivElement>>;
export {};
