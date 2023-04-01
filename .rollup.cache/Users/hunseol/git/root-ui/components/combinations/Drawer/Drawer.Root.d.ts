import * as React from 'react';
import { DrawerContextValues } from './Drawer.Context';
import { DrawerPlacement } from './Drawer.types';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface DrawerProps extends DrawerContextValues {
    /**
     * Set this to displayed placement
     * @default right
     */
    placement?: DrawerPlacement;
    /**
     * To show Drawer
     */
    show: boolean;
    /**
     * To close Drawer (Escape)
     */
    onClose: () => void;
    /**
     * To confirm Drawer (Enter)
     */
    onConfirm?: () => void;
}
export declare const DrawerRoot: React.ForwardRefExoticComponent<ElementProps & DrawerProps & React.RefAttributes<HTMLDivElement>>;
export {};
