import clsx from 'clsx';
import * as React from 'react';

import { breadcrumb } from './Breadcrumb.styles';
import { BreadcrumbItemProps } from './Breadcrumb.types';

const CLASSNAME = 'Root__Breadcrumb__Item';

type ElementType = HTMLLIElement;
type ElementProps = React.LiHTMLAttributes<ElementType>;

export const BreadcrumbItem = React.forwardRef<ElementType, ElementProps & BreadcrumbItemProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <li
        aria-current="page"
        role="listitem"
        {...others}
        className={clsx(CLASSNAME, styles.item(), className)}
        ref={ref}
      >
        {children}
      </li>
    );
  },
);

const styles = breadcrumb();
