import * as React from 'react';
import { RootIntent } from '~/system';
type ElementProps = React.HTMLAttributes<HTMLQuoteElement>;
export interface BlockQuoteProps extends ElementProps {
    /**
     * @default primary
     */
    intent?: RootIntent;
}
export declare const BlockQuote: React.ForwardRefExoticComponent<BlockQuoteProps & React.RefAttributes<HTMLQuoteElement>>;
export {};
