import clsx from 'clsx';
import * as React from 'react';

import { Heading, HeadingProps } from './Heading';

const CLASSNAME = 'Root__H1';
type ElementType = HTMLHeadingElement;
export interface H1Props extends HeadingProps {}

export const H1 = React.forwardRef<ElementType, H1Props>(({ children, className, ...others }, ref) => {
  return (
    <Heading {...others} as="h1" className={clsx(CLASSNAME, className, 'mt-0 mb-3')} ref={ref}>
      {children}
    </Heading>
  );
});
