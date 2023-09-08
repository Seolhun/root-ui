import clsx from 'clsx';
import * as React from 'react';

import { ModalCloseButton } from './Modal.CloseButton';
import { ModalWidgetTitle } from './Widgets';

const CLASSNAME = 'Root__Modal__Header';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalHeaderProps extends ElementProps {
  children: React.ReactNode;
}

export const ModalHeader = React.forwardRef<ElementType, ModalHeaderProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div
        ref={ref}
        {...others}
        className={clsx(CLASSNAME, className, 'flex justify-between items-start', 'rounded-t')}
      >
        <div className="line-clamp-2">
          <ModalWidgetTitle>{children}</ModalWidgetTitle>
        </div>
        <ModalCloseButton />
      </div>
    );
  },
);
