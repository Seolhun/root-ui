import * as React from 'react';
import { RootScale } from '~/system';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormHelpProps extends ElementProps {
    /**
     * scale
     * @default 'md'
     */
    scale?: RootScale;
}
export declare const FormHelp: React.ForwardRefExoticComponent<FormHelpProps & React.RefAttributes<HTMLParagraphElement>>;
export {};
