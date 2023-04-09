import * as React from 'react';
type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;
export interface TabPanelProps extends ElementProps {
}
export declare const TabPanel: React.ForwardRefExoticComponent<TabPanelProps & React.RefAttributes<HTMLLIElement>>;
export {};
