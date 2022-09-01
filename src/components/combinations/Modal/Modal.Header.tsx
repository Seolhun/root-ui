import React from 'react';
import classNames from 'classnames';

import { toIntentColor } from '@/system';
import ModalCloseButton from './Modal.CloseButton';
import ModalWidget from './Modal.Widget';

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
          toIntentColor({
            prefix: 'border',
            intent: 'light',
            intentWeight: 200,
          }),
          'border-b',
          'rounded-t',
        )}
      >
        <div className="break-all line-clamp-2">
          <ModalWidget.Title>{children}</ModalWidget.Title>
        </div>
        <ModalCloseButton />
      </div>
    );
  },
);

export { ModalHeader };
export default ModalHeader;
