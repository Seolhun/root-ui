import * as OutlineHeroIcon from '@heroicons/react/24/outline';
import * as SolidHeroIcon from '@heroicons/react/24/solid';
import * as React from 'react';
import { RootIntentInherit, RootIntent, RootScale } from '../../system';
type ElementProps = React.HTMLAttributes<Element>;
export interface IconProps extends ElementProps {
    /**
     * Icon name
     */
    icon: keyof typeof SolidHeroIcon | keyof typeof OutlineHeroIcon;
    /**
     * @default inherit
     */
    intent?: RootIntent | RootIntentInherit;
    /**
     * Set this to change scale
     * @default inherit
     */
    scale?: RootScale;
    /**
     * Outlined icons
     */
    outlined?: boolean;
}
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLDivElement>>;
export {};
