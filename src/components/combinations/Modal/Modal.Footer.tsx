import React from 'react';
import clsx from 'clsx';

const CLASSNAME = 'Root__Modal__Footer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalFooterProps extends ElementProps {
  children: React.ReactNode;
}

const ModalFooter = React.forwardRef<ElementType, ModalFooterProps>(
  ({ className, children, ...rests }: ModalFooterProps) => {
    return (
      <div {...rests} className={clsx(CLASSNAME, className, 'flex', 'mt-2', 'rounded-b')}>
        {children}
      </div>
    );
  },
);

export { ModalFooter };
export default ModalFooter;
