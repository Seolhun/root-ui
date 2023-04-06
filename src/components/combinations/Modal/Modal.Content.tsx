import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Modal__Content';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalContentProps extends ElementProps {}

export const ModalContent = React.forwardRef<ElementType, ModalContentProps>(
  ({ className, children, ...others }, ref) => {
    return (
      <div
        ref={ref}
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'flex flex-1',
          'h-auto md:h-full',
          'mt-2',
          'border-cream-3 dark:border-space-3',
        )}
      >
        {children}
      </div>
    );
  },
);
