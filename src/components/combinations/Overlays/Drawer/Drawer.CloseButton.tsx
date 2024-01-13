import clsx from 'clsx';
import * as React from 'react';

import { useModalContext } from '../Widgets';

const CLASSNAME = 'Root__Drawer__CloseButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerCloseButtonProps extends ElementProps {}

export const DrawerCloseButton = React.forwardRef<ElementType, DrawerCloseButtonProps>(
  ({ children, className, ...others }: DrawerCloseButtonProps) => {
    const [{ onClose }] = useModalContext('Drawer');

    return (
      <button
        type="button"
        {...others}
        className={clsx(
          CLASSNAME,
          className,
          'inline-flex items-center',
          'p-1.5 ml-auto',
          'bg-transparent hover:bg-neutral-1',
          'text-space-2 hover:text-space',
          'dark:text-cream-2 dark:hover:text-cream',
          'rounded-full',
        )}
        onClick={onClose}
      >
        {children}
        <span className="sr-only">Close Drawer</span>
      </button>
    );
  },
);
