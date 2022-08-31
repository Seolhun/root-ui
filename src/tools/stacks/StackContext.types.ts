import React from 'react';

export enum StackContextMessageEnum {
  Add,
  Remove,
}

export type StackContextOnUpdateCallback = (
  message: StackContextMessageEnum,
  type: string,
  element: React.MutableRefObject<HTMLElement | null>,
) => void;
