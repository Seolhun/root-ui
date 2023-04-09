import * as React from 'react';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PProps extends ElementProps {
}
export declare const P: React.ForwardRefExoticComponent<PProps & React.RefAttributes<HTMLParagraphElement>>;
export {};
