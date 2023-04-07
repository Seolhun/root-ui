import React from 'react';
import { RootScale } from '~/system';
type ElementType = HTMLImageElement;
type ElementProps = React.ImgHTMLAttributes<ElementType>;
export interface AvatarProps {
    /**
     * Set this to change scale
     * @default md
     */
    scale?: RootScale;
    /**
     * To handle image error when it has error.
     */
    emptySrc?: string;
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & ElementProps & React.RefAttributes<HTMLImageElement>>;
export {};
