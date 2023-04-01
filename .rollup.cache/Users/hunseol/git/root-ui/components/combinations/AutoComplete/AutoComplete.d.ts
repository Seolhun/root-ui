import React from 'react';
import { AutoCompleteIdentify } from './AutoComplete.types';
import { RootScale } from '../../../system';
import { Maybe } from '../../../utils/fx';
import { IconProps } from '../../icons';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
export interface AutoCompleteProps<Item> {
    query: string;
    identify: AutoCompleteIdentify<Item>;
    items: Item[];
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeydownInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSelectItem: (item: Item) => void;
    selectedItem?: Maybe<Item>;
    /**
     * To display value by transforming item.
     */
    displayedValue?: (item: Item) => string;
    /**
     * Loading state
     */
    loading?: boolean;
    /**
     * To render loading state
     */
    Loader?: React.ReactNode;
    /**
     * To render empty state
     */
    Empty?: React.ReactNode;
    /**
     * @default "SearchIcon"
     */
    icon?: IconProps['icon'];
    /**
     * @default md
     */
    scale?: RootScale;
    /**
     * Autocomplete input placeholder
     */
    placeholder?: string;
}
declare function _AutoComplete<Item = any>({ scale, items, identify, query, onChangeInput, onKeydownInput, onSelectItem, selectedItem, displayedValue, loading, Loader, Empty, icon, className, placeholder, ...rests }: AutoCompleteProps<Item> & ElementProps, ref: React.ForwardedRef<HTMLDivElement>): JSX.Element;
declare const AutoComplete: <Item>(props: AutoCompleteProps<Item> & ElementProps & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined;
}) => ReturnType<typeof _AutoComplete>;
export { AutoComplete };
export default AutoComplete;
