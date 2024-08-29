import clsx from 'clsx';
import * as React from 'react';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H4';
type ElementType = HTMLHeadingElement;
export interface H4Props extends HeadingProps {}

export const H4 = React.forwardRef<ElementType, H4Props>(({ className, children, ...others }, ref) => {
  return (
    <Heading {...others} as="h4" className={clsx(CLASSNAME, className, 'mt-1 mb-2')} ref={ref}>
      {children}
    </Heading>
  );
});
