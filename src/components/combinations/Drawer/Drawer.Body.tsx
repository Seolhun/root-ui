import React from 'react';
import classNames from 'classnames';

const CLASSNAME = 'Root__Drawer__Body';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerBodyProps extends ElementProps {
  children: React.ReactNode;
}

const DrawerBody = React.forwardRef<ElementType, DrawerBodyProps>(({ className, children, ...rests }, ref) => {
  return (
    <div
      ref={ref}
      {...rests}
      className={classNames(
        CLASSNAME,
        className,
        'flex flex-1',
        'px-4',
        'break-all',
        'border-light-200',
        'overflow-y-auto',
      )}
    >
      {children}
    </div>
  );
});

export { DrawerBody };
export default DrawerBody;
