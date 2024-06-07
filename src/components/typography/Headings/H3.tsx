import clsx from 'clsx';
import * as React from 'react';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H3';
type ElementType = HTMLHeadingElement;
export interface H3Props extends HeadingProps {}

export const H3 = React.forwardRef<ElementType, H3Props>(({ className, children, ...others }, ref) => {
  return (
    <Heading {...others} as="h3" className={clsx(CLASSNAME, className, 'mt-1 mb-2')} ref={ref}>
      {children}
    </Heading>
  );
});
