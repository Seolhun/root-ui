import React from 'react';
import classNames from 'classnames';

import { useDrawerContext } from './Drawer.Context';
import { Icon } from '../../icons';

const CLASSNAME = 'Root__Drawer__CloseButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface DrawerCloseButtonProps extends ElementProps {}

const DrawerCloseButton = React.forwardRef<ElementType, DrawerCloseButtonProps>(
  ({ className, ...rests }: DrawerCloseButtonProps) => {
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
        <Icon aria-hidden="true" icon="XIcon" />
        <span className="sr-only">Close Drawer</span>
      </button>
    );
  },
);

export { DrawerCloseButton };
export default DrawerCloseButton;
