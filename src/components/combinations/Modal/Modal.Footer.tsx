import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Modal__Footer';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalFooterProps {
  children: React.ReactNode;
}

const ModalFooter = React.forwardRef<Element, ModalFooterProps>(
  ({ className, children, ...rests }: ModalFooterProps & ElementProps) => {
    return (
      <div {...rests} className={classNames(CLASSNAME, className, 'flex', 'py-2 px-4', 'rounded-b')}>
        {children}
      </div>
    );
  },
);

export { ModalFooter };
export default ModalFooter;
