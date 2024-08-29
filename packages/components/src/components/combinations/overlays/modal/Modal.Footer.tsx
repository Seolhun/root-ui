import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Modal__Footer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalFooterProps extends ElementProps {
  children: React.ReactNode;
}

export const ModalFooter = React.forwardRef<ElementType, ModalFooterProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <div {...others} className={clsx(CLASSNAME, className, 'flex', 'rounded-b')} ref={ref}>
        {children}
      </div>
    );
  },
);
