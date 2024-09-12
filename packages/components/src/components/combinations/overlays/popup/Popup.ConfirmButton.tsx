import clsx from 'clsx';
import * as React from 'react';

import { Button, ButtonProps } from '~/components/atomics';

import { popup } from './Popup.styles';

const CLASSNAME = 'Root__Popup__ConfirmButton';
type ElementType = HTMLButtonElement;

export interface PopupConfirmButtonProps {}

export const PopupConfirmButton = React.forwardRef<ElementType, ButtonProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <Button
        variant="solid"
        intent="primary"
        scale="xs"
        {...others}
        className={clsx(CLASSNAME, className, confirm())}
        ref={ref}
      >
        {children}
      </Button>
    );
  },
);

const { confirm } = popup();
