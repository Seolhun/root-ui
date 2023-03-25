import * as React from 'react';
import clsx from 'clsx';

import { Text } from '../Text';

const CLASSNAME = 'Root__P';
type ElementType = HTMLParagraphElement;
type ElementProps = React.HTMLAttributes<ElementType>;
export interface PProps {}

export const P = React.forwardRef<ElementType, ElementProps & PProps>(({ className, children, ...rests }, ref) => {
  return (
    <Text {...rests} as="p" ref={ref} className={clsx(CLASSNAME, className, 'font-light', 'leading-snug', 'mt-0 mb-1')}>
      {children}
    </Text>
  );
});
