import * as React from 'react';

export interface AutoCompleteItem {
  children: (args: AutoCompleteItemChildrenArgs) => React.ReactNode;

  key: string;

  value: any;
}

export interface AutoCompleteItemChildrenArgs {
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

export type AutoCompleteIdentify<Item> = (item: Item) => AutoCompleteItem;
