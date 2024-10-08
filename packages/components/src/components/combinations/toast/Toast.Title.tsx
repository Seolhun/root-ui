import clsx from 'clsx';
import * as React from 'react';

import { Text } from '~/components/typography';

const CLASSNAME = 'Root__Toast__Title';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const ToastTitle = React.forwardRef<ElementType, ElementProps>(({ children, className, ...others }, ref) => {
  return (
    <Text
      {...others}
      className={clsx(CLASSNAME, className, 'truncate', 'text-lg', 'font-bold', 'whitespace-pre-wrap')}
      ref={ref}
    >
      {children}
    </Text>
  );
});
