import * as React from 'react';

export type DropdownOptionRenderArgs = {
  disabled: boolean;
  focus: boolean;
  selected: boolean;
  selectedOption: boolean;
};

export interface DropdownOptionValue<R = React.ReactNode> {
  children: R;

  value: number | string;
}
