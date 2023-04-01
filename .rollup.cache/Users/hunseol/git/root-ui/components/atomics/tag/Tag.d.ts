import * as React from 'react';
import { RootIntent, RootScale } from '../../../system';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;
export interface TagProps extends ElementProps {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
    /**
     * @default primary
     */
    intent?: RootIntent;
    /**
     * Use outline style
     */
    outlined?: boolean;
}
declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLButtonElement>>;
export { Tag };
export default Tag;
