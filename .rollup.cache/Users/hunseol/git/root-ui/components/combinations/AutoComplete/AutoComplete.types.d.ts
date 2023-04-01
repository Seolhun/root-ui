import React from 'react';
export interface AutoCompleteItem {
    key: string;
    value: any;
    children: (args: AutoCompleteItemChildrenArgs) => React.ReactNode;
}
export interface AutoCompleteItemChildrenArgs {
    active: boolean;
    selected: boolean;
    disabled: boolean;
}
export type AutoCompleteIdentify<Item> = (item: Item) => AutoCompleteItem;
