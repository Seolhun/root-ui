import * as React from 'react';
import { RootIntent, RootScale } from '~/system';
type ElementType = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<ElementType>;
export interface CheckboxProps extends ElementProps {
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
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export {};
