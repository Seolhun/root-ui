import * as React from 'react';
import { RootIntent, RootScale } from '../../../system';
type ElementType = HTMLTextAreaElement;
type ElementProps = React.TextareaHTMLAttributes<ElementType>;
export interface TextareaProps extends ElementProps {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
    /**
     * @default primary
     */
    intent?: RootIntent;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
export default Textarea;
