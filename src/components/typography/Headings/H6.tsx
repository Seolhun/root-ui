import clsx from 'clsx';
import * as React from 'react';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H6';
type ElementType = HTMLHeadingElement;
export interface H6Props extends HeadingProps {}

export const H6 = React.forwardRef<ElementType, H6Props>(({ className, children, ...rests }, ref) => {
  return (
    <Heading {...rests} as="h6" ref={ref} className={clsx(CLASSNAME, className, 'mt-1 mb-2')}>
      {children}
    </Heading>
  );
});
