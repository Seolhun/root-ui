import React from 'react';
import classNames from 'classnames';

import { toIntentColor, toHoverIntentColor } from '@/system';
import { useModalContext } from './Modal.Context';

const CLASSNAME = 'Root__Modal__CloseButton';
type Element = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export type ModalCloseButtonProps = ExtensionProps;

function ModalCloseButton({ className, ...rests }: ModalCloseButtonProps) {
  const onHide = useModalContext();

  return (
    <button
      type="button"
      {...rests}
      className={classNames(
        CLASSNAME,
        className,
        'inline-flex items-center',
        'p-1.5 ml-auto',
        'bg-transparent',
        toHoverIntentColor({
          prefix: 'bg',
          intent: 'dark',
          intentWeight: 200,
        }),
        'text-sm',
        toIntentColor({
          prefix: 'text',
          intent: 'light',
          intentWeight: 400,
        }),
        toHoverIntentColor({
          prefix: 'text',
          intent: 'light',
          intentWeight: 700,
        }),
        'rounded-lg',
      )}
      onClick={onHide}
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Close modal</span>
    </button>
  );
}

export { ModalCloseButton };
export default ModalCloseButton;
