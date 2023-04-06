import clsx from 'clsx';
import * as React from 'react';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H2';
type ElementType = HTMLHeadingElement;
export interface H2Props extends HeadingProps {}

export const H2 = React.forwardRef<ElementType, H2Props>(({ className, children, ...others }, ref) => {
  return (
    <Heading {...others} as="h2" ref={ref} className={clsx(CLASSNAME, className, 'mt-1 mb-2')}>
      {children}
    </Heading>
  );
});
