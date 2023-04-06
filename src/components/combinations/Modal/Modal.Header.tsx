import clsx from 'clsx';
import * as React from 'react';

import { ModalCloseButton } from './Modal.CloseButton';
import { ModalWidgetTitle } from './Modal.Widget.Title';

const CLASSNAME = 'Root__Modal__Header';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalHeaderProps extends ElementProps {
  children: React.ReactNode;
}

export const ModalHeader = React.forwardRef<ElementType, ModalHeaderProps>(({ className, children, ...rests }, ref) => {
  return (
    <div
      ref={ref}
      {...rests}
      className={clsx(CLASSNAME, className, 'flex justify-between items-start', 'border-light-2', 'rounded-t')}
    >
      <div className="flex-1 break-all line-clamp-2">
        <ModalWidgetTitle>{children}</ModalWidgetTitle>
      </div>
      <ModalCloseButton />
    </div>
  );
});
