import clsx from 'clsx';
import * as React from 'react';

import { Text } from '~/components/typography';

const CLASSNAME = 'Root__Toast__Message';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface ToastMessageProps {}

export const ToastMessage = React.forwardRef<ElementType, ElementProps & ToastMessageProps>(
  ({ children, className, ...others }, ref) => {
    return (
      <Text {...others} className={clsx(CLASSNAME, className, 'text-sm', 'whitespace-pre-wrap')} ref={ref}>
        {children}
      </Text>
    );
  },
);
