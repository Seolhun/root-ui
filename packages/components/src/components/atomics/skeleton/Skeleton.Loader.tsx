import clsx from 'clsx';
import * as React from 'react';

import { skeleton } from './Skeleton.styles';
import { SkeletonLoaderProps } from './Skeleton.types';

const CLASSNAME = 'Root__SkeletonLoader';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const SkeletonLoader = React.forwardRef<ElementType, ElementProps & SkeletonLoaderProps>(
  ({ children, className, ...others }, ref) => {
    return <div {...others} className={clsx(CLASSNAME, styles.loader(), className)} ref={ref} />;
  },
);

const styles = skeleton();
