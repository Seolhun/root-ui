import * as React from 'react';
import { RootScale } from '~/system';
type ElementType = HTMLLabelElement;
type ElementProps = React.LabelHTMLAttributes<ElementType>;
export interface FormLabelProps extends ElementProps {
    /**
     * scale
     * @default 'md'
     */
    scale?: RootScale;
    required?: boolean;
}
export declare const FormLabel: React.ForwardRefExoticComponent<FormLabelProps & React.RefAttributes<HTMLLabelElement>>;
export {};
