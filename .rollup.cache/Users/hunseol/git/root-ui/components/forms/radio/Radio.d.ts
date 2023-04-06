import * as React from 'react';
import { RootIntent, RootScale } from '~/system';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;
export interface RadioProps extends ElementProps {
    htmlFor?: string;
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
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export {};
