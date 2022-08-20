import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Modal__Action';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ModalActionProps extends ExtensionProps {
  children: React.ReactNode;
}

function ModalAction({ className, children, ...rests }: ModalActionProps) {
  return (
    <div {...rests} className={classNames(CLASSNAME, className, 'flex items-center', 'p-6', 'space-x-2', 'rounded-b')}>
      {children}
    </div>
  );
}

export { ModalAction };
export default ModalAction;
