import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Drawer__Footer';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface DrawerFooterProps extends ExtensionProps {
  children: React.ReactNode;
}

function DrawerFooter({ className, children, ...rests }: DrawerFooterProps) {
  return (
    <div {...rests} className={classNames(CLASSNAME, className, 'flex', 'pb-4 px-4', 'rounded-b')}>
      {children}
    </div>
  );
}

export { DrawerFooter };
export default DrawerFooter;
