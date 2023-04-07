import * as React from 'react';
import { RootIntent } from '~/system';
type ElementProps = React.HTMLAttributes<HTMLQuoteElement>;
export interface BlockQuoteProps {
    /**
     * @default primary
     */
    intent?: RootIntent;
}
export declare const BlockQuote: React.ForwardRefExoticComponent<ElementProps & BlockQuoteProps & React.RefAttributes<HTMLQuoteElement>>;
export {};
