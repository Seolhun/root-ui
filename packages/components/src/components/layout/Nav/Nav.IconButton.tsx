import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Layout__Nav__IconButton';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface NavIconButtonProps {}

export const NavIconButton = React.forwardRef<ElementType, ElementProps & NavIconButtonProps>(
  ({ className, children, ...others }) => {
    return (
      <button role="menuitem" {...others} className={clsx(CLASSNAME, className)}>
        {children}
      </button>
    );
  },
);
