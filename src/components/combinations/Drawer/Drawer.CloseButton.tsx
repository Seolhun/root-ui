import clsx from 'clsx';
import * as React from 'react';

import { useDrawerContext } from './Drawer.Context';

import { Icon } from '../../icons';

const CLASSNAME = 'Root__Drawer__CloseButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerCloseButtonProps extends ElementProps {}

export const DrawerCloseButton = React.forwardRef<ElementType, DrawerCloseButtonProps>(
  ({ className, ...rests }: DrawerCloseButtonProps) => {
    const { onClose } = useDrawerContext();

    return (
      <button
        type="button"
        {...rests}
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
        <Icon aria-hidden="true" icon="XMarkIcon" />
        <span className="sr-only">Close Drawer</span>
      </button>
    );
  },
);
