import * as React from 'react';
import { FormLabelProps } from './FormLabel';
import { RootScale } from '../../system';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface FormItemProps extends ElementProps {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
    /**
     * Form label
     */
    label?: React.ReactNode;
    /**
     * Form help
     */
    help?: React.ReactNode;
    /**
     * Form label htmlFor
     */
    htmlFor?: FormLabelProps['htmlFor'];
    /**
     * Form label required
     */
    required?: boolean;
}
export declare const FormItem: React.ForwardRefExoticComponent<FormItemProps & React.RefAttributes<HTMLDivElement>>;
export {};
