import * as React from 'react';
import { RootScale } from '../../../system';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface ModalPanelProps extends ElementProps {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
}
export declare const ModalPanel: React.ForwardRefExoticComponent<ModalPanelProps & React.RefAttributes<HTMLDivElement>>;
export {};
