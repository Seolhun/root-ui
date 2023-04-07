import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Modal__Body';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalBodyProps extends ElementProps {}

export const ModalBody = React.forwardRef<ElementType, ModalBodyProps>(({ className, children, ...others }, ref) => {
  return (
    <div
      ref={ref}
      {...others}
      className={clsx(CLASSNAME, className, 'flex flex-1', 'h-auto md:h-full', 'border-cream-3 dark:border-space-3')}
    >
      {children}
    </div>
  );
});
