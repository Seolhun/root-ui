import * as React from 'react';
import { DrawerContextValues } from './Drawer.Context';
import { DrawerPlacement } from './Drawer.types';
export interface DrawerProps extends DrawerContextValues {
    children: React.ReactNode;
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
export declare const DrawerRoot: ({ children, show, onClose, onConfirm, placement, root, ...others }: DrawerProps) => JSX.Element;
