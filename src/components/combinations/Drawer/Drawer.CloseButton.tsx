import React from 'react';
import classNames from 'classnames';

import { useDrawerContext } from './Drawer.Context';

const CLASSNAME = 'Root__Drawer__CloseButton';
type Element = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export type DrawerCloseButtonProps = ExtensionProps;

function DrawerCloseButton({ className, ...rests }: DrawerCloseButtonProps) {
  const onClose = useDrawerContext();

  return (
    <button
      type="button"
      {...rests}
      className={classNames(
        CLASSNAME,
        className,
        'inline-flex items-center',
        'p-1.5 ml-auto',
        'bg-transparent hover:bg-dark-200',
        'text-sm',
        'text-light-400 hover:text-light-700',
        'rounded-lg',
      )}
      onClick={onClose}
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
      <span className="sr-only">Close Drawer</span>
    </button>
  );
}

export { DrawerCloseButton };
export default DrawerCloseButton;
