import * as React from 'react';
import { RootIntent, RootScale } from '../../../system';
export interface SwitchProps {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
    /**
     * @default primary
     */
    intent?: RootIntent;
    children?: React.ReactNode;
    className?: string;
    name?: string;
    value?: string;
    onChange?: (checked: boolean) => void;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
