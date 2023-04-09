import * as React from 'react';
import { RootScale } from '~/system';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormHelpProps extends ElementProps {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
}
export declare const FormHelp: React.ForwardRefExoticComponent<FormHelpProps & React.RefAttributes<HTMLParagraphElement>>;
export {};
