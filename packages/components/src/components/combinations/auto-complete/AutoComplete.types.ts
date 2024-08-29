import * as React from 'react';

export interface AutoCompleteItem<Value> {
  children: (args: AutoCompleteItemChildrenArgs) => React.ReactNode;

  key: string;

  value: Value;
}

export interface AutoCompleteItemChildrenArgs {
  disabled: boolean;
  focus: boolean;
  selected: boolean;
}

export type AutoCompleteIdentify<Value> = (item: Value) => AutoCompleteItem<Value>;
