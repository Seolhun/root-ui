import * as React from 'react';

export interface AutoCompleteItem {
  children: (args: AutoCompleteItemChildrenArgs) => React.ReactNode;

  key: string;

  value: any;
}

export interface AutoCompleteItemChildrenArgs {
  disabled: boolean;
  focus: boolean;
  selected: boolean;
}

export type AutoCompleteIdentify<Item> = (item: Item) => AutoCompleteItem;
