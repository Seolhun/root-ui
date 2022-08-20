import React from 'react';
import classNames from 'classnames';

import { toIntentColor } from '@/system';

const CLASSNAME = 'Root__Drawer__Body';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface DrawerBodyProps extends ExtensionProps {
  children: React.ReactNode;
}

const DrawerBody = React.forwardRef<Element, DrawerBodyProps>(({ className, children, ...rests }, ref) => {
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
        toIntentColor({
          prefix: 'border',
          intent: 'light',
          intentWeight: 200,
        }),
        'overflow-y-auto',
      )}
    >
      {children}
    </div>
  );
});

export { DrawerBody };
export default DrawerBody;
