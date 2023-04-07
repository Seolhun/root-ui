import * as React from 'react';
import { RootIntent, RootScale } from '~/system';
type ElementType = HTMLSelectElement;
type ElementProps = React.SelectHTMLAttributes<ElementType>;
export interface SelectProps extends ElementProps {
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
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export {};
