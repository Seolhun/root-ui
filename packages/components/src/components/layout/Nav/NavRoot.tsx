import clsx from 'clsx';
import * as React from 'react';

import { NavProvider, NavProviderProps } from './Nav.Context';

const CLASSNAME = 'Root__Layout__Nav';

type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface NavRootProps extends NavProviderProps {}

export const NavRoot = React.forwardRef<ElementType, ElementProps & NavRootProps>(
  ({ children, ...others }: ElementProps & NavRootProps) => {
    return (
      <NavProvider>
        <Nav {...others}>{children}</Nav>
      </NavProvider>
    );
  },
);

const Nav = React.forwardRef<ElementType, ElementProps & NavRootProps>(
  ({ className, children, onMouseOut, onMouseOver, ...others }, ref) => {
    const handleMouseOver = React.useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (onMouseOver) {
          onMouseOver(e);
        }
      },
      [onMouseOver],
    );

    const handleMouseOut = React.useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (onMouseOut) {
          onMouseOut(e);
        }
      },
      [onMouseOut],
    );

    return (
      <nav
        {...others}
        className={clsx(CLASSNAME, className, 'flex flex-1 items-center')}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        ref={ref}
        role="menubar"
      >
        {children}
      </nav>
    );
  },
);
