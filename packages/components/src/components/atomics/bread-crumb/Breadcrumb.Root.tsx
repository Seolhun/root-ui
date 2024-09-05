import clsx from 'clsx';
import * as React from 'react';

import { breadcrumb } from './Breadcrumb.styles';
import { BreadcrumbProps } from './Breadcrumb.types';

const CLASSNAME = 'Root__Breadcrumb';

type ElementType = HTMLOListElement;
type ElementProps = React.OlHTMLAttributes<ElementType>;

export const BreadcrumbRoot = React.forwardRef<ElementType, ElementProps & BreadcrumbProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <ol role="navigation" ref={ref} className={clsx(CLASSNAME, styles.root(), className)} {...others}>
        {children}
      </ol>
    );
  },
);

const styles = breadcrumb();
