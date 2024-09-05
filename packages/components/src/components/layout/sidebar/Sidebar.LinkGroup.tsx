import clsx from 'clsx';
import * as React from 'react';

const CLASSNAME = 'Root__Sidebar__LinkGroup';
type ElementType = HTMLUListElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface SidebarLinkGroupProps {
  active?: boolean;
  children: (toggle: () => void, open: boolean) => React.ReactNode;
  /**
   * @default true
   */
  initialOpen?: boolean;
}

export const SidebarLinkGroup = React.forwardRef<ElementType, Omit<ElementProps, 'children'> & SidebarLinkGroupProps>(
  ({ children, className, active, initialOpen = true }, ref) => {
    const [open, setOpen] = React.useState<boolean>(!!active || !!initialOpen);

    const toggle = React.useCallback(() => {
      setOpen((prev) => !prev);
    }, []);

    return (
      <ul
        className={clsx(CLASSNAME, className, 'relative group', 'pt-4 pr-4 pb-6 pl-2', 'mb-2 last:mb-0', 'rounded-md', {
          'bg-space-1 dark:bg-cream-1': active,
        })}
        ref={ref}
      >
        {children(toggle, open)}
      </ul>
    );
  },
);
