import React from 'react';
import classNames from 'classnames';

import DrawerCloseButton from './Drawer.CloseButton';

const CLASSNAME = 'Root__Drawer__Header';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface DrawerHeaderProps extends ElementProps {
  children?: React.ReactNode;
}

const DrawerHeader = React.forwardRef<ElementType, DrawerHeaderProps>(({ className, children, ...rests }, ref) => {
  return (
    <div
      ref={ref}
      {...rests}
      className={classNames(
        CLASSNAME,
        className,
        'flex justify-between items-start',
        'pt-4 px-4',
        'border-light-200',
        'rounded-t',
      )}
    >
      <div className="break-all line-clamp-2">{children && children}</div>
      <DrawerCloseButton />
    </div>
  );
});

export { DrawerHeader };
export default DrawerHeader;
