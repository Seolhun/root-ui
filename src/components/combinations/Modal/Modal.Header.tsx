import clsx from 'clsx';
import * as React from 'react';

import { ModalCloseButton } from './Modal.CloseButton';
import { ModalWidget } from './Widgets';

const CLASSNAME = 'Root__Modal__Header';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalHeaderProps extends ElementProps {
  children: React.ReactNode;
}

export const ModalHeader = React.forwardRef<ElementType, ModalHeaderProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <div
        ref={ref}
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'flex justify-between items-start',
          'border border-cream-3 dark:border-space-3',
          'rounded-t',
        )}
      >
        <div className="flex-1 break-all line-clamp-2">
          <ModalWidget.Title>{children}</ModalWidget.Title>
        </div>
        <ModalCloseButton />
      </div>
    );
  },
);
