import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Modal__Footer';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ModalFooterProps extends ExtensionProps {
  children: React.ReactNode;
}

function ModalFooter({ className, children, ...rests }: ModalFooterProps) {
  return (
    <div {...rests} className={classNames(CLASSNAME, className, 'flex', 'pb-6 px-6', 'rounded-b')}>
      {children}
    </div>
  );
}

export { ModalFooter };
export default ModalFooter;
