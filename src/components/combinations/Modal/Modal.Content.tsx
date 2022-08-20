import React from 'react';
import classNames from 'classnames';

import { toIntentColor } from '@/system';
import ModalCloseButton from './Modal.CloseButton';

const CLASSNAME = 'Root__Modal__Content';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ModalContentProps extends ExtensionProps {
  children: React.ReactNode;
  Title?: React.ReactNode;
}

const ModalContent = React.forwardRef<Element, ModalContentProps>(({ className, children, Title, ...rests }, ref) => {
  return (
    <div ref={ref} {...rests} className={classNames(CLASSNAME, className)}>
      <div
        className={classNames(
          'flex justify-between items-start',
          'pt-4 px-4',
          toIntentColor({
            prefix: 'border',
            intent: 'light',
            intentWeight: 200,
          }),
          {
            'border-b': Title,
          },
          'rounded-t',
        )}
      >
        <div className="break-all line-clamp-2">{Title && Title}</div>
        <ModalCloseButton />
      </div>
      <div
        className={classNames(
          'flex flex-1',
          'h-auto md:h-full',
          'p-6',
          'break-all',
          toIntentColor({
            prefix: 'border',
            intent: 'light',
            intentWeight: 200,
          }),
          {
            'border-b': Title,
          },
        )}
      >
        {children}
      </div>
    </div>
  );
});

export { ModalContent };
export default ModalContent;
