import * as React from 'react';
import { RootIntent, RootScale } from '~/system';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface LoaderProps extends ElementProps {
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
export declare const Loader: React.ForwardRefExoticComponent<LoaderProps & React.RefAttributes<HTMLDivElement>>;
export {};
