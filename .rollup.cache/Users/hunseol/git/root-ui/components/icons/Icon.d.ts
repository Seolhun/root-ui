import * as HeroIcon from '@heroicons/react/outline';
import * as React from 'react';
import { RootInherit, RootIntent, RootScale } from '../../system';
type ElementProps = React.HTMLAttributes<Element>;
export interface IconProps {
    /**
     * Icon name
     */
    icon: keyof typeof HeroIcon;
    /**
     * @default inherit
     */
    intent?: RootIntent | RootInherit;
    /**
     * Set this to change scale
     * @default inherit
     */
    scale?: RootScale;
}
declare const Icon: React.ForwardRefExoticComponent<IconProps & ElementProps & React.RefAttributes<HTMLDivElement>>;
export { Icon };
export default Icon;
