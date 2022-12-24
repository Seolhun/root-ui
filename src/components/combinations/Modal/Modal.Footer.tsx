import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Modal__Footer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalFooterProps extends ElementProps {
  children: React.ReactNode;
}

const ModalFooter = React.forwardRef<ElementType, ModalFooterProps>(
  ({ className, children, ...rests }: ModalFooterProps) => {
    return (
      <div {...rests} className={classNames(CLASSNAME, className, 'flex', 'py-2 px-4', 'rounded-b')}>
        {children}
      </div>
    );
  },
);

export { ModalFooter };
export default ModalFooter;
