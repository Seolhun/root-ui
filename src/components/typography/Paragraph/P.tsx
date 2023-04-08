import clsx from 'clsx';
import * as React from 'react';

import { Text } from '../Text';

const CLASSNAME = 'Root__P';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PProps extends ElementProps {}

export const P = React.forwardRef<ElementType, PProps>(({ className, children, ...others }, ref) => {
  return (
    <Text
      {...others}
      as="p"
      ref={ref}
      className={clsx(CLASSNAME, className, 'font-light', 'leading-snug', 'mt-0 mb-1')}
    >
      {children}
    </Text>
  );
});
