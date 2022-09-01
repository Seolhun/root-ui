import React from 'react';
import classNames from 'classnames';

import { toIntentColor } from '@/system';

const CLASSNAME = 'Root__Modal__Content';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;

export interface ModalContentProps {
  children: React.ReactNode;
}

const ModalContent = React.forwardRef<Element, ModalContentProps & ElementProps>(
  ({ className, children, ...rests }, ref) => {
    return (
      <div
        ref={ref}
        {...rests}
        className={classNames(
          CLASSNAME,
          className,
          'flex flex-1',
          'h-auto md:h-full',
          'py-2 px-4',
          'border-b',
          'break-all',
          toIntentColor({
            prefix: 'border',
            intent: 'light',
            intentWeight: 200,
          }),
        )}
      >
        {children}
      </div>
    );
  },
);

export { ModalContent };
export default ModalContent;
