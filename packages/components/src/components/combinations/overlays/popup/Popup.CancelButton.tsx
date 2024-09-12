import clsx from 'clsx';
import * as React from 'react';

import { Button, ButtonProps } from '~/components/atomics';

import { popup } from './Popup.styles';

const CLASSNAME = 'Root__Popup__CancelButton';
type ElementType = HTMLButtonElement;

export const PopupCancelButton = React.forwardRef<ElementType, ButtonProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <Button
        variant="outlined"
        intent="faint"
        scale="xs"
        {...others}
        className={clsx(CLASSNAME, className, cancel())}
        ref={ref}
      >
        {children}
      </Button>
    );
  },
);

const { cancel } = popup();
