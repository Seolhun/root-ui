import clsx from 'clsx';
import * as React from 'react';

import { Text } from '~/components/typography';

const CLASSNAME = 'Root__Toast__Title';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const ToastTitle = React.forwardRef<ElementType, ElementProps>(({ className, children, ...others }, ref) => {
  return (
    <Text {...others} className={clsx(CLASSNAME, className, 'truncate', 'text-xl', 'font-bold')} ref={ref}>
      {children}
    </Text>
  );
});
