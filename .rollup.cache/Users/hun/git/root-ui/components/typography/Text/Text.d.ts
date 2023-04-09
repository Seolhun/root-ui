import * as React from 'react';
import { AgnosticTagProps } from '~/system';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface TextProps {
}
export declare const Text: React.ForwardRefExoticComponent<ElementProps & AgnosticTagProps & TextProps & React.RefAttributes<HTMLParagraphElement>>;
export {};
