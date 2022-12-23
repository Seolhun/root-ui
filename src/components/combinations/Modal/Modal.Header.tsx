import React from 'react';
import classNames from 'classnames';

import { ModalCloseButton } from './Modal.CloseButton';
import { ModalWidgetTitle } from './Modal.Widget.Title';

const CLASSNAME = 'Root__Modal__Header';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalHeaderProps {
  children: React.ReactNode;
}

const ModalHeader = React.forwardRef<Element, ModalHeaderProps & ElementProps>(
  ({ className, children, ...rests }, ref) => {
    return (
      <div
        ref={ref}
        {...rests}
        className={classNames(
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
  },
);

export { ModalHeader };
export default ModalHeader;
