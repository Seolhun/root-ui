import clsx from 'clsx';
import * as React from 'react';

import { forwardRefWithAs } from '~/core';

import { skeleton } from './Skeleton.styles';
import { SkeletonProps } from './Skeleton.types';

const CLASSNAME = 'Root__Skeleton';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const SkeletonRoot = forwardRefWithAs<ElementType, ElementProps & SkeletonProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <div {...others} className={clsx(CLASSNAME, styles.root(), className)} ref={ref}>
        {children}
      </div>
    );
  },
);

const styles = skeleton();
