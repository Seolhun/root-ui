import React from 'react';
import clsx from 'clsx';

import { ModalCloseButton } from './Modal.CloseButton';
import { ModalWidgetTitle } from './Modal.Widget.Title';

const CLASSNAME = 'Root__Modal__Header';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalHeaderProps extends ElementProps {
  children: React.ReactNode;
}

const ModalHeader = React.forwardRef<ElementType, ModalHeaderProps>(({ className, children, ...rests }, ref) => {
  return (
    <div
      ref={ref}
      {...rests}
      className={clsx(
        CLASSNAME,
        className,
        'flex justify-between items-start',
        'py-2 px-4',
        'border-light-200',
        'rounded-t',
      )}
    >
      <div className="flex-1 break-all line-clamp-2">
        <ModalWidgetTitle>{children}</ModalWidgetTitle>
      </div>
      <ModalCloseButton />
    </div>
  );
});

export { ModalHeader };
export default ModalHeader;
