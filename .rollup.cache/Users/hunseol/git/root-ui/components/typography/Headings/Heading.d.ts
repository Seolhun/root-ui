import * as React from 'react';
import { AgnosticTagProps } from '../../../system';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface HeadingProps extends ElementProps {
}
export declare const Heading: React.ForwardRefExoticComponent<HeadingProps & Required<AgnosticTagProps> & React.RefAttributes<HTMLHeadingElement>>;
export {};
