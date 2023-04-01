import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Modal__Content';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ModalContentProps extends ElementProps {}

const ModalContent = React.forwardRef<ElementType, ModalContentProps>(({ className, children, ...rests }, ref) => {
  return (
    <div
      ref={ref}
      {...rests}
      className={clsx(CLASSNAME, className, 'flex flex-1', 'h-auto md:h-full', 'mt-2', 'break-all', 'border-light-2')}
    >
      {children}
    </div>
  );
});

export { ModalContent };
export default ModalContent;
