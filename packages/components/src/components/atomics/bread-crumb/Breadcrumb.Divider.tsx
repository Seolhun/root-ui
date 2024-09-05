import clsx from 'clsx';
import * as React from 'react';

import { OmitBy } from '~/types';

import { breadcrumb } from './Breadcrumb.styles';
import { BreadcrumbDividerProps } from './Breadcrumb.types';

const CLASSNAME = 'Root__Breadcrumb__Divider';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const BreadcrumbDivider = React.forwardRef<
  ElementType,
  OmitBy<ElementProps, 'children'> & BreadcrumbDividerProps
>(({ className, ...others }, ref) => {
  return (
    <div {...others} ref={ref} className={clsx(CLASSNAME, styles.divider(), className)}>
      <svg
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 19 L15 7"></path>
      </svg>
    </div>
  );
});

const styles = breadcrumb();
