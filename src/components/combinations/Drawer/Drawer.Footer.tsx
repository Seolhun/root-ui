import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Drawer__Footer';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerFooterProps extends ElementProps {
  children: React.ReactNode;
}

const DrawerFooter = React.forwardRef<ElementType, DrawerFooterProps>(
  ({ className, children, ...rests }: DrawerFooterProps) => {
    return (
      <div {...rests} className={classNames(CLASSNAME, className, 'flex', 'pb-4 px-4', 'rounded-b')}>
        {children}
      </div>
    );
  },
);

export { DrawerFooter };
export default DrawerFooter;
